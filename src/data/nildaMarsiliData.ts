import heroUniversosImg from '../assets/images/hero_universos_misticos_1795168763693.jpg';
import cuadradosMagicosImg from '../assets/images/obra_cuadrados_magicos_1795168764912.jpg';
import redesNeuronalesImg from '../assets/images/obra_redes_neuronales_1795168764122.jpg';
import racionalIrracionalImg from '../assets/images/obra_racional_irracional_1795168763934.jpg';
import laberintosSignoImg from '../assets/images/obra_laberintos_signo_1795168764746.jpg';
import mensajesAncestralesImg from '../assets/images/obra_mensajes_ancestrales_1795168763989.jpg';
import tallerAtelierImg from '../assets/images/taller_santa_fe_atelier_1795168764779.jpg';

export type DisciplineCategory =
  | 'Todas'
  | 'Pintura'
  | 'Dibujo y Grabado'
  | 'Cerámica y Escultura'
  | 'Instalación y Objetos';

export interface ArtworkItem {
  id: string;
  accessionNumber: string;
  title: string;
  series: string;
  year: string;
  discipline: Exclude<DisciplineCategory, 'Todas'>;
  medium: string;
  dimensions: string;
  venue: string;
  city: string;
  curatorship?: string;
  image: string;
  imageAlt: string;
  imagePositionClass?: string;
  aspectClass: string;
  featuredSpan?: boolean;
  shortNote: string;
  curatorialText: string;
  scientificDialogue: string;
}

export interface ExhibitionRecord {
  year: string;
  title: string;
  venue: string;
  city: string;
  discipline: string;
  type: 'Individual' | 'Conjunta' | 'Colectiva / Salón';
}

export interface AwardRecord {
  year: string;
  distinction: string;
  event: string;
  location: string;
  section: string;
}

export interface AcademicRecord {
  period: string;
  role: string;
  institution: string;
  detail: string;
}

export const STUDIO_IMAGE = {
  src: tallerAtelierImg,
  alt: 'Mesa de taller de investigación artística y científica en Santa Fe Capital, con cuaderno de geometría, pequeños bastidores de madera, pigmentos al óleo, arcilla y material de laboratorio',
  caption: 'Fig. 7 — Mesa de estudio y laboratorio de materiales, Santa Fe Capital.',
};

