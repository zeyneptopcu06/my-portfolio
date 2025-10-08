// src/data/portfolioData.js

// ----------------------
// 1. DENEYİM VERİLERİ
// ----------------------
export const experiences = [
  {
    title: "Full-Stack Geliştirici",
    company: "Tüya Teknoloji LTD.ŞTİ",
    period: "Ağustos 2024",
    description: "Kullanıcı bazlı veri yönetimi, güvenli oturum sistemi ve modern dashboard tasarımı ile işletmelerin stok süreçlerini daha hızlı ve verimli hale getiren bir full stack proje geliştirdim. Sistem, ölçeklenebilir ve kullanıcı dostu olacak şekilde tasarlandı.",
    techs: ["Next.js", "JavaSpring","PostgreSQL"] // Kullanılan ana teknolojiler
  },
];

// ----------------------
// 2. PROJE VERİLERİ
// ----------------------
export const projects = [
  {
    title: "Stok Takip Sistemi",
    description: "Kullanıcı bazlı veri yönetimi, ürün ve depo takibi, güvenli oturum yönetimi ve modern dashboard tasarımı ile işletmelerin stok süreçlerini daha hızlı ve verimli hale getiren full stack bir proje. Backend tarafında Java Spring Boot ve PostgreSQL, frontend tarafında Next.js kullanıldı. Sistem, ölçeklenebilir ve kullanıcı dostu olacak şekilde tasarlandı.",
    techs: ["Java Spring Boot", "Next.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/...stok-takip", // GitHub linkini ekle
    live: "https://stok-takip.com" // Canlı link eklenirse
  },
  {
    title: "Film Öneri Sistemi",
    description: "Kullanıcıların film arayabileceği, popüler ve türe göre öneriler alabileceği, favori listeleri oluşturabileceği interaktif bir web uygulaması. Backend tarafında Flask ve PostgreSQL kullanılarak API’ler geliştirildi, frontend tarafında Next.js ile modern bir arayüz tasarlandı. Kullanıcı deneyimi odaklı, responsive ve hızlı bir sistem.",
    techs: ["Next.js", "Flask", "PostgreSQL", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/...film-oneri", // GitHub linki
    live: "https://film-oneri.com"
  }
];

// ----------------------
// 3. YETENEK/TEKNOLOJİ VERİLERİ
export const skills = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  // Backend
  { name: "Java Spring", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Flask API", category: "Backend" },

  // Veritabanı
  { name: "PostgreSQL", category: "Veritabanı" },
  { name: "MySQL", category: "Veritabanı" },
];
