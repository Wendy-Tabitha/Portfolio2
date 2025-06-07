"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Wand2, Edit3, Save } from 'lucide-react';
import { generateProjectDescription, type GenerateProjectDescriptionInput } from '@/ai/flows/generate-project-description';
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

export interface Project {
  id: string;
  title: string;
  initialDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  imageHint?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [description, setDescription] = useState(project.initialDescription || '');
  const [projectName, setProjectName] = useState(project.title);
  const [techStackInput, setTechStackInput] = useState(project.techStack.join(', '));
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEditing, setIsEditing] = useState(!project.initialDescription);
  const { toast } = useToast();

  useEffect(() => {
    setDescription(project.initialDescription || '');
    setProjectName(project.title);
    setTechStackInput(project.techStack.join(', '));
    setIsEditing(!project.initialDescription);
  }, [project]);

  const handleGenerateDescription = async () => {
    setIsGenerating(true);
    try {
      const input: GenerateProjectDescriptionInput = {
        projectName,
        techStack: techStackInput,
      };
      const result = await generateProjectDescription(input);
      setDescription(result.description);
      toast({
        title: "Description Generated",
        description: "AI has crafted a project description for you.",
      });
    } catch (error) {
      console.error("Error generating description:", error);
      toast({
        title: "Error",
        description: "Failed to generate description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleEdit = () => {
    if (isEditing && description !== project.initialDescription) {
       // Here you might want to save the description if there was a backend
       toast({ title: "Description Saved", description: "Your custom description has been noted (locally)." });
    }
    setIsEditing(!isEditing);
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
      <div className="relative w-full h-56">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.imageHint || "technology project"}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-headline text-primary">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <Label htmlFor={`desc-${project.id}`}>Project Description</Label>
              <Textarea
                id={`desc-${project.id}`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your project..."
                rows={5}
                className="font-body"
              />
            </div>
             <div className="space-y-2 p-3 border rounded-md bg-muted/30">
              <p className="text-sm font-medium text-foreground">AI Description Generator</p>
              <div>
                <Label htmlFor={`pn-${project.id}`}>Project Name (for AI)</Label>
                <Input 
                  id={`pn-${project.id}`} 
                  value={projectName} 
                  onChange={(e) => setProjectName(e.target.value)} 
                  placeholder="e.g., My Awesome App"
                  className="font-body"
                />
              </div>
              <div>
                <Label htmlFor={`ts-${project.id}`}>Tech Stack (for AI, comma-separated)</Label>
                <Input 
                  id={`ts-${project.id}`} 
                  value={techStackInput} 
                  onChange={(e) => setTechStackInput(e.target.value)} 
                  placeholder="e.g., React, Node.js, Python"
                  className="font-body"
                />
              </div>
              <Button onClick={handleGenerateDescription} disabled={isGenerating} size="sm" variant="outline" className="w-full">
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? 'Generating...' : 'Generate with AI'}
              </Button>
            </div>
          </div>
        ) : (
          <CardDescription className="text-foreground font-body leading-relaxed min-h-[100px]">{description || "No description yet. Click edit to add one!"}</CardDescription>
        )}
        
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-code bg-secondary/50 text-accent-foreground px-3 py-1 shadow-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t">
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild className="bg-primary hover:bg-accent hover:text-accent-foreground">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
        <Button onClick={toggleEdit} variant="ghost" size="sm">
          {isEditing ? <Save className="mr-2 h-4 w-4" /> : <Edit3 className="mr-2 h-4 w-4" />}
          {isEditing ? 'Save Desc.' : 'Edit Desc.'}
        </Button>
      </CardFooter>
    </Card>
  );
}
