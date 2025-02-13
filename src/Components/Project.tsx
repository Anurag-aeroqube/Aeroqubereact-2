import React from 'react';
import ProjectCard from './ProjectCard';
import house4 from '../assets/house4.jpg'
import Project1 from '../assets/Project1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';

interface Project {
  image: string;
  title: string;
  alt: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    { image: house4, title: 'Summer House', alt: 'Summer House' },
    { image: Project1, title: 'Brick House', alt: 'Brick House' },
    { image: house2, title: 'Renovated', alt: 'Renovated' },
    { image: house3, title: 'Barn House', alt: 'Barn House' },
    { image: Project1, title: 'Modern Villa', alt: 'Modern Villa' },
    { image: house4, title: 'Urban Loft', alt: 'Urban Loft' },
    { image: house3, title: 'Glass House', alt: 'Glass House' },
    { image: house2, title: 'Eco Home', alt: 'Eco Home' },
  ];

  return (
    <section id="projects" className="py-10 mt-10">
      <div className="mx-auto px-1 sm:px-1 py-1 lg:px-5">
        <h2 className="text-3xl text-gray-900 mb-8 ">Projects</h2>
        <hr className='opacity-7 mb-10'></hr>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
