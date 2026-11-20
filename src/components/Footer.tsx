export function Footer() {
  return (
    <footer className="border-t border-[#E2DFD8] bg-[#F3F1EC] py-10">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-serif text-xl font-medium text-[#171614]">
            Nilda Raquel Marsili
          </p>
          <p className="text-xs text-[#5C5A55]">
            Artista plástica · Santa Fe de la Vera Cruz, Argentina
          </p>
        </div>

        <nav
          aria-label="Enlaces del pie de página"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#4A4843]"
        >
          <a href="#inicio" className="hover:text-[#171614] transition-colors">
            Inicio
          </a>
          <a href="#obras" className="hover:text-[#171614] transition-colors">
            Obras
          </a>
          <a href="#poetica" className="hover:text-[#171614] transition-colors">
            Poética
          </a>
          <a href="#trayectoria" className="hover:text-[#171614] transition-colors">
            Trayectoria
          </a>
          <a href="#contacto" className="hover:text-[#171614] transition-colors">
            Taller y contacto
          </a>
        </nav>

        <p className="font-mono text-[11px] tabular-nums text-[#6E6B64]">
          © {new Date().getFullYear()} Archivo Curatorial Nilda Marsili
        </p>
      </div>
    </footer>
  );
}
