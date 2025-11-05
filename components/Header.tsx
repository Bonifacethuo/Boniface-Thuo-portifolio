
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-2xl font-bold font-heading text-navy">BTM.</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-medium text-navy hover:text-teal transition-colors duration-300">{link.label}</a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-navy focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="font-medium text-navy hover:text-teal transition-colors duration-300">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;