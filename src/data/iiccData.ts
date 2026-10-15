import { Language } from '../context/LanguageContext';
import facilityImg1 from '../assets/images/regenerated_image_1790563011987.jpg';
import facilityImg2 from '../assets/images/regenerated_image_1790562987470.jpg';
import facilityImg3 from '../assets/images/regenerated_image_1790562989499.jpg';
import serviceImg1 from '../assets/images/regenerated_image_1791252688283.jpg';
import serviceImg2 from '../assets/images/regenerated_image_1791252692162.jpg';
import serviceImg3 from '../assets/images/regenerated_image_1790563010347.jpg';
import serviceImg4 from '../assets/images/regenerated_image_1791252683698.jpg';

export interface FacilityLayouts {
  theater: number;
  classroom: number;
  roundTable: number;
  uShape: number;
  standing: number;
}

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
  layouts: FacilityLayouts;
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

export const getFacilities = (lang: Language = 'id'): FacilityItem[] => {
  if (lang === 'en') {
    return [
      {
        id: 'grand-ballroom',
        name: 'Grand Ballroom',
        subtitle: 'Spacious Hall',
        image: facilityImg1,
        capacityRange: 'Large Events',
        areaSize: 'Spacious Hall',
        ceilingHeight: 'High Ceiling',
        idealFor: ['Large Wedding Receptions', 'Graduations', 'International Conferences'],
        description: 'A large, pillar-free hall with clear sound throughout the room. It features adjustable lighting, a permanent stage, and a spacious foyer where guests can gather before the event.',
        highlightSpecs: [
          'Pillar-Free Design for Clear Views',
          'High-Definition Sound, Video, and Stage Lighting',
          'Large Indoor LED Screen',
          'VIP Loading Access and Dedicated Escalator',
          'Separate VIP Waiting Room and Bridal Preparation Room',
        ],
        layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
      },
      {
        id: 'ballroom-flexi',
        name: 'Ballroom',
        subtitle: 'Medium-Sized Space',
        image: facilityImg2,
        capacityRange: 'Flexible Capacity',
        areaSize: 'Medium-Sized Space',
        ceilingHeight: 'Comfortable Acoustic Ceiling',
        idealFor: ['Corporate Gatherings', 'National Seminars', 'Small and Modern Weddings', 'Product Launches'],
        description: 'Flexible ballroom spaces that can be used separately or combined using movable soundproof walls. Suitable for medium-sized events that need a private setting.',
        highlightSpecs: [
          'Movable Soundproof Walls',
          'Separate Sound Systems and Wireless Microphones',
          'Two Bright Projectors with Retractable Screens',
          'Flexible Seating Arrangements (Round Table, Classroom, Theater, U-Shape, etc.)',
          'Foyer Area for Coffee Breaks and Registration',
        ],
        layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
      },
      {
        id: 'meeting-rooms',
        name: 'Meeting Room',
        subtitle: 'Private Meeting Rooms',
        image: facilityImg3,
        capacityRange: 'Small Group Meetings',
        areaSize: 'Private Meeting Rooms',
        ceilingHeight: 'Comfortable Modern Design',
        idealFor: ['Government Meetings', 'Board Meetings', 'Focus Group Discussions', 'Training & Workshops'],
        description: 'Meeting rooms designed for comfort and focus, with quiet central air conditioning, balanced lighting, and fast internet access.',
        highlightSpecs: [
          'Available Rooms: Meeting Rooms A, B, C, D, E & F',
          'Dedicated High-Speed Wi-Fi',
          'Interactive Display and Camera for Online Meetings',
        ],
        layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
      },
    ];
  }

  return [
    {
      id: 'grand-ballroom',
      name: 'Grand Ballroom',
      subtitle: 'Aula Sangat Luas Tanpa Tiang',
      image: facilityImg1,
      capacityRange: 'Acara Skala Besar',
      areaSize: 'Aula Sangat Luas',
      ceilingHeight: 'Plafon Tinggi Megah',
      idealFor: ['Resepsi Pernikahan Akbar', 'Wisuda Universitas', 'Konferensi Internasional'],
      description: 'Aula besar tanpa tiang dengan tata suara jernih di seluruh ruangan. Dilengkapi pencahayaan adaptif, panggung permanen, dan foyer luas tempat berkumpul sebelum acara.',
      highlightSpecs: [
        'Desain Tanpa Tiang untuk Pandangan Bebas Hambatan',
        'Tata Suara, Video & Pencahayaan Panggung Definisi Tinggi',
        'Layar LED Indoor Berukuran Besar',
        'Akses Loading VIP & Eskalator Khusus',
        'Ruang Tunggu VIP Terpisah & Ruang Persiapan Pengantin',
      ],
      layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
    },
    {
      id: 'ballroom-flexi',
      name: 'Ballroom',
      subtitle: 'Ruang Fleksibel Skala Menengah',
      image: facilityImg2,
      capacityRange: 'Kapasitas Fleksibel',
      areaSize: 'Ruang Skala Menengah',
      ceilingHeight: 'Plafon Akustik Nyaman',
      idealFor: ['Corporate Gathering', 'Seminar Nasional', 'Pernikahan Intim & Modern', 'Peluncuran Produk'],
      description: 'Ruang ballroom fleksibel yang dapat digunakan terpisah maupun digabungkan dengan partisi kedap suara. Cocok untuk acara skala menengah yang membutuhkan suasana privat.',
      highlightSpecs: [
        'Dinding Partisi Bergerak Kedap Suara',
        'Sistem Audio Mandiri & Mikrofon Nirkabel',
        'Dua Proyektor Terang dengan Layar Otomatis',
        'Penataan Tempat Duduk Fleksibel (Meja Bundar, Kelas, Teater, U-Shape)',
        'Area Foyer untuk Coffee Break & Registrasi',
      ],
      layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
    },
    {
      id: 'meeting-rooms',
      name: 'Meeting Room',
      subtitle: 'Rangkaian Ruang Rapat Privat',
      image: facilityImg3,
      capacityRange: 'Pertemuan Kelompok Kecil',
      areaSize: 'Ruang Rapat Privat',
      ceilingHeight: 'Desain Modern Nyaman',
      idealFor: ['Rapat Pemerintah', 'Rapat Direksi', 'Focus Group Discussion', 'Pelatihan & Workshop'],
      description: 'Ruang pertemuan yang dirancang untuk kenyamanan dan fokus, dengan AC sentral yang tenang, pencahayaan seimbang, dan akses internet berkecepatan tinggi.',
      highlightSpecs: [
        'Pilihan Ruang: Meeting Room A, B, C, D, E & F',
        'Akses Wi-Fi Kecepatan Tinggi Terdedikasi',
        'Layar Interaktif & Kamera untuk Pertemuan Online',
      ],
      layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
    },
  ];
};

