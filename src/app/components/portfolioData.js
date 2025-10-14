// src/data/portfolioData.js

// ----------------------
// 1. DENEYİM VERİLERİ
// ----------------------
export const experiences = [
  {
    title: "Full-Stack Geliştirici",
    company: "Tüya Teknoloji LTD.ŞTİ",
    period: "Ağustos 2024",
    description: "Kullanıcı bazlı veri yönetimi, güvenli oturum sistemi ve modern dashboard tasarımı ile işletmelerin stok süreçlerini daha hızlı ve verimli hale getiren bir full stack proje geliştirme ekibinde yer aldım. Sistem, ölçeklenebilir ve kullanıcı dostu olacak şekilde tasarlandı.Geliştirme süreci Jira ile planlanmış ve takip edildi, böylece proje akışı ve görev dağılımı verimli bir şekilde yönetildi.”",
    techs: ["Next.js", "Java Spring Boot","PostgreSQL","Jira"] // Kullanılan ana teknolojiler
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
    github: "https://github.com/zeyneptopcu06/film-neri-sistemi.git", // GitHub linki
    live: "https://film-oneri.com"
  },
  {
  title: "Müzik Öneri Sistemi (Müzika)",
  description: "Kullanıcının ruh hali, müzik türü, enerji seviyesi ve aktivite tercihlerine göre dinamik şarkı önerileri sunan interaktif bir web uygulaması. HTML, CSS ve JavaScript kullanılarak geliştirilmiş sade ve etkileyici bir arayüz, Last.fm API üzerinden gerçek zamanlı müzik verilerini çekmektedir. Kullanıcı deneyimini ön planda tutan sistem, farklı kombinasyonlarla kişiselleştirilmiş müzik önerileri üretir.",
  techs: ["HTML", "CSS", "JavaScript", "Last.fm API"],
  github: "https://github.com/...muzik-oneri", // GitHub linki
  live: "https://muzika.com"
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
  { name: "Java Spring Boot", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Java", category: "Backend" },


  // Veritabanı
  { name: "PostgreSQL", category: "Veritabanı" },
  { name: "MySQL", category: "Veritabanı" },
];
// src/app/components/portfolioData.js

export const education = [
  {
    school: "Tokat Gaziosmanpaşa Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    period: "2021 - 2025",
    description: "Bilgisayar mühendisliği alanında temel teorik ve uygulamalı dersler aldım, veri yapıları, algoritmalar ve web geliştirme üzerine projeler yaptım."
  },
  {
    school: "Yunus Emre Anadolu Lisesi",
    period: "2016 - 2020",
    description: "Fen ve matematik ağırlıklı eğitim aldım, problem çözme ve analitik düşünme becerilerini geliştirdim."
  }
];

