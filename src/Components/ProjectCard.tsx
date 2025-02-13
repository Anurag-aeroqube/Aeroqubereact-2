import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  alt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, alt }) => {
  return (
    <div className="relative group overflow-hidden">
      <img src={image} alt={alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 left-0 bg-black/80 text-white px-4 py-2 rounded">{title}</div>
    </div>
  );
};

export default ProjectCard;