export const getServices = (lang: Language = 'id'): ServiceItem[] => {
  if (lang === 'en') {
    return [
      {
        number: 'MICE',
        title: 'Meetings & Conventions',
        tagline: 'Spaces for Professional Meetings and Conferences',
        image: serviceImg1,
        description: 'IICC hosts international conferences, government meetings, academic discussions, and national seminars, supported by professional audio and video equipment.',
        features: [
          'Equipment for Hybrid Meetings and Multi-Camera Live Streaming',
          'VIP Waiting Room for Official Guests',
          'Easy Access to IPB Convention Hotel',
        ],
        badge: 'Professional MICE',
      },
      {
        number: 'WED',
        title: 'Weddings & Receptions',
        tagline: 'A Beautiful Setting for Your Special Day',
        image: serviceImg2,
        description: 'Celebrate your wedding in a spacious ballroom, with bridal preparation rooms and support in coordinating decoration and photography vendors.',
        features: [
          'Package Options: Yasmine, Rose, Lilium',
          'Bridal Suite at the Connected IPB Convention Hotel',
          'Sound and Stage Lighting',
          'Free Parking for the Couple and Family',
        ],
        badge: 'Dream Weddings',
      },
      {
        number: 'CHEF',
        title: 'Dining Experience',
        tagline: 'Indonesian and International Menus',
        image: serviceImg3,
        description: 'Our in-house chefs prepare a range of menus, from buffet meals and coffee breaks to formal dining, with a focus on food safety and cleanliness.',
        features: [
          'Halal Certification and HACCP-Based Food Safety Practices',
          'Menu Options from Bogor, Across Indonesia, Asia, and Western Cuisine',
          'Live Cooking Stations and Dessert Displays',
          'Pre-Event Food Tasting for Couples and Event Organizers',
        ],
        badge: 'Gourmet Dining',
      },
      {
        number: 'EXPO',
        title: 'Exhibitions',
        tagline: 'Flexible Exhibition Space with Easy Access',
        image: serviceImg4,
        description: 'Spacious exhibition areas with floors designed for heavy equipment and convenient power connections, suitable for education expos, job fairs, book fairs, and small-business exhibitions.',
        features: [
          'Loading Access for Event Equipment and Deliveries',
          'Easy Access for Botani Square Mall Visitors',
          'Security and Fire Safety Systems',
        ],
        badge: 'Spacious Expo',
      },
    ];
  }

  return [
    {
      number: 'MICE',
      title: 'Meetings & Conventions',
      tagline: 'Ruang untuk Pertemuan Profesional dan Konferensi',
      image: serviceImg1,
      description: 'IICC menyelenggarakan konferensi internasional, pertemuan pemerintah, diskusi akademik, dan seminar nasional, didukung peralatan audio dan video profesional.',
      features: [
        'Peralatan untuk Pertemuan Hybrid dan Live Streaming Multi-Kamera',
        'Ruang Tunggu VIP untuk Tamu Resmi Kenegaraan',
        'Akses Mudah Langsung ke IPB Convention Hotel',
      ],
      badge: 'MICE Profesional',
    },
    {
      number: 'WED',
      title: 'Weddings & Receptions',
      tagline: 'Suasana Indah untuk Hari Istimewa Anda',
      image: serviceImg2,
      description: 'Rayakan pernikahan Anda di ballroom luas, dilengkapi ruang persiapan pengantin dan dukungan koordinasi vendor dekorasi serta fotografi.',
      features: [
        'Pilihan Paket: Yasmine, Rose, Lilium',
        'Kamar Pengantin di IPB Convention Hotel yang Terkoneksi',
        'Tata Suara dan Tata Cahaya Panggung Standar Konser',
        'Parkir Gratis Khusus untuk Pengantin dan Keluarga',
      ],
      badge: 'Pernikahan Impian',
    },
    {
      number: 'CHEF',
      title: 'Dining Experience',
      tagline: 'Pilihan Menu Nusantara dan Internasional',
      image: serviceImg3,
      description: 'Chef in-house kami menyiapkan beragam pilihan menu, mulai dari prasmanan dan coffee break hingga jamuan formal, dengan fokus pada keamanan dan kebersihan pangan.',
      features: [
        'Sertifikasi Halal dan Praktik Keamanan Pangan Berbasis HACCP',
        'Pilihan Menu Khas Bogor, Nusantara, Asia, dan Hidangan Barat',
        'Live Cooking Stations dan Sajian Aneka Dessert',
        'Sesi Food Tasting Pra-Acara untuk Pengantin & Panitia',
      ],
      badge: 'Katering Gourmet',
    },
    {
      number: 'EXPO',
      title: 'Exhibitions',
      tagline: 'Ruang Pameran Fleksibel dengan Akses Mudah',
      image: serviceImg4,
      description: 'Area pameran luas dengan lantai berdaya dukung tinggi dan koneksi listrik yang praktis, cocok untuk expo pendidikan, job fair, bursa buku, dan pameran UMKM.',
      features: [
        'Akses Loading Dock untuk Peralatan dan Pengiriman Barang Acara',
        'Akses Terbuka Langsung bagi Pengunjung Botani Square Mall',
        'Sistem Keamanan Terpadu dan Proteksi Kebakaran Lengkap',
      ],
      badge: 'Pameran Luas',
    },
  ];
};

