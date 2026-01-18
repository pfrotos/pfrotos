import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className={className} 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/pfrotos/", 
      label: "Instagram" 
    },
    { 
      icon: XIcon, 
      href: "https://x.com/pfrotos?s=21", 
      label: "X" 
    },
    { 
      icon: Mail, 
      href: "mailto:pfrotos.care@outlook.com", 
      label: "Email" 
    }
  ];

  const footerLinks = {
    Company: [
      // 1. UPDATED: Points to the ID on the homepage
      { name: "About", href: "/#what-we-do" }, 
      { name: "Contact", href: "mailto:pfrotos.care@outlook.com" },
    ],
    Services: [
      // 2. These remain unclickable
      { name: "Generative Photography" }, 
      { name: "Generative Video Content" },
      { name: "Post Production" }
    ],
    Legal: [
      { name: "Privacy", path: "/privacy" },
      { name: "Terms", path: "/terms" },
      { name: "Cookies", path: "/cookies" }
    ]
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
                  <li key={link.name}>
                    
                    {/* 1. Internal Pages (Legal) - Uses React Router */}
                    {link.path && (
                      <Link
                        to={link.path}
                        className="text-gray-500 hover:text-white transition-colors text-sm font-light cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    )}

                    {/* 2. External/Hash Links (About, Contact) - Uses standard <a> tag */}
                    {link.href && (
                      <a
                        href={link.href}
                        className="text-gray-500 hover:text-white transition-colors text-sm font-light cursor-pointer"
                      >
                        {link.name}
                      </a>
                    )}

                    {/* 3. Static Text (Services) - Unclickable */}
                    {!link.path && !link.href && (
                      <span className="text-gray-500 hover:text-white transition-colors text-sm font-light cursor-default">
                        {link.name}
                      </span>
                    )}
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
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noopener noreferrer"}
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