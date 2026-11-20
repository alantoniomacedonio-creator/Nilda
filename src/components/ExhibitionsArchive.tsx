import { useState } from 'react';
import {
  ACADEMIC_TRAJECTORY,
  AWARDS,
  EXHIBITIONS,
} from '../data/nildaMarsiliData';

type ArchiveTab = 'exposiciones' | 'premios' | 'academico';

export function ExhibitionsArchive() {
  const [activeTab, setActiveTab] = useState<ArchiveTab>('exposiciones');

  return (
    <section id="trayectoria" className="py-16 lg:py-24 border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E2DFD8]">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#5C5A55] mb-2">
              03. Cronología documentada · 1982–2025
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-medium text-[#171614]">
              Exposiciones, salones y distinciones
            </h2>
          </div>

          {/* Interactive segmented tab switcher */}
          <div
            role="tablist"
            aria-label="Secciones de trayectoria"
            className="inline-flex items-center gap-1 p-1 bg-[#EFECE6] border border-[#E2DFD8] self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'exposiciones'}
              onClick={() => setActiveTab('exposiciones')}
              className={`px-4 py-2 text-xs font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'exposiciones'
                  ? 'bg-white text-[#171614] border border-[#DCD8CE]'
                  : 'text-[#5C5A55] hover:text-[#171614] border border-transparent'
              }`}
            >
              Exposiciones ({EXHIBITIONS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'premios'}
              onClick={() => setActiveTab('premios')}
              className={`px-4 py-2 text-xs font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'premios'
                  ? 'bg-white text-[#171614] border border-[#DCD8CE]'
                  : 'text-[#5C5A55] hover:text-[#171614] border border-transparent'
              }`}
            >
              Premios ({AWARDS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'academico'}
              onClick={() => setActiveTab('academico')}
              className={`px-4 py-2 text-xs font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'academico'
                  ? 'bg-white text-[#171614] border border-[#DCD8CE]'
                  : 'text-[#5C5A55] hover:text-[#171614] border border-transparent'
              }`}
            >
              Ciencia y Docencia
            </button>
          </div>
        </div>

        {/* Tab 1: Exhibitions */}
        {activeTab === 'exposiciones' && (
          <div className="divide-y divide-[#E2DFD8]">
            {EXHIBITIONS.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline hover:bg-[#F3F1EC]/70 transition-colors duration-150 px-2 -mx-2"
              >
                <div className="md:col-span-2 font-mono text-sm tabular-nums text-[#1D4E89] font-medium">
                  {item.year}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-xl font-medium text-[#171614] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C5A55] mt-1">{item.discipline}</p>
                </div>
                <div className="md:col-span-3 text-sm text-[#3F3D38] leading-relaxed">
                  {item.venue}
                </div>
                <div className="md:col-span-2 md:text-right text-xs text-[#6E6B64]">
                  {item.type} · {item.city}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Awards */}
        {activeTab === 'premios' && (
          <div className="divide-y divide-[#E2DFD8]">
            {AWARDS.map((award) => (
              <div
                key={`${award.year}-${award.distinction}-${award.event}`}
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline hover:bg-[#F3F1EC]/70 transition-colors duration-150 px-2 -mx-2"
              >
                <div className="md:col-span-2 font-mono text-sm tabular-nums text-[#1D4E89] font-medium">
                  {award.year}
                </div>
                <div className="md:col-span-4 font-serif text-xl font-medium text-[#171614] leading-snug">
                  {award.distinction}
                </div>
                <div className="md:col-span-4 text-sm text-[#3F3D38]">
                  {award.event}
                </div>
                <div className="md:col-span-2 md:text-right text-xs text-[#6E6B64]">
                  {award.section} · {award.location}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Academic & Scientific Trajectory */}
        {activeTab === 'academico' && (
          <div className="divide-y divide-[#E2DFD8]">
            {ACADEMIC_TRAJECTORY.map((entry) => (
              <div
                key={`${entry.period}-${entry.role}`}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
              >
                <div className="md:col-span-2 font-mono text-sm tabular-nums text-[#1D4E89] font-medium">
                  {entry.period}
                </div>
                <div className="md:col-span-4 font-serif text-2xl font-medium text-[#171614] leading-snug">
                  {entry.role}
                </div>
                <div className="md:col-span-6 space-y-1">
                  <p className="text-sm font-medium text-[#2F2D29]">{entry.institution}</p>
                  <p className="text-sm text-[#5C5A55] leading-relaxed">{entry.detail}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
