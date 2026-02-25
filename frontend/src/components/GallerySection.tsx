import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: '/assets/generated/gallery-1.dim_600x400.png',
    alt: 'Young cricketers training on the ground',
    caption: 'Morning Training Session',
  },
  {
    src: '/assets/generated/gallery-2.dim_600x400.png',
    alt: 'Coach instructing a young cricketer',
    caption: 'One-on-One Coaching',
  },
  {
    src: '/assets/generated/gallery-3.dim_600x400.png',
    alt: 'Group of young cricket players',
    caption: 'Team Practice',
  },
  {
    src: '/assets/generated/gallery-4.dim_600x400.png',
    alt: 'Cricket ball and bat on grass',
    caption: 'The Game We Love',
  },
  {
    src: '/assets/generated/gallery-5.dim_600x400.png',
    alt: 'Young cricketers celebrating',
    caption: 'Victory Celebration',
  },
  {
    src: '/assets/generated/gallery-6.dim_600x400.png',
    alt: 'Cricket stumps at sunset',
    caption: 'End of a Perfect Day',
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-cricket-green font-semibold text-sm uppercase tracking-widest">
            Our Academy in Action
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-cricket-charcoal mt-2 mb-4">
            Gallery
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-sm aspect-[3/2] bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-cricket-gold"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-cricket-green/0 group-hover:bg-cricket-green/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn size={28} className="text-cricket-gold" />
                  <span className="font-body text-cricket-cream text-sm font-medium">
                    {image.caption}
                  </span>
                </div>
              </div>
              {/* Bottom Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cricket-green/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-cricket-cream text-sm font-medium">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-cricket-charcoal/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-cricket-cream/70 hover:text-cricket-gold transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cricket-cream/70 hover:text-cricket-gold transition-colors p-3 text-3xl font-bold"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            className="max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-sm"
            />
            <p className="font-body text-cricket-cream/80 text-center mt-3 text-sm">
              {galleryImages[lightboxIndex].caption}
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cricket-cream/70 hover:text-cricket-gold transition-colors p-3 text-3xl font-bold"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
