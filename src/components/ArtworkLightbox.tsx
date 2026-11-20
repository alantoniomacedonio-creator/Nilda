import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import type { ArtworkItem } from '../data/nildaMarsiliData';
import { ResilientImage } from './ResilientImage';

interface ArtworkLightboxProps {
  artwork: ArtworkItem | null;
  allArtworks: ArtworkItem[];
  onClose: () => void;
  onSelectArtwork: (work: ArtworkItem) => void;
  onInquireWork: (work: ArtworkItem) => void;
}

export function ArtworkLightbox({
  artwork,
  allArtworks,
  onClose,
  onSelectArtwork,
  onInquireWork,
}: ArtworkLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const currentIndex = artwork
    ? allArtworks.findIndex((item) => item.id === artwork.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + allArtworks.length) % allArtworks.length;
    setIsZoomed(false);
    onSelectArtwork(allArtworks[prevIndex]);
  };

  const handleNext = () => {
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % allArtworks.length;
    setIsZoomed(false);
    onSelectArtwork(allArtworks[nextIndex]);
  };

  useEffect(() => {
    if (!artwork) return;
    setIsZoomed(false);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artwork?.id]);

  if (!artwork) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-artwork-title"
      className="fixed inset-0 z-50 bg-[#141311]/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1260px] max-h-[92vh] bg-[#F9F8F6] border border-[#D8D4CB] overflow-y-auto lg:overflow-hidden flex flex-col lg:grid lg:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls inside modal */}
        <div className="lg:hidden flex items-center justify-between px-5 py-3.5 border-b border-[#E2DFD8] bg-white">
          <span className="font-mono text-xs tabular-nums text-[#5C5A55]">
            {artwork.accessionNumber} · {currentIndex + 1}/{allArtworks.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ficha de obra"
            className="w-10 h-10 inline-flex items-center justify-center text-[#171614] hover:bg-[#ECEAE4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Left: Museum image viewer */}
        <div className="lg:col-span-7 bg-[#EFECE6] relative flex flex-col justify-between min-h-[300px] sm:min-h-[420px] lg:min-h-[640px] lg:max-h-[92vh] border-b lg:border-b-0 lg:border-r border-[#E2DFD8]">
          <div className="flex-1 overflow-auto flex items-center justify-center p-5 sm:p-8">
            <button
              type="button"
              onClick={() => setIsZoomed((prev) => !prev)}
              aria-label={isZoomed ? 'Reducir vista de obra' : 'Ampliar vista de obra'}
              className={`relative block overflow-hidden bg-white border border-[#DEDAD0] transition-all duration-300 cursor-zoom-in ${
                isZoomed ? 'cursor-zoom-out w-full max-w-none' : 'max-w-full max-h-[62vh]'
              }`}
            >
              <ResilientImage
                src={artwork.image}
                alt={artwork.imageAlt}
                title={artwork.title}
                containerClassName="relative overflow-hidden bg-[#ECEAE4]"
                className={`w-full h-auto object-contain transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isZoomed ? 'scale-150 origin-center' : 'max-h-[62vh]'
                }`}
              />
            </button>
          </div>

          {/* Bottom viewer toolbar */}
          <div className="px-5 py-3.5 bg-[#F4F2ED] border-t border-[#E2DFD8] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Obra anterior"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#171614] bg-white border border-[#DEDAD0] hover:border-[#171614] transition-colors whitespace-nowrap cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Obra siguiente"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#171614] bg-white border border-[#DEDAD0] hover:border-[#171614] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsZoomed((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#171614] bg-white border border-[#DEDAD0] hover:border-[#171614] transition-colors whitespace-nowrap cursor-pointer"
            >
              {isZoomed ? (
                <>
                  <ZoomOut className="w-3.5 h-3.5" />
                  <span>Vista normal</span>
                </>
              ) : (
                <>
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Ampliar detalle</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Museum Accession Metadata Sheet */}
        <div className="lg:col-span-5 flex flex-col justify-between lg:max-h-[92vh] lg:overflow-y-auto bg-[#F9F8F6] p-6 sm:p-8">
          <div>
            <div className="hidden lg:flex items-center justify-between gap-4 pb-5 mb-5 border-b border-[#E2DFD8]">
              <span className="font-mono text-xs tabular-nums text-[#5C5A55]">
                FICHA {artwork.accessionNumber} · {currentIndex + 1} / {allArtworks.length}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar ficha de obra"
                className="w-9 h-9 inline-flex items-center justify-center text-[#171614] hover:bg-[#ECEAE4] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs font-medium text-[#5C5A55] mb-2">
              {artwork.discipline} · {artwork.city}
            </p>

            <h2
              id="lightbox-artwork-title"
              className="font-serif text-3xl font-medium leading-tight text-[#171614] mb-5"
            >
              {artwork.title}
            </h2>

            <p className="text-sm leading-[1.75] text-[#3F3D38] mb-6">
              {artwork.curatorialText}
            </p>

            {/* Structured Museum Accession Definition List */}
            <dl className="border-t border-[#E2DFD8] divide-y divide-[#E2DFD8] text-xs">
              <div className="py-3 grid grid-cols-12 gap-3">
                <dt className="col-span-4 font-medium text-[#6E6B64]">N.° de archivo</dt>
                <dd className="col-span-8 font-mono tabular-nums text-[#171614]">
                  {artwork.accessionNumber}
                </dd>
              </div>
              <div className="py-3 grid grid-cols-12 gap-3">
                <dt className="col-span-4 font-medium text-[#6E6B64]">Año</dt>
                <dd className="col-span-8 font-mono tabular-nums text-[#171614]">
                  {artwork.year}
                </dd>
              </div>
              <div className="py-3 grid grid-cols-12 gap-3">
                <dt className="col-span-4 font-medium text-[#6E6B64]">Técnica</dt>
                <dd className="col-span-8 text-[#171614] leading-relaxed">
                  {artwork.medium}
                </dd>
              </div>
              <div className="py-3 grid grid-cols-12 gap-3">
                <dt className="col-span-4 font-medium text-[#6E6B64]">Dimensiones</dt>
                <dd className="col-span-8 font-mono tabular-nums text-[#171614]">
                  {artwork.dimensions}
                </dd>
              </div>
              <div className="py-3 grid grid-cols-12 gap-3">
                <dt className="col-span-4 font-medium text-[#6E6B64]">Exhibición</dt>
                <dd className="col-span-8 text-[#171614] leading-relaxed">
                  {artwork.venue}
                  {artwork.curatorship ? ` · ${artwork.curatorship}` : ''}
                </dd>
              </div>
              <div className="py-3 grid grid-cols-12 gap-3">
                <dt className="col-span-4 font-medium text-[#6E6B64]">Diálogo científico</dt>
                <dd className="col-span-8 text-[#3F3D38] leading-relaxed">
                  {artwork.scientificDialogue}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-7 pt-5 border-t border-[#E2DFD8] flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onInquireWork(artwork)}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium bg-[#1D4E89] text-white hover:bg-[#163B68] transition-colors whitespace-nowrap cursor-pointer"
            >
              Consultar sobre esta serie
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#4A4843] hover:text-[#171614] transition-colors whitespace-nowrap cursor-pointer"
            >
              Volver al catálogo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
