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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      {/* Top Gold Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#B89753]/20 via-[#B89753] to-[#B89753]/20" aria-hidden="true" />

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        
        {/* Zone 1: Official Brand Logo */}
        <a 
          href="#" 
          className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89753] rounded-lg py-1 transition-opacity hover:opacity-90"
          aria-label="IPB International Convention Center"
        >
          <img 
            src={headerLogo} 
            alt="IPB International Convention Center Logo" 
            className="h-9 sm:h-10 md:h-11 w-auto object-contain block"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Neat & Balanced Navigation Links */}
        <nav 
          aria-label="Main Navigation" 
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-xs xl:text-sm font-semibold tracking-wide text-stone-700 hover:text-[#B89753] hover:bg-[#FAF8F5] transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          {/* Language Switcher */}
          <LanguageToggle />

          {/* Subtle Vertical Divider */}
          <div className="h-5 w-px bg-stone-200" aria-hidden="true" />

          {/* Official Hotline */}
          <a
            href="tel:02518400659"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-[#B89753] px-2.5 py-1.5 rounded-md transition-colors font-medium tabular-nums"
            title={t.callUs}
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#B89753]" />
            <span>0251 8400 659</span>
          </a>

          {/* Primary Consultation Button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1E24] hover:bg-[#B89753] active:bg-[#A38139] rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89753]"
          >
            <span>{t.consultBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B89753]" />
          </button>
        </div>

        {/* Zone 4: Mobile & Tablet Controls (Below lg breakpoint) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          <LanguageToggle />

          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#1A1E24] hover:bg-[#B89753] rounded-lg transition-all whitespace-nowrap shadow-sm"
          >
            <span>{t.consultBtn}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B89753] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean & Organized) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-stone-700 hover:text-[#B89753] hover:bg-[#FAF8F5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-stone-100 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#1A1E24] hover:bg-[#B89753] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-sm"
            >
              {t.consultBtn}
            </button>

            <div className="flex flex-col gap-1.5 pt-1 text-xs text-stone-600">
              <a
                href="tel:02518400659"
                className="hover:text-[#B89753] flex items-center gap-2 py-1 font-medium"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#B89753]" />
                <span>Kantor: 0251 8400 659</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
