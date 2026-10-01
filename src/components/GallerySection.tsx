import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/iiccData';
import { Maximize2, X, Users } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const [activeImageModal, setActiveImageModal] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filterTabs = ['Semua', 'Konvensi', 'Wedding', 'Meeting', 'Banquet'];

  const filteredItems = activeFilter === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeri" className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
              <span>Dokumentasi Acara</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#2C4A3E]">Portfolio Momen Megah</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#1A1E24] mb-3 text-balance">
              Galeri Acara & Kemegahan Ruang
            </h2>
            <p className="text-base text-stone-600 font-body leading-relaxed">
              Jelajahi visualisasi tata letak panggung, kemewahan resepsi pernikahan, dan kesiapan fasilitas MICE kelas dunia di IICC Bogor.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F5] border border-stone-200 rounded-lg overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeFilter === tab
                    ? 'bg-[#1A1E24] text-white font-semibold shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImageModal(item)}
              className="group relative rounded-xl bg-white border border-stone-200 hover:border-[#B89753]/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Visual Card Media Container with Photography */}
              <div className="relative h-64 w-full overflow-hidden bg-stone-900 flex flex-col justify-between">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual gradient scrim for crisp typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-stone-950/20 pointer-events-none" />

                {/* Top labels */}
                <div className="relative z-10 p-5 flex items-center justify-end text-xs">
                  <div className="p-2 rounded-full bg-black/60 backdrop-blur-sm text-[#B89753] group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom title & capacity inside preview */}
                <div className="relative z-10 p-5 pt-0">
                  <span className="text-[11px] font-mono text-[#F4F1EA] flex items-center gap-1.5 mb-1.5 bg-black/60 backdrop-blur-sm w-fit px-2 py-0.5 rounded">
                    <Users className="w-3 h-3 text-[#B89753]" />
                    <span>{item.capacity}</span>
                  </span>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#B89753] transition-colors drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Bottom brief info */}
              <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <span className="truncate pr-2">{item.description}</span>
                <span className="text-[#A38139] font-medium shrink-0 group-hover:underline">Lihat Detail →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Image Detail Modal */}
        {activeImageModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-xl overflow-hidden shadow-2xl">
              <div className="p-6 bg-[#FAF8F5] flex items-center justify-between border-b border-stone-200">
                <div>
                  <span className="text-xs text-[#B89753] font-semibold tracking-wider uppercase">
                    {activeImageModal.category} · {activeImageModal.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#1A1E24] mt-0.5">
                    {activeImageModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveImageModal(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Large Photo Display */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-950">
                <img
                  src={activeImageModal.image}
                  alt={activeImageModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/70 backdrop-blur-sm text-xs text-white mb-2 border border-white/20 w-fit">
                    <Users className="w-3.5 h-3.5 text-[#B89753]" />
                    <span>Daya Tampung: {activeImageModal.capacity}</span>
                  </div>
                  <p className="text-sm text-stone-200 leading-relaxed font-body drop-shadow">
                    {activeImageModal.description}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  IPB International Convention Center · Botani Square Lt.2
                </span>
                <a
                  href="#kontak"
                  onClick={() => setActiveImageModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1A1E24] hover:bg-[#B89753] rounded transition-colors shadow-sm"
                >
                  Konsultasikan Acara Serupa
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
