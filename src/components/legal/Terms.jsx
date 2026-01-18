import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
        <h1 className="text-4xl font-light mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Content */}
        <div className="space-y-10 text-gray-300 font-light leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl text-white mb-4">1. Legal Identity</h2>
            <p>
              pfrotos is a business operated from India, providing AI-generated and AI-assisted 
              creative services ("pfrotos", "Service Provider", "we").
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl text-white mb-4">2. Services</h2>
            <p className="mb-4">
              pfrotos provides AI-generated and AI-assisted visual, photographic, and video content, 
              including synthetic imagery, videos, avatars, animations, and enhancements ("Content").
            </p>
            <p>
              All Content is creative, algorithmic, probabilistic, and non-deterministic.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl text-white mb-4">3. AI Acknowledgement & Total Risk Assumption</h2>
            <p className="mb-4">You expressly acknowledge and agree that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>AI outputs are inherently subjective and probabilistic</li>
              <li>Outputs may contain artifacts, inaccuracies, distortions, or inconsistencies</li>
              <li>Results cannot be predicted, guaranteed, or replicated</li>
              <li>Creative dissatisfaction, expectation mismatch, or subjective quality issues do not constitute defect, deficiency, or breach</li>
            </ul>
            <p className="text-white font-medium">
              All Content is provided "AS IS" and "AS AVAILABLE."
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl text-white mb-4">4. Absolute No Warranties</h2>
            <p className="mb-4">
              pfrotos expressly disclaims all warranties, express or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Realism, accuracy, or commercial viability</li>
              <li>Brand suitability</li>
              <li>Legal or regulatory compliance of downstream use</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl text-white mb-4">5. Final Delivery = Irrevocable Acceptance</h2>
            <p className="mb-4">Upon delivery, access, download, publication, or use of Content:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>The Services shall be deemed fully accepted</li>
              <li>No disputes, refunds, revisions, or claims shall be permitted</li>
              <li>Acceptance is final and irreversible</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl text-white mb-4">6. Revisions (If Any)</h2>
            <p className="mb-4">If revisions are offered:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Revisions are discretionary, limited, and non-guaranteed</li>
              <li>Revisions address technical errors only, not subjective preference</li>
              <li>Revisions do not reset acceptance, liability, or limitation periods</li>
              <li>Unused revisions automatically expire</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl text-white mb-4">7. Deepfake, Likeness & Model Release</h2>
            <p className="mb-4">
              You represent and warrant that you have full legal rights, authority, and consent to use any:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Faces, bodies, voices, likenesses</li>
              <li>Reference images or identities</li>
            </ul>
            <p className="mb-4">
              You expressly authorize pfrotos to generate synthetic, altered, AI-derived, or 
              deepfake-style representations.
            </p>
            <p className="mb-4">You irrevocably waive any claims relating to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Defamation</li>
              <li>Misrepresentation</li>
              <li>False endorsement</li>
              <li>Personality rights</li>
              <li>Publicity rights</li>
              <li>Moral rights</li>
            </ul>
            <p className="text-white">
              This clause operates as a global, perpetual model release to the maximum extent permitted by law.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl text-white mb-4">8. Intellectual Property & Similarity Disclaimer</h2>
            <p className="mb-4">You acknowledge that AI-generated Content:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>May resemble existing works, styles, or elements</li>
              <li>Is not guaranteed to be original or exclusive</li>
            </ul>
            <p>
              pfrotos makes no representation of non-infringement. All responsibility for copyright, 
              trademark, publicity, and regulatory compliance rests solely with you.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl text-white mb-4">9. License</h2>
            <p>
              Upon full payment, you receive a non-exclusive, non-transferable license to use the Content. 
              pfrotos may reuse anonymized outputs for portfolio or demonstration unless prohibited in writing.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl text-white mb-4">10. Fees & No Refunds</h2>
            <p className="text-white font-medium">
              All fees are final, non-refundable, and payable regardless of satisfaction.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl text-white mb-4">11. Hard Liability Cap</h2>
            <p className="mb-4">To the maximum extent permitted by law:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>pfrotos shall not be liable for indirect, incidental, consequential, special, or punitive damages</li>
              <li>Total cumulative liability shall never exceed INR 1,000 or the fees paid, whichever is lower</li>
            </ul>
            <p>This applies worldwide, regardless of claim type.</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl text-white mb-4">12. Indemnity</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless pfrotos from all claims, losses, 
              damages, costs, and legal expenses arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Use or misuse of Content</li>
              <li>Third-party complaints</li>
              <li>IP or likeness disputes</li>
              <li>Regulatory or platform violations</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl text-white mb-4">13. No Injunction / No Takedown</h2>
            <p>
              You agree that monetary damages are an adequate remedy and waive all rights to 
              injunctions, restraining orders, takedowns, or equitable relief.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl text-white mb-4">14. Limitation Period</h2>
            <p>
              Any claim arising out of or relating to the Services must be initiated within 
              12 months from delivery or acceptance, failing which it shall be permanently barred.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl text-white mb-4">15. Governing Law & Arbitration</h2>
            <p className="mb-4">
              This Agreement shall be governed by and construed in accordance with the laws of India.
            </p>
            <p className="mb-4">
              All disputes shall be resolved exclusively by arbitration under the 
              Arbitration and Conciliation Act, 1996.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>The seat and venue of arbitration shall be New Delhi, India</li>
              <li>Language: English</li>
            </ul>
            <p className="text-white font-medium">
              All other courts worldwide are expressly excluded.
            </p>
          </section>

          {/* Section 16 */}
          <section className="pb-8">
            <h2 className="text-xl text-white mb-4">16. Acceptance</h2>
            <div className="p-6 border border-white/20 rounded-lg bg-white/5">
              <p className="text-white">
                Accessing the website, booking a call, making payment, or using the Services 
                constitutes full and binding acceptance of these Terms of Service.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-xl text-white mb-4">Questions?</h2>
            <p>
              If you have any questions about these Terms, contact us at{' '}
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