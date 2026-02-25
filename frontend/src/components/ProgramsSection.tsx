import { CheckCircle, Clock, Users, Star, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const programs = [
  {
    title: 'Junior Starter',
    ageRange: 'Ages 7–10',
    duration: '3 months',
    sessions: '3 sessions/week',
    description:
      'Perfect introduction to cricket for young beginners. Focus on basic skills, fun drills, and building a love for the game.',
    features: [
      'Basic batting techniques',
      'Introduction to bowling',
      'Fielding fundamentals',
      'Cricket rules & etiquette',
      'Fun match practice',
    ],
    badge: 'Beginner',
    badgeColor: 'bg-cricket-gold/20 text-cricket-green border-cricket-gold/30',
    highlight: false,
  },
  {
    title: 'Rising Stars',
    ageRange: 'Ages 10–14',
    duration: '6 months',
    sessions: '4 sessions/week',
    description:
      'Intermediate program for children who have mastered the basics and are ready to elevate their game to the next level.',
    features: [
      'Advanced batting strokes',
      'Pace & spin bowling',
      'Wicket-keeping training',
      'Tactical game awareness',
      'Inter-academy matches',
      'Fitness & conditioning',
    ],
    badge: 'Popular',
    badgeColor: 'bg-cricket-green text-cricket-cream border-cricket-green',
    highlight: true,
  },
  {
    title: 'Elite Performer',
    ageRange: 'Ages 14+',
    duration: '12 months',
    sessions: '5 sessions/week',
    description:
      'Advanced program for serious cricketers aiming for district and state-level competition with intensive coaching.',
    features: [
      'Professional-level coaching',
      'Video analysis & feedback',
      'Mental strength training',
      'Tournament preparation',
      'Nutrition & fitness plan',
      'Career guidance',
    ],
    badge: 'Advanced',
    badgeColor: 'bg-cricket-gold/20 text-cricket-green border-cricket-gold/30',
    highlight: false,
  },
];

export default function ProgramsSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="programs" className="py-20 md:py-28 bg-cricket-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="font-body text-cricket-green font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-cricket-charcoal mt-2 mb-4">
            Coaching Programs
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="font-body text-muted-foreground text-base max-w-2xl mx-auto">
            Structured programs for every stage of a young cricketer's journey.
          </p>
        </div>

        {/* Age Requirement Banner */}
        <div className="flex items-center justify-center gap-3 bg-cricket-green text-cricket-cream rounded-sm px-6 py-4 mb-12 max-w-xl mx-auto shadow-green">
          <Shield size={20} className="text-cricket-gold flex-shrink-0" />
          <p className="font-body font-semibold text-sm text-center">
            All programs open to children aged{' '}
            <span className="text-cricket-gold text-base">7 years and above</span>
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`relative rounded-sm border flex flex-col transition-all duration-300 hover:shadow-card-hover ${
                program.highlight
                  ? 'bg-cricket-green border-cricket-gold shadow-green scale-[1.02]'
                  : 'bg-card border-border hover:border-cricket-gold/40'
              }`}
            >
              {/* Card Header */}
              <div
                className={`p-6 border-b ${
                  program.highlight ? 'border-cricket-gold/30' : 'border-border'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`font-body text-xs font-semibold px-3 py-1 rounded-full border ${program.badgeColor}`}
                  >
                    {program.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          program.highlight
                            ? 'text-cricket-gold fill-cricket-gold'
                            : i < (program.highlight ? 3 : 2)
                            ? 'text-cricket-gold fill-cricket-gold'
                            : 'text-muted-foreground'
                        }
                      />
                    ))}
                  </div>
                </div>
                <h3
                  className={`font-display font-bold text-2xl mb-1 ${
                    program.highlight ? 'text-cricket-cream' : 'text-cricket-charcoal'
                  }`}
                >
                  {program.title}
                </h3>
                <p
                  className={`font-body font-semibold text-sm ${
                    program.highlight ? 'text-cricket-gold' : 'text-cricket-green'
                  }`}
                >
                  {program.ageRange}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p
                  className={`font-body text-sm leading-relaxed mb-5 ${
                    program.highlight ? 'text-cricket-cream/80' : 'text-muted-foreground'
                  }`}
                >
                  {program.description}
                </p>

                {/* Meta Info */}
                <div className="flex gap-4 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Clock
                      size={14}
                      className={program.highlight ? 'text-cricket-gold' : 'text-cricket-green'}
                    />
                    <span
                      className={`font-body text-xs ${
                        program.highlight ? 'text-cricket-cream/70' : 'text-muted-foreground'
                      }`}
                    >
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users
                      size={14}
                      className={program.highlight ? 'text-cricket-gold' : 'text-cricket-green'}
                    />
                    <span
                      className={`font-body text-xs ${
                        program.highlight ? 'text-cricket-cream/70' : 'text-muted-foreground'
                      }`}
                    >
                      {program.sessions}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 flex-1">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${
                          program.highlight ? 'text-cricket-gold' : 'text-cricket-green'
                        }`}
                      />
                      <span
                        className={`font-body text-sm ${
                          program.highlight ? 'text-cricket-cream/80' : 'text-foreground/75'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`mt-6 w-full py-3 rounded-sm font-body font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] ${
                    program.highlight
                      ? 'gold-gradient text-cricket-charcoal shadow-gold'
                      : 'bg-cricket-green text-cricket-cream hover:bg-cricket-green-dark'
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
