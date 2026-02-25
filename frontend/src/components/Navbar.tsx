import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cricket-green shadow-green border-b border-cricket-gold/20'
          : 'bg-cricket-green/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Name */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-cricket-gold flex-shrink-0 bg-cricket-green-dark">
              <img
                src="/assets/generated/academy-logo.dim_200x200.png"
                alt="Shri Balaji Cricket Academy Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-cricket-gold text-sm md:text-base leading-tight">
                Shri Balaji
              </p>
              <p className="font-body text-cricket-cream/80 text-xs leading-tight tracking-wide uppercase">
                Cricket Academy
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 font-body font-medium text-sm text-cricket-cream/80 hover:text-cricket-gold transition-colors duration-200 rounded-sm hover:bg-cricket-green-light/20 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cricket-gold group-hover:w-4/5 transition-all duration-200" />
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 gold-gradient text-cricket-charcoal font-body font-semibold text-sm px-5 py-2 rounded-sm hover:opacity-90 transition-opacity shadow-gold border-0"
            >
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cricket-cream p-2 rounded-sm hover:bg-cricket-green-light/20 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cricket-green-dark border-t border-cricket-gold/20 animate-fade-in">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 font-body font-medium text-cricket-cream/80 hover:text-cricket-gold hover:bg-cricket-green-light/20 rounded-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 gold-gradient text-cricket-charcoal font-body font-semibold rounded-sm border-0"
            >
              Enroll Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
