// src/App.tsx

import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import "./App.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FiPhone, FiMapPin, FiClock, FiMail, FiCalendar } from "react-icons/fi";
import { GrInstagram, GrFacebookOption, GrGoogle } from "react-icons/gr";
import PolicyPage from "./policy";

// Reusable Service Card Component
interface ServiceCardProps {
  title: string;
  image: string;
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

// Shared Navbar — persistent across all routes
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const goHome = () => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      window.scroll({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto max-w-7xl px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 shrink-0 justify-start">
            <Link
              to="/"
              className="text-2xl font-bold text-stone-700 dark:text-stone-300"
            >
              <img
                src="/photos/logo.webp"
                alt="Tammy's Nails Logo"
                className="h-16 w-auto md:h-20"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              className="btn rounded-lg px-3 py-2 font-serif text-2xl font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-900 dark:text-stone-300 dark:hover:bg-amber-900/20 dark:hover:text-amber-400"
              onClick={goHome}
            >
              Home
            </button>
            <button
              className="btn rounded-lg px-3 py-2 font-serif text-2xl font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-900 dark:text-stone-300 dark:hover:bg-amber-900/20 dark:hover:text-amber-400"
              onClick={() => scrollTo("services")}
            >
              Services
            </button>
            <button
              className="btn rounded-lg px-3 py-2 font-serif text-2xl font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-900 dark:text-stone-300 dark:hover:bg-amber-900/20 dark:hover:text-amber-400"
              onClick={() => scrollTo("gallery")}
            >
              Gallery
            </button>
            <button
              className="btn rounded-lg px-3 py-2 font-serif text-2xl font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-900 dark:text-stone-300 dark:hover:bg-amber-900/20 dark:hover:text-amber-400"
              onClick={() => scrollTo("aboutus")}
            >
              About Us
            </button>
            <button
              className="btn rounded-lg px-3 py-2 font-serif text-2xl font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-900 dark:text-stone-300 dark:hover:bg-amber-900/20 dark:hover:text-amber-400"
              onClick={() => navigate("/policy")}
            >
              Policy
            </button>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">
            <a
              href="https://booking.gocheckin.net/v2/19988?social=website"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-amber-900 px-6 py-2 text-md font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700 md:block"
            >
              <FiCalendar className="inline-block mr-2" />
              Book
            </a>
            <a
              href="tel:+15302269462"
              className="hidden rounded-lg bg-amber-900 px-6 py-2 text-md font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700 md:block"
            >
              <FiPhone className="inline-block mr-2" />
              Call
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
              className="font-serif text-xl font-medium text-stone-700 transition-colors hover:text-amber-900 dark:text-stone-300 dark:hover:text-amber-400"
              onClick={goHome}
            >
              Home
            </button>
            <button
              className="font-serif text-xl font-medium text-stone-700 transition-colors hover:text-amber-900 dark:text-stone-300 dark:hover:text-amber-400"
              onClick={() => scrollTo("services")}
            >
              Services
            </button>
            <button
              className="font-serif text-xl font-medium text-stone-700 transition-colors hover:text-amber-900 dark:text-stone-300 dark:hover:text-amber-400"
              onClick={() => scrollTo("gallery")}
            >
              Gallery
            </button>
            <button
              className="font-serif text-xl font-medium text-stone-700 transition-colors hover:text-amber-900 dark:text-stone-300 dark:hover:text-amber-400"
              onClick={() => scrollTo("aboutus")}
            >
              About Us
            </button>
            <button
              className="font-serif text-xl font-medium text-stone-700 transition-colors hover:text-amber-900 dark:text-stone-300 dark:hover:text-amber-400"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/policy");
              }}
            >
              Policy
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// Shared Footer — persistent across all routes
function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 text-gray-300 dark:border-neutral-900 dark:bg-neutral-950 dark:text-neutral-400">
      {/* Footer main content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Column 1 — Business Info with semantic <address> for Local SEO */}
          <div>
            <img
              src="/photos/logo.webp"
              alt="Tammy's Nails Logo"
              className="mb-4 h-14 w-auto brightness-0 invert"
            />
            <address className="not-italic space-y-2 text-sm text-neutral-400 dark:text-neutral-500">
              <p
                itemProp="name"
                className="text-base font-semibold text-neutral-200 dark:text-neutral-300"
              >
                Tammy's Nails
              </p>
              <p>
                <FiMapPin className="mr-2 inline-block" />
                <a
                  href="https://maps.app.goo.gl/z9JHS3Li9wNqWiZh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  itemProp="address"
                >
                  2907 Churn Creek Rd <br />{" "}
                  <span className="ml-6">Redding, CA 96002</span>
                </a>
              </p>
              <p>
                <FiPhone className="mr-2 inline-block" />
                <a
                  href="tel:+15302269462"
                  className="hover:text-amber-400 transition-colors"
                  itemProp="telephone"
                >
                  (530) 226-9462
                </a>
              </p>
              <p>
                <FiMail className="mr-2 inline-block" />
                <a
                  href="mailto:tammysnailredding@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                  itemProp="email"
                >
                  tammysnailredding@gmail.com
                </a>
              </p>
              <p>
                <FiClock className="mr-2 inline-block" />
                Mon–Sat: 9:00 AM – 7:00 PM
                <br />
                <span className="ml-6">Sun: Closed</span>
              </p>
            </address>
          </div>

