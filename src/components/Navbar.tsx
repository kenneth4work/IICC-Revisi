import React, { useState } from 'react';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { LanguageToggle } from './LanguageToggle';
import headerLogo from '../assets/images/regenerated_image_1790230184522.png';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].navbar;

  const navLinks = [
    { label: t.about, href: '#tentang' },
    { label: t.facilities, href: '#fasilitas' },
    { label: t.services, href: '#layanan' },
    { label: t.clients, href: '#klien' },
    { label: t.contact, href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/90 transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand official logo picture */}
        <a 
          href="#" 
          className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89753] rounded"
          aria-label="IPB International Convention Center"
        >
          <img 
            src={headerLogo} 
            alt="IPB International Convention Center Logo" 
            className="h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-none object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-xs lg:text-[13px] font-medium uppercase tracking-wider text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-[#B89753] transition-colors hover:underline hover:underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action, Hotline & Language Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher Button */}
          <LanguageToggle />

          <a
            href="tel:02518400659"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 py-2 px-3 rounded-md transition-colors font-medium"
            title={t.callUs}
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#B89753]" />
            <span className="tabular-nums">0251 8400 659</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1E24] hover:bg-[#B89753] active:bg-[#A38139] rounded-md transition-all shadow-sm hover:shadow-stone-900/10 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89753]"
          >
            <span>{t.consultBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B89753] group-hover:text-white" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageToggle />
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-stone-900 rounded-md focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <span className="text-xs text-stone-500 font-medium">Bahasa / Language:</span>
            <LanguageToggle />
          </div>

          <div className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-stone-700 hover:text-[#B89753] border-b border-stone-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full mt-2 py-3 px-4 rounded-md bg-[#1A1E24] text-white text-xs font-semibold uppercase tracking-wider text-center"
            >
              {t.consultBtn}
            </button>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/628111330659"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#2C4A3E] font-medium hover:underline flex items-center gap-1.5 py-1"
              >
                <span>WhatsApp: 0811 1330 659</span>
              </a>
              <a
                href="tel:02518400659"
                className="text-xs text-stone-600 hover:underline flex items-center gap-1.5 py-1"
              >
                <span>0251 8400 659</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
