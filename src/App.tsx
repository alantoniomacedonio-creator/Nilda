import { useState } from 'react';
import { ARTWORKS, type ArtworkItem } from './data/nildaMarsiliData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ArtworkGallery } from './components/ArtworkGallery';
import { ArtworkLightbox } from './components/ArtworkLightbox';
import { BiographySection } from './components/BiographySection';
import { ExhibitionsArchive } from './components/ExhibitionsArchive';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);
  const [inquiryArtwork, setInquiryArtwork] = useState<ArtworkItem | null>(null);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireWork = (work: ArtworkItem) => {
    setSelectedArtwork(null);
    setInquiryArtwork(work);
    setTimeout(() => {
      scrollToContact();
    }, 80);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#171614] flex flex-col">
      <Navbar onContactClick={scrollToContact} />

      <main className="flex-1">
        <HeroSection
          featuredWork={ARTWORKS[0]}
          onInspectWork={(work) => setSelectedArtwork(work)}
        />

        <ArtworkGallery onSelectArtwork={(work) => setSelectedArtwork(work)} />

        <BiographySection />

        <ExhibitionsArchive />

        <ContactSection
          selectedArtworkForInquiry={inquiryArtwork}
          onClearSelectedArtwork={() => setInquiryArtwork(null)}
        />
      </main>

      <Footer />

      <ArtworkLightbox
        artwork={selectedArtwork}
        allArtworks={ARTWORKS}
        onClose={() => setSelectedArtwork(null)}
        onSelectArtwork={(work) => setSelectedArtwork(work)}
        onInquireWork={handleInquireWork}
      />
    </div>
  );
}

export default App;
