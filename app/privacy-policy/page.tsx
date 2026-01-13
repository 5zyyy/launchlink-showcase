import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 pt-32 md:pt-40">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#171717] mb-4">
          Privacy Policy
        </h1>
        <p className="font-sans text-sm text-[#737373] mb-12">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none font-sans text-[#404040] leading-relaxed space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">1. Introduction</h2>
            <p>
              LaunchLink ("we," "our," or "us") operates the LaunchLink platform (the "Service"), a Web3 platform that connects traders, developers, and promoters in the cryptocurrency space. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </p>
            <p>
              By accessing or using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> When you create an account or join our waitlist, we collect your email address, Telegram username, and user type (Trader, Developer, or Promoter).</li>
              <li><strong>Wallet Information:</strong> When you connect your Web3 wallet (MetaMask, WalletConnect, Phantom, etc.), we collect your wallet address and associated blockchain transaction data.</li>
              <li><strong>Project Information:</strong> If you are a developer, we collect information about projects you list, including tokenomics, launch methods, timelines, and budgets.</li>
              <li><strong>Service Information:</strong> If you are a promoter, we collect information about your marketing services, pricing tiers, proof of work links, and supported chains.</li>
              <li><strong>Communication Data:</strong> Information you provide when contacting us, including support requests, feedback, and correspondence.</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage Data:</strong> Information about how you access and use our Service, including IP address, browser type, device information, pages visited, time spent on pages, and clickstream data.</li>
              <li><strong>Blockchain Data:</strong> Public blockchain data associated with your wallet address, including transaction history, token holdings, and on-chain reputation metrics.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to track activity on our Service and store certain information.</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">2.3 Third-Party Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Blockchain Networks:</strong> We access public blockchain data from networks you interact with (Solana, Ethereum, Base, BNB Chain, etc.).</li>
              <li><strong>Social Media:</strong> If you connect social media accounts or interact with our social media presence, we may collect publicly available information.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Provision:</strong> To provide, maintain, and improve our Service, including facilitating connections between users, processing transactions, and managing escrow services.</li>
              <li><strong>Reputation System:</strong> To build and maintain wallet-based reputation scores using on-chain data and project history.</li>
              <li><strong>Matching Services:</strong> To match developers with promoters and provide relevant project recommendations to traders.</li>
              <li><strong>Communication:</strong> To send you updates, notifications, alerts, and respond to your inquiries.</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, security breaches, and other harmful activities.</li>
              <li><strong>Compliance:</strong> To comply with legal obligations, enforce our Terms of Service, and protect our rights and the rights of our users.</li>
              <li><strong>Analytics:</strong> To analyze usage patterns, improve user experience, and develop new features.</li>
              <li><strong>Marketing:</strong> To send you promotional communications about our Service, with your consent where required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">4.1 Public Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Wallet Addresses:</strong> Your wallet address and associated on-chain reputation data are publicly visible on our platform as part of our reputation system.</li>
              <li><strong>Project Listings:</strong> Information about projects you list (excluding sensitive financial details) is visible to other users.</li>
              <li><strong>Service Listings:</strong> Information about marketing services you offer is visible to developers seeking promoters.</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">4.2 Service Providers</h3>
            <p>We may share information with third-party service providers who perform services on our behalf, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cloud hosting and infrastructure providers</li>
              <li>Blockchain data providers and indexers</li>
              <li>Analytics and monitoring services</li>
              <li>Customer support platforms</li>
              <li>Payment processors and escrow service providers</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">4.3 Legal Requirements</h3>
            <p>We may disclose your information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comply with legal obligations</li>
              <li>Protect and defend our rights or property</li>
              <li>Prevent or investigate possible wrongdoing</li>
              <li>Protect the personal safety of users or the public</li>
              <li>Protect against legal liability</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">4.4 Business Transfers</h3>
            <p>In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your information may be transferred to the acquiring entity.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">5. Blockchain and Decentralized Nature</h2>
            <p>
              Our Service interacts with public blockchain networks. Please be aware that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Public Ledgers:</strong> Transactions on blockchain networks are publicly visible and permanent. We cannot delete or modify blockchain data.</li>
              <li><strong>Wallet Addresses:</strong> Your wallet address is a pseudonymous identifier that can be linked to your identity through blockchain analysis.</li>
              <li><strong>No Control:</strong> We do not control blockchain networks and are not responsible for their operation, security, or data practices.</li>
              <li><strong>Third-Party Wallets:</strong> When you connect a third-party wallet, you are subject to that wallet provider's privacy policy and terms of service.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your information, including encryption, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
            <p>
              You are responsible for maintaining the security of your wallet and account credentials. We are not liable for any unauthorized access to your account resulting from your failure to protect your credentials.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">7. Your Rights and Choices</h2>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">7.1 Access and Correction</h3>
            <p>You have the right to access, update, and correct your account information through your account settings or by contacting us.</p>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">7.2 Deletion</h3>
            <p>You may request deletion of your account and associated information, subject to our legal obligations to retain certain data. Note that blockchain data cannot be deleted.</p>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">7.3 Opt-Out</h3>
            <p>You may opt out of marketing communications by following the unsubscribe instructions in our emails or by contacting us. You cannot opt out of transactional or service-related communications.</p>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">7.4 Cookies</h3>
            <p>You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our Service.</p>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">7.5 California Privacy Rights</h3>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to know what personal information we collect, use, and disclose</li>
              <li>The right to delete personal information we hold about you</li>
              <li>The right to opt out of the sale of personal information (we do not sell personal information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">8. Children's Privacy</h2>
            <p>
              Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our Service, you consent to the transfer of your information to these countries.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">10. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our Service, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your information, except where we are required to retain it for legal, regulatory, or security purposes. Blockchain data cannot be deleted.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We may also notify you via email or through our Service. Your continued use of our Service after such changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong>LaunchLink</strong><br />
              Email: launchlinksupport@gmail.com
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

