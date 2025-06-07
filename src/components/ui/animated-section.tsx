"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  delay?: number; // delay in ms
};

export function AnimatedSection({ children, className, as: Component = 'section', id, delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <Component
      ref={ref as any}
      id={id}
      className={cn(
        'py-16 md:py-24 opacity-0 transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10',
        className
      )}
    >
      {children}
    </Component>
  );
}