export const ARTWORKS: ArtworkItem[] = [
  {
    id: 'universos-misticos',
    accessionNumber: 'NM-2025-01',
    title: 'Universos Místicos. Del macrocosmos al taller',
    series: 'Universos Místicos',
    year: '2025',
    discipline: 'Instalación y Objetos',
    medium: 'Ensamble espacial, madera, latón, esferas cerámicas policromadas y dibujos celestes en tinta',
    dimensions: 'Instalación de medidas variables',
    venue: 'Espacio Cultural Provincial La Josefa',
    city: 'Santa Fe Capital',
    image: heroUniversosImg,
    imageAlt: 'Ensamble escultórico cosmológico con anillos de epiciclos, esferas celestes en azul ultramar y blanco tiza, acompañado por cartas astronómicas dibujadas en tinta',
    imagePositionClass: 'object-center',
    aspectClass: 'aspect-[4/3]',
    featuredSpan: true,
    shortNote:
      'Sistemas astronómicos, epiciclos y constelaciones traducidos en materia y volumen entre la escala cósmica y la intimidad del taller.',
    curatorialText:
      'Presentada en el Espacio Cultural Provincial La Josefa en Santa Fe, esta serie establece un puente entre el mundo interior del taller y la extensión inabarcable del cosmos. A partir de teorías científicas y cosmologías antiguas, Marsili dota de cuerpo tangible a epiciclos, órbitas, planetas, meteoritos y fases lunares mediante ensambles de objetos, esculturas y cartas dibujadas.',
    scientificDialogue:
      'Cosmología histórica, geometría de epiciclos y sistemas planetarios en diálogo con la alquimia material del taller.',
  },
  {
    id: 'cuadrados-tortugas-magicas',
    accessionNumber: 'NM-2024-02',
    title: 'De cuadrados y tortugas mágicas',
    series: 'Cuadrados y tortugas mágicas',
    year: '2024',
    discipline: 'Pintura',
    medium: 'Óleo sobre pequeños bastidores modulares, tinta, madera tallada y tótems volumétricos',
    dimensions: 'Módulos desde 6 × 6 cm · Conjunto de 32 × 32 cm',
    venue: 'Museo de Arte Contemporáneo (MAC UNL)',
    city: 'Santa Fe Capital',
    curatorship: 'Curaduría de Lucía Stubrin',
    image: cuadradosMagicosImg,
    imageAlt: 'Composición modular de nueve bastidores cuadrados con matriz del cuadrado mágico Lo Shu, motivos hexagonales de caparazón de tortuga y óleo en azul de Prusia, ocre y blanco antiguo',
    imagePositionClass: 'object-center',
    aspectClass: 'aspect-square',
    shortNote:
      'Matrices numéricas, cuadrados mágicos y geometrías hexagonales nacidas de bastidores en miniatura de 6 × 6 cm.',
    curatorialText:
      'Exhibida en el Museo de Arte Contemporáneo de la Universidad Nacional del Litoral bajo la curaduría de Lucía Stubrin, esta producción parte de los célebres cuadrados mágicos —desde el grabado de Durero hasta las matrices numéricas de los caparazones de tortuga en la tradición antigua—. Iniciada de manera casi azarosa sobre pequeños bastidores de 6 × 6 cm con tintas y collages, la serie se expandió hacia el óleo y pequeñas arquitecturas en madera.',
    scientificDialogue:
      'Historia de las matemáticas, matrices aritméticas constantes (Lo Shu) y simetrías combinatorias.',
  },
  {
    id: 'redes-neuronales',
    accessionNumber: 'NM-2007-03',
    title: 'Redes Neuronales (Políptico modular)',
    series: 'Redes Neuronales',
    year: '2007',
    discipline: 'Pintura',
    medium: 'Pintura y tinta sobre lino crudo en módulos seriados de pequeño formato',
    dimensions: '12 módulos de 20 × 20 cm (conjunto de 70 × 94 cm)',
    venue: 'Museo de Arte Contemporáneo (MAC UNL)',
    city: 'Santa Fe Capital',
    curatorship: 'Muestra conjunta con Raquel Minetti',
    image: redesNeuronalesImg,
    imageAlt: 'Políptico seriado de doce paneles cuadrados sobre lino crudo con retículas de puntos celulares, círculos concéntricos y filamentos de red en tinta índigo y grafito',
    imagePositionClass: 'object-left',
    aspectClass: 'aspect-[4/3]',
    shortNote:
      'Tramas celulares concebidas punto por punto, donde la repetición multiplicadora ordena la energía vital de la naturaleza.',
    curatorialText:
      'Desarrollada para su presentación en el MAC UNL junto a Raquel Minetti, la serie aborda los sistemas de organización compleja en la biología y la cognición. Mediante retículas precisas y la acumulación paciente de puntos, células y círculos concéntricos en obras de pequeño formato agrupadas en serie, Marsili construye un orden lógico programado que dialoga con las fuerzas de atracción y repulsión.',
    scientificDialogue:
      'Biología celular, topología de redes neuronales y patrones emergentes de autoorganización.',
  },
  {
    id: 'racional-irracional',
    accessionNumber: 'NM-2012-04',
    title: 'Racional Irracional (Estudio de materia)',
    series: 'Racional Irracional',
    year: '2012',
    discipline: 'Cerámica y Escultura',
    medium: 'Cerámica gres sin esmaltar, arcilla horneada en reducción y prismas de madera grabada',
    dimensions: '48 × 26 × 19 cm (pieza central)',
    venue: 'Museo Municipal de Artes Visuales "Sor Josefa Díaz y Clucellas"',
    city: 'Santa Fe Capital',
    image: racionalIrracionalImg,
    imageAlt: 'Esculturas de cerámica gres y arcilla oscura de formas orgánicas acopladas con prismas geométricos de madera con líneas grabadas sobre pedestal de piedra caliza',
    imagePositionClass: 'object-center',
    aspectClass: 'aspect-[3/4]',
    shortNote:
      'El encuentro táctil entre el volumen orgánico de la arcilla horneada y la medida exacta de la geometría en madera.',
    curatorialText:
      'Presentada en el Museo Municipal Sor Josefa Díaz y Clucellas, "Racional Irracional" reúne cerámica, escultura y objetos donde conviven la rigurosidad del cálculo y la intuición de la mano. Las formas orgánicas de arcilla modelada abrazan e interrumpen prismas rectos grabados con coordenadas cartesianas, materializando la convivencia permanente entre el método analítico y la poética del azar.',
    scientificDialogue:
      'Laboratorio de materiales cerámicos, química mineral de pastas y tensión entre sistemas euclidianos y formas orgánicas.',
  },
  {
    id: 'laberintos-el-signo',
    accessionNumber: 'NM-2002-05',
    title: 'Laberintos y El Signo',
    series: 'Laberintos / El signo',
    year: '2000–2002',
    discipline: 'Dibujo y Grabado',
    medium: 'Grabado calcográfico y dibujo en tinta china sobre papel de algodón',
    dimensions: '38 × 52 cm (estampa sobre papel de 50 × 65 cm)',
    venue: 'Centro Cultural Provincial de Santa Fe',
    city: 'Santa Fe Capital',
    image: laberintosSignoImg,
    imageAlt: 'Grabado calcográfico y dibujo a tinta china sobre papel de algodón texturado mostrando un laberinto geométrico no euclidiano, arcos de compás y signos arcaicos',
    imagePositionClass: 'object-center scale-[1.07]',
    aspectClass: 'aspect-[4/3]',
    shortNote:
      'Geometría no euclidiana, arcos de compás y signos gráficos que cartografían recorridos mentales e inscripciones simbólicas.',
    curatorialText:
      'Entre las exposiciones "El signo" (2000) y "Laberintos" (2002) en el Centro Cultural Provincial, el dibujo y el grabado se vuelven instrumentos de indagación topológica. La línea precisa del buril y la tinta china tejen recorridos curvos, fractales y glifos que interrogan cómo el conocimiento humano codifica el espacio y el lenguaje.',
    scientificDialogue:
      'Geometría no euclidiana, topología de laberintos, fractales y semiótica del trazo.',
  },
  {
    id: 'mensajes-ancestrales',
    accessionNumber: 'NM-1997-06',
    title: 'Mensajes Ancestrales (Estratos y Estadística)',
    series: 'Mensajes ancestrales / Estadística',
    year: '1997–1999',
    discipline: 'Pintura',
    medium: 'Óleo, pigmentos minerales e incisiones sobre tela de lino',
    dimensions: '90 × 110 cm',
    venue: 'Museo Municipal "Sor Josefa Díaz y Clucellas"',
    city: 'Santa Fe Capital',
    image: mensajesAncestralesImg,
    imageAlt: 'Pintura al óleo sobre lino con capas matéricas en azul pizarra, ocre, tierra siena y blanco, atravesada por incisiones lineales, tramas de puntos estadísticos y signos geométricos',
    imagePositionClass: 'object-left scale-[1.09]',
    aspectClass: 'aspect-[4/3]',
    shortNote:
      'Capas de pigmento mineral e incisiones que conjugan la memoria geológica con notaciones gráficas y ritmos estadísticos.',
    curatorialText:
      'Nacida de las muestras individuales "Mensajes ancestrales" (1997) y "Estadística" (1999) en el Museo Municipal Sor Josefa Díaz y Clucellas, esta etapa consolida el lenguaje pictórico de Marsili en la década del noventa. Sobre veladuras densas de óleos minerales, la artista inscribe horizontes lineales, series numéricas de puntos y triángulos arcaicos que enlazan la memoria cultural con el rigor del dato.',
    scientificDialogue:
      'Química de pigmentos minerales, distribuciones estadísticas y notación gráfica de fenómenos naturales.',
  },
];

