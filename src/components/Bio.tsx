import profile from "/assets/diovana.jpeg";

export default function Bio() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(119, 87, 28, 0.7), rgba(197, 160, 89, 0.7)), url('/images/banner-casamento.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md text-center">
        <img
          src={profile}
          alt="Diovana Lima"
          className="w-32 h-32 rounded-full mx-auto border-4 border-[#7a4e1d] object-cover shadow-xl transition-all duration-300 hover:scale-105"
        />

<a
  className="font-[Great_Vibes] text-2xl md:text-5xl text-black tracking-wide"
>
  Diovana Lima
</a>
        <p className="text-[#FDFBF7]/90 mt-2 text-sm uppercase tracking-[0.2em]">
          Fotografia
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {[
            { label: "Sobre Mim", href: "https://www.diovanalimafotografia.com.br/#sobre" },
            { label: "Portfólio", href: "https://www.diovanalimafotografia.com.br/#portfolio" },
            { label: "Avaliações", href: "https://www.diovanalimafotografia.com.br/#avaliacoes" }
         
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-3 px-6 rounded-full border border-[#7a4e1d] text-[#FDFBF7] hover:bg-[#7a4e1d] hover:text-white transition-all duration-300"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/554691321472?text=Olá, Diovana! Vim através do seu site e gostaria de saber mais sobre seus ensaios fotográficos."
            target="_blank"
            className="py-3 px-6 rounded-full bg-[#7a4e1d] text-white font-semibold hover:bg-[#5c3714] transition-all duration-300 shadow-lg"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}