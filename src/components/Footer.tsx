export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="font-display text-lg text-foreground">
          Diovana <span className="italic text-accent">Lima</span> Fotografia
        </div>
        <p className="text-xs tracking-wide">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
