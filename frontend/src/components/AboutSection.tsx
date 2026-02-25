import { Target, Users, Award, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Focused Training',
    description:
      'Structured coaching programs designed to develop batting, bowling, and fielding skills systematically.',
  },
  {
    icon: Users,
    title: 'Expert Coaches',
    description:
      'Learn from experienced, certified coaches who are passionate about developing young cricket talent.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description:
      'Our students have gone on to represent district, state, and national-level cricket teams.',
  },
  {
    icon: Heart,
    title: 'Holistic Development',
    description:
      'We nurture not just cricket skills but also discipline, teamwork, and sportsmanship in every child.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-cricket-green font-semibold text-sm uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-cricket-charcoal mt-2 mb-4">
            About Our Academy
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-cricket-green mb-6 leading-snug">
              Building Tomorrow's Cricket Champions Today
            </h3>
            <div className="space-y-4 font-body text-foreground/75 text-base leading-relaxed">
              <p>
                <strong className="text-cricket-charcoal">Shri Balaji Cricket Academy</strong> was
                founded with a singular vision — to provide world-class cricket coaching to young
                children in a nurturing, professional environment. We believe every child who loves
                cricket deserves the opportunity to develop their talent to its fullest potential.
              </p>
              <p>
                Our academy welcomes children aged{' '}
                <strong className="text-cricket-green">7 years and above</strong>, offering
                age-appropriate training programs that grow with the child. From the very basics of
                holding a bat to advanced match strategies, we cover every aspect of the game.
              </p>
              <p>
                With state-of-the-art facilities, certified coaches, and a proven curriculum, we
                create an environment where young cricketers can thrive — both on and off the
                field. Our coaching philosophy centers on patience, encouragement, and technical
                excellence.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="mt-8 p-5 bg-cricket-green rounded-sm border-l-4 border-cricket-gold">
              <p className="font-body text-cricket-cream text-sm leading-relaxed">
                <span className="font-semibold text-cricket-gold">Our Mission:</span> To inspire a
                generation of cricketers by providing exceptional coaching, fostering a love for the
                sport, and building character through the values of cricket.
              </p>
            </div>
          </div>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-sm p-6 hover:shadow-card-hover hover:border-cricket-gold/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-sm bg-cricket-green/10 flex items-center justify-center mb-4 group-hover:bg-cricket-green group-hover:text-cricket-gold transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-cricket-green group-hover:text-cricket-gold transition-colors duration-300"
                    />
                  </div>
                  <h4 className="font-display font-bold text-cricket-charcoal text-lg mb-2">
                    {value.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
