import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Mail, MapPin, CheckCircle2, Copy, ExternalLink, Building2, HelpCircle } from 'lucide-react';
import { getFaqs } from '../data/iiccData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface BookingFormSectionProps {
  initialFacility?: string;
  initialService?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialFacility,
  initialService,
}) => {
  const { language } = useLanguage();
  const t = translations[language].booking;
  const faqs = getFaqs(language);

  const [formData, setFormData] = useState({
    namaLengkap: '',
    instansi: '',
    noWhatsApp: '',
    email: '',
    jenisAcara: t.optionsEventType[0],
    estimasiTanggal: '',
    estimasiTamu: t.optionsGuestCount[2],
    ruangDiminati: t.optionsRooms[0],
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

  const generateWhatsAppMessage = () => {
    return `${t.waGreeting}

${t.waPurpose}

${t.waDetailTitle}
• *${t.waName}:* ${formData.namaLengkap || '-'}
• *${t.waInstansi}:* ${formData.instansi || '-'}
• *${t.waPhone}:* ${formData.noWhatsApp || '-'}
• *${t.waEmail}:* ${formData.email || '-'}
• *${t.waType}:* ${formData.jenisAcara}
• *${t.waDate}:* ${formData.estimasiTanggal || (language === 'en' ? 'Flexible / To be confirmed' : 'Menyesuaikan Jadwal Kosong')}
• *${t.waGuests}:* ${formData.estimasiTamu}
• *${t.waRoom}:* ${formData.ruangDiminati}
• *${t.waNotes}:* ${formData.pesanKhusus || (language === 'en' ? 'Please provide availability and rate proposal.' : 'Mohon informasi ketersediaan tanggal dan paket penawaran')}

${t.waClosing}`;
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
            <span>{t.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#2C4A3E]">{t.eyebrowSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1E24] mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-base text-stone-600 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Form & Official Info / FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1E24] mb-2">
              {t.title}
            </h3>
            <p className="text-xs text-stone-500 mb-8 font-normal">
              {language === 'en'
                ? 'Fields marked with (*) are required. Submissions directly connect to official WhatsApp 0811 1330 659.'
                : 'Kolom bertanda (*) wajib diisi. Formulir akan otomatis terhubung ke WhatsApp resmi 0811 1330 659.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Nama & Instansi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="namaLengkap" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {t.fullName} <span className="text-[#B89753]">*</span>
                  </label>
                  <input
                    id="namaLengkap"
                    type="text"
                    required
                    value={formData.namaLengkap}
                    onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="instansi" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {t.institution}
                  </label>
                  <input
                    id="instansi"
                    type="text"
                    value={formData.instansi}
                    onChange={(e) => setFormData({ ...formData, instansi: e.target.value })}
                    placeholder={t.institutionPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: No. WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="noWhatsApp" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {t.whatsapp} <span className="text-[#B89753]">*</span>
                  </label>
                  <input
                    id="noWhatsApp"
                    type="tel"
                    required
                    value={formData.noWhatsApp}
                    onChange={(e) => setFormData({ ...formData, noWhatsApp: e.target.value })}
                    placeholder={t.whatsappPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {t.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Jenis Acara & Estimasi Tanggal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="jenisAcara" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {t.eventType}
                  </label>
                  <select
                    id="jenisAcara"
                    value={formData.jenisAcara}
                    onChange={(e) => setFormData({ ...formData, jenisAcara: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  >
                    {t.optionsEventType.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="estimasiTanggal" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {t.estimatedDate}
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
                    {t.guestCount}
                  </label>
                  <select
                    id="estimasiTamu"
                    value={formData.estimasiTamu}
                    onChange={(e) => setFormData({ ...formData, estimasiTamu: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  >
                    {t.optionsGuestCount.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="ruangDiminati" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    {t.desiredRoom}
                  </label>
                  <select
                    id="ruangDiminati"
                    value={formData.ruangDiminati}
                    onChange={(e) => setFormData({ ...formData, ruangDiminati: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors"
                  >
                    {t.optionsRooms.map((opt) => (
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
                  {t.notes}
                </label>
                <textarea
                  id="pesanKhusus"
                  rows={3}
                  value={formData.pesanKhusus}
                  onChange={(e) => setFormData({ ...formData, pesanKhusus: e.target.value })}
                  placeholder={t.notesPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#B89753] focus:bg-white focus:ring-1 focus:ring-[#B89753] transition-colors font-normal"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-sm font-semibold tracking-wide text-white bg-[#1A1E24] hover:bg-[#B89753] active:bg-[#A38139] rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89753]"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>{t.submitBtn}</span>
                </button>
              </div>

              {/* Submission info text */}
              <p className="text-[11px] text-center text-stone-500">
                {language === 'en'
                  ? 'Your information is safely transmitted directly to the official IICC event concierge at 0811 1330 659.'
                  : 'Data Anda aman dan diteruskan langsung ke WhatsApp Sales Resmi IICC: 0811 1330 659.'}
              </p>

            </form>

            {/* Submission Success Dialog / Copy Fallback */}
            {formSubmitted && (
              <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-emerald-500/40 animate-in fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-stone-900">
                      {t.successTitle}
                    </p>
                    <p className="text-xs text-stone-600 mt-1">
                      {t.successDesc}
                    </p>
                    
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={copyToClipboard}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white hover:bg-stone-100 border border-stone-200 text-xs text-stone-700 transition-colors shadow-sm"
                      >
                        <Copy className="w-3.5 h-3.5 text-[#B89753]" />
                        <span>{copiedText ? t.copied : t.copyText}</span>
                      </button>
                      
                      <a
                        href={`https://wa.me/628111330659?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#2C4A3E] hover:bg-[#233b31] text-xs text-white transition-colors shadow-sm"
                      >
                        <span>{t.openWa}</span>
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
            
            {/* Official Profile & Contacts Box */}
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              {/* Venue Photographic Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="IICC Sales & Concierge Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-3 left-6 right-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
                    {language === 'en' ? 'Sales & Event Concierge Office' : 'Kantor Sales & Event Concierge'}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    IPB International Convention Center
                  </h4>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-6">
                <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B89753] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">
                        {language === 'en' ? 'Building Address:' : 'Alamat Gedung:'}
                      </strong>
                      <span>Botani Square Mall Lt.2, Jl. Pajajaran, Bogor Tengah (Depan Tugu Kujang)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#2C4A3E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">
                        {language === 'en' ? 'Official WhatsApp:' : 'WhatsApp Resmi:'}
                      </strong>
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
                      <strong className="text-stone-900 block font-semibold">
                        {language === 'en' ? 'Office Telephone:' : 'Telepon Kantor:'}
                      </strong>
                      <a href="tel:02518400659" className="text-stone-700 hover:text-stone-900 font-mono">
                        0251 8400 659
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#B89753] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">
                        {language === 'en' ? 'Official Email:' : 'Email Resmi:'}
                      </strong>
                      <a href="mailto:sm@ipbicc.com" className="text-stone-700 hover:text-stone-900 font-mono">
                        sm@ipbicc.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#2C4A3E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">
                        {language === 'en' ? 'Entity Status:' : 'Status Entitas:'}
                      </strong>
                      <span>
                        {language === 'en'
                          ? 'Strategic Business Unit of BLST (PT Bogor Life Science and Technology - IPB University Holding)'
                          : 'Unit Bisnis Strategis BLST (PT Bogor Life Science and Technology - Holding IPB University)'}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89753] mb-4">
                <HelpCircle className="w-4 h-4 text-[#2C4A3E]" />
                <span>{t.faqTitle}</span>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full text-left text-sm font-semibold text-[#1A1E24] hover:text-[#B89753] transition-colors flex justify-between items-center gap-2"
                    >
                      <span>{faq.question}</span>
                      <span className="text-[#B89753] font-mono text-base font-bold">
                        {expandedFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {expandedFaq === idx && (
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed font-normal">
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
