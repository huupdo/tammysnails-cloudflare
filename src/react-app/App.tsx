// src/App.tsx

import { useRef, useState } from "react";
import "./App.css";
// import PhoneIcon from "./components/PhoneIcon";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";

// Reusable Service Card Component
// interface ServiceCardProps {
//   title: string;
//   image: string;
//   link: string;
// }

// const ServiceCard = ({ title, image, link }: ServiceCardProps) => (
//   <div className="group cursor-pointer overflow-hidden rounded-2xl bg-white">
//     <div className="aspect-4/5 overflow-hidden">
//       <img
//         src={image}
//         alt={title}
//         className="h-full w-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
//       />
//     </div>
//     <div className="py-4 text-center">
//       <h3 className="font-serif text-xl tracking-widest uppercase">{title}</h3>
//     </div>
//   </div>
// );

function App() {
  //   const contactRef = useRef(null);
  //   const galleryRef = useRef(null);
  //   const servicesRef = useRef(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const [currentSlide, setCurrentSlide] = useState(0);

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
        ></section>

        {/* services grid */}
        <section
          ref={servicesRef}
          className="relative overflow-hidden bg-neutral-50 py-20 dark:bg-neutral-900/50"
          id="services"
        ></section>

        {/* gallery */}
        <section
          ref={galleryRef}
          className="relative overflow-hidden bg-white py-20 dark:bg-neutral-950"
          id="gallery"
        ></section>

        {/* contact */}
        <section
          ref={contactRef}
          className="relative overflow-hidden bg-neutral-50 py-8 dark:bg-neutral-900/50"
          id="contact"
        ></section>
      </div>
    </>
  );
}

export default App;
