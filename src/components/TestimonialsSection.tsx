import { Star } from "lucide-react";

const reviews = [
  {
    text: "A beautiful hidden courtyard in the old part of town. The traditional skara is perfectly cooked, and the atmosphere feels right at home. Highly recommended!",
    author: "Марија К.",
    rating: 5,
  },
  {
    text: "Best steaks in Tetovo, hands down. The staff is incredibly warm and welcoming. We keep coming back every weekend!",
    author: "Александар П.",
    rating: 5,
  },
  {
    text: "The pizza is outstanding and the courtyard ambiance is magical on summer evenings. A true gem worth discovering.",
    author: "Elena M.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-warm-gold text-warm-gold" />
            ))}
          </div>
          <p className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2">
            4.9
          </p>
          <p className="text-muted-foreground font-sans text-sm tracking-wide uppercase">
            on Google Reviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-background rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <p className="text-foreground/80 font-sans leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="font-serif text-sm font-medium text-foreground">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
