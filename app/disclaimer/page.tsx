import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 pt-32 md:pt-40">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#171717] mb-4">
          Disclaimer
        </h1>
        <p className="font-sans text-sm text-[#737373] mb-12">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none font-sans text-[#404040] leading-relaxed space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">1. General Disclaimer</h2>
            <p>
              THE LAUNCHLINK PLATFORM (THE "SERVICE") IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>
            <p>
              LaunchLink ("we," "our," or "us") does not warrant that the Service will be uninterrupted, secure, error-free, or free from viruses or other harmful components. We do not guarantee the accuracy, completeness, or reliability of any information, content, or materials available through the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">2. No Investment Advice</h2>
            <p>
              NOTHING ON THE LAUNCHLINK PLATFORM CONSTITUTES INVESTMENT, FINANCIAL, TRADING, LEGAL, OR TAX ADVICE. All information provided on the Service is for informational purposes only and should not be construed as professional advice.
            </p>
            <p>
              We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide investment recommendations or advice</li>
              <li>Endorse or recommend any projects, tokens, or cryptocurrencies listed on our platform</li>
              <li>Guarantee the performance, profitability, or success of any project or token</li>
              <li>Provide financial, legal, or tax advice</li>
              <li>Act as a financial advisor, broker, or investment manager</li>
            </ul>
            <p>
              You should conduct your own research, consult with qualified professionals, and make independent decisions regarding any investments or transactions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">3. Cryptocurrency and Blockchain Risks</h2>
            <p>
              CRYPTOCURRENCY AND BLOCKCHAIN TECHNOLOGY INVOLVE SIGNIFICANT RISKS. By using our Service, you acknowledge and agree that:
            </p>
            
            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">3.1 Market Risks</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cryptocurrency prices are highly volatile and can fluctuate dramatically</li>
              <li>You may lose all or a substantial portion of your investment</li>
              <li>Past performance does not guarantee future results</li>
              <li>Market conditions can change rapidly and unpredictably</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">3.2 Technical Risks</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Blockchain networks may experience technical failures, congestion, or downtime</li>
              <li>Smart contracts may contain bugs, vulnerabilities, or be exploited</li>
              <li>Transactions may be irreversible, delayed, or fail</li>
              <li>Private keys may be lost, stolen, or compromised</li>
              <li>Wallets may be hacked or subject to security breaches</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">3.3 Regulatory Risks</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cryptocurrency regulations vary by jurisdiction and are subject to change</li>
              <li>Regulatory actions may affect the value, legality, or availability of cryptocurrencies</li>
              <li>You may be subject to tax obligations in your jurisdiction</li>
              <li>Compliance with applicable laws is your responsibility</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-[#171717] mt-6 mb-3">3.4 Project and Token Risks</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Projects listed on our platform may fail, be scams, or have no value</li>
              <li>Token launches may not succeed or may result in total loss</li>
              <li>Projects may not deliver on their promises or roadmaps</li>
              <li>Tokenomics may be flawed or unsustainable</li>
              <li>Projects may be subject to regulatory action or legal issues</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">4. No Endorsement of Projects or Services</h2>
            <p>
              The listing of a project, token, or marketing service on our platform does not constitute an endorsement, recommendation, or guarantee by LaunchLink. We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify the accuracy of project information, tokenomics, or claims</li>
              <li>Audit smart contracts or guarantee their security</li>
              <li>Vouch for the legitimacy, quality, or success of listed projects</li>
              <li>Guarantee the performance or results of marketing services</li>
              <li>Ensure that developers or promoters will fulfill their obligations</li>
            </ul>
            <p>
              All projects, tokens, and services are listed at the discretion of users. You are solely responsible for conducting due diligence and making independent decisions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">5. Escrow and Payment Services</h2>
            <p>
              While we provide escrow services to facilitate transactions between developers and promoters:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not guarantee the performance or delivery of services</li>
              <li>We are not responsible for disputes between parties</li>
              <li>Escrow services are provided "as is" and may be subject to limitations</li>
              <li>We reserve the right to modify, suspend, or terminate escrow services at any time</li>
              <li>We are not liable for losses resulting from escrow disputes or failures</li>
            </ul>
            <p>
              You use escrow services at your own risk and should not rely solely on escrow for protection.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">6. Reputation System</h2>
            <p>
              Our reputation system is provided for informational purposes only:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reputation scores are calculated using algorithms and may not reflect actual performance or trustworthiness</li>
              <li>We do not guarantee the accuracy or reliability of reputation scores</li>
              <li>Reputation scores may be manipulated, gamed, or subject to errors</li>
              <li>Past performance does not guarantee future behavior</li>
              <li>You should not rely solely on reputation scores when making decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">7. Third-Party Services and Links</h2>
            <p>
              Our Service may contain links to third-party websites, services, or blockchain networks. We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Control or endorse third-party content, services, or websites</li>
              <li>Guarantee the accuracy, security, or availability of third-party services</li>
              <li>Assume responsibility for third-party actions, policies, or practices</li>
              <li>Warrant the security or functionality of external blockchain networks</li>
            </ul>
            <p>
              Your interactions with third parties are solely between you and the third party. We are not liable for any losses or damages resulting from third-party services or interactions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LAUNCHLINK AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Loss of profits, revenue, data, or use</li>
              <li>Loss of cryptocurrency or digital assets</li>
              <li>Investment losses or trading losses</li>
              <li>Business interruption or loss of business opportunities</li>
              <li>Reputational harm</li>
              <li>Costs of substitute services</li>
            </ul>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR INABILITY TO USE THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">9. No Guarantees</h2>
            <p>
              We make no guarantees, representations, or warranties regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The success, profitability, or performance of any project, token, or investment</li>
              <li>The accuracy, completeness, or reliability of any information on our platform</li>
              <li>The availability, security, or functionality of our Service</li>
              <li>The performance or results of marketing services</li>
              <li>The resolution of disputes between users</li>
              <li>The value or future value of any cryptocurrency or token</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">10. User Responsibility</h2>
            <p>
              You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conducting your own research and due diligence</li>
              <li>Making independent investment and trading decisions</li>
              <li>Evaluating the risks and merits of any project, token, or service</li>
              <li>Protecting your wallet, private keys, and account credentials</li>
              <li>Complying with applicable laws and regulations</li>
              <li>Paying any taxes or fees associated with your activities</li>
              <li>Verifying the identity and legitimacy of other users</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">11. Scams and Fraud</h2>
            <p>
              THE CRYPTOCURRENCY SPACE IS RIFE WITH SCAMS, FRAUD, AND IMPERSONATION. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scammers may impersonate LaunchLink, our team, or other users</li>
              <li>Projects listed on our platform may be scams or fraudulent</li>
              <li>You may receive fraudulent communications claiming to be from LaunchLink</li>
              <li>We are not responsible for losses resulting from scams or fraud</li>
              <li>You should verify all communications and transactions independently</li>
            </ul>
            <p>
              We will never ask for your private keys, seed phrases, or passwords. If you receive such a request, it is a scam.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">12. Changes to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our Service at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">13. Jurisdiction and Governing Law</h2>
            <p>
              This Disclaimer is governed by and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions. Any disputes arising out of or relating to this Disclaimer or the Service shall be subject to the exclusive jurisdiction of the courts located in the United States.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">14. Severability</h2>
            <p>
              If any provision of this Disclaimer is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">15. Acknowledgment</h2>
            <p>
              BY USING THE LAUNCHLINK PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS DISCLAIMER. YOU UNDERSTAND THE RISKS ASSOCIATED WITH CRYPTOCURRENCY, BLOCKCHAIN TECHNOLOGY, AND THE USE OF OUR SERVICE. YOU AGREE THAT YOU ARE USING THE SERVICE AT YOUR OWN RISK AND THAT LAUNCHLINK SHALL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES YOU MAY INCUR.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#171717] mt-8 mb-4">16. Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us at:
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