export const DISCIPLINES: DisciplineCategory[] = [
  'Todas',
  'Pintura',
  'Dibujo y Grabado',
  'Cerámica y Escultura',
  'Instalación y Objetos',
];

export const EXHIBITIONS: ExhibitionRecord[] = [
  {
    year: '2025',
    title: 'Universos Místicos. Del macrocosmos al taller',
    venue: 'Espacio Cultural Provincial La Josefa',
    city: 'Santa Fe',
    discipline: 'Objetos, ensambles, esculturas y dibujos',
    type: 'Individual',
  },
  {
    year: '2024',
    title: 'De cuadrados y tortugas mágicas',
    venue: 'Museo de Arte Contemporáneo (MAC UNL) · Curaduría: Lucía Stubrin',
    city: 'Santa Fe',
    discipline: 'Pintura al óleo, dibujos y tótems en madera',
    type: 'Individual',
  },
  {
    year: '2012',
    title: 'Racional Irracional',
    venue: 'Museo Municipal de Artes Visuales "Sor Josefa Díaz y Clucellas"',
    city: 'Santa Fe',
    discipline: 'Cerámica, escultura, objetos y pintura',
    type: 'Individual',
  },
  {
    year: '2008',
    title: 'Pequeños arbolitos',
    venue: 'Legislatura de la Provincia de Santa Fe',
    city: 'Santa Fe',
    discipline: 'Pintura y dibujo',
    type: 'Individual',
  },
  {
    year: '2007',
    title: 'Redes Neuronales',
    venue: 'Museo de Arte Contemporáneo (MAC UNL) · Junto a Raquel Minetti',
    city: 'Santa Fe',
    discipline: 'Pintura y dibujo modular',
    type: 'Conjunta',
  },
  {
    year: '2006',
    title: 'Los habladores / El universo de Kriptonita y su amada tía Dainé',
    venue: 'Museo Municipal de Artes Visuales "Sor Josefa Díaz y Clucellas"',
    city: 'Santa Fe',
    discipline: 'Pintura y dibujo',
    type: 'Individual',
  },
  {
    year: '2002',
    title: 'Laberintos / La hiena y el pajarito',
    venue: 'Centro Cultural Provincial de Santa Fe',
    city: 'Santa Fe',
    discipline: 'Dibujo y grabado',
    type: 'Individual',
  },
  {
    year: '2000',
    title: 'El signo',
    venue: 'Centro Cultural Provincial de Santa Fe',
    city: 'Santa Fe',
    discipline: 'Pintura y obra gráfica',
    type: 'Individual',
  },
  {
    year: '1999',
    title: 'Estadística',
    venue: 'Museo Municipal de Artes Visuales "Sor Josefa Díaz y Clucellas"',
    city: 'Santa Fe',
    discipline: 'Dibujo',
    type: 'Individual',
  },
  {
    year: '1998',
    title: 'Muestra individual de Grabado',
    venue: 'Arte Privado y Escuela de Artes Visuales "Prof. Juan Mantovani"',
    city: 'Santa Fe',
    discipline: 'Grabado',
    type: 'Individual',
  },
  {
    year: '1997',
    title: 'Mensajes ancestrales',
    venue: 'Museo Municipal de Artes Visuales "Sor Josefa Díaz y Clucellas"',
    city: 'Santa Fe',
    discipline: 'Pintura',
    type: 'Individual',
  },
  {
    year: '1984',
    title: 'El circo',
    venue: 'Rectorado de la Universidad Nacional de Rosario (UNR)',
    city: 'Rosario',
    discipline: 'Dibujo',
    type: 'Individual',
  },
  {
    year: '1982–2024',
    title: 'Salones Nacionales, Provinciales y Bienales Internacionales',
    venue: 'Museo Provincial de Bellas Artes "Rosa Galisteo de Rodríguez", España, Italia y Nueva York',
    city: 'Argentina y Exterior',
    discipline: 'Pintura, dibujo, grabado, cerámica y acciones',
    type: 'Colectiva / Salón',
  },
];

