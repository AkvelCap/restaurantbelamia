import { useState } from "react";
import { X } from "lucide-react";

const MenuCTASection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="menu" className="section-padding bg-deep-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-warm-gold text-sm font-sans tracking-[0.25em] uppercase mb-3">
            Taste the tradition
          </p>
          <h2 className="section-title text-primary-foreground mb-6">look at our menu</h2>
          <p className="text-primary-foreground/70 font-sans leading-relaxed mb-10">
            Here you can see our delicious, rich, and authentic menu! ✨
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm uppercase tracking-widest px-10 py-4 rounded transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View Full Menu
          </button>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-charcoal/70 backdrop-blur-sm p-4">
          <div className="bg-background rounded-lg max-w-lg w-full p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <h3 className="font-serif text-2xl font-medium text-foreground mb-4">Our Menu</h3>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              Our full menu is available at the restaurant. Here's a preview of our signature categories:
            </p>
            <div className="space-y-3 text-foreground font-sans">
              {["🔥 Traditional Skara & BBQ", "🥩 Premium Steaks", "🍕 Wood-Fired Pizzas", "🥗 Fresh Salads", "🍰 Homemade Desserts", "🍷 Fine Wines & Cocktails"].map((item) => (
                <div key={item} className="py-2 border-b border-border last:border-0">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCTASection;
