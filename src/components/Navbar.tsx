import React, { useState } from 'react';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import headerLogo from '../assets/images/regenerated_image_1790230184522.png';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Klien', href: '#klien' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Kontak', href: '#kontak' },
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
            className="h-10 sm:h-12 w-auto max-w-[220px] sm:max-w-none object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-8 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#B89753] transition-colors hover:underline hover:underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Direct hotline */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:02518400659"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 py-2 px-3 rounded-md transition-colors font-medium"
            title="Telepon Resmi IICC"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#B89753]" />
            <span className="tabular-nums">0251 8400 659</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1E24] hover:bg-[#B89753] active:bg-[#A38139] rounded-md transition-all shadow-sm hover:shadow-stone-900/10 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89753]"
          >
            <span>Konsultasi Gratis</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B89753] group-hover:text-white" />
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1A1E24] hover:bg-[#B89753] rounded whitespace-nowrap"
          >
            Konsultasi
          </button>
          
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
        <div className="md:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-stone-700 hover:text-[#B89753] border-b border-stone-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/628111330659"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#2C4A3E] font-medium hover:underline flex items-center gap-1.5 py-1"
              >
                <span>WhatsApp Resmi: 0811 1330 659</span>
              </a>
              <a
                href="tel:02518400659"
                className="text-xs text-stone-600 hover:underline flex items-center gap-1.5 py-1"
              >
                <span>Telepon Kantor: 0251 8400 659</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
