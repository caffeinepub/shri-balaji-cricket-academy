import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1400x600.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cricket-gold/20 border border-cricket-gold/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cricket-gold animate-pulse" />
          <span className="font-body text-cricket-gold text-sm font-medium tracking-wider uppercase">
            Est. in Excellence
          </span>
        </div>

        {/* Academy Name */}
        <h1 className="font-display font-black text-cricket-cream text-shadow-lg leading-tight mb-4">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Shri Balaji
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cricket-gold mt-1">
            Cricket Academy
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-cricket-cream/85 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-4 text-shadow leading-relaxed">
          Nurturing Champions from the Ground Up
        </p>
        <p className="font-body text-cricket-cream/65 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Professional cricket coaching for children aged{' '}
          <span className="text-cricket-gold font-semibold">7 years and above</span>.
          Build skills, discipline, and a love for the game.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="gold-gradient text-cricket-charcoal font-body font-bold text-base px-8 py-4 h-auto rounded-sm shadow-gold hover:opacity-90 transition-all duration-200 hover:scale-105 border-0 min-w-[180px]"
          >
            Enroll Your Child
          </Button>
          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="border-2 border-cricket-cream/60 text-cricket-cream bg-transparent hover:bg-cricket-cream/10 font-body font-semibold text-base px-8 py-4 h-auto rounded-sm transition-all duration-200 min-w-[180px]"
          >
            Learn More
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Students Trained' },
            { value: '7+', label: 'Years Min. Age' },
            { value: '15+', label: 'Expert Coaches' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-cricket-gold text-2xl sm:text-3xl">
                {stat.value}
              </p>
              <p className="font-body text-cricket-cream/60 text-xs sm:text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cricket-cream/50 hover:text-cricket-gold transition-colors animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
