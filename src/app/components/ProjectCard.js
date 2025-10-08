// src/components/ProjectCard.js
// İkonları kullanacağımız için buraya da 'use client' ekleyebiliriz
'use client'; 

import { Github, Globe } from 'lucide-react'; 
// İkonları kullanabilmek için lucide-react import edildi

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mb-6 border border-gray-700">
      
      {/* Proje Başlığı */}
      <h3 className="text-2xl font-bold text-teal-400 mb-2">{project.title}</h3>
      
      {/* Açıklama */}
      <p className="text-gray-300 mb-4 h-20 overflow-hidden text-ellipsis">{project.description}</p>
      
      {/* Kullanılan Teknolojiler (Tech Stack) */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techs.map((tech) => (
          <span 
            key={tech} 
            className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full border border-teal-600/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link Butonları */}
      <div className="flex space-x-4 mt-4 pt-3 border-t border-gray-700">
        
        {/* GitHub Linki */}
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-teal-400 transition duration-150"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        
        {/* Canlı Yayın Linki (Eğer varsa) */}
        {project.live && ( 
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-teal-400 transition duration-150"
          >
            <Globe size={20} />
            <span>Canlı Yayın</span>
          </a>
        )}
      </div>
    </div>
  );
}