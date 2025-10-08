// src/app/layout.js

import './globals.css'; // Tailwind CSS dosyası buraya import edilir
export const metadata = {
  title: 'Benim Projem',  // ← Tarayıcı sekmesinde gözükecek isim
  description: 'Kendi portfolyo veya proje sitesi',
};
export default function RootLayout({ children }) {
  return (
    // Tailwind ile koyu temayı başlatıyoruz
    <html lang="tr" className="dark"> 
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}