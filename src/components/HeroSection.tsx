import { ArrowDownRight, Maximize2 } from 'lucide-react';
import type { ArtworkItem } from '../data/nildaMarsiliData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  featuredWork: ArtworkItem;
  onInspectWork: (work: ArtworkItem) => void;
}

const CURATORIAL_HIGHLIGHTS = [
  {
    value: '1958',
    label: 'Santa Fe Capital',
    detail: 'Nacimiento y taller en el Litoral argentino',
  },
  {
    value: '40+ años',
    label: 'Trayectoria plástica',
    detail: 'Pintura, dibujo, grabado, cerámica y escultura',
  },
  {
    value: 'UNL · Mantovani',
    label: 'Arte y Ciencia',
    detail: 'Dra. en Ciencias Biológicas y docente de materiales',
  },
  {
    value: 'MAC · La Josefa',
    label: 'Muestras recientes',
    detail: 'Ciclos 2024–2025 en museos de Santa Fe',
  },
];

export function HeroSection({ featuredWork, onInspectWork }: HeroSectionProps) {
  return (
    <section id="inicio" className="border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 pt-10 pb-12 lg:pt-16 lg:pb-16">
        {/* Two-column balanced split hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left typographic column */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wide text-[#5C5A55] mb-6">
                <span>Santa Fe Capital, Argentina</span>
                <span aria-hidden="true">·</span>
                <span>Artes Visuales y Pensamiento Científico</span>
              </div>

              <h1 className="font-serif text-[clamp(2.75rem,4.8vw,4.5rem)] leading-[1.03] font-medium tracking-[-0.015em] text-[#171614] mb-5">
                Nilda Marsili
              </h1>

              <p className="font-serif italic text-2xl lg:text-[1.75rem] leading-snug text-[#1D4E89] mb-7">
                «Pinto el conocimiento»
              </p>

              <p className="text-[15px] lg:text-base leading-[1.7] text-[#3F3D38] max-w-[48ch] mb-9">
                Artista plástica santafesina y Doctora en Ciencias Biológicas por la
                Universidad Nacional del Litoral. Su producción traduce cuadrados
                mágicos, redes celulares, geometrías no euclidianas y mapas
                celestes en pinturas al óleo, grabados, cerámicas y ensambles de taller.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#obras"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-[#1D4E89] text-white hover:bg-[#163B68] transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                <span>Explorar catálogo</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#poetica"
                className="inline-flex items-center py-2 text-sm font-medium text-[#171614] border-b border-[#171614]/40 hover:border-[#1D4E89] hover:text-[#1D4E89] transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                Leer semblanza curatorial
              </a>
            </div>
          </div>

          {/* Right dominant focal artwork container */}
          <div className="lg:col-span-7 flex flex-col">
            <button
              type="button"
              onClick={() => onInspectWork(featuredWork)}
              className="group relative flex-1 w-full text-left border border-[#E2DFD8] bg-[#ECEAE4] overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1D4E89]"
              aria-label={`Ver ficha curatorial de ${featuredWork.title}`}
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] lg:min-h-[480px] w-full">
                <ResilientImage
                  src={featuredWork.image}
                  alt={featuredWork.imageAlt}
                  title={featuredWork.title}
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-[#171614]/82 text-white px-3.5 py-2 text-xs font-medium inline-flex items-center gap-2 opacity-95 group-hover:bg-[#1D4E89] transition-colors duration-200">
                <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="whitespace-nowrap">Ver ficha de obra</span>
              </div>
            </button>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pt-3 text-xs text-[#5C5A55]">
              <p className="font-serif italic text-sm text-[#2F2D29]">
                Fig. 1 — {featuredWork.title} ({featuredWork.year})
              </p>
              <span className="font-mono tabular-nums text-[11px] text-[#6E6B64]">
                {featuredWork.venue} · {featuredWork.accessionNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Full-width 4-column curatorial strip below the split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#E2DFD8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CURATORIAL_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="font-mono text-sm font-medium tabular-nums text-[#171614]">
                {item.value}
              </p>
              <p className="text-sm font-medium text-[#2F2D29]">{item.label}</p>
              <p className="text-xs leading-relaxed text-[#5C5A55]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
