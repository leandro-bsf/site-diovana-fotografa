import { motion } from "framer-motion";
import portrait from "./assets/diovana.jpeg";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={portrait}
              alt="Diovana de Lima, fotógrafa"
              className="w-full h-full object-cover"
              loading="lazy"
              width={896}
              height={1152}
            />
          </div>
       
        </motion.div>

     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 1, delay: 0.2 }}
>
  <p className="text-xs uppercase tracking-[0.35em] text-accent mb-6">
    — Sobre Mim
  </p>

  <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
    Transformando momentos em <em className="italic">memórias inesquecíveis</em>.
  </h2>

  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
    Olá, sou{" "}
    <strong className="text-foreground font-medium">
      Diovana de Lima
    </strong>
    , fotógrafa apaixonada por registrar momentos especiais e transformá-los em
    lembranças que atravessam o tempo.
  </p>

  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
    Acredito que cada imagem conta uma história única. Com um olhar sensível e
    dedicado, busco capturar emoções, conexões e detalhes que tornam cada
    momento verdadeiramente especial.
  </p>

  <p className="text-lg leading-relaxed text-muted-foreground">
    Será um prazer fazer parte da sua história e criar recordações que poderão
    ser revividas por toda a vida.
  </p>

  <div className="mt-10 flex gap-10 pt-8 border-t border-border">
    <div>
      <div className="font-display text-3xl">+300</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
        Ensaios
      </div>
    </div>


    <div>
      <div className="font-display text-3xl">15★</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
        Avaliação
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}
