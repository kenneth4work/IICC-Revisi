import facilityImg1 from '../assets/images/regenerated_image_1790562987470.jpg';
import facilityImg2 from '../assets/images/regenerated_image_1790562989499.jpg';
import facilityImg3 from '../assets/images/regenerated_image_1791252683698.jpg';
import serviceImg1 from '../assets/images/regenerated_image_1791252688283.jpg';
import serviceImg2 from '../assets/images/regenerated_image_1791252692162.jpg';
import serviceImg3 from '../assets/images/regenerated_image_1790563003530.jpg';
import serviceImg4 from '../assets/images/regenerated_image_1790563010347.jpg';
import galleryImg1 from '../assets/images/regenerated_image_1790563011987.jpg';

export type Language = 'id' | 'en';

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

export const getFacilities = (lang: Language = 'id'): FacilityItem[] => {
  if (lang === 'en') {
    return [
      {
        id: 'grand-ballroom',
        name: 'Grand Ballroom',
        subtitle: 'Pillar-less Iconic Venue for Large-Scale Events',
        image: facilityImg1,
        capacityRange: 'Grand Capacity',
        areaSize: 'Spacious Grand Hall',
        ceilingHeight: 'Majestic High Ceiling',
        idealFor: ['Grand Wedding Receptions', 'University Commencements', 'International Conferences', 'State & Corporate Galas'],
        description: 'An architectural masterpiece featuring a pillar-less hall with theater-grade acoustics. Equipped with intelligent lighting arrays, a permanent elegant stage, and a direct grand foyer to warmly welcome VIP delegates and esteemed guests.',
        highlightSpecs: [
          'Pillar-less Architecture ensuring 100% unobstructed sightlines',
          'Integrated High-Definition Audio Visual & Concert Stage Lighting',
          'Giant Indoor LED Videowall with ultra-crisp resolution',
          'Direct VIP Loading Dock & Dedicated Escalator Access',
          'Private VIP Holding Lounge & Exclusive Bridal Dressing Suites',
        ],
        layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
      },
      {
        id: 'ballroom-flexi',
        name: 'Modular Ballroom',
        subtitle: 'Flexible Configuration Units for Versatile Functions',
        image: facilityImg2,
        capacityRange: 'Flexible Capacity',
        areaSize: 'Mid-scale Hall Configurations',
        ceilingHeight: 'Acoustic Comfort Ceiling',
        idealFor: ['Corporate Gatherings', 'National Seminars', 'Intimate Weddings', 'Product Launches'],
        description: 'A modular ballroom designed for independent sessions or unified hall setups using acoustic movable partitions. The ideal balance between privacy, prestige, and flexible seating layouts.',
        highlightSpecs: [
          'Acoustic-rated Moveable Partition Soundproof Isolation',
          'Independent Digital Audio Consoles & Wireless Mic Systems',
          'Dual High-Lumen Laser Projectors & Motorized Dropdown Screens',
          'Adaptive Layout Setups (Round Table, Classroom, Theater)',
          'Integrated Private Foyer for Coffee Breaks & Registration',
        ],
        layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
      },
      {
        id: 'meeting-rooms',
        name: 'Meeting Room Suites',
        subtitle: 'Executive Meeting Room Suites with High-Speed WiFi',
        image: facilityImg3,
        capacityRange: 'Executive Capacity',
        areaSize: 'Exclusive Executive Suites',
        ceilingHeight: 'Modern Ergonomic Ceiling',
        idealFor: ['Ministerial Workgroups', 'Board of Directors Meetings', 'Focus Group Discussions', 'Executive Workshops'],
        description: 'A collection of executive meeting rooms engineered ergonomically with whisper-quiet central climate control, balanced natural lighting, and enterprise-grade dedicated high-speed internet.',
        highlightSpecs: [
          'Exclusive Suite Options: Salak, Pangrango, Kencana, Gede, etc.',
          'Dedicated High-Speed Dedicated Fiber Optic WiFi',
          'Interactive Smart Displays & Hybrid Conference Video Cameras',
          'Ergonomic Executive Leather Chairs & Modular Conference Desks',
          'On-demand Secretarial Support & Dedicated Event Concierge',
        ],
        layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
      },
    ];
  }

  return [
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
      layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
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
      layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
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
      layouts: { theater: 0, classroom: 0, roundTable: 0, uShape: 0, standing: 0 },
    },
  ];
};

