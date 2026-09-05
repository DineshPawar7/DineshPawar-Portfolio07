// components/ToolsHeader.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ToolsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tools = [
    { name: "Photo Resizer", href: "/photo-resizer", icon: "📸" },
    { name: "Signature Resizer", href: "/signature-resizer", icon: "✍️" },
    { name: "Image Compressor", href: "/image-compressor", icon: "🗜️" },
    { name: "PDF Tools", href: "/pdf-tools", icon: "📄" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-gradient-to-r from-blue-600 to-purple-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link 
              href="/" 
              className={`flex items-center gap-2 text-2xl font-extrabold transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <span className="text-3xl">🛠️</span>
              <span className="hidden sm:inline">MH Bharti</span>
              <span className="text-sm font-normal opacity-75 hidden md:inline">
                Free Online Tools
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    : "text-white/90 hover:bg-white/20 hover:text-white"
                }`}
              >
                <span>{tool.icon}</span>
                {tool.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-white/90 hover:bg-white/20"
              }`}
              aria-label="Search tools"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-white/90 hover:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20">
            <nav className="flex flex-col gap-1">
              {tools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white/90 hover:bg-white/20"
                  }`}
                >
                  <span className="text-xl">{tool.icon}</span>
                  {tool.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}