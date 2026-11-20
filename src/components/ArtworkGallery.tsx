import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  ARTWORKS,
  DISCIPLINES,
  type ArtworkItem,
  type DisciplineCategory,
} from '../data/nildaMarsiliData';
import { ResilientImage } from './ResilientImage';

interface ArtworkGalleryProps {
  onSelectArtwork: (work: ArtworkItem) => void;
}

export function ArtworkGallery({ onSelectArtwork }: ArtworkGalleryProps) {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineCategory>('Todas');

  const filteredArtworks = useMemo(() => {
    if (activeDiscipline === 'Todas') return ARTWORKS;
    return ARTWORKS.filter((item) => item.discipline === activeDiscipline);
  }, [activeDiscipline]);

  return (
    <section id="obras" className="py-16 lg:py-24 border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E2DFD8]">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-[#5C5A55] mb-2">
              01. Catálogo razonado · Series documentadas (1997–2025)
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-medium text-[#171614]">
              Obras y series seleccionadas
            </h2>
          </div>

          <p className="font-mono text-xs tabular-nums text-[#5C5A55]">
            Mostrando {filteredArtworks.length} de {ARTWORKS.length} series en archivo
          </p>
        </div>

        {/* Interactive discipline filter bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
          <div
            role="tablist"
            aria-label="Filtrar obras por disciplina"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0"
          >
            {DISCIPLINES.map((discipline) => {
              const isActive = activeDiscipline === discipline;
              return (
                <button
                  key={discipline}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveDiscipline(discipline)}
                  className={`px-4 py-2 text-xs font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer border ${
                    isActive
                      ? 'bg-[#1D4E89] text-white border-[#1D4E89]'
                      : 'bg-white text-[#4A4843] border-[#E2DFD8] hover:border-[#171614] hover:text-[#171614]'
                  }`}
                >
                  {discipline}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-[#6E6B64]">
            Seleccione una obra para abrir la ficha técnica y vista ampliada.
          </p>
        </div>

        {/* Editorial Gallery Grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {filteredArtworks.map((work, index) => {
            // Balanced editorial proportions on desktop when showing all works
            const colSpanClass =
              activeDiscipline === 'Todas'
                ? index === 0 || index === 5
                  ? 'lg:col-span-7'
                  : index === 1 || index === 4
                    ? 'lg:col-span-5'
                    : 'lg:col-span-6'
                : 'lg:col-span-6';

            const frameAspect =
              activeDiscipline === 'Todas' && index === 3
                ? 'aspect-[4/3]'
                : 'aspect-[4/3]';

            return (
              <article key={work.id} className={`${colSpanClass} flex flex-col`}>
                <button
                  type="button"
                  onClick={() => onSelectArtwork(work)}
                  className="group w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1D4E89]"
                >
                  {/* Gallery Frame */}
                  <div
                    className={`w-full ${frameAspect} bg-[#ECEAE4] border border-[#E2DFD8] overflow-hidden mb-4`}
                  >
                    <ResilientImage
                      src={work.image}
                      alt={work.imageAlt}
                      title={work.title}
                      className={`w-full h-full object-cover ${work.imagePositionClass || 'object-center'} transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]`}
                    />
                  </div>

                  {/* Clean unboxed curatorial metadata */}
                  <div className="flex items-center justify-between gap-4 text-xs text-[#5C5A55] mb-1.5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className="font-mono tabular-nums text-[#171614]">
                        {work.year}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{work.discipline}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate max-w-[220px] sm:max-w-none">
                        {work.venue}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#7C7870] shrink-0 hidden sm:inline">
                      {work.accessionNumber}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl font-medium text-[#171614] group-hover:text-[#1D4E89] transition-colors duration-200 leading-snug">
                      {work.title}
                    </h3>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#6E6B64] group-hover:text-[#1D4E89] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1.5"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-[#4A4843] max-w-[60ch]">
                    {work.shortNote}
                  </p>
                </button>
              </article>
            );
          })}
        </div>

        {/* Transparent curatorial archive provenance note */}
        <div className="mt-14 pt-6 border-t border-[#E2DFD8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6E6B64]">
          <p className="max-w-3xl leading-relaxed">
            Nota de archivo: los títulos, fechas, técnicas, curadurías e instituciones corresponden a
            la trayectoria pública documentada de Nilda Raquel Marsili en Santa Fe Capital. Las placas
            visuales constituyen reconstrucciones curatoriales ilustrativas de cada serie hasta
            incorporar fotografía directa de taller.
          </p>
          <span className="font-mono tabular-nums shrink-0 text-[#5C5A55]">
            Archivo Santa Fe · 1982–2025
          </span>
        </div>
      </div>
    </section>
  );
}
