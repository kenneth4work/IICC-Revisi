import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Mail, MapPin, CheckCircle2, Copy, ExternalLink, Building2, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/iiccData';

interface BookingFormSectionProps {
  initialFacility?: string;
  initialService?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialFacility,
  initialService,
}) => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    instansi: '',
    noWhatsApp: '',
    email: '',
    jenisAcara: 'Meeting & Konvensi',
    estimasiTanggal: '',
    estimasiTamu: 'Skala Menengah (Gathering / Seminar)',
    ruangDiminati: 'Grand Ballroom',
    pesanKhusus: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Sync initial selections if passed from parent
  useEffect(() => {
    if (initialFacility) {
      setFormData((prev) => ({ ...prev, ruangDiminati: initialFacility }));
    }
  }, [initialFacility]);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, jenisAcara: initialService }));
    }
  }, [initialService]);

  const jenisAcaraOptions = [
    'Meeting & Konvensi',
    'Wedding & Resepsi',
    'Katering & Jamuan',
    'Exhibition & Pameran',
    'Wisuda & Akademik',
    'Gala Dinner & Perayaan',
    'Lainnya',
  ];

  const estimasiTamuOptions = [
    'Skala Intim (Meeting Dewan Direksi / FGD)',
    'Skala Terbatas (Workshop / Seminar Khusus)',
    'Skala Menengah (Gathering / Seminar)',
    'Skala Besar (Konferensi / Resepsi Pernikahan)',
    'Skala Akbar (Grand Ballroom / Wisuda / Simposium Nasional)',
  ];

  const ruangDiminatiOptions = [
    'Grand Ballroom (Pillar-less)',
    'Ballroom Flexi (Ballroom 1 / 2 / 3)',
    'Meeting Room Suites (Salak, Pangrango, dll.)',
    'Paket Full Venue (Ballroom + Meeting Room)',
    'Belum Menentukan (Konsultasi Rekomendasi)',
  ];

  const generateWhatsAppMessage = () => {
    return `Halo Tim Reservasi IPB International Convention Center (IICC),

Saya ingin berkonsultasi dan meminta penawaran resmi untuk rencana acara kami:

📋 *DETAIL INQUIRY ACARA:*
• *Nama Lengkap:* ${formData.namaLengkap || '-'}
• *Instansi / Perusahaan:* ${formData.instansi || '-'}
• *No. WhatsApp:* ${formData.noWhatsApp || '-'}
• *Email:* ${formData.email || '-'}
• *Jenis Acara:* ${formData.jenisAcara}
• *Estimasi Tanggal Acara:* ${formData.estimasiTanggal || 'Menyesuaikan Jadwal Kosong'}
• *Estimasi Jumlah Tamu:* ${formData.estimasiTamu}
• *Ruang Diminati:* ${formData.ruangDiminati}
• *Kebutuhan Khusus / Catatan:* ${formData.pesanKhusus || 'Mohon informasi ketersediaan tanggal dan paket penawaran'}

Mohon konfirmasi dan jadwalkan sesi survei lokasi di IICC Botani Square Lt.2. Terima kasih.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.namaLengkap.trim() || !formData.noWhatsApp.trim()) {
      return;
    }

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/628111330659?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const copyToClipboard = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  return (
    <section id="kontak" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
            <span>Reservasi & Konsultasi</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#2C4A3E]">Respon Cepat Tim Sales</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1E24] mb-4 text-balance">
            Rencanakan Acara Prestisius Anda Bersama IICC
          </h2>
          <p className="text-base text-stone-600 font-body leading-relaxed">
            Isi formulir di bawah ini untuk terhubung langsung dengan konsultan acara resmi IICC via WhatsApp atau hubungi hotline kami untuk kunjungan survei lokasi di Botani Square Mall Lt.2 Bogor.
          </p>
        </div>

        {/* 2-Column Layout: Form & Official Info / FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1E24] mb-2">
              Formulir Konsultasi & Penawaran Acara
            </h3>
            <p className="text-xs text-stone-500 mb-8 font-body">
              Kolom bertanda (*) wajib diisi. Formulir akan otomatis terhubung ke WhatsApp resmi <strong className="text-stone-800">0811 1330 659</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Nama & Instansi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="namaLengkap" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Nama Lengkap <span className="text-[#B89753]">*</span>
                  </label>
                  <input
                    id="namaLengkap"
                    type="text"
                    required
                    value={formData.namaLengkap}
                    onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
                    placeholder="Contoh: Budi Prasetyo"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="instansi" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Instansi / Perusahaan
                  </label>
                  <input
                    id="instansi"
                    type="text"
                    value={formData.instansi}
                    onChange={(e) => setFormData({ ...formData, instansi: e.target.value })}
                    placeholder="Kementerian / PT / Pribadi"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: No. WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="noWhatsApp" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    No. WhatsApp Aktif <span className="text-[#B89753]">*</span>
                  </label>
                  <input
                    id="noWhatsApp"
                    type="tel"
                    required
                    value={formData.noWhatsApp}
                    onChange={(e) => setFormData({ ...formData, noWhatsApp: e.target.value })}
                    placeholder="0812xxxxxxx"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="budi@instansi.go.id"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Jenis Acara & Estimasi Tanggal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="jenisAcara" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Jenis Acara
                  </label>
                  <select
                    id="jenisAcara"
                    value={formData.jenisAcara}
                    onChange={(e) => setFormData({ ...formData, jenisAcara: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  >
                    {jenisAcaraOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="estimasiTanggal" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Estimasi Tanggal Acara
                  </label>
                  <input
                    id="estimasiTanggal"
                    type="date"
                    value={formData.estimasiTanggal}
                    onChange={(e) => setFormData({ ...formData, estimasiTanggal: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: Estimasi Tamu & Ruang Diminati */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="estimasiTamu" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Estimasi Jumlah Tamu
                  </label>
                  <select
                    id="estimasiTamu"
                    value={formData.estimasiTamu}
                    onChange={(e) => setFormData({ ...formData, estimasiTamu: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  >
                    {estimasiTamuOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="ruangDiminati" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Ruang Diminati
                  </label>
                  <select
                    id="ruangDiminati"
                    value={formData.ruangDiminati}
                    onChange={(e) => setFormData({ ...formData, ruangDiminati: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  >
                    {ruangDiminatiOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Pesan Khusus */}
              <div>
                <label htmlFor="pesanKhusus" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Pesan / Kebutuhan Khusus
                </label>
                <textarea
                  id="pesanKhusus"
                  rows={3}
                  value={formData.pesanKhusus}
                  onChange={(e) => setFormData({ ...formData, pesanKhusus: e.target.value })}
                  placeholder="Ceritakan detail rencana Anda, seperti kebutuhan katering, LED videowall, atau jadwal survei lokasi..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors font-body"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-sm font-semibold tracking-wide text-white bg-[#1A1E24] hover:bg-[#B89753] active:bg-[#A38139] rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89753]"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>💬 Kirim via WhatsApp (Resmi IICC)</span>
                </button>
              </div>

              {/* Submission info text */}
              <p className="text-[11px] text-center text-stone-500">
                Data Anda aman dan diteruskan langsung ke WhatsApp Sales Resmi IICC: <span className="text-stone-800 font-semibold font-mono">0811 1330 659</span>.
              </p>

            </form>

            {/* Submission Success Dialog / Copy Fallback */}
            {formSubmitted && (
              <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-emerald-500/40 animate-in fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-stone-900">
                      Permintaan Anda Berhasil Diformat!
                    </p>
                    <p className="text-xs text-stone-600 mt-1">
                      Jika WhatsApp tidak terbuka otomatis pada perangkat Anda, salin pesan di bawah ini atau klik tombol kirim ulang.
                    </p>
                    
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={copyToClipboard}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white hover:bg-stone-100 border border-stone-200 text-xs text-stone-700 transition-colors shadow-sm"
                      >
                        <Copy className="w-3.5 h-3.5 text-[#B89753]" />
                        <span>{copiedText ? 'Tersalin ke Clipboard!' : 'Salin Teks WhatsApp'}</span>
                      </button>
                      
                      <a
                        href={`https://wa.me/628111330659?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#2C4A3E] hover:bg-[#233b31] text-xs text-white transition-colors shadow-sm"
                      >
                        <span>Buka WhatsApp Lagi</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Column 2: Official Contact Information & Fast FAQ (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Official Profile & Contacts Box with Real Venue Photo Header */}
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              {/* Venue Front/Reception Photographic Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="IICC Sales & Concierge Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-3 left-6 right-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
                    Sales & Event Concierge Office
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-1">
                    IPB International Convention Center
                  </h4>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-6">
                <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B89753] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Alamat Gedung:</strong>
                      <span>Botani Square Mall, Jl. Pajajaran, Bogor Tengah (Depan Tugu Kujang)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#2C4A3E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">WhatsApp Resmi:</strong>
                      <a 
                        href="https://wa.me/628111330659" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#A38139] hover:underline font-mono font-semibold"
                      >
                        0811 1330 659
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#B89753] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Telepon Kantor:</strong>
                      <a href="tel:02518400659" className="text-stone-700 hover:text-stone-900 font-mono">
                        0251 8400 659
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#B89753] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Email Resmi:</strong>
                      <a href="mailto:sm@ipbicc.com" className="text-stone-700 hover:text-stone-900 font-mono">
                        sm@ipbicc.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#2C4A3E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Status Entitas:</strong>
                      <span>Unit Bisnis Strategis BLST (PT Bogor Life Science and Technology - Holding IPB University)</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89753] mb-4">
                <HelpCircle className="w-4 h-4 text-[#2C4A3E]" />
                <span>Pertanyaan Sering Diajukan</span>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full text-left font-display text-sm font-semibold text-[#1A1E24] hover:text-[#B89753] transition-colors flex justify-between items-center gap-2"
                    >
                      <span>{faq.question}</span>
                      <span className="text-[#B89753] font-mono text-base font-bold">
                        {expandedFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {expandedFaq === idx && (
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed font-body">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
