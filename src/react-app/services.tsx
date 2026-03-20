import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FiCalendar, FiPhone, FiChevronDown } from "react-icons/fi";

interface ServiceItem {
  name: string;
  description: string;
  basePrice?: string;
  gelPrice?: string;
  popular?: boolean;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  items: ServiceItem[];
}

interface NailEnhancement {
  name: string;
  description: string;
  price1?: string;
  price2?: string;
  price3?: string;
}
interface WaxingService {
  name: string;
  description: string;
  price1?: string;
  price2?: string;
}

interface AddOn {
  name: string;
  description: string;
  price1?: string;
  price2?: string;
  price3?: string;
}

const categories: ServiceCategory[] = [
  {
    id: "manicures",
    title: "Manicures",
    subtitle: "French style extra cost of $5",
    image: "/photos/nail 1.webp",
    items: [
      {
        name: "Relaxing Manicure",
        description:
          "Cleaning soak and shaping of nails, removal cuticle, buffing, hand massage and finish with polish.",
        basePrice: "$25",
        gelPrice: "$35",
        popular: true,
      },
      {
        name: "Deluxe Manicure",
        description:
          "Cleaning soak and shaping of nails, removal cuticle, buffing, scrubbing with Sugar Scrub, Paraffin Wax treatment and massage.",
        basePrice: "$35",
        gelPrice: "$45",
      },
    ],
  },
  {
    id: "pedicures",
    title: "Pedicures",
    subtitle:
      "Upon request, Callous removal treatment is offered for an extra cost of $10",
    image: "/photos/pedicure.webp",
    items: [
      {
        name: "Relaxing Pedicure",
        description:
          "Sea salt cleansing tub, special cuticle treatment, trimmed, filed, buffed, leg and foot massage, warm towels.",
        basePrice: "$35",
        gelPrice: "$45",
      },
      {
        name: "European Pedicure",
        description:
          "Sea Salt Gel Scrub, plus Paraffin treatment to soften and smooth your skin.",
        basePrice: "$45",
        gelPrice: "$55",
        popular: true,
      },
      {
        name: "Deluxe Pedicure",
        description:
          "Sugar Scrub, Mineral Marine Masque, Paraffin Wax, and Cooling Gel massage.",
        basePrice: "$55",
        gelPrice: "$65",
      },
      {
        name: "Deluxe Hot Stone Pedicure",
        description:
          "Deluxe Pedicure plus 10-minute massage with heated rocks to reduce fatigue.",
        basePrice: "$65|$75",
        gelPrice: "",
      },
    ],
  },
  {
    id: "kids",
    title: "Kids' Services",
    subtitle: "Special care for our younger guests (Ages 10 & under).",
    image: "/photos/kids nails.webp",
    items: [
      {
        name: "Kids' Relaxing Manicure",
        description: "A gentle cleaning and polish for kids.",
        basePrice: "$20",
        gelPrice: "$30",
      },
      {
        name: "Kids' Relaxing Pedicure",
        description: "Gentle foot soak and polish for kids.",
        basePrice: "$30",
        gelPrice: "$40",
      },
    ],
  },
];

const waxingServices: WaxingService[] = [
  {
    name: "Eyebrows / Full Face",
    description: "",
    price1: "$12",
    price2: "$40",
  },
  {
    name: "Full / Half Arm",
    description: "",
    price1: "$35",
    price2: "$50",
  },
  {
    name: "Full / Half Legs",
    description: "",
    price1: "$40",
    price2: "$60",
  },
];

const nailEnhancements: NailEnhancement[] = [
  {
    name: "Gel-X / Builder Gel Full Set | Fill",
    description: "",
    price1: "",
    price2: "$55",
    price3: "$45",
  },
  {
    name: "Acrylic with Regular Polish Full Set | Fill",
    description: "",
    price1: "",
    price2: "$45",
    price3: "$35",
  },
  {
    name: "Acrylic with Gel Polish Full Set | Fill",
    description: "",
    price1: "",
    price2: "$50",
    price3: "$40",
  },
  {
    name: "Pink and White | Pink Fill | P&W Fill",
    description: "",
    price1: "$60",
    price2: "$40",
    price3: "$50",
  },
  {
    name: "Dipping powder | White tip",
    description: "",
    price1: "",
    price2: "$50",
    price3: "$60",
  },
];

