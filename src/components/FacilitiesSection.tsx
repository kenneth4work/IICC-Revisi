import React, { useState } from 'react';
import { FACILITIES, FacilityItem } from '../data/iiccData';
import { Users, Maximize, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { FacilityModal } from './FacilityModal';

interface FacilitiesSectionProps {
  onSelectFacility: (facilityName: string) => void;
}

type LayoutType = 'theater' | 'classroom' | 'roundTable' | 'uShape';

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onSelectFacility }) => {
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>('theater');
  const [activeModalFacility, setActiveModalFacility] = useState<FacilityItem | null>(null);

  const layoutLabels: Record<LayoutType, string> = {
    theater: 'Theater',
    classroom: 'Classroom',
    roundTable: 'Banquet (Round)',
    uShape: 'U-Shape',
  };

  return (
    <section id="fasilitas" className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
              <span>Venue & Ruang Pertemuan</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#2C4A3E]">Kapasitas Fleksibel</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1E24] mb-3 text-balance">
              Fasilitas Unggulan IICC
            </h2>
            <p className="text-base text-stone-600 font-body leading-relaxed">
              Dirancang dengan standar akustik premium, tata cahaya adaptif, dan infrastruktur multimedia mutakhir untuk memastikan kesuksesan setiap gelaran acara.
            </p>
          </div>

          {/* Interactive Layout Filter for real-time capacity view */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xs text-stone-500 font-medium whitespace-nowrap">Mode Tata Letak:</span>
            <div className="inline-flex p-1 bg-[#FAF8F5] border border-stone-200 rounded-lg">
              {(Object.keys(layoutLabels) as LayoutType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedLayout(type)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedLayout === type
                      ? 'bg-[#1A1E24] text-white font-semibold shadow-sm'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white'
                  }`}
                >
                  {layoutLabels[type]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Prominent Facility Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility) => {
            return (
              <div
                key={facility.id}
                className="group relative rounded-xl bg-white border border-stone-200 hover:border-[#B89753]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
              >
                {/* Visual Header / Architectural Photo & Simulation Canvas */}
                <div className="relative h-60 bg-stone-900 overflow-hidden border-b border-stone-200 flex flex-col justify-end">
                  {/* Real Facility Photo */}
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient Scrim for crisp text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/50 to-stone-950/30 pointer-events-none" />

                  {/* Feature Focus Banner */}
                  <div className="relative z-10 p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-display font-bold text-white drop-shadow-md">
                        {facility.name}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-[#B89753] font-bold bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                        {layoutLabels[selectedLayout]} Ready
                      </span>
                    </div>
                    <p className="text-xs text-stone-200 mt-1 drop-shadow">
                      Konfigurasi fleksibel untuk format seated maupun standing reception
                    </p>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#1A1E24] group-hover:text-[#B89753] transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#A38139] mt-1 mb-4">
                      {facility.subtitle}
                    </p>
                    
                    <p className="text-sm text-stone-600 font-body leading-relaxed mb-6">
                      {facility.description}
                    </p>

                    {/* Key feature list */}
                    <div className="space-y-2 mb-6">
                      {facility.highlightSpecs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                          <span className="text-[#B89753] font-bold mt-0.5">•</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalFacility(facility)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-[#B89753] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detail Spesifikasi</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectFacility(facility.name)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1E24] hover:bg-[#B89753] rounded transition-colors"
                    >
                      <span>Pilih Ruang</span>
                      <ArrowRight className="w-3 h-3 text-[#B89753] group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-depth Room Specs */}
        {activeModalFacility && (
          <FacilityModal
            facility={activeModalFacility}
            onClose={() => setActiveModalFacility(null)}
            onSelectFacility={(name) => {
              setActiveModalFacility(null);
              onSelectFacility(name);
            }}
          />
        )}

      </div>
    </section>
  );
};
