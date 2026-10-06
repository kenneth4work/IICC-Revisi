import facilityImg1 from '../assets/images/regenerated_image_1790562987470.jpg';
import facilityImg2 from '../assets/images/regenerated_image_1790562989499.jpg';
import facilityImg3 from '../assets/images/regenerated_image_1791252683698.jpg';
import serviceImg1 from '../assets/images/regenerated_image_1791252688283.jpg';
import serviceImg2 from '../assets/images/regenerated_image_1791252692162.jpg';
import serviceImg3 from '../assets/images/regenerated_image_1790563003530.jpg';
import serviceImg4 from '../assets/images/regenerated_image_1790563010347.jpg';
import galleryImg1 from '../assets/images/regenerated_image_1790563011987.jpg';

export interface FacilityItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  capacityRange: string;
  areaSize: string;
  ceilingHeight: string;
  idealFor: string[];
  description: string;
  highlightSpecs: string[];
  layouts: {
    theater: number;
    classroom: number;
    roundTable: number;
    uShape: number;
    standing: number;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  features: string[];
  badge: string;
}

export interface ClientItem {
  name: string;
  category: string;
  abbreviation: string;
}

export const FACILITIES: FacilityItem[] = [
  {
    id: 'grand-ballroom',
    name: 'Grand Ballroom',
    subtitle: 'Pillar-less Iconic Venue untuk Skala Terbesar',
    image: facilityImg1,
    capacityRange: 'Kapasitas Akbar',
    areaSize: 'Aula Sangat Luas',
    ceilingHeight: 'Plafon Tinggi Megah',
    idealFor: ['Resepsi Wedding Akbar', 'Wisuda Universitas', 'Konferensi Internasional', 'Gala Dinner BUMN'],
    description: 'Mahakarya aula megah tanpa tiang (pillar-less) dengan akustik berstandar teater. Dilengkapi tata pencahayaan cerdas, panggung permanen elegan, serta akses pre-function foyer luas yang langsung menyambut para tamu terhormat.',
    highlightSpecs: [
      'Pillar-less Architecture untuk pandangan penuh tanpa hambatan',
      'Integrated High-Definition Audio Visual & Concert Lighting',
      'Giant Indoor LED Videowall resolusi ultra tajam',
      'Direct VIP Loading Dock & Dedicated Escalator Access',
      'Separate VIP Holding Room & Ruang Rias Pengantin Eksklusif',
    ],
    layouts: {
      theater: 0,
      classroom: 0,
      roundTable: 0,
      uShape: 0,
      standing: 0,
    },
  },
  {
    id: 'ballroom-flexi',
    name: 'Ballroom',
    subtitle: 'Pilihan Unit Flexible Configuration',
    image: facilityImg2,
    capacityRange: 'Kapasitas Fleksibel',
    areaSize: 'Konfigurasi Menengah',
    ceilingHeight: 'Plafon Akustik Nyaman',
    idealFor: ['Corporate Gathering', 'Seminar Nasional', 'Pernikahan Intim & Modern', 'Product Launching'],
    description: 'Modul ballroom fleksibel yang dapat dikonfigurasi mandiri maupun digabung menggunakan moveable soundproof partition. Solusi sempurna untuk acara berskala menengah dengan privasi optimal.',
    highlightSpecs: [
      'Flexible Soundproof Partition Acoustic Isolation',
      'Independent Digital Audio Mixers & Wireless Mic Systems',
      'Dual High-Lumen Laser Projectors & Motorized Screens',
      'Flexible Banquet Setup (Round Table, Classroom, Banquet)',
      'Integrated Foyer untuk Coffee Break & Registration Desk',
    ],
    layouts: {
      theater: 0,
      classroom: 0,
      roundTable: 0,
      uShape: 0,
      standing: 0,
    },
  },
  {
    id: 'meeting-rooms',
    name: 'Meeting Room Suites',
    subtitle: 'Rangkaian Unit Meeting Room dengan High-Speed WiFi',
    image: facilityImg3,
    capacityRange: 'Kapasitas Eksekutif',
    areaSize: 'Suites Eksklusif',
    ceilingHeight: 'Plafon Modern Nyaman',
    idealFor: ['Rapat Kerja Kementerian', 'Board of Directors Meeting', 'Focus Group Discussion', 'Training & Workshop'],
    description: 'Rangkaian ruang pertemuan eksekutif dirancang ergonomis dengan pendingin udara sentral yang senyap, pencahayaan alami dan buatan yang seimbang, serta jaringan internet berkecepatan tinggi tanpa hambatan.',
    highlightSpecs: [
      'Pilihan Unit Eksklusif: Salak, Pangrango, Kencana, Gede, dll.',
      'Dedicated High-Speed Dedicated Fiber Optic WiFi',
      'Interactive Smart Display & Hybrid Conference Camera',
      'Ergonomic Leather Executive Chairs & Modular Tables',
      'On-demand Secretarial & Meeting Concierge Support',
    ],
    layouts: {
      theater: 0,
      classroom: 0,
      roundTable: 0,
      uShape: 0,
      standing: 0,
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: 'MICE',
    title: 'Meeting & Convention',
    tagline: 'Standar Internasional untuk Rapat Kerja & Simposium',
    image: serviceImg1,
    description: 'Pusat konvensi terakreditasi untuk penyelenggaraan konferensi internasional, rapat kementerian, simposium akademik, dan seminar nasional dengan dukungan teknis audio-visual kelas industri.',
    features: [
      'Peralatan Hybrid Meeting & Live Streaming multi-kamera',
      'Ruang VVIP transit protokol kenegaraan',
      'Tim event coordinator berpengalaman',
      'Kemudahan akomodasi di IPB Convention Hotel',
    ],
    badge: 'MICE Excellence',
  },
  {
    number: 'WED',
    title: 'Wedding & Resepsi',
    tagline: 'Panggung Mewah untuk Janji Suci Seumur Hidup',
    image: serviceImg2,
    description: 'Wujudkan pernikahan impian dalam balutan kemewahan Ballroom megah berkapasitas besar. Dilengkapi ruang rias mewah, karpet merah eksklusif, serta koordinasi profesional untuk vendor dekorasi dan dokumentasi.',
    features: [
      'Pilihan paket Wedding All-In atau Venue-Only',
      'Kamar pengantin mewah di IPB Convention Hotel terintegrasi',
      'Fasilitas Sound & Stage Lighting standar konser',
      'Akses drop-off VIP langsung dari lobi Botani Square',
    ],
    badge: 'Dream Weddings',
  },
  {
    number: 'CHEF',
    title: 'Katering Premium',
    tagline: 'Cita Rasa Gastronomi Nusantara & Internasional',
    image: serviceImg3,
    description: 'Disiapkan oleh tim chef in-house bersertifikasi dengan standar kebersihan tertinggi. Menyajikan variasi kuliner prasmanan, gubukan istimewa, coffee break gourmet, hingga jamuan fine dining kenegaraan.',
    features: [
      'Sertifikasi Halal & Hygiene HACCP compliant',
      'Koleksi menu otentik Bogor, Nusantara, Asian, & Western',
      'Live cooking stations & dessert pastry display eksklusif',
      'Food tasting session pra-acara bagi calon pengantin & panitia',
    ],
    badge: 'Culinary Mastery',
  },
  {
    number: 'EXPO',
    title: 'Exhibition & Pameran',
    tagline: 'Lantai Pameran Strategis dengan Akses Terbuka',
    image: serviceImg4,
    description: 'Ruang pameran luas dengan lantai berdaya dukung tinggi dan sistem kelistrikan terdistribusi untuk expo pendidikan, job fair nasional, pameran buku, pameran UMKM, hingga bursa otomotif indoor.',
    features: [
      'Kapasitas deretan booth modular standar internasional',
      'Akses loading dock kontainer barang langsung ke lantai acara',
      'Trafik pengunjung terintegrasi pengunjung Botani Square Mall',
      'Sistem keamanan & proteksi kebakaran komprehensif',
    ],
    badge: 'High Footfall Expo',
  },
];

export const CLIENTS: ClientItem[] = [
  { name: 'Kementerian Keuangan RI', category: 'Kementerian & Lembaga', abbreviation: 'KEMENKEU' },
  { name: 'PT Pertamina (Persero)', category: 'Badan Usaha Milik Negara', abbreviation: 'PERTAMINA' },
  { name: 'Kementerian Kelautan & Perikanan', category: 'Kementerian & Lembaga', abbreviation: 'KKP RI' },
  { name: 'Badan Perencanaan Pembangunan Nasional', category: 'Lembaga Pemerintah', abbreviation: 'BAPPENAS' },
  { name: 'Kementerian Kehutanan RI', category: 'Kementerian & Lembaga', abbreviation: 'KEMENHUT' },
  { name: 'Kementerian Kesehatan RI', category: 'Kementerian & Lembaga', abbreviation: 'KEMENKES' },
  { name: 'Pemerintah Kota Bogor', category: 'Pemerintah Daerah', abbreviation: 'PEMKOT BOGOR' },
];

export const TESTIMONIALS = [
  {
    quote: 'Penyelenggaraan Rapat Koordinasi Nasional di IICC berjalan sangat tertib dan presisi. Akses dari gerbang tol Baranangsiang sangat cepat, sound system jernih, dan katering memuaskan.',
    author: 'H. Sudirman, M.Si.',
    role: 'Ketua Panitia Rakornas',
    institution: 'Kementerian Lembaga RI',
    event: 'Rakornas Nasional',
  },
  {
    quote: 'Grand Ballroom IICC benar-benar tanpa tiang, dekorasi wedding kami terlihat sangat megah dan lapang. Keluarga besar serta tamu undangan sangat nyaman karena langsung terhubung mall dan hotel.',
    author: 'dr. Sarah & Rayhan, S.T.',
    role: 'Pengantin Resepsi Grand Ballroom',
    institution: 'Wedding Client',
    event: 'Resepsi Grand Ballroom',
  },
  {
    quote: 'Kami mengadakan seminar industri selama beberapa hari berturut-turut. Tim operasional IICC sangat tanggap terhadap kebutuhan teknis LED wall dan hybrid streaming internasional.',
    author: 'Ir. Hendra Kusuma',
    role: 'Head of Corporate Communications',
    institution: 'BUMN Energi',
    event: 'Annual Leadership Summit',
  },
];

export const GALLERY_ITEMS = [
  {
    id: '1',
    title: 'Grand Ballroom Majesty',
    category: 'Konvensi',
    tag: 'Simposium Nasional',
    image: galleryImg1,
    capacity: 'Kapasitas Konvensi Akbar',
    description: 'Pemandangan aula tanpa tiang dengan tata pencahayaan panggung pro dan kursi theater rapi.',
    gradient: 'from-amber-950/80 via-neutral-900 to-black',
    accentColor: 'border-amber-600/40',
  },
  {
    id: '2',
    title: 'Royal Floral Wedding Ceremony',
    category: 'Wedding',
    tag: 'Akad & Resepsi Akbar',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    capacity: 'Kapasitas Resepsi Mewah',
    description: 'Dekorasi pelaminan megah dengan instalasi lampu gantung kristal dan karpet mewah.',
    gradient: 'from-rose-950/80 via-neutral-900 to-black',
    accentColor: 'border-rose-600/40',
  },
  {
    id: '3',
    title: 'Executive Meeting Suite Salak',
    category: 'Meeting',
    tag: 'Rapat Dewan Direksi',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf866a2d407?auto=format&fit=crop&w=1200&q=80',
    capacity: 'Format Eksekutif U-Shape',
    description: 'Konfigurasi meja U-shape berbalut linen rapi dengan smart screen interaktif.',
    gradient: 'from-blue-950/80 via-neutral-900 to-black',
    accentColor: 'border-blue-600/40',
  },
  {
    id: '4',
    title: 'State Banquet & Gala Dinner',
    category: 'Banquet',
    tag: 'Jamuan Makan Malam Kenegaraan',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    capacity: 'Format Banquet Round Table',
    description: 'Penataan round table elegan dengan cutlery perak dan sajian gourmet premium.',
    gradient: 'from-emerald-950/80 via-neutral-900 to-black',
    accentColor: 'border-emerald-600/40',
  },
  {
    id: '5',
    title: 'Inovasi Pendidikan & Expo Pameran',
    category: 'Konvensi',
    tag: 'Bursa Edukasi Nasional',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    capacity: 'Kapasitas Expo & Pameran Luas',
    description: 'Penataan booth pameran luas dengan sirkulasi pengunjung yang lapang dan aman.',
    gradient: 'from-indigo-950/80 via-neutral-900 to-black',
    accentColor: 'border-indigo-600/40',
  },
  {
    id: '6',
    title: 'Romantic Evening Reception',
    category: 'Wedding',
    tag: 'Modern Wedding Celebration',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
    capacity: 'Format Gala Resepsi Intim',
    description: 'Suasana temaram hangat bertabur fairy lights yang memancarkan pesona keagungan cinta.',
    gradient: 'from-amber-950/80 via-neutral-900 to-black',
    accentColor: 'border-amber-500/40',
  },
];

export const FAQS = [
  {
    question: 'Bagaimana aksesibilitas lokasi IICC dari Jakarta dan sekitarnya?',
    answer: 'IICC berlokasi sangat strategis di Lantai Mall Botani Square, tepat di depan ikon Tugu Kujang Kota Bogor. Dari Tol Jagorawi, cukup keluar di gerbang Tol Baranangsiang dengan akses langsung. Tersedia pula shelter bus bandara DAMRI langsung di area Botani Square.',
  },
  {
    question: 'Apakah IICC terintegrasi langsung dengan akomodasi hotel penginapan?',
    answer: 'Ya, IICC terhubung secara langsung (indoor connecting corridor) dengan IPB Convention Hotel dan Hotel Santika Bogor di kawasan Botani Square, memberikan kenyamanan maksimal bagi para pembicara VVIP, panitia, maupun tamu luar kota.',
  },
  {
    question: 'Berapa kapasitas maksimal Grand Ballroom IICC?',
    answer: 'Grand Ballroom IICC mampu menampung kapasitas besar dalam format standing reception atau theater-style untuk wisuda/seminar, serta format round-table banquet dinner megah tanpa halangan pilar.',
  },
  {
    question: 'Bagaimana cara melakukan reservasi tanggal dan survei lokasi?',
    answer: 'Anda dapat langsung mengisi formulir konsultasi di website ini untuk terhubung via WhatsApp resmi IICC di 0811 1330 659 atau menelepon 0251 8400 659. Tim sales consultant kami siap mendampingi survei lokasi dan menyediakan proposal penawaran khusus.',
  },
];

export const CONTACT_INFO = {
  phone: '0251 8400 659',
  phoneTel: '02518400659',
  email: 'sm@ipbicc.com',
  whatsapp: '0811 1330 659',
  whatsappLink: 'https://wa.me/628111330659',
  address: 'Botani Square Mall Lt.2, Jl. Pajajaran, Bogor Tengah 16127 (Depan Tugu Kujang)',
};

