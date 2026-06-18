import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<a 
  href="#top" 
 className="font-[Great_Vibes] text-2xl md:text-2xl text-signature-color drop-shadow-md tracking-wide"
>
  Diovana Lima 
</a>
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-foreground transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border mt-3">
          <ul className="flex flex-col p-6 gap-4 text-sm uppercase tracking-[0.18em]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
