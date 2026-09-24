import React from 'react';
import { MapPin, Hotel, ShieldCheck, Clock, Building, Compass, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
            <span>Tentang IICC</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#2C4A3E]">Unit Bisnis Strategis BLST IPB</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1E24] mb-4 text-balance">
            Pusat Konvensi Kelas Dunia di Kota Bogor
          </h2>
          <p className="font-display text-lg sm:text-xl text-[#B89753] font-medium italic mb-6">
            “Mewujudkan panggung bermakna untuk momen paling berarti.”
          </p>
          <p className="text-base text-stone-600 leading-relaxed font-body">
            Sebagai unit bisnis strategis PT Bogor Life Science and Technology (BLST Holding IPB University), IPB International Convention Center (IICC) telah lama menjadi ikon keunggulan penyelenggaraan MICE (Meetings, Incentives, Conferences, Exhibitions) dan resepsi pernikahan prestisius di Jawa Barat.
          </p>
        </div>

        {/* Bento Grid / Key Location & Prestige Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Card: Strategic Landmark & Integration with Picture Backdrop */}
          <div className="md:col-span-8 rounded-xl bg-white border border-stone-200 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
            {/* Visual Photography Background with measured scrim */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Botani Square & Bogor Central Landmark"
                className="w-full h-full object-cover object-center opacity-10 group-hover:opacity-15 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B89753]/10 border border-[#B89753]/25 text-xs font-semibold text-[#A38139] mb-6">
                <MapPin className="w-3.5 h-3.5 text-[#B89753]" />
                <span>Lokasi Ikonik Terintegrasi</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1E24] mb-4">
                Berada di depan Tugu Kujang, Botani Square Mall
              </h3>
              
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-body">
                Terletak tepat di episentrum denyut Kota Bogor, IICC terhubung langsung secara indoor dengan <strong className="text-stone-900 font-semibold">IPB Convention Hotel</strong> dan pusat perbelanjaan prestisius <strong className="text-stone-900 font-semibold">Botani Square Mall</strong>. 
                Memiliki akses tercepat dari Gerbang Tol Baranangsiang (Tol Jagorawi) serta terintegrasi langsung dengan shelter Bus Bandara DAMRI.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#FAF8F5] border border-stone-200 text-[#2C4A3E]">
                  <Hotel className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1E24]">Hotel Terkoneksi</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Akomodasi delegasi & suite pengantin VVIP</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#FAF8F5] border border-stone-200 text-[#B89753]">
                  <Building className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1E24]">Botani Square Mall</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Akses kuliner, perbankan, & retail terpadu</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#FAF8F5] border border-stone-200 text-[#2C4A3E]">
                  <Compass className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1E24]">Akses Tol Jagorawi</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Langsung dari Exit Gerbang Baranangsiang</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Card: The Legacy with Prestige Frame */}
          <div className="md:col-span-4 rounded-xl bg-gradient-to-br from-white to-[#F4F1EA] border border-[#B89753]/30 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
            {/* Visual Photography Background */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80"
                alt="IPB Convention Audience & Stage"
                className="w-full h-full object-cover object-center opacity-5 group-hover:opacity-10 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#B89753]">
                  Reputasi Teruji
                </span>
                <Sparkles className="w-5 h-5 text-[#B89753]" />
              </div>

              <div className="my-4">
                <div className="text-3xl sm:text-4xl font-display font-bold text-[#1A1E24] tracking-tight">
                  Dedikasi & Prestise
                </div>
                <div className="text-base font-semibold text-[#B89753] mt-2">
                  Layanan Berstandar Tinggi
                </div>
                <p className="text-xs text-stone-500 mt-1">Holding BLST IPB University</p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mt-4 font-body">
                Ribuan agenda kenegaraan, wisuda sarjana, simposium saintifik global, serta perayaan janji suci pernikahan telah berlangsung sukses di bawah dedikasi tim profesional IICC.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-stone-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#2C4A3E] shrink-0" />
              <p className="text-xs text-stone-500">
                Unit Bisnis Resmi BLST (PT Bogor Life Science and Technology - IPB)
              </p>
            </div>
          </div>

        </div>

        {/* Feature Visual Strip: 3 Integrated Hub Photos */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="group relative rounded-xl overflow-hidden border border-stone-200 bg-white h-48 shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
              alt="IPB Convention Hotel Terintegrasi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-5 flex flex-col justify-end">
              <span className="text-[11px] font-semibold text-[#B89753] uppercase tracking-wider">Akomodasi Terpadu</span>
              <p className="text-sm font-bold text-white">IPB Convention Hotel & Suites</p>
              <p className="text-[11px] text-stone-200">Akses koridor indoor langsung tanpa keluar gedung</p>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-stone-200 bg-white h-48 shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=800&q=80"
              alt="Botani Square Mall Shopping & Dining"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-5 flex flex-col justify-end">
              <span className="text-[11px] font-semibold text-[#B89753] uppercase tracking-wider">Pusat Belanja & Kuliner</span>
              <p className="text-sm font-bold text-white">Botani Square Mall Lt.2</p>
              <p className="text-[11px] text-stone-200">Ratusan tenant retail, resto premium, & fasilitas perbankan</p>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-stone-200 bg-white h-48 shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80"
              alt="Lobby & Pre-function Area"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-5 flex flex-col justify-end">
              <span className="text-[11px] font-semibold text-[#B89753] uppercase tracking-wider">Akses Mobilitas Cepat</span>
              <p className="text-sm font-bold text-white">Tol Jagorawi & DAMRI Shelter</p>
              <p className="text-[11px] text-stone-200">0 Menit keluar pintu tol Baranangsiang Bogor</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
