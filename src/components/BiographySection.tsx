import { STUDIO_IMAGE } from '../data/nildaMarsiliData';
import { ResilientImage } from './ResilientImage';

export function BiographySection() {
  return (
    <section id="poetica" className="py-16 lg:py-24 bg-[#F3F1EC] border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10">
        {/* Section title */}
        <div className="pb-8 border-b border-[#DCD8CE] mb-12">
          <p className="text-xs font-medium tracking-wide text-[#5C5A55] mb-2">
            02. Semblanza y metodología
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-medium text-[#171614] max-w-3xl">
            El puente entre el laboratorio científico y el taller plástico
          </h2>
        </div>

        {/* Asymmetric 70/30 Editorial Reading Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main editorial essay (left 7 columns) */}
          <div className="lg:col-span-7 space-y-6 text-[15px] lg:text-base leading-[1.82] text-[#2F2D29] max-w-[66ch]">
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.88] first-letter:text-[#171614]">
              Nacida en la ciudad de Santa Fe el 9 de septiembre de 1958, Nilda Raquel
              Marsili ocupa un lugar singular en el mapa del arte contemporáneo del
              Litoral argentino. Su trayectoria enlaza de modo indisoluble dos territorios
              que rara vez se habitan con igual rigor: la creación visual —desarrollada en
              gran medida de manera autodidacta en pintura, dibujo, grabado, cerámica y
              escultura— y la investigación científica académica.
            </p>

            <p>
              Graduada como Bioquímica en 1984 y Doctora en Ciencias Biológicas en 2006 por
              la Facultad de Bioquímica y Ciencias Biológicas de la Universidad Nacional del
              Litoral (UNL), Marsili ha ejercido la docencia e investigación en Química
              Analítica II, al tiempo que trasladó su dominio técnico sobre pigmentos y
              procesos a la cátedra de <em>Laboratorio de Materiales</em> en la Escuela
              Provincial de Artes Visuales «Prof. Juan Mantovani».
            </p>

            {/* Editorial Pull Quote — framed solely by delicate horizontal hairlines */}
            <blockquote className="my-10 py-8 border-y border-[#CFCAC0]">
              <p className="font-serif italic text-2xl lg:text-[1.85rem] leading-[1.35] text-[#171614]">
                «Pinto el conocimiento: mi obra nace de conceptos teóricos, estructuras
                matemáticas y leyes de la naturaleza que cobran materia, ritmo y color en el
                taller.»
              </p>
              <footer className="mt-4 text-xs font-medium text-[#5C5A55]">
                Premisa curatorial · Nilda Marsili, Santa Fe Capital
              </footer>
            </blockquote>

            <p>
              A diferencia de los enfoques centrados exclusivamente en la impresión
              retiniana, sus series dialogan con la historia de las matemáticas, los
              cuadrados mágicos de Durero y las matrices antiguas, los fractales, la
              geometría no euclidiana, las redes neuronales y las cartas cosmológicas. Desde
              minúsculos bastidores de 6 × 6 cm hasta ensambles espaciales y esculturas en
              cerámica, cada pieza revela un orden lógico atravesado por la sensibilidad de
              la materia.
            </p>

            <p>
              Su vínculo con la escena cultural santafesina incluye muestras individuales y
              colectivas en el Museo de Arte Contemporáneo de la UNL (MAC), el Museo
              Municipal «Sor Josefa Díaz y Clucellas», el Centro Cultural Provincial, el
              Espacio Cultural La Josefa y los salones del Museo Provincial de Bellas Artes
              «Rosa Galisteo de Rodríguez», proyectándose además a bienales y salones de
              dibujo y grabado en España, Italia y Nueva York.
            </p>
          </div>

          {/* Right margin sidebar (5 columns) */}
          <aside className="lg:col-span-5 space-y-8">
            <figure>
              <div className="aspect-[3/4] bg-[#E8E5DD] border border-[#DCD8CE] overflow-hidden">
                <ResilientImage
                  src={STUDIO_IMAGE.src}
                  alt={STUDIO_IMAGE.alt}
                  title="Taller de Nilda Marsili"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-3 font-serif italic text-xs text-[#5C5A55]">
                {STUDIO_IMAGE.caption}
              </figcaption>
            </figure>

            {/* Quiet Margin Notes */}
            <div className="border-t border-[#DCD8CE] pt-6 space-y-5 text-xs">
              <div>
                <h3 className="font-sans text-xs font-semibold text-[#171614] mb-1">
                  Disciplinas plásticas
                </h3>
                <p className="text-[#4A4843] leading-relaxed">
                  Pintura al óleo · Dibujo · Grabado · Cerámica · Escultura · Objetos y
                  ensambles · Intervenciones urbanas y performances
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCD8CE]/80">
                <h3 className="font-sans text-xs font-semibold text-[#171614] mb-1">
                  Ámbito científico y docente
                </h3>
                <p className="text-[#4A4843] leading-relaxed">
                  Bioquímica y Dra. en Ciencias Biológicas (UNL). Química Analítica II (FBCB
                  UNL) y Laboratorio de Materiales (Escuela «Prof. Juan Mantovani»).
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCD8CE]/80">
                <h3 className="font-sans text-xs font-semibold text-[#171614] mb-1">
                  Circuito internacional
                </h3>
                <p className="text-[#4A4843] leading-relaxed">
                  Participación en salones y bienales de dibujo y grabado en España, Italia
                  y Estados Unidos (Nueva York).
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
