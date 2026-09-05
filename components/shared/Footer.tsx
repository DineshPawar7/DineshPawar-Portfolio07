// components/ToolsFooter.tsx
"use client";

import Link from "next/link";

export default function ToolsFooter() {
  const currentYear = new Date().getFullYear();

  const toolCategories = [
    {
      title: "Image Tools",
      tools: [
        { name: "Photo Resizer", href: "/photo-resizer", description: "Resize and compress photos" },
        { name: "Signature Resizer", href: "/signature-resizer", description: "Resize signatures for forms" },
        { name: "Image Compressor", href: "/image-compressor", description: "Compress images online" },
      ],
    },
    {
      title: "Document Tools",
      tools: [
        { name: "PDF Editor", href: "/pdf-editor", description: "Edit PDF documents" },
        { name: "PDF Converter", href: "/pdf-converter", description: "Convert files to PDF" },
        { name: "Document Scanner", href: "/document-scanner", description: "Scan documents" },
      ],
    },
    {
      title: "Utility Tools",
      tools: [
        { name: "File Converter", href: "/file-converter", description: "Convert file formats" },
        { name: "Text Tools", href: "/text-tools", description: "Text manipulation tools" },
        { name: "QR Code Generator", href: "/qr-generator", description: "Create QR codes" },
      ],
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "YouTube", icon: "▶️", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <span>🛠️</span>
              <span>ToolHub</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Free online tools for image editing, document management, and file conversion. 
              All tools are 100% free and work directly in your browser.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg bg-gray-700/50 hover:bg-blue-600 transition-colors flex items-center justify-center text-xl hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tool Categories */}
          {toolCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              <ul className="space-y-2.5">
                {category.tools.map((tool) => (
                  <li key={tool.name}>
                    <Link
                      href={tool.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors block group"
                    >
                      <span className="group-hover:underline">{tool.name}</span>
                      <span className="block text-xs text-gray-500 group-hover:text-gray-400">
                        {tool.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center">
            <p>
              © {currentYear} <span className="text-gray-400">ToolHub</span>. 
              All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Built with ❤️ for the world
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-green-400">✓</span> 100% Free
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-400">✓</span> No Signup
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-400">✓</span> Private
            </span>
          </div>
        </div>
      </div>

      {/* Newsletter / CTA Bar */}
      <div className="border-t border-gray-700/30 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-white text-sm font-medium">Stay Updated</p>
                <p className="text-xs text-gray-400">Get latest tools and updates</p>
              </div>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}