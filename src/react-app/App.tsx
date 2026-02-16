// src/App.tsx

import { useRef, useState, useEffect } from "react";
import "./App.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { GrInstagram, GrGoogle } from "react-icons/gr";

// Reusable Service Card Component
interface ServiceCardProps {
  title: string;
  image: string;
  //   link: string;
}

const ServiceCard = ({ title, image }: ServiceCardProps) => (
  <div className="group cursor-pointer overflow-hidden rounded-2xl bg-white">
    <div className="aspect-4/5 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="py-4 text-center">
      <h3 className="font-serif text-xl tracking-widest uppercase text-amber-900 dark:text-amber-600">
        {title}
      </h3>
    </div>
  </div>
);

function App() {
  //   const contactRef = useRef(null);
  //   const galleryRef = useRef(null);
  //   const servicesRef = useRef(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // gallery slide
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  //   const goToSlide = (index) => setCurrentSlide(index);
  const goToSlide = (index: number) => setCurrentSlide(index);
  return (
    <>
      <div className="bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {/* 1. TOP ANNOUNCEMENT BAR */}
        {/* <div className="bg-stone-900 text-white py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-center px-4">
        Now Serving Open 7 Days A Week
      </div> */}

        {/* 2. STICKY NAVIGATION */}
        <nav className="top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
          <div className="mx-auto max-w-7xl px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-1 shrink-0 justify-start">
                <div className="text-2xl font-bold text-stone-700 dark:text-stone-300">
                  <img
                    src="/photos/logo.png"
                    alt="Tammy's Nails Logo"
                    className="h-16 w-auto md:h-20"
                  />
                  {/* <span className="text-stone-600 dark:text-stone-400">Your</span>
                Brand */}
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden items-center gap-4 md:flex">
                <button
                  className="btn rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-stone-700 dark:text-neutral-300 dark:hover:bg-stone-900/30 dark:hover:text-stone-300"
                  onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                >
                  Home
                </button>
                <button
                  className="btn rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-stone-700 dark:text-neutral-300 dark:hover:bg-stone-900/30 dark:hover:text-stone-300"
                  onClick={() => {
                    servicesRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Services
                </button>
                <button
                  className="btn rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-stone-700 dark:text-neutral-300 dark:hover:bg-stone-900/30 dark:hover:text-stone-300"
                  onClick={() => {
                    galleryRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Gallery
                </button>
                <button
                  className="btn rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-stone-700 dark:text-neutral-300 dark:hover:bg-stone-900/30 dark:hover:text-stone-300"
                  onClick={() => {
                    contactRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact
                </button>
              </div>

              <div className="flex flex-1 items-center justify-end gap-4">
                <a
                  href="tel:+15302269462"
                  className="hidden rounded-lg bg-stone-900 px-6 py-2 text-[11px] font-bold tracking-widest text-white uppercase transition hover:bg-stone-700 md:block"
                >
                  <FiPhone className="inline-block mr-2" />
                  Call to Book
                </a>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-stone-700 dark:text-stone-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? (
                      <RxCross1 size={24} />
                    ) : (
                      <RxHamburgerMenu size={24} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="mt-4 flex flex-col items-center gap-4 border-t border-neutral-200 pt-4 pb-4 md:hidden dark:border-neutral-800">
                <button
                  className="text-lg font-medium text-gray-700 dark:text-neutral-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scroll({ top: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </button>
                <button
                  className="text-lg font-medium text-gray-700 dark:text-neutral-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Services
                </button>
                <button
                  className="text-lg font-medium text-gray-700 dark:text-neutral-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Gallery
                </button>
                <button
                  className="text-lg font-medium text-gray-700 dark:text-neutral-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                    contactRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </button>
                <a
                  href="tel:+15302269462"
                  className="w-full bg-stone-900 px-6 py-2 text-center text-[11px] font-bold tracking-widest text-white uppercase transition hover:bg-stone-700"
                >
                  {/* <PhoneIcon /> Call to Book */}
                  <FiPhone
                    className="inline-block mr-2 text-red-100"
                    color="red"
                  />
                  Call to Book
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* hero section */}
        <section
          className="relative isolate flex min-h-screen items-start justify-start overflow-hidden pt-32"
          id="home"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full bg-linear-to-br from-stone-200 via-stone-100 to-stone-300 opacity-20 blur-2xl dark:opacity-0"></div>
            <div className="absolute right-10 -bottom-20 h-[40vh] w-[50vh] rounded-full bg-linear-to-br from-stone-300 via-stone-200 to-stone-100 opacity-40 blur-3xl dark:opacity-0"></div>
            <div className="absolute top-28 left-1/4 h-[35vh] w-[45vh] rounded-full bg-linear-to-br from-stone-300 via-stone-200 to-stone-100 opacity-60 blur-3xl dark:h-[28vh] dark:from-stone-600 dark:via-stone-500 dark:to-stone-400 dark:opacity-20"></div>
          </div>
          <div className="absolute inset-0 -z-20">
            <img
              alt="Beautiful nails gel"
              src="/photos/bg.png"
              className="h-full w-full object-cover blur-xs"
            />
            <div className="absolute inset-0 bg-white/40 dark:bg-neutral-400/30"></div>
          </div>
          <div className="relative z-10 max-w-3xl px-6 py-10 text-left">
            <div className="mb-4">
              <span className="px-4 py-2 font-serif text-3xl leading-tight md:text-4xl">
                Welcome to Tammy's
              </span>
            </div>
            <h1 className="mb-8 font-serif text-2xl text-yellow-600 italic md:text-5xl dark:text-stone-200">
              Experience premium nail care with non-toxic products and trending
              styles tailored to you.
            </h1>
          </div>
        </section>

        {/* services grid */}
        <section
          ref={servicesRef}
          className="relative overflow-hidden bg-neutral-50 py-20 dark:bg-neutral-900/50"
          id="services"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-neutral-100">
                Our Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700/80 dark:text-neutral-300/80">
                Discover our comprehensive range of nail care services, each
                designed to provide you with the perfect treatment experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
                <ServiceCard
                  title="Manicures"
                  image="/photos/nail 1.jpg"
                  //   link=""
                />
              </div>
              <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
                <ServiceCard
                  title="Pedicure"
                  image="/photos/pedicure.png"
                  //   link=""
                />
              </div>
              <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
                <ServiceCard
                  title="Eye Brows"
                  image="/photos/eyebrow.png"
                  //   link=""
                />
              </div>
              <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
                <ServiceCard
                  title="Lashes"
                  image="/photos/lashes.png"
                  //   link=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* gallery */}
        <section
          ref={galleryRef}
          className="relative overflow-hidden bg-white py-20 dark:bg-neutral-950"
          id="gallery"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-neutral-100">
                Our Gallery
              </h2>
              <div className="mt-6 flex items-center justify-center gap-6">
                <a
                  href="https://www.instagram.com/tammy_nails_redding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-500 transition-colors hover:text-pink-600 dark:text-stone-400 dark:hover:text-pink-400"
                >
                  <GrInstagram size={20} />
                  <span className="text-sm font-medium">Follow us</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/z9JHS3Li9wNqWiZh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-500 transition-colors hover:text-blue-600 dark:text-stone-400 dark:hover:text-blue-400"
                >
                  <GrGoogle size={20} />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-sm font-medium">Review us</span>
                    <span className="text-[10px]">
                      4.4 <span className="text-yellow-500">★</span> (312
                      reviews)
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-2xl dark:border-neutral-800">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="relative min-w-full">
                    <img
                      alt="Gallery Image 1"
                      src="/photos/gallery 1.png"
                      className="h-100 w-full object-cover md:h-150"
                    />
                    {/* <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div className="p-8">
                      <h3 className="mb-2 text-2xl font-bold text-white">Innovative Web Platform</h3>
                      <p className="text-sm text-gray-200">E-commerce solution with advanced features</p>
                    </div>
                  </div> */}
                  </div>
                  <div className="relative min-w-full">
                    <img
                      alt="Gallery Image 2"
                      src="/photos/gallery 2.jpg"
                      className="h-100 w-full object-cover md:h-150"
                    />
                    <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                      {/* <div className="p-8">
                      <h3 className="mb-2 text-2xl font-bold text-white">Mobile App Design</h3>
                      <p className="text-sm text-gray-200">Beautiful interface for productivity app</p>
                    </div> */}
                    </div>
                  </div>
                  <div className="relative min-w-full">
                    <img
                      alt="Gallery Image 3"
                      src="/photos/gallery 3.png"
                      className="h-100 w-full object-cover md:h-150"
                    />
                    {/* <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div className="p-8">
                      <h3 className="mb-2 text-2xl font-bold text-white">Corporate Branding</h3>
                      <p className="text-sm text-gray-200">Complete brand identity and website redesign</p>
                    </div>
                  </div> */}
                  </div>
                  <div className="relative min-w-full">
                    <img
                      alt="Gallery Image 4"
                      src="/photos/gallery 4.png"
                      className="hfull object-cover md:h-150"
                    />
                    {/* <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div className="p-8">
                      <h3 className="mb-2 text-2xl font-bold text-white">Cloud Infrastructure</h3>
                      <p className="text-sm text-gray-200">Scalable cloud migration and deployment</p>
                    </div>
                  </div> */}
                  </div>
                  <div className="relative min-w-full">
                    <img
                      alt="Gallery Image 5"
                      src="/photos/gallery 5.png"
                      className="h-full object-center md:h-150"
                    />
                    {/* <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div className="p-8">
                      <h3 className="mb-2 text-2xl font-bold text-white">Marketing Campaign</h3>
                      <p className="text-sm text-gray-200">Multi-channel digital marketing success</p>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white dark:border-neutral-700 dark:bg-neutral-800/90 dark:hover:bg-neutral-800"
              >
                <svg
                  className="h-6 w-6 text-gray-800 dark:text-neutral-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_hcUVdg6n6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white dark:border-neutral-700 dark:bg-neutral-800/90 dark:hover:bg-neutral-800"
              >
                <svg
                  className="h-6 w-6 text-gray-800 dark:text-neutral-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_p8YL9Od4X"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
              <div className="mt-6 flex justify-center gap-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 w-3 rounded-full transition-all ${currentSlide === index ? "bg-stone-700 dark:bg-stone-400" : "bg-stone-300 dark:bg-stone-700"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section
          ref={contactRef}
          className="relative overflow-hidden bg-neutral-50 py-8 dark:bg-neutral-900/50"
          id="contact"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-neutral-100">
                Contact Us
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700/80 dark:text-neutral-300/80">
                Ready to experience a new standard of nail care in our boutique
                nail salon.
                <br /> Book your appointment today
              </p>
            </div>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-900/50">
                      <img src="/photos/logo.png" alt="Tammy's Nails Logo" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-neutral-100">
                        Tammy's Nails
                      </h3>
                      <p className="text-gray-600 dark:text-neutral-400">
                        <FiMapPin className="inline-block mr-2" />
                        <span>907 Churn Crk Rd, Redding, CA 96002</span>
                      </p>
                      <p className="text-gray-600 dark:text-neutral-400">
                        <FiPhone className="inline-block mr-2" /> (530) 226-9462
                      </p>
                      <p className="text-gray-600 dark:text-neutral-400">
                        <FiClock className="inline-block mr-2" /> Mon-Sat: 10AM
                        - 7PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-75 lg:min-h-100">
                <div className="h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6061.839582969197!2d-122.35803008412879!3d40.56544847503779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2eca38b3997c5%3A0x74ce7f1f02ba2189!2sTammy&#39;s%20Nails%20-%20Nail%20Salon%20Redding%20CA!5e0!3m2!1sen!2sus!4v1770612118403!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    title="map"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="border-t border-neutral-800 bg-neutral-900 py-8 text-gray-300 dark:border-neutral-900 dark:bg-neutral-950 dark:text-neutral-400">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 md:flex-row dark:text-neutral-600">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              ©2018 Tammy's Nails. All Rights Reserved.
            </p>
            {/* <div class="flex gap-6">
            <a href="/home" class="transition-colors hover:text-stone-400 dark:hover:text-stone-400">
              Privacy Policy
            </a>
            <a href="/home" class="transition-colors hover:text-stone-400 dark:hover:text-stone-400">
              Terms of Service
            </a>
            <a href="/home" class="transition-colors hover:text-stone-400 dark:hover:text-stone-400">
              Cookie Policy
            </a>
          </div> */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
