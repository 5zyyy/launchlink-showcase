'use server';

import { getDatabase } from '@/lib/mongodb/connection';

interface WaitlistResult {
  success: boolean;
  message: string;
}

/**
 * Validates email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates Telegram username format
 * Telegram usernames: 5-32 characters, alphanumeric and underscores, must start with letter
 */
function isValidTelegramUsername(username: string): boolean {
  const telegramRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/;
  return telegramRegex.test(username);
}

/**
 * Normalizes email to lowercase for consistent storage
 */
function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Normalizes Telegram username (removes @ if present, converts to lowercase)
 */
function normalizeTelegram(telegram: string | undefined): string | undefined {
  if (!telegram) return undefined;
  const normalized = telegram.trim().replace(/^@/, '').toLowerCase();
  return normalized || undefined;
}

/**
 * Validates user type
 */
function isValidUserType(userType: string | undefined): userType is 'Trader' | 'Developer' | 'Promoter' {
  return userType === 'Trader' || userType === 'Developer' || userType === 'Promoter';
}

/**
 * Adds a user to the waitlist
 * @param email - User's email address (required)
 * @param telegram - User's Telegram username (optional)
 * @param userType - User type: Trader, Developer, or Promoter (required)
 * @returns Success or error message
 */
export async function addToWaitlist(
  email: string | undefined,
  userType: string | undefined,
  telegram?: string | undefined,
): Promise<WaitlistResult> {
  try {
    // Validation: User type is required (first)
    if (!userType || typeof userType !== 'string') {
      return {
        success: false,
        message: 'Please select a user type',
      };
    }

    // Validate user type
    if (!isValidUserType(userType)) {
      return {
        success: false,
        message: 'Please select a valid user type (Trader, Developer, or Promoter)',
      };
    }

    // Validation: Email is required (second)
    if (!email || typeof email !== 'string') {
      return {
        success: false,
        message: 'Email is required',
      };
    }

    // Normalize and validate email
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) {
      return {
        success: false,
        message: 'Email is required',
      };
    }

    if (!isValidEmail(normalizedEmail)) {
      return {
        success: false,
        message: 'Please enter a valid email address',
      };
    }

    // Normalize and validate Telegram (if provided) (third)
    const normalizedTelegram = normalizeTelegram(telegram);
    if (normalizedTelegram && !isValidTelegramUsername(normalizedTelegram)) {
      return {
        success: false,
        message: 'Please enter a valid Telegram username (5-32 characters, alphanumeric and underscores only)',
      };
    }

    // Connect to database
    const db = await getDatabase();
    const waitlistCollection = db.collection('waitlist');

    // Check if email already exists
    const existingEntry = await waitlistCollection.findOne({
      email: normalizedEmail,
    });

    if (existingEntry) {
      return {
        success: false,
        message: 'This email is already on the waitlist',
      };
    }

    // Insert new waitlist entry
    await waitlistCollection.insertOne({
      email: normalizedEmail,
      telegram: normalizedTelegram || null,
      userType: userType,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      success: true,
      message: 'Successfully joined the waitlist!',
    };
  } catch (error) {
    // Log error for debugging (in production, use proper logging)
    console.error('Waitlist error:', error);

    // Return vague error message for non-validation errors
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
