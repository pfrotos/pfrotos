import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-light">Back to Home</span>
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-light mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">
          Last updated: Jan 11th, 2026
        </p>

        {/* Intro */}
        <p className="text-gray-300 font-light leading-relaxed mb-12">
          This Privacy Policy explains how pfrotos, a business operated from India (“pfrotos”, “we”, “us”), 
          collects, uses, processes, and protects information when users (“you”) access our website or services.
          By accessing the website, booking a call, submitting information, or using our services, you consent 
          to the practices described in this Policy.
        </p>

        {/* Content */}
        <div className="space-y-12 text-gray-300 font-light leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl text-white mb-4">1. Scope</h2>
            <p className="mb-2">This Privacy Policy applies to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Website visitors</li>
              <li>Prospective clients</li>
              <li>Clients booking calls or engaging services</li>
              <li>Users submitting information voluntarily</li>
            </ul>
            <p>
              It does not apply to third-party websites or platforms operated independently of pfrotos.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl text-white mb-6">2. Information We Collect</h2>
            
            <div className="mb-6">
              <h3 className="text-white text-base mb-3">a) Information You Voluntarily Provide</h3>
              <p className="mb-2">We may collect:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Contact details</li>
                <li>Project-related information</li>
                <li>Messages or inquiries</li>
                <li>Scheduling details (via tools such as Calendly)</li>
              </ul>
              <p>Providing this information is voluntary.</p>
            </div>

            <div>
              <h3 className="text-white text-base mb-3">b) Technical & Usage Information</h3>
              <p className="mb-2">We may automatically receive limited technical data such as:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Basic access logs</li>
              </ul>
              <p>
                This data is typically collected by our hosting or infrastructure providers and is used for security and performance purposes.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl text-white mb-4">3. Scheduling Tools (Calendly)</h2>
            <p className="mb-4">
              pfrotos may use third-party scheduling platforms (such as Calendly) to allow users to book calls.
              Information collected via such tools may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Preferred date/time</li>
              <li>Optional notes</li>
            </ul>
            <p className="mb-2">pfrotos:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Does not control how third-party platforms store or retain data</li>
              <li>Does not access sensitive personal data through scheduling tools</li>
              <li>Is not responsible for independent actions or data practices of such platforms</li>
            </ul>
            <p>Users are encouraged to review the privacy policies of those platforms.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl text-white mb-4">4. Purpose of Data Processing</h2>
            <p className="mb-4">We process data solely for legitimate business purposes, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Responding to inquiries</li>
              <li>Scheduling and conducting calls</li>
              <li>Providing services</li>
              <li>Communicating with clients</li>
              <li>Maintaining website functionality and security</li>
              <li>Complying with applicable legal obligations</li>
            </ul>
            <p>We do not use personal data for automated decision-making or profiling.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl text-white mb-4">5. Legal Basis for Processing</h2>
            <p className="mb-4">Data is processed based on one or more of the following:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Your consent</li>
              <li>Contractual necessity</li>
              <li>Legitimate business interest</li>
              <li>Legal compliance</li>
            </ul>
            <p>Where consent is required, continued use of the website or services constitutes valid consent.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl text-white mb-4">6. Data Sharing & Third Parties</h2>
            <p className="mb-4">We may share limited data with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Hosting providers (e.g., Netlify)</li>
              <li>Scheduling providers (e.g., Calendly)</li>
              <li>Infrastructure or analytics providers</li>
            </ul>
            <p className="mb-4 text-white">We do not:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Sell personal data</li>
              <li>Rent personal data</li>
              <li>Trade personal data</li>
            </ul>
            <p>Third-party providers operate under their own privacy policies.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl text-white mb-4">7. Data Retention</h2>
            <p className="mb-4">pfrotos retains personal data only for as long as reasonably necessary to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Fulfill the purpose for which it was collected</li>
              <li>Comply with legal or contractual obligations</li>
            </ul>
            <p>
              In most cases, data is retained for 1–3 years or less, unless a longer period is required by law.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl text-white mb-4">8. Data Security</h2>
            <p className="mb-2">
              pfrotos implements reasonable technical and organizational safeguards to protect data.
            </p>
            <p>
              However, no system is completely secure. By using the website or services, you acknowledge and accept this risk.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl text-white mb-4">9. Your Rights</h2>
            <p className="mb-4">Depending on applicable law, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Request access to your data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of data, where legally permissible</li>
            </ul>
            <p>Requests may be subject to identity verification and legal limitations.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl text-white mb-4">10. International Users</h2>
            <p className="mb-2">pfrotos operates from India.</p>
            <p>
              By using the website or services, you consent to the processing of your information in India and other jurisdictions where service providers operate.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl text-white mb-4">11. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law, pfrotos shall not be liable for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Data handled by third-party platforms</li>
              <li>Unauthorized access beyond reasonable control</li>
              <li>Indirect or consequential damages related to data processing</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl text-white mb-4">12. Governing Law & Dispute Resolution</h2>
            <p className="mb-4">This Privacy Policy shall be governed by the laws of India.</p>
            <p className="mb-2">
              Any dispute shall be resolved exclusively by arbitration under the Arbitration and Conciliation Act, 1996.
            </p>
            <p className="text-gray-400 mb-4">Seat and venue: Delhi, India.</p>
            <p className="text-white font-medium">Courts outside this jurisdiction are expressly excluded.</p>
          </section>

          {/* Section 13 */}
          <section className="pb-8">
            <h2 className="text-xl text-white mb-4">13. Changes to this Policy</h2>
            <p className="mb-2">pfrotos may update this Privacy Policy at any time.</p>
            <p>Continued use of the website or services constitutes acceptance of the updated policy.</p>
          </section>

           {/* Contact */}
           <section className="pt-8 border-t border-white/10">
            <h2 className="text-xl text-white mb-4">Contact</h2>
            <p>
              If you have any questions about this Policy, contact us at{' '}
              <a 
                href="mailto:pfrotos.care@outlook.com" 
                className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
              >
                pfrotos.care@outlook.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}