const addOns: AddOn[] = [
  {
    name: "Hand Paraffin Treatment",
    description: "",
    price1: "",
    price2: "",
    price3: "$8",
  },
  {
    name: "Feet Paraffin Treatment",
    description: "",
    price1: "",
    price2: "",
    price3: "$10",
  },
  {
    name: "Take Off (With | Without Service)",
    description: "",
    price1: "$5",
    price2: "$10",
    price3: "$15",
  },
  {
    name: "Color Change - Regular (Hands | Feet)",
    description: "",
    price1: "",
    price2: "$10",
    price3: "$15",
  },
  {
    name: "Color Change - Gel (Hands | Feet)",
    description: "",
    price1: "",
    price2: "$25",
    price3: "$25",
  },
  {
    name: "Nail Art Designs",
    description: "",
    price1: "",
    price2: "",
    price3: "$5 & Up",
  },
];

// Build the default open set: first item of each category
const defaultOpen = new Set<string>(
  categories.map(({ id, items }) => `${id}-${items[0].name}`),
);

const ServicesPage = () => {
  const location = useLocation();
  const [activeId, setActiveId] = useState(categories[0].id);
  const [openItems, setOpenItems] = useState<Set<string>>(defaultOpen);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll to hash section on mount or when hash changes
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (!hash) return;
    const timer = setTimeout(() => {
      (
        sectionRefs.current[hash] ?? document.getElementById(hash)
      )?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveId(hash);
    }, 100);
    return () => clearTimeout(timer);
  }, [location.hash]);

  const allSectionIds = [
    ...categories.map(({ id }) => id),
    "waxingServices",
    "nailEnhancements",
    "addons",
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    allSectionIds.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    (sectionRefs.current[id] ?? document.getElementById(id))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {/* Page Header */}
      <div className="border-b border-neutral-100 bg-neutral-50 px-6 py-8 text-center dark:border-neutral-800 dark:bg-neutral-900/40">
        <p className="mb-2 font-serif text-sm tracking-[0.3em] text-amber-700 uppercase dark:text-amber-500">
          Tammy's Nails · Redding, CA
        </p>
        <h1 className="mb-3 font-serif text-4xl font-semibold text-gray-900 md:text-5xl dark:text-neutral-100">
          Our Services
        </h1>
        <p className="mx-auto max-w-4xl text-base text-gray-500 dark:text-neutral-400">
          Every service is performed with care, precision, and premium products
          — because you deserve nothing less.
        </p>
      </div>

      {/* Body: Sticky Nav + Content */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex gap-12 lg:gap-16">
          {/* Sticky Category Nav — hidden on mobile */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 w-44 space-y-1">
              <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-neutral-400 uppercase dark:text-neutral-600">
                Menu
              </p>
              {categories.map(({ id, title }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`group flex w-full flex-col items-start rounded-lg px-3 py-2.5 text-left transition-all ${
                    activeId === id
                      ? "bg-amber-50 dark:bg-amber-900/15"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold tracking-wide transition-colors ${
                      activeId === id
                        ? "text-amber-900 dark:text-amber-400"
                        : "text-gray-500 group-hover:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                    }`}
                  >
                    {title}
                  </span>
                </button>
              ))}
              {[
                { id: "waxingServices", label: "Waxing" },
                { id: "nailEnhancements", label: "Nail Enhancements" },
                { id: "addons", label: "Additional Services" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`group flex w-full flex-col items-start rounded-lg px-3 py-2.5 text-left transition-all ${
                    activeId === id
                      ? "bg-amber-50 dark:bg-amber-900/15"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold tracking-wide transition-colors ${
                      activeId === id
                        ? "text-amber-900 dark:text-amber-400"
                        : "text-gray-500 group-hover:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}

              <div className="border-t border-neutral-100 pt-6 dark:border-neutral-800">
                <a
                  href="https://booking.gocheckin.net/v2/19988?social=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-900 px-3 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700"
                >
                  <FiCalendar size={12} />
                  Book Now
                </a>
              </div>
            </nav>
          </aside>

          {/* Service Sections */}
          <div className="min-w-0 flex-1 space-y-16">
            {categories.map(({ id, title, subtitle, image, items }) => (
              <section
                key={id}
                id={id}
                ref={(el) => {
                  sectionRefs.current[id] = el;
                }}
              >
                {/* Section title */}
                <div className="mb-4 flex items-baseline gap-4 border-b border-neutral-100 pb-4 dark:border-neutral-800">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                    {title}
                  </h2>
                  <span className="text-xs tracking-widest text-neutral-400 uppercase dark:text-neutral-600">
                    {subtitle}
                  </span>
                </div>

                {/* Image (mobile only — above list) */}
                <div className="mb-4 h-44 overflow-hidden rounded-xl sm:hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* List + image side-by-side on desktop */}
                <div className="flex gap-6">
                  {/* List column */}
                  <div className="min-w-0 flex-1">
                    {/* Price column headers */}
                    <div className="mb-1 flex items-center justify-end gap-6 px-1 pb-1">
                      <span className="w-12 text-center text-[10px] font-semibold tracking-widest text-neutral-400 uppercase dark:text-neutral-600">
                        Base
                      </span>
                      <span className="w-12 text-center text-[10px] font-semibold tracking-widest text-amber-600/70 uppercase dark:text-amber-600/50">
                        + Gel
                      </span>
                    </div>

                    {/* Menu-style rows */}
                    <ul className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                      {items.map((item) => {
                        const key = `${id}-${item.name}`;
                        const isOpen = openItems.has(key);
                        return (
                          <li key={item.name}>
                            <button
                              onClick={() => toggleItem(key)}
                              className="group flex w-full items-start gap-4 py-5 text-left"
                            >
                              {/* Chevron */}
                              <FiChevronDown
                                size={15}
                                className={`mt-0.5 shrink-0 text-neutral-300 transition-transform duration-200 dark:text-neutral-600 ${isOpen ? "rotate-180" : ""}`}
                              />

                              {/* Name + badge */}
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3
                                    className={`text-base font-semibold transition-colors ${
                                      isOpen
                                        ? "text-amber-900 dark:text-amber-400"
                                        : "text-gray-900 group-hover:text-amber-900 dark:text-neutral-100 dark:group-hover:text-amber-400"
                                    }`}
                                  >
                                    {item.name}
                                  </h3>
                                  {item.popular && (
                                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-amber-800 uppercase dark:bg-amber-900/30 dark:text-amber-400">
                                      Most Popular
                                    </span>
                                  )}
                                </div>
                                {/* Expandable description */}
                                <div
                                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "mt-2 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                  <p className="text-base leading-relaxed text-gray-700 dark:text-neutral-300">
                                    {item.description}
                                  </p>
                                </div>
                              </div>

                              {/* Prices */}
                              <div className="flex shrink-0 items-start gap-6">
                                <span className="w-12 text-center text-base font-medium text-gray-700 dark:text-neutral-300">
                                  {item.basePrice ?? "—"}
                                </span>
                                <span className="w-12 text-center text-base font-medium text-amber-700 dark:text-amber-500">
                                  {item.gelPrice ?? "—"}
                                </span>
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Image column — desktop only */}
                  <div className="hidden shrink-0 sm:block">
                    <div className="sticky top-28 w-48 overflow-hidden rounded-xl xl:w-56">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                        style={{ minHeight: "220px" }}
                      />
                    </div>
                  </div>
                </div>
              </section>
            ))}
            {/* Waxing Section */}
            <section
              id="waxingServices"
              ref={(el) => {
                sectionRefs.current["waxingServices"] = el;
              }}
            >
              <div className="mb-2 flex items-baseline gap-4 border-b border-neutral-100 pb-4 dark:border-neutral-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                  Waxing
                </h2>
                <span className="text-xs tracking-widest text-neutral-400 uppercase dark:text-neutral-600"></span>
              </div>
              <ul className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                {waxingServices.map((waxingService) => (
                  <li
                    key={waxingService.name}
                    className="flex items-start justify-between gap-6 py-5"
                  >
                    <div className="flex-1">
                      <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-neutral-100">
                        {waxingService.name}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-700 dark:text-neutral-300">
                        {waxingService.description}
                      </p>
                    </div>
                    <span className="shrink-0 pt-0.5 text-base font-medium text-gray-700 dark:text-neutral-300">
                      {waxingService.price1 ?? "—"}
                    </span>
                    <span className="shrink-0 pt-0.5 text-base font-medium text-gray-700 dark:text-neutral-300">
                      {waxingService.price2 ?? "—"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Nail Enhancements Section */}
            <section
              id="nailEnhancements"
              ref={(el) => {
                sectionRefs.current["nailEnhancements"] = el;
              }}
            >
              <div className="mb-2 flex items-baseline gap-4 border-b border-neutral-100 pb-4 dark:border-neutral-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                  Nail Enhancements
                </h2>
                <span className="text-xs tracking-widest text-neutral-400 uppercase dark:text-neutral-600">
                  Professional nail extensions and dipping systems.
                </span>
              </div>
              <ul className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                {nailEnhancements.map((nailEnhancement) => (
                  <li
                    key={nailEnhancement.name}
                    className="flex items-start justify-between gap-6 py-5"
                  >
                    <div className="flex-1">
                      <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-neutral-100">
                        {nailEnhancement.name}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-700 dark:text-neutral-300">
                        {nailEnhancement.description}
                      </p>
                    </div>
                    <span className="shrink-0 pt-0.5 text-base font-medium text-gray-700 dark:text-neutral-300">
                      {nailEnhancement.price1 ?? "—"}
                    </span>
                    <span className="shrink-0 pt-0.5 text-base font-medium text-gray-700 dark:text-neutral-300">
                      {nailEnhancement.price2 ?? "—"}
                    </span>
                    <span className="shrink-0 pt-0.5 text-base font-medium text-gray-700 dark:text-neutral-300">
                      {nailEnhancement.price3 ?? "—"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Add-Ons Section */}
            <section
              id="addons"
              ref={(el) => {
                sectionRefs.current["addons"] = el;
              }}
            >
              <div className="mb-2 flex items-baseline gap-4 border-b border-neutral-100 pb-4 dark:border-neutral-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                  Additional Services
                </h2>
                <span className="text-xs tracking-widest text-neutral-400 uppercase dark:text-neutral-600">
                  Customize your experience with these add-ons.
                </span>
              </div>
              <ul className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                {addOns.map((addon) => (
                  <li
                    key={addon.name}
                    className="flex items-start justify-between gap-6 py-5"
                  >
                    <div className="flex-1">
                      <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-neutral-100">
                        {addon.name}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-700 dark:text-neutral-300">
                        {addon.description}
                      </p>
                    </div>
                    <span className="shrink-0 pt-0.5 text-base font-medium text-gray-700 dark:text-neutral-300">
                      {addon.price1 ?? "—"}
                    </span>
                    <span className="shrink-0 pt-0.5 text-base font-medium text-gray-700 dark:text-neutral-300">
                      {addon.price2 ?? "—"}
                    </span>
                    <span className="shrink-0 pt-0.5 text-base font-medium text-gray-700 dark:text-neutral-300">
                      {addon.price3 ?? "—"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Waxing Notice */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/40 dark:bg-amber-900/10">
              <div className="mb-4 flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <h3 className="text-base font-semibold text-amber-900 dark:text-amber-400">
                  Important Waxing Notice
                </h3>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-neutral-300">
                <div>
                  <p className="mb-1 font-semibold text-gray-800 dark:text-neutral-200">
                    Note Before Waxing:
                  </p>
                  <p>
                    Unfortunately, we cannot perform waxing services for
                    customers who are taking Accutane, Retina-A, or antibiotics
                    due to increased skin sensitivity caused by these
                    medications.
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-gray-800 dark:text-neutral-200">
                    Warning:
                  </p>
                  <p>
                    Medical complications may arise if waxing is performed
                    within 24 hours of treatment. Failure to follow this
                    guideline may cause skin burning and irritation.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-neutral-100 pt-12 text-center dark:border-neutral-800">
              <p className="mb-1 font-serif text-xl text-gray-800 dark:text-neutral-200">
                Not sure what to choose?
              </p>
              <p className="mb-7 text-sm text-gray-400 dark:text-neutral-500">
                We're happy to help you find the perfect service.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://booking.gocheckin.net/v2/19988?social=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-900 px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700"
                >
                  <FiCalendar size={14} />
                  Book Online
                </a>
                <a
                  href="tel:+15302269462"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 underline-offset-4 hover:text-amber-800 hover:underline dark:text-neutral-500 dark:hover:text-amber-400"
                >
                  <FiPhone size={14} />
                  (530) 226-9462
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
