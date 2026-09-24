import React from 'react';
import { X, CheckCircle2, Users, Volume2, ArrowUpRight } from 'lucide-react';
import { FacilityItem } from '../data/iiccData';

interface FacilityModalProps {
  facility: FacilityItem | null;
  onClose: () => void;
  onSelectFacility: (facilityName: string) => void;
}

export const FacilityModal: React.FC<FacilityModalProps> = ({
  facility,
  onClose,
  onSelectFacility,
}) => {
  if (!facility) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-stone-900"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 bg-[#FAF8F5]">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#B89753]">
              Spesifikasi Fasilitas
            </span>
            <h3 id="modal-title" className="font-display text-xl sm:text-2xl font-bold text-[#1A1E24] mt-0.5">
              {facility.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Tutup jendela spesifikasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Facility Photo Preview */}
          <div className="relative h-52 sm:h-64 rounded-lg overflow-hidden border border-stone-200">
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-medium text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                {facility.subtitle}
              </span>
            </div>
          </div>
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-[#FAF8F5] border border-stone-200 text-center">
            <div>
              <p className="text-xs text-stone-500">Luas Area</p>
              <p className="font-semibold text-[#1A1E24] mt-1 tabular-nums">{facility.areaSize}</p>
            </div>
            <div className="border-x border-stone-200">
              <p className="text-xs text-stone-500">Tinggi Plafon</p>
              <p className="font-semibold text-[#1A1E24] mt-1 tabular-nums">{facility.ceilingHeight}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Kapasitas Maks</p>
              <p className="font-semibold text-[#B89753] mt-1 tabular-nums">{facility.capacityRange}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-[#1A1E24] mb-2">Deskripsi Venue</h4>
            <p className="text-sm text-stone-600 leading-relaxed font-body">
              {facility.description}
            </p>
          </div>

          {/* Capacity Breakdown By Setup */}
          <div>
            <h4 className="text-sm font-semibold text-[#1A1E24] mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#B89753]" />
              <span>Pilihan Konfigurasi Tata Letak (Layout)</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded bg-[#FAF8F5] border border-stone-200">
                <span className="text-stone-500">Theater Setup:</span>
                <p className="font-bold text-[#1A1E24] text-sm mt-1">
                  Format Teater Konvensi
                </p>
              </div>
              <div className="p-3 rounded bg-[#FAF8F5] border border-stone-200">
                <span className="text-stone-500">Classroom Setup:</span>
                <p className="font-bold text-[#1A1E24] text-sm mt-1">
                  Format Meja Kelas & Workshop
                </p>
              </div>
              <div className="p-3 rounded bg-[#FAF8F5] border border-stone-200">
                <span className="text-stone-500">Round Table (Banquet):</span>
                <p className="font-bold text-[#1A1E24] text-sm mt-1">
                  Format Jamuan Meja Bundar
                </p>
              </div>
              <div className="p-3 rounded bg-[#FAF8F5] border border-stone-200">
                <span className="text-stone-500">U-Shape Meeting:</span>
                <p className="font-bold text-[#1A1E24] text-sm mt-1">
                  Format Rapat Dewan Direksi
                </p>
              </div>
              <div className="p-3 rounded bg-[#FAF8F5] border border-stone-200">
                <span className="text-stone-500">Standing Reception:</span>
                <p className="font-bold text-[#1A1E24] text-sm mt-1">
                  Format Resepsi Berdiri Megah
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specs List */}
          <div>
            <h4 className="text-sm font-semibold text-[#1A1E24] mb-3 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#B89753]" />
              <span>Spesifikasi & Keunggulan Teknis</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
              {facility.highlightSpecs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2C4A3E] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal for list */}
          <div className="pt-2 border-t border-stone-100">
            <span className="text-xs text-stone-500 font-medium block mb-2">Ideal untuk Penyelenggaraan:</span>
            <div className="flex flex-wrap gap-2 text-xs text-stone-700">
              {facility.idealFor.map((item, idx) => (
                <span key={idx} className="bg-stone-100 px-2.5 py-1 rounded text-stone-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-100 bg-[#FAF8F5]">
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-stone-500 hover:text-stone-800 px-3 py-2 rounded transition-colors"
          >
            Tutup
          </button>
          
          <button
            type="button"
            onClick={() => {
              onSelectFacility(facility.name);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1A1E24] hover:bg-[#B89753] rounded transition-all whitespace-nowrap"
          >
            <span>Reservasi / Konsultasi Ruang Ini</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B89753] group-hover:text-white" />
          </button>
        </div>

      </div>
    </div>
  );
};
