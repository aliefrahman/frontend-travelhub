"use client";

import { useState } from "react";
import { Menu, X, Globe, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IT</span>
            </div>
            <span className="text-xl font-bold text-dark">
              Indonesia<span className="text-primary">Tour</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-dark hover:text-primary transition-colors">
              Home
            </a>
            <a href="#tours" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Tours
            </a>
            <a href="#destinations" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#b2b" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              B2B
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              EN
            </button>
            <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all">
              <User className="w-4 h-4" />
              Login
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-md animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-dark hover:text-primary hover:bg-gray-50 transition-colors"
            >
              Home
            </a>
            <a
              href="#tours"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              Tours
            </a>
            <a
              href="#destinations"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              Destinations
            </a>
            <a
              href="#b2b"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              B2B
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              About
            </a>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
                EN
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all">
                <User className="w-4 h-4" />
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}