          {/* Column 2 — Map */}
          <div className="min-h-48 overflow-hidden rounded-2xl border border-neutral-700 dark:border-neutral-800">
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

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-200 dark:text-neutral-300">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm text-neutral-400 dark:text-neutral-500">
                <li>
                  <button
                    onClick={() => {
                      if (location.pathname === "/") {
                        window.scroll({ top: 0, behavior: "smooth" });
                      } else {
                        navigate("/");
                      }
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("services")}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("gallery")}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("aboutus")}
                    className="hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/policy")}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Policy
                  </button>
                </li>
                <li>
                  <a
                    href="https://booking.gocheckin.net/v2/19988?social=website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Book Appointment
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3 — Social & Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-200 dark:text-neutral-300">
              Follow Us
            </h4>
            <div className="mb-6 flex gap-4">
              <a
                href="https://www.instagram.com/tammy_nails_redding/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-pink-500 hover:text-pink-500 dark:border-neutral-700"
              >
                <GrInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/people/Tammys-Nails/61574804282433/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-neutral-700"
              >
                <GrFacebookOption size={18} />
              </a>
              <a
                href="https://maps.app.goo.gl/z9JHS3Li9wNqWiZh6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-blue-500 hover:text-blue-500 dark:border-neutral-700"
              >
                <GrGoogle size={18} />
              </a>
            </div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-200 dark:text-neutral-300">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400 dark:text-neutral-500">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-amber-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="border-t border-neutral-800 py-5 text-center text-xs text-neutral-600 dark:border-neutral-900 dark:text-neutral-700">
        © 2025 Tammy's Nails. All Rights Reserved | 2907 Churn Crk Rd, Redding,
        CA 96002
      </div>
    </footer>
  );
}

// Persistent Layout — Navbar and Footer never re-render on route change
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

