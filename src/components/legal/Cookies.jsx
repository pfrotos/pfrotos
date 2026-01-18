import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cookies() {
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
        <h1 className="text-4xl font-light mb-8">Cookie Policy</h1>

        {/* Intro */}
        <p className="text-gray-300 font-light leading-relaxed mb-12">
          This Cookie Policy explains how pfrotos uses cookies and similar technologies.
        </p>

        {/* Content */}
        <div className="space-y-12 text-gray-300 font-light leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl text-white mb-4">1. What are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device to help websites function properly and improve user experience.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl text-white mb-4">2. Cookies We Use</h2>
            <p className="mb-4">pfrotos may use cookies for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Essential website functionality</li>
              <li>Security and performance</li>
              <li>Basic analytics</li>
            </ul>
            <p>These cookies do not collect sensitive personal data.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl text-white mb-4">3. Third-Party Cookies</h2>
            <p className="mb-4">
              Embedded tools and third-party services (such as scheduling widgets or analytics providers) may place cookies on your device.
            </p>
            <p className="mb-2">pfrotos:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>Does not control third-party cookies</li>
              <li>Does not access data collected by such cookies</li>
            </ul>
            <p>Users should review the respective third-party cookie policies.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl text-white mb-4">4. Consent</h2>
            <p className="mb-4">
              By continuing to browse or use this website, you consent to the use of cookies as described in this Policy.
            </p>
            <p>
              You may control or disable cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pb-8 border-b border-white/10">
            <h2 className="text-xl text-white mb-4">5. Changes</h2>
            <p>
              This Cookie Policy may be updated periodically. Continued use constitutes acceptance.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}