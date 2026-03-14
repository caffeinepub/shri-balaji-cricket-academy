import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'shri-balaji-cricket-academy'
  );

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-cricket-green-dark text-cricket-cream">
      {/* Top Divider */}
      <div className="h-1 gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cricket-gold flex-shrink-0">
                <img
                  src="/assets/generated/academy-logo.dim_200x200.png"
                  alt="Shri Balaji Cricket Academy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-bold text-cricket-gold text-base leading-tight">
                  Shri Balaji
                </p>
                <p className="font-body text-cricket-cream/70 text-xs uppercase tracking-wide">
                  Cricket Academy
                </p>
              </div>
            </div>
            <p className="font-body text-cricket-cream/60 text-sm leading-relaxed max-w-xs">
              Nurturing cricket champions since day one. Professional coaching for children aged 7
              years and above.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              {[
                { Icon: SiFacebook, label: 'Facebook', href: '#' },
                { Icon: SiInstagram, label: 'Instagram', href: '#' },
                { Icon: SiYoutube, label: 'YouTube', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm bg-cricket-green flex items-center justify-center text-cricket-cream/70 hover:text-cricket-gold hover:bg-cricket-green-light transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-cricket-gold text-base mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-cricket-cream/60 text-sm hover:text-cricket-gold transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-cricket-gold text-base mb-4 uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cricket-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-cricket-cream/60 text-sm leading-relaxed">
                  Shri Balaji Cricket Academy,
                  <br />
                  Malerna Gaon, Ballabgarh,
                  <br />
                  Faridabad – 121004
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cricket-gold flex-shrink-0" />
                <span className="font-body text-cricket-cream/60 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cricket-gold flex-shrink-0" />
                <span className="font-body text-cricket-cream/60 text-sm">
                  info@shribalajicriacademy.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-cricket-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-cricket-cream/40 text-xs">
            © {year} Shri Balaji Cricket Academy. All rights reserved.
          </p>
          <p className="font-body text-cricket-cream/40 text-xs flex items-center gap-1">
            Built with{' '}
            <Heart size={12} className="text-cricket-gold fill-cricket-gold" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cricket-gold hover:text-cricket-gold/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
