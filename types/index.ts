// Type definitions for the project

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  metrics: string;
  tech: string[];
  slug: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

