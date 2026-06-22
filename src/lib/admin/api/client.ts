import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const TOKEN_KEY = 'gh_admin_token';

export const tokenStorage = {
  get(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
  set(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  },
  clear(): void {
    localStorage.removeItem(TOKEN_KEY);
  },
};

const baseURL: string = (() => {
  const fromVite = (import.meta as { env?: Record<string, string | undefined> }).env
    ?.VITE_API_URL;
  if (fromVite) return fromVite;
  // Fallback for build environments without import.meta typing
  return 'http://localhost:5000/api';
})();

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = tokenStorage.get();
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
});

export interface ApiErrorBody {
  success: false;
  code?: string;
  message: string;
}

export function extractErrorMessage(err: unknown, fallback = 'Có lỗi xảy ra'): string {
  if (err instanceof AxiosError) {
    const data = err.response?.data as ApiErrorBody | undefined;
    if (data?.message) return data.message;
    if (err.message) return err.message;
  }
  if (err instanceof Error) return err.message;
  return fallback;
}

export function isUnauthorized(err: unknown): boolean {
  return err instanceof AxiosError && err.response?.status === 401;
}
