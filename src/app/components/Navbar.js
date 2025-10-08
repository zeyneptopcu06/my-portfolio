// src/components/Navbar.js
'use client'; 

import Link from 'next/link';
// Deneyim, Projeler, vb. gibi bölümlerin ID'lerini belirliyoruz
const navItems = [
  { name: 'Hakkımda', href: '#hakkimda' }, // Hakkımda genelde en üsttür
  { name: 'Deneyim', href: '#deneyim' },
  { name: 'Projeler', href: '#projeler' },
  { name: 'Yetenekler', href: '#yetenekler' },
  { name: 'İletişim', href: '#iletisim' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Sol Taraftaki İsim */}
        <Link href="#hakkimda" className="text-2xl font-bold text-teal-400">
          Ahmet Yılmaz
        </Link>
        
        {/* Sağ Taraftaki Menü Öğeleri */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            // Link yerine <a> etiketi kullanıyoruz, çünkü sadece bir ID'ye yönlendiriyor
            <a 
              key={item.name} 
              href={item.href} // Burası #deneyim, #projeler gibi ID'ler olacak
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