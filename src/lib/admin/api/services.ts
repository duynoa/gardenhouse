import { apiClient } from './client';
import {
  AuthResponse,
  Contact,
  Paginated,
  Project,
} from '../types';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface ListContactsParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface ListProjectsParams {
  page?: number;
  limit?: number;
  search?: string;
  type?: string;
  sort?: string;
}

export interface CreateProjectPayload {
  name: string;
  slug?: string;
  address: string;
  completionYear: string;
  type: string;
  summary: string;
  mainImage: string;
}

export const authApi = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const { data } = await apiClient.post<{ success: true; data: AuthResponse }>(
      '/auth/login',
      payload,
    );
    return data.data;
  },
  async me(): Promise<AuthResponse['user']> {
    const { data } = await apiClient.get<{ success: true; data: AuthResponse['user'] }>(
      '/auth/me',
    );
    return data.data;
  },
};

export const contactApi = {
  async create(payload: { name: string; email: string; phone: string; message: string }): Promise<Contact> {
    const { data } = await apiClient.post<{ success: true; data: Contact }>(
      '/contacts',
      payload,
    );
    return data.data;
  },

  async list(params: ListContactsParams): Promise<Paginated<Contact>> {
    const { data } = await apiClient.get<{ success: true; data: Paginated<Contact> }>(
      '/contacts',
      { params },
    );
    return data.data;
  },
  async get(id: string): Promise<Contact> {
    const { data } = await apiClient.get<{ success: true; data: Contact }>(
      `/contacts/${id}`,
    );
    return data.data;
  },
  async remove(id: string): Promise<void> {
    await apiClient.delete(`/contacts/${id}`);
  },
};

export const projectApi = {
  async list(params: ListProjectsParams): Promise<Paginated<Project>> {
    const { data } = await apiClient.get<{ success: true; data: Paginated<Project> }>(
      '/projects',
      { params },
    );
    return data.data;
  },
  async get(id: string): Promise<Project> {
    const { data } = await apiClient.get<{ success: true; data: Project }>(
      `/projects/${id}`,
    );
    return data.data;
  },
  async getBySlug(slug: string): Promise<Project> {
    const { data } = await apiClient.get<{ success: true; data: Project }>(
      `/projects/slug/${slug}`,
    );
    return data.data;
  },
  async create(payload: CreateProjectPayload): Promise<Project> {
    const { data } = await apiClient.post<{ success: true; data: Project }>(
      '/projects',
      payload,
    );
    return data.data;
  },
  async update(id: string, payload: Partial<CreateProjectPayload>): Promise<Project> {
    const { data } = await apiClient.patch<{ success: true; data: Project }>(
      `/projects/${id}`,
      payload,
    );
    return data.data;
  },
  async remove(id: string): Promise<void> {
    await apiClient.delete(`/projects/${id}`);
  },
};

export interface UploadImageResult {
  url: string;
  path: string;
}

export const uploadApi = {
  async uploadImage(file: File, folder = 'projects'): Promise<UploadImageResult> {
    const formData = new FormData();
    formData.append('image', file);
    const { data } = await apiClient.post<{ success: true; data: UploadImageResult }>(
      '/uploads/image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: { folder },
      },
    );
    return data.data;
  },

  async deleteImage(path: string): Promise<void> {
    await apiClient.delete('/uploads/image', { data: { path } });
  },
};
