import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Leticia De Lima",
    text: "Fiz algumas fotos com a Diovana e ficaram simplesmente PERFEITAS, melhor experiência com fotografia que já tive na minha vida. ❤️❤️❤️",
    rating: 5,
  },
  {
    name: "Marilaine Laine",
    text: "Uma ótima profissional! Muito querida e paciente, pois fiz fotos com meus filhos e ela foi um amor com eles ❤️‍🔥📸🙏",
    rating: 5,
  },
  {
    name: "Alexandragondacki Alle",
    text: "Fotógrafa sensacional, trabalho incrível ❤️🥰 apaixonada estou nos resultados das fotos da minha pequena.",
    rating: 5,
  },
  {
    name: "Maicon Mattos",
    text: "Profissional maravilhosa",
    rating: 5,
  },
];

function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

function colorFor(name: string) {
  const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Depoimentos</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">O que dizem nossos clientes</h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 md:p-7 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
                  style={{ backgroundColor: colorFor(r.name) }}
                >
                  {initials(r.name)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm truncate">{r.name}</h4>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
