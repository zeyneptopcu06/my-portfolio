// src/app/layout.js

import './globals.css';

export const metadata = {
  title: 'Benim Projem',
  description: 'Kendi portfolyo veya proje sitesi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="dark">
      <head>
        {/* 🔹 Font Awesome bağlantısı */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+g3fY+Yb+lw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
