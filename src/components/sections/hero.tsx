import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function HeroSection() {
  return (
    <AnimatedSection id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-card !py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground mb-4 font-headline animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Software Developer & Tech Enthusiast
        </p>
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Crafting innovative digital solutions with passion and precision.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Link href="#projects">
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
