import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Amazon Services', path: '/amazon-services' },
    { name: 'Shopify Services', path: '/shopify-services' },
    { name: 'Meta Ads', path: '/meta-ads' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'CGI Ads', path: '/cgi-ads' },
    { name: 'Graphic Design', path: '/graphic-design' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/FHB1kmL5/ASSistaura-logo.jpg"
              alt="AssistAura Logo"
              className="w-[90px] md:w-[80px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-anton text-lg transition-colors duration-300 hover:text-[#ffbe4a] ${
                isActive('/') ? 'text-[#ffbe4a]' : 'text-[#2a3747]'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`font-anton text-lg transition-colors duration-300 hover:text-[#ffbe4a] ${
                isActive('/about') ? 'text-[#ffbe4a]' : 'text-[#2a3747]'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="font-anton text-lg text-[#2a3747] hover:text-[#ffbe4a] transition-colors duration-300 flex items-center">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border"
                  >
                    <div className="py-2">
                      {services.map((service, index) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-4 py-3 font-anton text-sm text-[#2a3747] hover:bg-[#ffbe4a]/10 hover:text-[#ffbe4a] transition-colors duration-300"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2a3747] hover:text-[#ffbe4a] transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <Link
                  to="/"
                  className="block font-anton text-lg text-[#2a3747] hover:text-[#ffbe4a] transition-colors duration-300 px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block font-anton text-lg text-[#2a3747] hover:text-[#ffbe4a] transition-colors duration-300 px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <div className="px-4">
                  <p className="font-anton text-lg text-[#2a3747] mb-2">Services</p>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block font-anton text-sm text-[#2a3747] hover:text-[#ffbe4a] transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;