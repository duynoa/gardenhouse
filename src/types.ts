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
  _id: string;
  name: string;
  slug: string;
  address: string;
  completionYear?: string;
  type: string;
  summary: string;
  mainImage: string;
  createdAt: string;
  updatedAt?: string;
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
