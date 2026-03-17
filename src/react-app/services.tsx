import { FiCalendar } from "react-icons/fi";

interface ServiceItem {
  name: string;
  description: string;
  price?: string;
}

interface ServiceCategory {
  title: string;
  image: string;
  items: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: "Manicures",
    image: "/photos/nail 1.webp",
    items: [
      {
        name: "Classic Manicure",
        description:
          "Shape, buff, and polish with a relaxing hand massage and cuticle care.",
      },
      {
        name: "Gel Manicure",
        description:
          "Long-lasting gel polish cured under UV light for a chip-free, glossy finish.",
      },
      {
        name: "Acrylic Nails",
        description:
          "Full set or fill with durable acrylic for added length and strength.",
      },
      {
        name: "Nail Art",
        description:
          "Custom designs, decals, and hand-painted artwork to express your style.",
      },
      {
        name: "Dip Powder",
        description:
          "A stronger, longer-lasting alternative to gel using colored powder.",
      },
    ],
  },
  {
    title: "Pedicures",
    image: "/photos/pedicure.webp",
    items: [
      {
        name: "Classic Pedicure",
        description:
          "Foot soak, exfoliation, nail shaping, cuticle care, and polish.",
      },
      {
        name: "Spa Pedicure",
        description:
          "Elevated pedicure with extended massage, scrub, and a moisturizing mask.",
      },
      {
        name: "Gel Pedicure",
        description:
          "All the benefits of a classic pedicure with chip-resistant gel polish.",
      },
      {
        name: "Hot Stone Pedicure",
        description:
          "Warm stones are used to deeply relax muscles and improve circulation.",
      },
    ],
  },
  {
    title: "Waxing",
    image: "/photos/eyebrow.webp",
    items: [
      {
        name: "Eyebrow Wax",
        description:
          "Precise shaping and cleanup to define and frame your brows.",
      },
      {
        name: "Lip Wax",
        description: "Quick and effective removal of unwanted upper lip hair.",
      },
      {
        name: "Full Face Wax",
        description:
          "Comprehensive facial waxing including brows, lip, chin, and cheeks.",
      },
      {
        name: "Arm & Leg Wax",
        description:
          "Smooth, long-lasting hair removal for arms and legs.",
      },
    ],
  },
  {
    title: "Kids' Services",
    image: "/photos/kids nails.webp",
    items: [
      {
        name: "Kids' Manicure",
        description:
          "A fun, gentle manicure with kid-safe polish — perfect for little ones.",
      },
      {
        name: "Kids' Pedicure",
        description:
          "Soft foot soak, nail trim, and colorful polish for young guests.",
      },
      {
        name: "Mini Nail Art",
        description:
          "Simple and playful designs to make kids feel extra special.",
      },
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 font-serif text-4xl font-semibold text-gray-900 md:text-5xl dark:text-neutral-100">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-neutral-400">
            Discover our full range of nail care and beauty services — each
            crafted to give you the perfect experience.
          </p>
          <div className="mt-6">
            <a
              href="https://booking.gocheckin.net/v2/19988?social=website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-900 px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700"
            >
              <FiCalendar size={16} />
              Book an Appointment
            </a>
          </div>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category.title}>
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-20 w-20 rounded-2xl object-cover shadow-md"
                />
                <h2 className="font-serif text-3xl font-semibold text-amber-900 dark:text-amber-400">
                  {category.title}
                </h2>
              </div>

              {/* Service Items */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-1 font-serif text-lg font-semibold text-gray-900 dark:text-neutral-100">
                          {item.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
                          {item.description}
                        </p>
                      </div>
                      {item.price && (
                        <span className="shrink-0 text-sm font-semibold text-amber-800 dark:text-amber-400">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center dark:border-amber-900/40 dark:bg-amber-900/10">
          <p className="mb-2 font-serif text-xl font-semibold text-amber-900 dark:text-amber-400">
            Not sure what to book?
          </p>
          <p className="mb-6 text-gray-600 dark:text-neutral-400">
            Give us a call and we'll help you find the perfect service.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://booking.gocheckin.net/v2/19988?social=website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-900 px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700"
            >
              <FiCalendar size={16} />
              Book Online
            </a>
            <a
              href="tel:+15302269462"
              className="text-sm font-medium text-amber-900 underline hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
            >
              (530) 226-9462
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
