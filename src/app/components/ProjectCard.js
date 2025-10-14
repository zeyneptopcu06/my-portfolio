'use client'; 

import { useState } from "react";
import { Github, Globe } from 'lucide-react'; 

export default function ProjectCard({ project }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mb-6 border border-gray-700">
      
      {/* Proje Başlığı */}
      <h3 className="text-2xl font-bold text-teal-400 mb-2">{project.title}</h3>
      
      {/* Açıklama */}
      <p className="text-gray-300 mb-4">
        {showFull
          ? project.description
          : project.description.length > 120
          ? project.description.slice(0, 120) + "..."
          : project.description}
      </p>

      {/* “Daha fazla / Daha az” butonu */}
      {project.description.length > 120 && (
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-sm text-teal-400 hover:text-teal-300 transition mb-4"
        >
          {showFull ? "Daha az göster ▲" : "Daha fazla göster ▼"}
        </button>
      )}

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
      </div>
    </div>
  );
}