export const getClients = (lang: Language = 'id'): ClientItem[] => {
  if (lang === 'en') {
    return [
      { name: 'Ministry of Finance, Republic of Indonesia', category: 'Government Ministry', abbreviation: 'KEMENKEU' },
      { name: 'PT Pertamina (Persero)', category: 'State-Owned Company', abbreviation: 'PERTAMINA' },
      { name: 'Ministry of Marine Affairs and Fisheries', category: 'Government Ministry', abbreviation: 'KKP RI' },
      { name: 'Ministry of National Development Planning', category: 'Government Agency', abbreviation: 'BAPPENAS' },
      { name: 'Ministry of Forestry, Republic of Indonesia', category: 'Government Ministry', abbreviation: 'KEMENHUT' },
      { name: 'Ministry of Health, Republic of Indonesia', category: 'Government Ministry', abbreviation: 'KEMENKES' },
      { name: 'Bogor City Government', category: 'Local Government', abbreviation: 'PEMKOT BOGOR' },
    ];
  }
  return [
    { name: 'Kementerian Keuangan Republik Indonesia', category: 'Kementerian Pemerintah', abbreviation: 'KEMENKEU' },
    { name: 'PT Pertamina (Persero)', category: 'Badan Usaha Milik Negara (BUMN)', abbreviation: 'PERTAMINA' },
    { name: 'Kementerian Kelautan dan Perikanan', category: 'Kementerian Pemerintah', abbreviation: 'KKP RI' },
    { name: 'Kementerian PPN / Bappenas', category: 'Lembaga Pemerintah', abbreviation: 'BAPPENAS' },
    { name: 'Kementerian Kehutanan Republik Indonesia', category: 'Kementerian Pemerintah', abbreviation: 'KEMENHUT' },
    { name: 'Kementerian Kesehatan Republik Indonesia', category: 'Kementerian Pemerintah', abbreviation: 'KEMENKES' },
    { name: 'Pemerintah Kota Bogor', category: 'Pemerintah Daerah', abbreviation: 'PEMKOT BOGOR' },
  ];
};

