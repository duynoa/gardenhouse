import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/admin/AuthContext';

export function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated, isBootstrapping } = useAuth();
  const location = useLocation();

  if (isBootstrapping) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <div className="w-10 h-10 rounded-full border-2 border-gray-700 border-t-emerald-400 animate-spin"></div>
          <p className="text-xs">Đang kiểm tra phiên đăng nhập...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