// Main Page — content sections only, no nav/footer
function MainPage() {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  // Handle cross-route scroll requests (e.g. from Policy page navbar clicks)
  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      // Small delay to allow page to render before scrolling
      const timer = setTimeout(() => {
        document
          .getElementById(scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {/* hero section */}
      <section
        className="relative isolate flex min-h-screen items-start justify-start overflow-hidden pt-16"
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
            src="/photos/bg.webp"
            className="h-full w-full object-cover blur-xs"
          />
          <div className="absolute inset-0 bg-white/40 dark:bg-neutral-400/30"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-6 py-10 text-left">
          <div className="mb-4">
            <h1 className="px-4 py-2 font-pacifico text-3xl leading-tight text-stone-700 md:text-4xl dark:text-stone-100">
              Welcome to
            </h1>
            <h2 className="font-raleway text-5xl font-semibold tracking-widest text-amber-950 uppercase md:text-7xl dark:text-stone-100 [text-shadow:0_2px_12px_rgba(120,60,10,0.25)] dark:[text-shadow:0_2px_12px_rgba(0,0,0,0.25)]">
              Tammy's Nails
            </h2>
          </div>
          <p className="mb-8 font-raleway text-2xl text-stone-800 md:text-4xl dark:text-stone-100">
            Every visit is a moment just for you. We're here to pamper you with
            personalized care, non-toxic premium products, and a warm touch that
            leaves you feeling your absolute best.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://booking.gocheckin.net/v2/19988?social=website"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-amber-900 px-8 py-3 text-center text-sm font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700"
            >
              <FiCalendar className="inline-block mr-2" />
              Book
            </a>
            <a
              href="tel:+15302269462"
              className="rounded-lg bg-amber-900 px-8 py-3 text-center text-sm font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700"
            >
              <FiPhone className="inline-block mr-2" />
              Call
            </a>
          </div>
        </div>
      </section>

      {/* services grid */}
      <section
        className="relative overflow-hidden bg-neutral-50 py-20 dark:bg-neutral-900/50"
        id="services"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 md:text-5xl dark:text-neutral-100">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700/80 dark:text-neutral-300/80">
              Discover our comprehensive range of nail care services, each
              designed to provide you with the perfect treatment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <ServiceCard title="Manicures" image="/photos/nail 1.webp" />
            </div>
            <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <ServiceCard title="Pedicure" image="/photos/pedicure.webp" />
            </div>
            <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <ServiceCard title="Waxing" image="/photos/eyebrow.webp" />
            </div>
            <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <ServiceCard
                title="Kids' Services"
                image="/photos/kids nails.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* gallery */}
      <section
        className="relative overflow-hidden bg-white py-20 dark:bg-neutral-950"
        id="gallery"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 md:text-5xl dark:text-neutral-100">
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
                    4.4 <span className="text-yellow-500">★</span> (312 reviews)
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
                    src="/photos/gallery 1.webp"
                    className="h-100 w-full object-cover md:h-150"
                  />
                </div>
                <div className="relative min-w-full">
                  <img
                    alt="Gallery Image 2"
                    src="/photos/gallery 2.webp"
                    className="h-100 w-full object-cover md:h-150"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="relative min-w-full">
                  <img
                    alt="Gallery Image 3"
                    src="/photos/gallery 3.webp"
                    className="h-100 w-full object-cover md:h-150"
                    loading="lazy"
                  />
                </div>
                <div className="relative min-w-full">
                  <img
                    alt="Gallery Image 4"
                    src="/photos/gallery 4.webp"
                    className="hfull object-cover md:h-150"
                    loading="lazy"
                  />
                </div>
                <div className="relative min-w-full">
                  <img
                    alt="Gallery Image 5"
                    src="/photos/gallery 5.webp"
                    className="h-full object-center md:h-150"
                    loading="lazy"
                  />
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

      {/* about us */}
      <section
        className="relative overflow-hidden bg-neutral-50 py-8 dark:bg-neutral-900/50"
        id="aboutus"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-semibold text-gray-900 md:text-5xl dark:text-neutral-100">
              About Us
            </h2>
          </div>
          <div className="grid grid-cols-1 items-start gap-12">
            <div className="space-y-5 text-gray-700 dark:text-neutral-300">
              <p className="text-lg font-semibold text-amber-900 dark:text-amber-400">
                Welcome to Tammy's Nails — where great nails meet genuine care.
              </p>
              <p className="text-base leading-relaxed">
                Nestled in the heart of Redding, California at 2907 Churn Creek
                Rd, we've built a salon that feels less like an appointment and
                more like a little escape from your day. From the moment you
                walk in, you'll notice the difference — a clean, relaxing space
                where you're treated like a familiar face, not just a client.
              </p>
              <p className="text-base leading-relaxed">
                Our skilled nail technicians bring both talent and passion to
                every service, whether that's a classic manicure, a spa
                pedicure, gel or acrylic nails, or a custom nail art design
                you've been dreaming about. We take the time to listen to what
                you want and make sure you leave loving the results.
              </p>
              <div>
                <p className="mb-3 text-base font-semibold text-gray-800 dark:text-neutral-200">
                  Why our clients keep coming back:
                </p>
                <ul className="space-y-2 text-base">
                  {[
                    "Experienced, friendly technicians who truly care",
                    "Premium products and up-to-date techniques",
                    "A spotlessly clean and comfortable environment",
                    "Personalized services tailored to your style",
                    "A convenient Redding location with a welcoming atmosphere",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-700 dark:bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-base leading-relaxed">
                At Tammy's Nails, we believe that taking care of yourself should
                feel effortless and enjoyable. We're proud to serve the Redding
                community and honored every time a client chooses to spend their
                time with us.
              </p>
              <p className="text-base font-medium italic text-amber-900 dark:text-amber-400">
                Come see us — we'd love to take care of you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// App with nested routes — Layout wraps all pages
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/policy" element={<PolicyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
