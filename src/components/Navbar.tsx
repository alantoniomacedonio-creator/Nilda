import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { label: 'Obras', href: '#obras' },
  { label: 'Poética', href: '#poetica' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Taller', href: '#contacto' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileLink = () => {
    setMobileOpen(false);
  };

  const handleMobileContact = () => {
    setMobileOpen(false);
    onContactClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F9F8F6]/95 backdrop-blur-sm border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#inicio"
          className="font-serif text-2xl font-medium tracking-tight text-[#171614] whitespace-nowrap shrink-0 hover:text-[#1D4E89] transition-colors duration-200"
        >
          Nilda Marsili
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4843]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#171614] hover:text-[#171614] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (plus mobile menu button on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onContactClick}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-wide bg-[#1D4E89] text-white hover:bg-[#163B68] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Consultar
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#171614] hover:bg-[#ECEAE4] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E2DFD8] bg-[#F9F8F6] px-6 py-5">
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLink}
                className="py-3 text-base font-medium text-[#171614] border-b border-[#E2DFD8]/70 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-2">
            <button
              type="button"
              onClick={handleMobileContact}
              className="w-full py-3 px-5 text-sm font-medium bg-[#1D4E89] text-white hover:bg-[#163B68] transition-colors cursor-pointer"
            >
              Consultar al taller
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
