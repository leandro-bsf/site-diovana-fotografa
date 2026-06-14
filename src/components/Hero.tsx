import { motion } from "framer-motion";
import hero from "./assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Casal em sessão de fotografia ao pôr do sol"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6"
        >
          Fotografia Autoral
        </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        // Substitua 'font-display' por 'font-signature'
        className="font-signature text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl"
      >
        Momentos que <em className="italic">permanecem</em> para sempre
      </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 border border-white/70 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-foreground transition-colors"
          >
            Ver Portfólio
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
