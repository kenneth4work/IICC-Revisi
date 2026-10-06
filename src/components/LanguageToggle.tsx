import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
  isCompact?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', isCompact = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-0.5 rounded-full bg-stone-100 border border-stone-200 shadow-inner ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        aria-label="Bahasa Indonesia"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          language === 'id'
            ? 'bg-[#1A1E24] text-white shadow-sm'
            : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
        }`}
      >
        <span className="text-[12px] leading-none">🇮🇩</span>
        <span className="tracking-wide">ID</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="English"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-[#1A1E24] text-white shadow-sm'
            : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
        }`}
      >
        <span className="text-[12px] leading-none">🇬🇧</span>
        <span className="tracking-wide">EN</span>
      </button>
    </div>
  );
};
