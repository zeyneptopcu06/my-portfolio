// src/components/Navbar.js
'use client'; 

import Link from 'next/link';
import { useEffect } from 'react';

// Menünün her bir başlığına ait ID'ler
const navItems = [
  { name: 'Hakkımda', href: '#hakkimda' },
  { name: 'Eğitim', href: '#egitim' }, // 📘 Yeni eklendi
  { name: 'Deneyim', href: '#deneyim' },
  { name: 'Projeler', href: '#projeler' },
  { name: 'Yetenekler', href: '#yetenekler' },
  { name: 'İletişim', href: '#iletisim' }, // 📩 Yeni eklendi
];

export default function Navbar() {

  // 👇 Yumuşak kaydırmayı aktif et
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 p-4 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Sol taraftaki isim / logo */}
        <Link href="#hakkimda" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition duration-200">
          Zeynep Topçu
        </Link>
        
        {/* Sağ taraftaki menü öğeleri */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-white hover:text-teal-400 transition duration-150"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