export const AWARDS: AwardRecord[] = [
  {
    year: '2007',
    distinction: 'Premio Nacional Bienal "Dr. José A. Catoggio"',
    event: 'Asociación Argentina de Química Analítica',
    location: 'Argentina',
    section: 'Investigación Científica',
  },
  {
    year: '1998',
    distinction: 'Primer Premio Adquisición',
    event: 'Salón Anual de Artistas Plásticos Santafesinos',
    location: 'Santa Fe',
    section: 'Artes Plásticas',
  },
  {
    year: '1995',
    distinction: 'Mención Especial',
    event: '62° Salón Anual de Artistas Plásticos de Santa Fe',
    location: 'Santa Fe',
    section: 'Pintura',
  },
  {
    year: '1995',
    distinction: 'Mención',
    event: 'Salón Anual de Invierno',
    location: 'San Justo, Santa Fe',
    section: 'Artes Visuales',
  },
  {
    year: '1991',
    distinction: 'Tercer Premio',
    event: 'Salón Anual de Ceres',
    location: 'Ceres, Santa Fe',
    section: 'Dibujo',
  },
  {
    year: '1986',
    distinction: 'Premio ARCIEN para el perfeccionamiento artístico',
    event: 'Distinción Provincial de Artes',
    location: 'Santa Fe',
    section: 'Escultura',
  },
  {
    year: '1984',
    distinction: 'Premio de Honor',
    event: 'Salón Anual de Ceres',
    location: 'Ceres, Santa Fe',
    section: 'Artes Plásticas',
  },
  {
    year: '1983',
    distinction: 'Primer Premio · Sección Cerámica',
    event: 'Salón Anual de Ceres',
    location: 'Ceres, Santa Fe',
    section: 'Cerámica',
  },
  {
    year: '1983',
    distinction: 'Segundo Premio · Sección Dibujo',
    event: 'Salón Anual de Invierno',
    location: 'San Justo, Santa Fe',
    section: 'Dibujo',
  },
  {
    year: '1982',
    distinction: 'Primer Premio',
    event: 'Salón Anual de Cerámica',
    location: 'Coronda, Santa Fe',
    section: 'Cerámica',
  },
];

export const ACADEMIC_TRAJECTORY: AcademicRecord[] = [
  {
    period: '2006',
    role: 'Doctora en Ciencias Biológicas',
    institution: 'Facultad de Bioquímica y Ciencias Biológicas · Universidad Nacional del Litoral (UNL)',
    detail: 'Investigación científica de posgrado en Santa Fe Capital.',
  },
  {
    period: '1984',
    role: 'Bioquímica',
    institution: 'Universidad Nacional del Litoral (UNL)',
    detail: 'Formación de grado en ciencias exactas y naturales, en paralelo al inicio de su obra plástica.',
  },
  {
    period: 'Docencia',
    role: 'Profesora e Investigadora · Química Analítica II',
    institution: 'Facultad de Bioquímica y Ciencias Biológicas (FBCB - UNL)',
    detail: 'Labor académica e investigación universitaria en métodos analíticos.',
  },
  {
    period: 'Artes Visuales',
    role: 'Docente de la cátedra Laboratorio de Materiales',
    institution: 'Escuela Provincial de Artes Visuales "Prof. Juan Mantovani"',
    detail: 'Transmisión del conocimiento químico y técnico de pigmentos, soportes y procesos plásticos en Santa Fe.',
  },
];
