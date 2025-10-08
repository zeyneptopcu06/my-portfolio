// src/components/ExperienceCard.js

export default function ExperienceCard({ experience }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-teal-400 mb-8">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
        <span className="text-sm text-gray-400">{experience.period}</span>
      </div>
      <p className="text-teal-400 font-medium mb-3">{experience.company}</p>
      <p className="text-gray-300 mb-4">{experience.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {experience.techs.map((tech) => (
          <span 
            key={tech} 
            className="text-xs bg-gray-700 text-teal-300 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}