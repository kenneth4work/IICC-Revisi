/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { AboutSection } from './components/AboutSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ServicesSection } from './components/ServicesSection';
import { ClientsSection } from './components/ClientsSection';
import { GallerySection } from './components/GallerySection';
import { BookingFormSection } from './components/BookingFormSection';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedFacilityForForm, setSelectedFacilityForForm] = useState<string | undefined>(undefined);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>(undefined);

  const scrollToContact = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFacility = (facilityName: string) => {
    setSelectedFacilityForForm(facilityName);
    scrollToContact();
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForForm(serviceName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-[#B89753]/20 selection:text-stone-900">
      
      {/* 1. Navigation Bar */}
      <Navbar onOpenBooking={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero onOpenBooking={scrollToContact} />

        {/* 3. Marquee Strip */}
        <MarqueeStrip />

        {/* 4. Tentang Kami (About) */}
        <AboutSection />

        {/* 5. Fasilitas Unggulan (Products) */}
        <FacilitiesSection onSelectFacility={handleSelectFacility} />

        {/* 6. One Stop Solution (Layanan) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 7. Klien Terpercaya (Clients) */}
        <ClientsSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* 8. CTA Band & Contact Form */}
        <BookingFormSection 
          initialFacility={selectedFacilityForForm} 
          initialService={selectedServiceForForm} 
        />

      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating Concierge WhatsApp Button */}
      <aside 
        aria-label="Kontak Cepat WhatsApp"
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href="https://wa.me/628111330659?text=Halo%20IICC,%20saya%20ingin%20berkonsultasi%20mengenai%20reservasi%20acara%20di%20IPB%20International%20Convention%20Center."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#2C4A3E] hover:bg-[#233b31] text-white shadow-xl shadow-stone-800/15 hover:shadow-stone-800/25 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#B89753] focus:ring-offset-2 focus:ring-offset-[#FAF8F5] border border-white/20"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap">
            Chat WhatsApp Resmi
          </span>
        </a>
      </aside>

    </div>
  );
}
