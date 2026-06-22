export interface AdminUser {
  _id: string;
  username: string;
  fullName?: string;
  role: 'user' | 'admin';
}

export interface AuthResponse {
  user: AdminUser;
  token: string;
}

export type ContactStatus = 'pending' | 'read' | 'replied';

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: ContactStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  _id: string;
  name: string;
  slug: string;
  address: string;
  completionYear: string;
  type: string;
  summary: string;
  mainImage: string;
  createdAt: string;
  updatedAt: string;
}

export interface Paginated<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  code?: string;
  message: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
