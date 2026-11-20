import { useEffect, useState, type FormEvent } from 'react';
import { Check, MapPin } from 'lucide-react';
import { ARTWORKS, type ArtworkItem } from '../data/nildaMarsiliData';

interface ContactSectionProps {
  selectedArtworkForInquiry: ArtworkItem | null;
  onClearSelectedArtwork: () => void;
}

const INQUIRY_REASONS = [
  'Consulta curatorial o préstamo para exposición',
  'Adquisición de obra disponible',
  'Visita al taller en Santa Fe Capital',
  'Prensa, catálogo o charlas sobre arte y ciencia',
];

export function ContactSection({
  selectedArtworkForInquiry,
  onClearSelectedArtwork,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState(INQUIRY_REASONS[0]);
  const [workReference, setWorkReference] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedArtworkForInquiry) {
      setWorkReference(
        `${selectedArtworkForInquiry.title} (${selectedArtworkForInquiry.accessionNumber})`
      );
      setReason('Adquisición de obra disponible');
      setSubmitted(false);
    }
  }, [selectedArtworkForInquiry]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Por favor complete su nombre, correo electrónico y mensaje.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setReason(INQUIRY_REASONS[0]);
    setWorkReference('');
    setMessage('');
    setSubmitted(false);
    setErrorMessage('');
    onClearSelectedArtwork();
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-[#F9F8F6]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column: Studio & Institutional Context */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#5C5A55] mb-2">
                04. Taller y gestión cultural
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#171614] leading-tight mb-4">
                Consultas al taller en Santa Fe Capital
              </h2>
              <p className="text-sm lg:text-[15px] leading-[1.75] text-[#4A4843]">
                Para consultas sobre disponibilidad de obras, visitas concertadas al taller,
                préstamos institucionales, invitaciones a muestras o encuentros vinculados al
                cruce entre artes visuales y ciencia.
              </p>
            </div>

            <div className="border-t border-[#E2DFD8] pt-6 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1D4E89] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-[#171614]">Santa Fe de la Vera Cruz</p>
                  <p className="text-xs text-[#5C5A55] mt-0.5">
                    Provincia de Santa Fe, República Argentina · Visitas con cita previa
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DFD8]">
                <p className="text-xs font-semibold text-[#171614] mb-2">
                  Espacios de referencia en la ciudad
                </p>
                <ul className="space-y-1.5 text-xs text-[#4A4843]">
                  <li>Museo de Arte Contemporáneo — Universidad Nacional del Litoral (MAC UNL)</li>
                  <li>Museo Provincial de Bellas Artes «Rosa Galisteo de Rodríguez»</li>
                  <li>Museo Municipal de Artes Visuales «Sor Josefa Díaz y Clucellas»</li>
                  <li>Espacio Cultural Provincial La Josefa · Centro Cultural Provincial</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column: Inquiry form */}
          <div className="lg:col-span-7 bg-white border border-[#E2DFD8] p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="py-8 space-y-4" role="status" aria-live="polite">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[#165B33]">
                  <Check className="w-4 h-4" aria-hidden="true" />
                  <span>Consulta registrada correctamente</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-[#171614]">
                  Gracias por su mensaje, {name}.
                </h3>
                <p className="text-sm leading-relaxed text-[#4A4843] max-w-lg">
                  Su solicitud vinculada a <strong>{reason.toLowerCase()}</strong>
                  {workReference ? ` (${workReference})` : ''} quedó preparada para ser
                  respondida a <strong>{email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-medium bg-[#1D4E89] text-white hover:bg-[#163B68] transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#2F2D29] mb-2"
                    >
                      Nombre y apellido
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. María Laura Gómez"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F9F8F6] border border-[#D8D4CB] text-[#171614] placeholder:text-[#8E8A82] focus:border-[#1D4E89] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#2F2D29] mb-2"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@institucion.org"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F9F8F6] border border-[#D8D4CB] text-[#171614] placeholder:text-[#8E8A82] focus:border-[#1D4E89] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-reason"
                      className="block text-xs font-medium text-[#2F2D29] mb-2"
                    >
                      Motivo de consulta
                    </label>
                    <select
                      id="contact-reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F9F8F6] border border-[#D8D4CB] text-[#171614] focus:border-[#1D4E89] focus:bg-white transition-colors"
                    >
                      {INQUIRY_REASONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-work"
                      className="block text-xs font-medium text-[#2F2D29] mb-2"
                    >
                      Serie u obra de interés (opcional)
                    </label>
                    <select
                      id="contact-work"
                      value={workReference}
                      onChange={(e) => setWorkReference(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F9F8F6] border border-[#D8D4CB] text-[#171614] focus:border-[#1D4E89] focus:bg-white transition-colors"
                    >
                      <option value="">Consulta general</option>
                      {ARTWORKS.map((work) => {
                        const label = `${work.title} (${work.accessionNumber})`;
                        return (
                          <option key={work.id} value={label}>
                            {label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#2F2D29] mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Comparta los detalles de su consulta, fecha estimada o interés curatorial..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F9F8F6] border border-[#D8D4CB] text-[#171614] placeholder:text-[#8E8A82] focus:border-[#1D4E89] focus:bg-white transition-colors resize-y"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs font-medium text-[#9B2226]" role="alert">
                    Aviso: {errorMessage}
                  </p>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-medium bg-[#1D4E89] text-white hover:bg-[#163B68] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    Enviar consulta
                  </button>
                  <span className="text-xs text-[#6E6B64]">
                    Respuesta directa para gestiones de taller e instituciones.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
