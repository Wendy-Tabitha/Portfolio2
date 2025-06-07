"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { AnimatedSection } from '@/components/ui/animated-section';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    // In a real app, you'd send this data to a backend API
    console.log("Form data submitted:", data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <AnimatedSection id="contact" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate. 
              Feel free to reach out using the form or connect with me on social media.
            </p>
            <div className="space-y-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-lg">
                <Mail className="h-6 w-6 text-primary" />
                <span>your.email@example.com</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-lg">
                <Linkedin className="h-6 w-6 text-primary" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-lg">
                <Github className="h-6 w-6 text-primary" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          <Card className="p-6 sm:p-8 shadow-xl bg-card">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Full Name</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="John Doe" {...field} className="bg-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <FormControl>
                        <Input id="email" type="email" placeholder="john.doe@example.com" {...field} className="bg-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">Your Message</FormLabel>
                      <FormControl>
                        <Textarea id="message" placeholder="Hi there, I'd like to discuss..." rows={5} {...field} className="bg-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-colors duration-300" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                     Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Dummy Card component to satisfy the usage - ShadCN Card should be used
const Card = ({className, children}: {className?: string, children: React.ReactNode}) => <div className={className}>{children}</div>;

