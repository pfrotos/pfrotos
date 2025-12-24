import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const footerLinks = {
    Company: ["About", "Contact", "Careers"],
    Services: ["AI Photos", "AI Videos", "Post Production"],
    Legal: ["Privacy", "Terms", "Cookies"]
  };

  return (
    <footer className="relative bg-black border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-xl font-light mb-4 text-white">
              pfrotos.
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              AI-powered content creation
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-light text-white text-sm mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-sm font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-xs font-light">
            © {new Date().getFullYear()} pfrotos. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
