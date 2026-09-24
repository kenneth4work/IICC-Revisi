import React from 'react';
import { MessageSquare, ArrowDown, Building2, Users2, Award, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5] border-b border-stone-200">
      
      {/* Visual Canvas / Pristine Architecture with airy warm ivory scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="IPB International Convention Center Grand Ballroom"
          className="w-full h-full object-cover object-center opacity-10 scale-105 transform motion-safe:animate-pulse transition-transform duration-1000"
          style={{ animationDuration: '8s' }}
        />
        
        {/* Measured light gradient scrim for pristine readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(184,151,83,0.12),transparent_75%)]" />
        
        {/* Subtle architectural grid pattern in light warm tone */}
        <div 
          className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#1A1E24_1px,transparent_1px),linear-gradient(to_bottom,#1A1E24_1px,transparent_1px)] bg-[size:4rem_4rem]" 
        />
        
        {/* Subtle decorative warm gold sunbeam glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#B89753]/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        
        {/* Eyebrow as clean text with typographic separator */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B89753] mb-6 px-4 py-1.5 rounded-full bg-[#B89753]/10 border border-[#B89753]/25 shadow-sm">
          <span>IPB International Convention Center</span>
          <span aria-hidden="true" className="text-[#B89753]">·</span>
          <span>Bogor</span>
        </div>

        {/* H1 with balanced typography in deep charcoal */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1A1E24] mb-6 max-w-4xl text-balance leading-[1.12]">
          Where Prestige Meets Purpose<span className="text-[#B89753]">.</span>
        </h1>

        {/* Sub-headline */}
        <p className="font-body text-base sm:text-xl text-stone-600 max-w-2xl text-balance font-normal leading-relaxed mb-10">
          Pusat konvensi & pernikahan bergengsi di jantung Kota Bogor — pilihan utama kementerian, korporasi nasional, dan resepsi megah keluarga terhormat.
        </p>

        {/* CTA Decision Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#1A1E24] hover:bg-[#B89753] active:bg-[#A38139] rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-stone-900/10 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89753]"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>💬 Konsultasi Sekarang</span>
          </button>

          <a
            href="#fasilitas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-200 rounded-md transition-all shadow-sm hover:shadow whitespace-nowrap"
          >
            <span>Lihat Fasilitas</span>
            <ArrowDown className="w-4 h-4 text-[#B89753]" />
          </a>
        </div>

        {/* Adjacent Proof Strip - Refined & Aesthetic */}
        <div className="w-full max-w-4xl border-t border-stone-200/80 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-left">
            
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#B89753]/40 transition-all duration-300">
              <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#B89753]/25 text-[#B89753] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-sm sm:text-base font-bold text-[#1A1E24] leading-tight">Pengalaman Teruji</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Holding BLST IPB University</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#B89753]/40 transition-all duration-300">
              <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#B89753]/25 text-[#B89753] shrink-0">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-sm sm:text-base font-bold text-[#1A1E24] leading-tight">Klien Nasional</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Kementerian, BUMN & Swasta</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#B89753]/40 transition-all duration-300">
              <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#B89753]/25 text-[#B89753] shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-sm sm:text-base font-bold text-[#1A1E24] leading-tight">Grand Ballroom</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Pillar-less High Ceiling</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#B89753]/40 transition-all duration-300">
              <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#B89753]/25 text-[#B89753] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-sm sm:text-base font-bold text-[#1A1E24] leading-tight">Lokasi Strategis</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Botani Square Mall · Tugu Kujang</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
