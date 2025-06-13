import { Button } from '@/components/ui/button';
import { Download, Code2, Database, Server, Smartphone, Cloud, PenTool, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import SkillBadge from '@/components/skill-badge';
import { AnimatedSection } from '@/components/ui/animated-section';

const skills = [
  { Icon: Code2, label: 'Frontend Development' },
  { Icon: Server, label: 'Backend Development' },
  { Icon: Database, label: 'Database Management' },
  { Icon: Smartphone, label: 'Responsive Design' },
  { Icon: PenTool, label: 'UI/UX Principles' },
];

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden shadow-2xl group">
            <Image
              src="/pic.jpg"
              alt="Wendy Tabitha - Profile Picture"
              data-ai-hint="professional portrait"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-105 transition-transform duration-500"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Hello! I&apos;m a passionate and results-driven Software Developer with a knack for creating elegant and efficient solutions.
              With a strong foundation in full-stack development, I enjoy tackling complex challenges and turning ideas into reality.
              I&apos;m constantly learning and exploring new technologies to stay at the forefront of innovation.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My expertise spans across various technologies, allowing me to build robust web applications from concept to deployment.
              I believe in writing clean, maintainable code and collaborating effectively within teams to deliver high-quality products.
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <a href="/Wendy_Akinyi_CV.pdf" download="Wendy_Akinyi_CV.pdf">
                Download Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center mb-10">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.label} as="div" delay={index * 100} className="!p-0">
                 <SkillBadge Icon={skill.Icon} label={skill.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
