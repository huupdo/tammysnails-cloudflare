import { useState, useEffect, useCallback } from "react";
import { GrInstagram, GrFacebookOption } from "react-icons/gr";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface GalleryPhoto {
  src: string;
  alt: string;
  category: string;
}

const photos: GalleryPhoto[] = [
  {
    src: "/photos/gallery 1.webp",
    alt: "Nail art design",
    category: "Nail Art",
  },
  {
    src: "/photos/gallery 2.webp",
    alt: "Manicure service",
    category: "Manicures",
  },
  {
    src: "/photos/gallery 3.webp",
    alt: "Nail art design",
    category: "Nail Art",
  },
  {
    src: "/photos/gallery 4.webp",
    alt: "Pedicure service",
    category: "Pedicures",
  },
  {
    src: "/photos/gallery 5.webp",
    alt: "Manicure service",
    category: "Manicures",
  },
  {
    src: "/photos/gallery 6.webp",
    alt: "Nail art design",
    category: "Nail Art",
  },
  {
    src: "/photos/nail 1.webp",
    alt: "Classic manicure",
    category: "Manicures",
  },
  { src: "/photos/nail 2.webp", alt: "Gel manicure", category: "Manicures" },
  { src: "/photos/nail 3.webp", alt: "Nail art", category: "Nail Art" },
  { src: "/photos/nail 4.webp", alt: "Manicure design", category: "Manicures" },
  {
    src: "/photos/Elegant_Nail_Art_Ideas.webp",
    alt: "Elegant nail art",
    category: "Nail Art",
  },
  {
    src: "/photos/deluxe manicure service.webp",
    alt: "Deluxe manicure",
    category: "Manicures",
  },
  {
    src: "/photos/pedicure.webp",
    alt: "Pedicure service",
    category: "Pedicures",
  },
  {
    src: "/photos/hot stone pedicure.webp",
    alt: "Hot stone pedicure",
    category: "Pedicures",
  },
  {
    src: "/photos/kids nails.webp",
    alt: "Kids' nail service",
    category: "Kids",
  },
  {
    src: "/photos/waxing eyebrow.webp",
    alt: "Eyebrow waxing",
    category: "Waxing & Brows",
  },
  {
    src: "/photos/eyebrow.webp",
    alt: "Eyebrow shaping",
    category: "Waxing & Brows",
  },
  {
    src: "/photos/lashes.webp",
    alt: "Lash service",
    category: "Waxing & Brows",
  },
];

const categories = [
  "All",
  "Manicures",
  "Pedicures",
  "Nail Art",
  "Waxing & Brows",
  "Kids",
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 font-serif text-4xl font-semibold text-gray-900 md:text-5xl dark:text-neutral-100">
            Our Work
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500 dark:text-neutral-400">
            A collection of nail art, manicures, pedicures, and more — straight
            from our salon.
          </p>

          {/* Social links */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/tammy_nails_redding/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-stone-600 transition hover:border-pink-400 hover:text-pink-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-pink-500 dark:hover:text-pink-400"
            >
              <GrInstagram size={18} />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/people/Tammys-Nails/61557275521215/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-stone-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              <GrFacebookOption size={18} />
              Facebook
            </a>
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-1.5 text-sm font-medium tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-amber-900 text-white dark:bg-amber-800"
                  : "border border-neutral-200 text-stone-600 hover:border-amber-800 hover:text-amber-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-amber-700 dark:hover:text-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {filtered.map((photo, index) => (
            <div
              key={photo.src}
              className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01] dark:border-neutral-800"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="py-20 text-center text-sm text-neutral-400">
            No photos in this category yet.
          </p>
        )}

        {/* Follow CTA */}
        <div className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-800 dark:bg-neutral-900/50">
          <p className="mb-1 font-serif text-2xl font-semibold text-gray-900 dark:text-neutral-100">
            See more of our work
          </p>
          <p className="mb-5 text-sm text-gray-500 dark:text-neutral-400">
            Follow us on Instagram and Facebook for our latest nail art,
            promotions, and inspiration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/tammy_nails_redding/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2.5 text-sm font-bold tracking-widest text-white uppercase transition hover:opacity-90"
            >
              <GrInstagram size={16} />
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/people/Tammys-Nails/61557275521215/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-blue-500"
            >
              <GrFacebookOption size={16} />
              Follow on Facebook
            </a>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={closeLightbox}
          >
            <FiX size={20} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <FiChevronRight size={24} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 text-sm text-white">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
