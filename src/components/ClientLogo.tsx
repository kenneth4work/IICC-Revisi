import React from 'react';
import logoPertamina from '../assets/images/logo_pertamina.png';
import logoKemenkeu from '../assets/images/logo_kemenkeu.svg';
import logoKkp from '../assets/images/logo_kkp.png';
import logoBappenas from '../assets/images/logo_bappenas.png';
import logoKemenhut from '../assets/images/logo_kemenhut.png';
import logoKemenkes from '../assets/images/logo_kemenkes.png';
import logoBogor from '../assets/images/logo_bogor.png';

interface ClientLogoProps {
  abbreviation: string;
  name: string;
  className?: string;
}

export const ClientLogo: React.FC<ClientLogoProps> = ({ 
  abbreviation, 
  name, 
  className = 'w-12 h-12 sm:w-14 sm:h-14' 
}) => {
  const getImageSource = () => {
    switch (abbreviation.toUpperCase()) {
      case 'PERTAMINA':
        return logoPertamina;
      case 'KEMENKEU':
        return logoKemenkeu;
      case 'KKP RI':
      case 'KKP':
        return logoKkp;
      case 'BAPPENAS':
        return logoBappenas;
      case 'KEMENHUT':
      case 'KLHK':
        return logoKemenhut;
      case 'KEMENKES':
        return logoKemenkes;
      case 'PEMKOT BOGOR':
      case 'BOGOR':
        return logoBogor;
      default:
        return null;
    }
  };

  const imageSrc = getImageSource();

  return (
    <div 
      className={`relative bg-white rounded-xl p-2 border border-stone-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0 overflow-hidden ${className}`}
      title={name}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${name} Official Logo`}
          className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
          loading="lazy"
        />
      ) : (
        <span className="font-mono text-xs font-bold text-[#A38139]">
          {abbreviation.slice(0, 4)}
        </span>
      )}
    </div>
  );
};
