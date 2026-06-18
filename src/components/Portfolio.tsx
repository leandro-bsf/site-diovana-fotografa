import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { categories } from "../lib/portfolio";
import { Lightbox } from "./Lightbox";

export function Portfolio() {
  const [active, setActive] = useState(categories[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const current = categories.find((c) => c.id === active)!;

  const next = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % current.photos.length));
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? 0 : (i - 1 + current.photos.length) % current.photos.length
    );

  return (
    <section id="portfolio" className="py-24 md:py-40 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-accent mb-4">— Portfólio</p>
          <h2 className="text-4xl md:text-6xl">
            Histórias em <em className="italic">imagens.</em>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 md:px-7 py-2.5 text-xs md:text-sm uppercase tracking-[0.2em] border transition-all duration-300 ${
                active === c.id
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {current.photos.map((src, i) => (
              <motion.button
                key={src + i}
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`group relative overflow-hidden bg-muted ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={src}
                  alt={`${current.label} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Lightbox
        photos={current.photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