export const getServices = (lang: Language = 'id'): ServiceItem[] => {
  if (lang === 'en') {
    return [
      {
        number: 'MICE',
        title: 'Meeting & Convention',
        tagline: 'International Standards for Corporate Meetings & Symposia',
        image: serviceImg1,
        description: 'Accredited convention center for international conferences, ministerial workgroups, academic symposia, and national conventions with enterprise-grade audio-visual support.',
        features: [
          'Multi-camera Hybrid Meeting & Broadcast Live Streaming',
          'State protocol VVIP transit & holding suite',
          'Experienced on-site event coordinator team',
          'Seamless accommodation at IPB Convention Hotel',
        ],
        badge: 'MICE Excellence',
      },
      {
        number: 'WED',
        title: 'Weddings & Celebrations',
        tagline: 'A Luxurious Stage for Once-in-a-Lifetime Vows',
        image: serviceImg2,
        description: 'Bring your dream wedding to life in the elegance of a grand pillar-less Ballroom. Featuring luxury dressing suites, VIP red-carpet arrival, and dedicated coordination with leading decoration vendors.',
        features: [
          'All-Inclusive Wedding packages or Venue-Only rental options',
          'Complimentary bridal suite at integrated IPB Convention Hotel',
          'Concert-grade sound & dynamic stage lighting system',
          'Direct VIP drop-off lobby from Botani Square',
        ],
        badge: 'Dream Weddings',
      },
      {
        number: 'CHEF',
        title: 'Gourmet Catering',
        tagline: 'Authentic Indonesian & International Gastronomy',
        image: serviceImg3,
        description: 'Crafted by our certified in-house culinary brigade under the highest hygiene standards. Featuring diverse buffet selections, signature food stalls, gourmet coffee breaks, and state banquets.',
        features: [
          'HACCP & Halal Compliant Certified Kitchen',
          'Curated authentic Bogor, Indonesian Archipelago, Asian & Western menus',
          'Live interactive cooking stations & artisan pastry dessert displays',
          'Pre-event food tasting session for wedding couples & committees',
        ],
        badge: 'Culinary Mastery',
      },
      {
        number: 'EXPO',
        title: 'Exhibitions & Expos',
        tagline: 'Strategic Exhibition Floor with High Public Footfall',
        image: serviceImg4,
        description: 'Expansive exhibition floors with heavy floor load capacity and distributed three-phase power infrastructure for education expos, career fairs, trade shows, and indoor automotive showcases.',
        features: [
          'Spacious capacity for international standard modular exhibition booths',
          'Direct heavy cargo loading dock access to the event floor',
          'Integrated footfall with Botani Square Mall visitors',
          'Comprehensive fire safety & 24/7 security protocol',
        ],
        badge: 'High Footfall Expo',
      },
    ];
  }

  return [
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
};

export const getClients = (lang: Language = 'id'): ClientItem[] => {
  if (lang === 'en') {
    return [
      { name: 'Ministry of Finance of the Republic of Indonesia', category: 'Ministries & State Institutions', abbreviation: 'KEMENKEU' },
      { name: 'PT Pertamina (Persero)', category: 'State-Owned Enterprises', abbreviation: 'PERTAMINA' },
      { name: 'Ministry of Marine Affairs and Fisheries', category: 'Ministries & State Institutions', abbreviation: 'KKP RI' },
      { name: 'National Development Planning Agency (Bappenas)', category: 'Government Institutions', abbreviation: 'BAPPENAS' },
      { name: 'Ministry of Forestry of the Republic of Indonesia', category: 'Ministries & State Institutions', abbreviation: 'KEMENHUT' },
      { name: 'Ministry of Health of the Republic of Indonesia', category: 'Ministries & State Institutions', abbreviation: 'KEMENKES' },
      { name: 'Bogor City Government', category: 'Regional Government', abbreviation: 'PEMKOT BOGOR' },
    ];
  }
  return [
    { name: 'Kementerian Keuangan RI', category: 'Kementerian & Lembaga', abbreviation: 'KEMENKEU' },
    { name: 'PT Pertamina (Persero)', category: 'Badan Usaha Milik Negara', abbreviation: 'PERTAMINA' },
    { name: 'Kementerian Kelautan & Perikanan', category: 'Kementerian & Lembaga', abbreviation: 'KKP RI' },
    { name: 'Badan Perencanaan Pembangunan Nasional', category: 'Lembaga Pemerintah', abbreviation: 'BAPPENAS' },
    { name: 'Kementerian Kehutanan RI', category: 'Kementerian & Lembaga', abbreviation: 'KEMENHUT' },
    { name: 'Kementerian Kesehatan RI', category: 'Kementerian & Lembaga', abbreviation: 'KEMENKES' },
    { name: 'Pemerintah Kota Bogor', category: 'Pemerintah Daerah', abbreviation: 'PEMKOT BOGOR' },
  ];
};

export const getTestimonials = (lang: Language = 'id') => {
  if (lang === 'en') {
    return [
      {
        quote: 'The National Coordination Meeting at IICC was executed with remarkable precision. Direct access from the Baranangsiang toll gate made travel effortless for all delegates, the sound system was crystal clear, and the catering was exceptional.',
        author: 'H. Sudirman, M.Si.',
        role: 'Chairman of National Committee',
        institution: 'Ministry & State Institution RI',
        event: 'National Coordination Meeting',
      },
      {
        quote: 'The Grand Ballroom at IICC is truly pillar-less, giving our wedding decoration a breathtaking, expansive presence. Our family and guests felt extraordinarily comfortable thanks to direct connections to the hotel and mall.',
        author: 'dr. Sarah & Rayhan, S.T.',
        role: 'Grand Ballroom Wedding Couple',
        institution: 'Wedding Client',
        event: 'Grand Ballroom Reception',
      },
      {
        quote: 'We hosted a multi-day international industry summit. The IICC operations team was remarkably proactive with technical support, LED wall configuration, and hybrid streaming stability.',
        author: 'Ir. Hendra Kusuma',
        role: 'Head of Corporate Communications',
        institution: 'Energy State-Owned Enterprise',
        event: 'Annual Leadership Summit',
      },
    ];
  }
  return [
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
};

export const getFaqs = (lang: Language = 'id') => {
  if (lang === 'en') {
    return [
      {
        question: 'How accessible is IICC from Jakarta and international airports?',
        answer: 'IICC is strategically situated on the 2nd floor of Botani Square Mall, directly facing the iconic Tugu Kujang landmark of Bogor City. From the Jagorawi toll road, take the Baranangsiang exit for direct access. An express DAMRI airport bus shuttle is also stationed within Botani Square.',
      },
      {
        question: 'Is IICC directly integrated with hotel accommodations?',
        answer: 'Yes, IICC features a direct indoor covered walkway connecting to IPB Convention Hotel and Hotel Santika Bogor inside Botani Square, offering utmost convenience for VVIP speakers, organizers, and out-of-town guests.',
      },
      {
        question: 'What is the maximum guest capacity of the Grand Ballroom?',
        answer: 'The pillar-less Grand Ballroom comfortably accommodates large-scale events for standing receptions, theater setups for commencements/symposia, and grand banquet round-table dinners with unobstructed sightlines throughout.',
      },
      {
        question: 'How do I schedule a site survey or book an event date?',
        answer: 'You can complete the consultation form on this website to connect directly with the official IICC sales team via WhatsApp at +62 811 1330 659 or call +62 251 8400 659. Our venue consultants are ready to assist with custom proposals.',
      },
    ];
  }
  return [
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
};

export const CONTACT_INFO = {
  phone: '0251 8400 659',
  phoneTel: '02518400659',
  email: 'sm@ipbicc.com',
  whatsapp: '0811 1330 659',
  whatsappLink: 'https://wa.me/628111330659',
  address: 'Botani Square Mall Lt.2, Jl. Pajajaran, Bogor Tengah 16127 (Depan Tugu Kujang)',
};

// Default exports for backwards compatibility
export const FACILITIES = getFacilities('id');
export const SERVICES = getServices('id');
export const CLIENTS = getClients('id');
export const TESTIMONIALS = getTestimonials('id');
export const FAQS = getFaqs('id');
