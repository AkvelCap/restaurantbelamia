import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Cocktails at Belamia" },
  { src: gallery2, alt: "Fresh Shopska salad" },
  { src: gallery3, alt: "Sunset terrace dining" },
  { src: gallery4, alt: "Artisan bread basket" },
  { src: gallery5, alt: "Traditional desserts" },
  { src: gallery6, alt: "Friends enjoying dinner" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-warm-gold text-sm font-sans tracking-[0.25em] uppercase mb-3">
            Explore
          </p>
          <h2 className="section-title text-foreground mb-6">belamia through photos</h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            See the rustic ambiance of our beautiful inner courtyard and dining areas. ✨
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img) => (
            <div key={img.alt} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-deep-charcoal/0 group-hover:bg-deep-charcoal/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
