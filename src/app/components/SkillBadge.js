// src/components/SkillBadge.js

export default function SkillBadge({ skill }) {
  // Yetenek seviyesine göre renk belirleme (Örn: Expert için farklı renk)
  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'border-pink-500 text-pink-400'; // Vurgulu renk
      case 'Advanced':
        return 'border-teal-500 text-teal-400'; // Birincil vurgu
      case 'Intermediate':
        return 'border-blue-500 text-blue-400'; // İkincil vurgu
      default:
        return 'border-gray-500 text-gray-400';
    }
  };

  return (
    <div 
      className={`px-4 py-2 text-sm rounded-full border transition duration-200 hover:scale-105 ${getLevelColor(skill.level)}`}
    >
      {/* Sadece yeteneğin adı gösteriliyor */}
      <span className="font-semibold">{skill.name}</span>
      {/* İsteğe bağlı olarak seviyesini de gösterebilirsiniz */}
      {/* <span className="ml-2 text-xs opacity-70">({skill.level})</span> */}
    </div>
  );
}