export const getTestimonials = (lang: Language = 'id') => {
  if (lang === 'en') {
    return [
      {
        quote: 'Our National Coordination Meeting at IICC was well organized. Access from the Baranangsiang toll exit was quick, the sound system was clear, and the food was satisfying.',
        author: 'H. Sudirman, M.Si.',
        role: 'Chair of the National Coordination Meeting Organizing Committee',
        institution: 'Indonesian Government Institution',
        event: 'National Coordination Meeting',
      },
    ];
  }
  return [
    {
      quote: 'Rapat Koordinasi Nasional kami di IICC berlangsung sangat terorganisir. Akses dari pintu keluar tol Baranangsiang cepat, tata suara jernih, dan makanannya memuaskan.',
      author: 'H. Sudirman, M.Si.',
      role: 'Ketua Panitia Rapat Koordinasi Nasional',
      institution: 'Lembaga Pemerintah Republik Indonesia',
      event: 'Rapat Koordinasi Nasional',
    },
  ];
};

export const getFaqs = (lang: Language = 'id') => {
  if (lang === 'en') {
    return [
      {
        question: 'How do I get to IICC from Jakarta and nearby areas?',
        answer: 'IICC is on the 2nd floor of Botani Square Mall, across from Tugu Kujang in Bogor. From the Jagorawi Toll Road, take the Baranangsiang exit. The DAMRI airport bus stop is also located in the Botani Square area.',
      },
      {
        question: 'Is IICC connected to a hotel?',
        answer: 'Yes. IICC has indoor access to IPB Convention Hotel and Hotel Santika Bogor within the Botani Square complex, making it convenient for speakers, organizers, and out-of-town guests.',
      },
      {
        question: 'What is the maximum capacity of the IICC Grand Ballroom?',
        answer: 'The Grand Ballroom can accommodate large events, with standing, theater-style, or round-table seating. Its pillar-free design gives guests a clear view.',
      },
      {
        question: 'How can I book a date or arrange a venue visit?',
        answer: 'Fill out the inquiry form on this website to contact IICC via WhatsApp at 0811 1330 659, or call 0251 8400 659. Our sales team can help arrange a venue visit and provide a quotation.',
      },
    ];
  }
  return [
    {
      question: 'Bagaimana cara menuju IICC dari Jakarta dan wilayah sekitarnya?',
      answer: 'IICC berada di lantai 2 Botani Square Mall, tepat di seberang Tugu Kujang di Kota Bogor. Dari Tol Jagorawi, ambil pintu keluar Baranangsiang. Shelter bus bandara DAMRI juga berada langsung di kawasan Botani Square.',
    },
    {
      question: 'Apakah IICC terhubung langsung dengan hotel?',
      answer: 'Ya. IICC memiliki akses koridor indoor langsung ke IPB Convention Hotel dan Hotel Santika Bogor di kawasan Botani Square, memudahkan mobilitas pembicara, panitia, maupun tamu luar kota.',
    },
    {
      question: 'Berapa kapasitas maksimal Grand Ballroom IICC?',
      answer: 'Grand Ballroom mampu mengakomodasi acara skala besar dengan format standing reception, theater-style, maupun meja bundar. Desainnya yang tanpa tiang memberikan pandangan bebas hambatan bagi seluruh tamu.',
    },
    {
      question: 'Bagaimana cara memesan tanggal atau menjadwalkan kunjungan lokasi?',
      answer: 'Silakan isi formulir konsultasi di website ini untuk menghubungi tim IICC melalui WhatsApp di 0811 1330 659, atau telepon 0251 8400 659. Tim sales kami siap membantu mengatur kunjungan dan memberikan penawaran resmi.',
    },
  ];
};

export const CONTACT_INFO = {
  phone: '0251 8400 659',
  phoneTel: '02518400659',
  email: 'sm@ipbicc.com',
  whatsapp: '0811 1330 659',
  whatsappLink: 'https://wa.me/628111330659',
  address: 'Botani Square Mall, 2nd Floor, Jl. Pajajaran, Central Bogor (Across from Tugu Kujang)',
};

// Default exports for backwards compatibility
export const FACILITIES = getFacilities('id');
export const SERVICES = getServices('id');
export const CLIENTS = getClients('id');
export const TESTIMONIALS = getTestimonials('id');
export const FAQS = getFaqs('id');
