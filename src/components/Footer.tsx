import React from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import footerLogo from '../assets/images/regenerated_image_1790230185519.png';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-stone-600 text-xs border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block group focus:outline-none" aria-label="IPB International Convention Center">
              <img 
                src={footerLogo} 
                alt="IPB International Convention Center Logo" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </a>
            
            <p className="text-stone-600 text-xs leading-relaxed max-w-md font-normal">
              {t.desc}
            </p>

            <div className="pt-2 text-[11px] text-stone-500">
              {t.holding}
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1E24]">
              {t.navHeader}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#tentang" className="text-stone-600 hover:text-[#B89753] transition-colors">
                  {language === 'en' ? 'About IICC' : 'Tentang IICC'}
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="text-stone-600 hover:text-[#B89753] transition-colors">
                  {language === 'en' ? 'Venues & Ballrooms' : 'Fasilitas & Ballroom'}
                </a>
              </li>
              <li>
                <a href="#layanan" className="text-stone-600 hover:text-[#B89753] transition-colors">
                  {language === 'en' ? 'Services & Solutions' : 'Layanan & Solusi Terpadu'}
                </a>
              </li>
              <li>
                <a href="#klien" className="text-stone-600 hover:text-[#B89753] transition-colors">
                  {language === 'en' ? 'Trusted Clients' : 'Klien Terpercaya'}
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-stone-600 hover:text-[#B89753] transition-colors">
                  {language === 'en' ? 'Consultation & Inquiry' : 'Formulir Konsultasi & Kontak'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1E24]">
              {t.contactHeader}
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89753] shrink-0 mt-0.5" />
                <span>Botani Square Mall Lt.2, Jl. Pajajaran, Bogor Tengah (Depan Tugu Kujang)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B89753] shrink-0" />
                <span>Telp / WA: 0811 1330 659 / 0251 8400 659</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B89753] shrink-0" />
                <span>Email: sm@ipbicc.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#B89753] shrink-0" />
                <span>Website: ipbconventioncenter.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=IPB+International+Convention+Center+Botani+Square+Bogor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-[#A38139] hover:text-[#B89753] font-semibold"
              >
                <span>{language === 'en' ? 'Open Directions in Google Maps →' : 'Buka Petunjuk Arah di Google Maps →'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-stone-500">
            © IPB International Convention Center (BLST Holding IPB University). {t.copyright}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[11px] text-stone-500 hover:text-stone-900 transition-colors p-1"
            aria-label={t.backToTop}
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B89753]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
