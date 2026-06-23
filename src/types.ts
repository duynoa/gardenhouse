export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  image: string;
  basePrice: number; // Price per m2 or base package
  features: string[];
}

export interface Project {
  id: string;
  slug?: string;
  title: string;
  category: string;
  image: string;
  area: string;
  location: string;
  description: string;
  gallery?: string[];
  duration?: string;
  costRange?: string;
  materials?: string[];
  features?: string[];
  challenges?: string;
  solutions?: string;
  detailedSteps?: { stepName: string; stepDesc: string }[];
  clientQuote?: { text: string; author: string; role: string };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  gardenStyle?: string;
  estimatedArea?: number;
  calculatedPrice?: number;
  message: string;
  createdAt: string;
}

export type ActivePage = 'home' | 'about' | 'services' | 'projects' | 'contact';
