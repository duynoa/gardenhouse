import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from 'react';
import { AdminUser } from './types';
import { tokenStorage } from './api/client';
import { authApi } from './api/services';

interface AuthContextValue {
  user: AdminUser | null;
  isAuthenticated: boolean;
  isBootstrapping: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    const token = tokenStorage.get();
    if (!token) {
      setIsBootstrapping(false);
      return;
    }
    authApi
      .me()
      .then((u) => {
        if (u.role !== 'admin') {
          tokenStorage.clear();
          setUser(null);
        } else {
          setUser(u);
        }
      })
      .catch(() => {
        tokenStorage.clear();
        setUser(null);
      })
      .finally(() => setIsBootstrapping(false));
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const result = await authApi.login({ username, password });
    if (result.user.role !== 'admin') {
      throw new Error('Tài khoản này không có quyền quản trị');
    }
    tokenStorage.set(result.token);
    setUser(result.user);
  }, []);

  const logout = useCallback(() => {
    tokenStorage.clear();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        isBootstrapping,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
