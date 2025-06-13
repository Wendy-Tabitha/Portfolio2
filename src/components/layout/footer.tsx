import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://github.com/Wendy-Tabitha" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/wendy-tabitha-387b0722b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:akinyiwendy46@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} DevFolio. All rights reserved.
        </p>
        {/* <p className="text-xs text-muted-foreground mt-2">
          Built with Next.js, Tailwind CSS, and Genkit.
        </p> */}
      </div>
    </footer>
  );
}
