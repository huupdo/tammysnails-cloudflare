import { useState, useEffect } from "react";
import { GrGoogle } from "react-icons/gr";

interface ReviewText {
  text: string;
  languageCode: string;
}

interface AuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

interface Review {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: ReviewText;
  authorAttribution: AuthorAttribution;
}

interface PlacesResponse {
  rating: number;
  userRatingCount: number;
  reviews: Review[];
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`h-4 w-4 ${star <= rating ? "text-yellow-400" : "text-neutral-300 dark:text-neutral-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const GoogleReviews = () => {
  const [data, setData] = useState<PlacesResponse | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json() as Promise<PlacesResponse>;
      })
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-amber-800" />
      </div>
    );
  }

  if (error || !data) return null;

  return (
    <section className="bg-neutral-50 py-20 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-serif text-4xl font-semibold text-gray-900 md:text-5xl dark:text-neutral-100">
            What Our Clients Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <GrGoogle size={20} className="text-stone-500 dark:text-neutral-400" />
            <StarRating rating={Math.round(data.rating)} />
            <span className="text-base font-semibold text-gray-800 dark:text-neutral-200">
              {data.rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-400 dark:text-neutral-500">
              ({data.userRatingCount.toLocaleString()} reviews on Google)
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews.slice(0, 6).map((review) => (
            <div
              key={review.name}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm ring-1 ring-neutral-200/50 dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50"
            >
              {/* Stars + date */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-neutral-400 dark:text-neutral-600">
                    {review.relativePublishTimeDescription}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-neutral-400 line-clamp-5">
                  {review.text.text}
                </p>
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                {review.authorAttribution.photoUri ? (
                  <img
                    src={review.authorAttribution.photoUri}
                    alt={review.authorAttribution.displayName}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                    {review.authorAttribution.displayName.charAt(0)}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                  {review.authorAttribution.displayName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://maps.app.goo.gl/z9JHS3Li9wNqWiZh6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-8 py-3 text-sm font-bold tracking-widest text-stone-700 uppercase transition hover:border-amber-800 hover:text-amber-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-amber-700 dark:hover:text-amber-400"
          >
            <GrGoogle size={14} />
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
