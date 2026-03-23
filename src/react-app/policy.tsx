import {
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
  FiShield,
  FiStar,
  FiUsers,
  FiCreditCard,
  FiPhoneOff,
  FiLock,
} from "react-icons/fi";

const PolicyPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 font-serif text-4xl font-semibold text-gray-900 md:text-5xl dark:text-neutral-100">
            Salon Policies & Guest Guidelines
          </h1>
        </div>

        <div className="space-y-10 text-base leading-relaxed text-gray-700 dark:text-neutral-300">
          {/* Booking */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiCheckCircle
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                How to Book
              </h2>
            </div>
            <ul className="space-y-3">
              {[
                "Book online anytime at our booking page — it only takes a minute.",
                "You can also call us at (530) 226-9462 during business hours to schedule over the phone.",
                "Walk-ins are welcome based on availability, but appointments are recommended to guarantee your spot.",
                "Please arrive 5–10 minutes before your scheduled appointment time.",
                "A valid phone number or email is required to confirm your booking.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
            {/* Book an Appointment hidden — booking app is down
            <div className="mt-6">
              <a
                href="https://booking.gocheckin.net/v2/19988?social=website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-900 px-6 py-3 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700"
              >
                <FiCalendar size={16} />
                Book an Appointment
              </a>
            </div>
            */}
          </section>

          {/* Cancellation */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiXCircle
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                Cancellation Policy
              </h2>
            </div>
            <ul className="space-y-3">
              {[
                "We kindly ask for at least 24 hours' notice if you need to cancel or reschedule your appointment.",
                "To cancel or reschedule, please call us at (530) 226-9462 or use the booking system.",
                "Same-day cancellations and no-shows prevent us from accommodating other clients — we appreciate your understanding.",
                "Clients who no-show multiple times may be asked to prepay for future appointments.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Late Arrivals */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiAlertCircle
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                Late Arrivals
              </h2>
            </div>
            <ul className="space-y-3">
              {[
                "If you arrive more than 15 minutes late, we may need to shorten your service or reschedule to avoid impacting other clients.",
                "Please call ahead if you're running late so we can do our best to accommodate you.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Health, Safety & Hygiene */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiShield
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                Health, Safety & Hygiene
              </h2>
            </div>
            <p className="mb-4">
              Your health and comfort — along with the well-being of our staff —
              are at the heart of everything we do.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "All tools and equipment are thoroughly cleaned, disinfected, and sterilized after every use.",
                "Single-use items such as files, buffers, and toe separators are used whenever possible.",
                "We follow strict sanitation protocols in compliance with all health and safety regulations.",
                "Our salon is properly ventilated and stocked with safe, professional-grade products.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
              Please let us know before your service if you have:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Any allergies to products, latex, acrylic, or gel.",
                "Open cuts, sores, or skin conditions on your hands or feet.",
                "Any medical conditions such as diabetes or poor circulation.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              This helps us customize your service safely and comfortably. In
              some cases, we may need to modify or postpone a service if a
              condition poses a potential health risk — always with your best
              interest in mind.
            </p>
          </section>

          {/* Service Guarantee */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiStar
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                Our Service Guarantee
              </h2>
            </div>
            <p className="mb-6">
              We take great pride in our work and want you to love your results.
              If you experience any lifting, chipping, or service-related
              concerns within <strong>7 days</strong> of your appointment,
              please reach out to us right away — photos are always helpful.
            </p>
            <p className="mb-4">
              We're happy to offer complimentary touch-ups within 7 days for
              minor issues caused by our service.
            </p>
            <p className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
              Please note that touch-ups do not apply to:
            </p>
            <ul className="space-y-3">
              {[
                "Normal wear and tear or damage from daily activities.",
                "Nails affected by gym use, swimming, or household chores.",
                "Services altered by another salon or at home.",
                "Allergic reactions that were not disclosed prior to the service.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Children & Guests */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiUsers
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                Children &amp; Guests
              </h2>
            </div>
            <p>
              To maintain a peaceful and hygienic environment for all guests, we
              ask that only clients receiving services remain in the service
              area. Children under 12 are welcome with adult supervision, though
              they are not permitted in the pedicure area for hygiene and safety
              reasons. We appreciate your understanding.
            </p>
          </section>
          {/* Payment */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiCreditCard
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                Payment
              </h2>
            </div>
            <p>
              We gladly accept cash, all major credit cards (Visa, MasterCard,
              and more), and mobile payments for your convenience.
            </p>
          </section>
          {/* Salon Etiquette */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiPhoneOff
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                Salon Etiquette
              </h2>
            </div>
            <p>
              We've created Tammy's Nails as a calm and welcoming escape for
              every guest. To help preserve that atmosphere, we kindly ask that
              phones be kept on silent or low volume during your visit. We
              reserve the right to decline service in situations involving
              safety concerns or disrespectful behavior.
            </p>
          </section>
          {/* Your Privacy*/}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-3">
              <FiLock
                size={24}
                className="shrink-0 text-amber-700 dark:text-amber-400"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                Your Privacy
              </h2>
            </div>
            <p>
              We respect and value your privacy. Occasionally, we love to share
              our work on social media or our portfolio — but only with your
              permission. If you'd prefer not to be photographed, simply let us
              know at the start of your appointment and we will honor your
              wishes completely.
            </p>
          </section>
          {/* Thank you */}
          <div className="text-center italic text-gray-900 dark:text-neutral-100">
            <p>
              Thank you for choosing Tammy's Nails. We are truly grateful for
              your trust and look forward to taking great care of you. These
              guidelines exist so that every guest — including you — always has
              an exceptional experience.
            </p>
          </div>
          {/* Contact */}
          <div className="text-center text-sm text-neutral-500 dark:text-neutral-500">
            Questions? Contact us at{" "}
            <a
              href="tel:+15302269462"
              className="text-amber-800 underline hover:text-amber-600 dark:text-amber-400"
            >
              (530) 226-9462
            </a>{" "}
            or{" "}
            <a
              href="mailto:tammysnailredding@gmail.com"
              className="text-amber-800 underline hover:text-amber-600 dark:text-amber-400"
            >
              tammysnailredding@gmail.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolicyPage;
