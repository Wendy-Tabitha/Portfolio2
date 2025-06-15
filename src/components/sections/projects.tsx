import ProjectCard, { type Project } from '@/components/project-card';
import { AnimatedSection } from '@/components/ui/animated-section';

const featuredProjects: Project[] = [
  {
    id: 'project-1',
    title: 'StockWise MSME Platform',
    initialDescription: 'A lightweight yet powerful platform designed to help micro, small and medium enterprises manage daily operations with ease. This solution was built with accessibility, efficiency, and the local business landscape in mind.',
    techStack: ['TypeScript', 'Go', 'React'],
    githubUrl: 'https://github.com/Stella-Achar-Oiro/biasharatrack',
    liveUrl: 'http://biasharatrack.onrender.com',
    imageUrl: '/Biasharatrack.png',
    imageHint: 'online shopping store'
  },
  {
    id: 'project-2',
    title: 'Randomizer Studio',
    initialDescription: 'A web application that provides users with various random generation tools in one place.',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Genkit'],
    githubUrl: 'https://github.com/Wendy-Tabitha/studio',
    liveUrl: '#', // No live URL for this example
    imageUrl: '/Randorium.png',
    imageHint: 'to-do list tasks'
  },
  {
    id: 'project-3',
    title: 'real-time-forum',
    initialDescription: 'This project is a single-page forum application which includes user registration and login, post creation, commenting, and private messaging. The backend uses Go to manage data and WebSocket connections for real-time interactions, while the frontend relies on JavaScript.',
    techStack: ['Golang', 'Vanilla Javascript', 'SQLite'],
    githubUrl: 'https://github.com/Wendy-Tabitha/real-time-forum',
    liveUrl: '#', // Replace with actual live URL if available
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'developer portfolio website'
  },
];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
             <AnimatedSection key={project.id} as="div" delay={index * 150} className="!p-0 h-full">
                <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
