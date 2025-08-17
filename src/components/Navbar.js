'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/blog', label: 'Blog', icon: '📝' },
    { href: '/contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:block fixed left-0 top-0 h-full w-48 bg-white border-r border-gray-200 shadow-sm z-50">
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-6 border-b border-gray-100">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-0">
              Vivek
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0 ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Footer Section */}
          <div className="p-6 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Fixed Top Right */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-0 bg-white rounded-lg p-2 shadow-md transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}>
          <div className="fixed right-4 top-16 bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-48">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-all duration-200 focus:outline-none focus:ring-0 ${
                        isActive ? 'bg-blue-50 text-blue-700' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
