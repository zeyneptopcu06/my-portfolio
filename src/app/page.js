// src/app/page.js

// 1. Next.js'e bu dosyanın Client Component olduğunu söyleyin!
'use client'; 

// 2. TÜM GEREKLİ BİLEŞENLERİ İÇERİ ALIN (Import Yolu Kontrol Edildi)
// Eğer 'src' klasörü kullanıyorsanız '../components' yolu genellikle doğrudur.
import Navbar from '../app/components/Navbar'; 
import ExperienceCard from '../app/components/ExperienceCard';
import ProjectCard from '../app/components/ProjectCard'; 
import SkillBadge from '../app/components/SkillBadge';

import { Download, MessageSquare } from 'lucide-react'; 
// Veri dosyasından tüm listeleri süslü parantez içinde içeri alın
import { experiences, projects, skills } from '../app/components/portfolioData'; 

// 1. groupSkillsByCategory FONKSİYONU BURADA TANIMLANMALI
const groupSkillsByCategory = (skills) => {
  return skills.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});
};


// 2. categorizedSkills DEĞİŞKENİ HEMEN BURADA HESAPLANMALI
// Bu, fonksiyonun dışında olduğu için tüm bileşen tarafından erişilebilir olur.
const categorizedSkills = groupSkillsByCategory(skills);
export default function HomePage() {
const PROFILE_IMAGE_URL = 'resim.jpg'; // <-- Bu ifade yeterli!
  return (
    <>
      <Navbar /> 
      
      <main className="flex flex-col items-center p-8 bg-gray-900"> {/* Arka plan rengini main'e verdik */}
        
        {/* -------------------- 
        1. HAKKIMDA (HERO) BÖLÜMÜ - ID: #hakkimda
        -------------------- */}
        <section 
          id="hakkimda" 
          className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center w-full max-w-4xl"
        >
          
          {/* Profil Resmi ve Başlık */}
          <div className="mb-8">
            {/* Profil resmi alanı */}
<div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400 overflow-hidden">
  <img
    src={PROFILE_IMAGE_URL} // 📁 Resim dosyanın yolu
    alt="Zeynep Topçu"
    className="w-full h-full object-cover"
  />
</div>

            <h1 className="text-6xl font-extrabold text-white mb-2">
              Merhaba, Ben <span className="text-teal-400">Zeynep Topçu</span>
            </h1>
          </div>

          

          {/* Detaylı Açıklama */}
          <p className="text-lg text-gray-400 mb-10 max-w-3xl">
            Merhaba! Ben Zeynep Topçu, Bilgisayar Mühendisliği mezunuyum. Yazılım geliştirme alanında özellikle web tabanlı projeler üzerinde çalışıyorum.
Frontend ve backend teknolojilerini bir araya getirerek kullanıcı dostu, işlevsel ve modern uygulamalar geliştirmeyi seviyorum.

Üniversite yıllarım boyunca farklı yazılım projelerinde yer alarak problem çözme, takım çalışması ve sistem tasarımı konularında deneyim kazandım.
Günümüzde web teknolojilerinin hızla geliştiğinin farkındayım; bu yüzden sürekli öğrenmeye, yeni kütüphane ve framework’leri keşfetmeye önem veriyorum.

Hedefim, hem teknik becerilerimi hem de yaratıcı yönümü kullanarak insanların hayatını kolaylaştıran dijital çözümler üretmek.
          </p>

          {/* Butonlar */}
          <div className="flex space-x-4">
           
          <a
  href="/ZeynepTopçucv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 border border-gray-500 hover:border-teal-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
>
  <Download size={20} />
  <span>CV Görüntüle</span>
</a>


            
            
          </div>
        </section>



        {/* -------------------- 
        2. DENEYİM BÖLÜMÜ - ID: #deneyim
        -------------------- */}
        <section id="deneyim" className="w-full max-w-4xl py-16 px-4 pt-24 border-t border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white">İş Deneyimi</h2>
          </div>
          <div className="space-y-8">
            {/* experiences değişkeni buradan kullanılıyor! */}
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </section>


        {/* -------------------- 
        3. PROJELER BÖLÜMÜ - ID: #projeler
        -------------------- */}
        <section id="projeler" className="w-full max-w-4xl py-16 px-4 pt-24 border-t border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white">Öne Çıkan Projeler</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* projects değişkeni buradan kullanılıyor! */}
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* -------------------- 
        {/* -------------------- 
4. YETENEKLER BÖLÜMÜ - ID: #yetenekler
-------------------- */}
<section 
  id="yetenekler" // Menüdeki link buraya kayacak!
  className="w-full max-w-4xl py-16 px-4 pt-24 border-t border-gray-800"
>
  <div className="text-center mb-12">
    <p className="text-sm uppercase tracking-widest text-teal-400 mb-2">TOOLKIT</p>
    <h2 className="text-5xl font-extrabold text-white">Teknik Yetenekler</h2>
    <p className="text-gray-400 mt-2">Uzman olduğum teknolojiler ve araçlar.</p>
  </div>

  {/* Yetenek Listesi */}
  <div className="space-y-8">
    {Object.entries(categorizedSkills).map(([category, skillList]) => (
      <div key={category} className="mb-6">
        {/* Kategori Başlığı */}
        <h3 className="text-3xl font-bold text-gray-300 mb-5 border-b border-gray-700 pb-2">
          {category}
        </h3>
        {/* Yetenek Rozetleri */}
        <div className="flex flex-wrap gap-3">
          {skillList.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
        {/* -------------------- 
        5. İLETİŞİM BÖLÜMÜ - ID: #iletisim
        -------------------- */}
        <section id="iletisim" className="w-full max-w-4xl py-16 px-4 pt-24 border-t border-gray-800">
            {/* ... İletişim kodları buraya gelecek ... */}
        </section>
        {/* FOOTER */}
        <footer className="w-full max-w-4xl text-center py-10 text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 mt-8">
            <p>Zeynep Topçu &copy; {new Date().getFullYear()} | Bilgisayar Mühendisliği | Modern Web Odaklı</p>
        </footer>


      </main>
    </>
  );
}