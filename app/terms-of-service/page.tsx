import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 pt-32 md:pt-40">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#171717] mb-4">
          Terms of Service
        </h1>
        <p className="font-sans text-sm text-[#737373] mb-12">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none font-sans text-[#404040] leading-relaxed space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and LaunchLink ("we," "our," or "us") governing your access to and use of the LaunchLink platform, website, mobile application, and related services (collectively, the "Service").
            </p>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms, you may not access or use the Service.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">2. Eligibility and Account Registration</h2>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">2.1 Eligibility</h3>
            <p>You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our Service. By using the Service, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are at least 18 years of age</li>
              <li>You have the legal authority to enter into these Terms</li>
              <li>You are not prohibited from using the Service under applicable laws</li>
              <li>You are not located in a jurisdiction where cryptocurrency services are prohibited</li>
              <li>You will comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">2.2 Account Registration</h3>
            <p>To use certain features of our Service, you may be required to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create an account by providing accurate and complete information</li>
              <li>Connect a Web3 wallet (MetaMask, WalletConnect, Phantom, etc.)</li>
              <li>Maintain the security of your account credentials and wallet</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
            </ul>
            <p>You are solely responsible for all activities that occur under your account and wallet address.</p>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">2.3 Account Suspension and Termination</h3>
            <p>We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent, illegal, or harmful activity</li>
              <li>Misrepresentation or providing false information</li>
              <li>Engaging in scams, fraud, or impersonation</li>
              <li>Abuse of the Service or other users</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">3. Description of Service</h2>
            <p>
              LaunchLink is a Web3 platform that facilitates connections between traders, developers, and promoters in the cryptocurrency space. Our Service includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Project Listings:</strong> A platform for developers to list cryptocurrency projects and token launches</li>
              <li><strong>Marketing Services:</strong> A marketplace for promoters to offer marketing and promotion services</li>
              <li><strong>Discovery Tools:</strong> Tools for traders to discover and track pre-launch projects</li>
              <li><strong>Reputation System:</strong> A wallet-based reputation system that tracks on-chain activity and project history</li>
              <li><strong>Escrow Services:</strong> Escrow services to facilitate secure transactions between developers and promoters</li>
              <li><strong>Matching Services:</strong> AI-powered matching between developers and promoters</li>
              <li><strong>Token Launch Automation:</strong> Tools to automate token launches on various platforms</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any feature of the Service at any time, with or without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">4. User Conduct and Prohibited Activities</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">4.1 Illegal Activities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws, regulations, or rules</li>
              <li>Engage in money laundering, terrorist financing, or other illegal financial activities</li>
              <li>Facilitate or promote illegal activities</li>
              <li>Infringe upon intellectual property rights</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">4.2 Fraud and Scams</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create fake projects, tokens, or listings</li>
              <li>Impersonate LaunchLink, our team, or other users</li>
              <li>Engage in phishing, social engineering, or other fraudulent schemes</li>
              <li>Manipulate reputation scores or reviews</li>
              <li>Provide false or misleading information</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">4.3 Service Abuse</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempt to hack, breach, or compromise the security of the Service</li>
              <li>Use automated systems, bots, or scripts to access the Service without authorization</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Use the Service to transmit viruses, malware, or harmful code</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">4.4 Content Restrictions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Post content that is defamatory, harassing, abusive, or discriminatory</li>
              <li>Post content that violates privacy rights or contains personal information of others</li>
              <li>Post spam, unsolicited communications, or promotional content without authorization</li>
              <li>Post content that promotes violence, hate speech, or illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">5. User Content and Intellectual Property</h2>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">5.1 User Content</h3>
            <p>You retain ownership of any content you post, upload, or submit to the Service ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with the Service.</p>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">5.2 Content Responsibility</h3>
            <p>You are solely responsible for your User Content. You represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You own or have the right to use and license your User Content</li>
              <li>Your User Content does not violate any third-party rights</li>
              <li>Your User Content is accurate and not misleading</li>
              <li>Your User Content complies with these Terms and applicable laws</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">5.3 Our Intellectual Property</h3>
            <p>The Service, including its design, features, functionality, and content (excluding User Content), is owned by LaunchLink and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works of the Service without our express written permission.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">6. Transactions and Payments</h2>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">6.1 Transactions Between Users</h3>
            <p>Our Service facilitates transactions between users (developers and promoters). We are not a party to these transactions and are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The quality, delivery, or performance of services</li>
              <li>Disputes between users</li>
              <li>Breach of contract or failure to perform</li>
              <li>Financial losses resulting from transactions</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">6.2 Escrow Services</h3>
            <p>We provide escrow services to facilitate secure transactions. By using escrow services, you agree that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Escrow services are provided "as is" without warranties</li>
              <li>We are not liable for losses resulting from escrow disputes or failures</li>
              <li>We reserve the right to modify, suspend, or terminate escrow services</li>
              <li>Disputes will be resolved according to our dispute resolution process</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">6.3 Fees</h3>
            <p>We may charge fees for certain services, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project listing fees</li>
              <li>Service listing fees</li>
              <li>Escrow fees</li>
              <li>Premium features and subscriptions</li>
            </ul>
            <p>All fees are non-refundable unless otherwise stated. We reserve the right to modify our fee structure at any time with notice.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">7. Dispute Resolution</h2>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">7.1 User Disputes</h3>
            <p>Disputes between users should be resolved directly between the parties. We may provide dispute resolution tools, but we are not obligated to resolve disputes and are not liable for the outcome of disputes.</p>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">7.2 Disputes with LaunchLink</h3>
            <p>If you have a dispute with LaunchLink, you agree to first contact us and attempt to resolve the dispute informally. If we cannot resolve the dispute within 60 days, you agree to resolve the dispute through binding arbitration as set forth below.</p>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">7.3 Arbitration</h3>
            <p>Any dispute, controversy, or claim arising out of or relating to these Terms or the Service shall be settled by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in the United States, and the arbitrator's decision shall be final and binding. You waive your right to a jury trial and to participate in a class action lawsuit.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless LaunchLink and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>Your User Content</li>
              <li>Your transactions with other users</li>
              <li>Your infringement of any third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LAUNCHLINK AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICE.
            </p>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted, secure, error-free, or free from viruses or other harmful components. We do not guarantee the accuracy, completeness, or reliability of any information, content, or materials available through the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">11. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            <p>
              You may terminate your account at any time by contacting us or using account deletion features, if available.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">12. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms or the Service shall be brought exclusively in the courts located in the United States, and you consent to the jurisdiction of such courts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and Disclaimer, constitute the entire agreement between you and LaunchLink regarding the Service and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">15. Waiver</h2>
            <p>
              No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term. Our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">16. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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

