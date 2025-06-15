import ExperienceItem from '@/components/experience-item';
import { AnimatedSection } from '@/components/ui/animated-section';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Zone01 Kisumu',
    dates: 'Apr 2024 - Present',
    description: [
      'Collaborated in developing HealthnetAI website, utilizing AI to facilitate communication between patients with chronic illnesses and doctors remotely.',
      // 'Led development of key features for a flagship SaaS product, improving performance by 20%.',
      // 'Mentored junior engineers and conducted code reviews to ensure high-quality standards.',
      // 'Collaborated with cross-functional teams to define project requirements and deliverables.',
      // 'Architected and implemented scalable microservices using Node.js and Docker.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Zone01 Kisumu',
    dates: 'Apr 2024 - Present',
    description: [
      'Collaborated in building a multilingual platform for biasharatrack, aiding non-English-speaking users in managing their businesses efficiently.',
      // 'Developed and maintained responsive web applications for various clients using React and Angular.',
      // 'Integrated third-party APIs to enhance application functionality.',
      // 'Participated in Agile development cycles, including sprint planning and daily stand-ups.',
      // 'Contributed to database design and optimization for PostgreSQL.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Zone01 Kisumu',
    dates: 'Mar 2025 - Present',
    description: [
      // 'Assisted senior developers in bug fixing and feature enhancements for a web platform.',
      // 'Gained experience with version control systems like Git and project management tools.',
      // 'Wrote unit tests to improve code coverage and reliability.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Professional Experience</h2>
        <div className="relative">
          {/* Central timeline line for larger screens - decorative */}
          <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-border"></div>
          
          {experiences.map((exp, index) => (
            <AnimatedSection 
              key={index}
              as="div" 
              delay={index * 150}
              className={`!p-0 ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'} sm:w-[calc(50%-2rem)]`}
            >
              <ExperienceItem {...exp} isLast={index === experiences.length - 1} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
