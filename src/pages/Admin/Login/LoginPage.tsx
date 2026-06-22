import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Leaf, Lock, User, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../../lib/admin/AuthContext';
import { extractErrorMessage } from '../../../lib/admin/api/client';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const from =
    (location.state as { from?: string } | null)?.from ?? '/admin/contacts';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, from, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(username.trim(), password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(extractErrorMessage(err, 'Đăng nhập thất bại'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-950 via-forest-900 to-emerald-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-forest-500 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-forest-600 text-white flex items-center justify-center shadow-lg shadow-forest-500/30">
              <Leaf className="w-7 h-7" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-forest-950 leading-tight">
                Garden House Admin
              </h1>
              <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-600" />
                <span>Khu vực quản trị — chỉ dành cho admin</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Tên đăng nhập
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-forest-500 focus:ring-2 focus:ring-forest-100 focus:outline-hidden text-sm transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-forest-500 focus:ring-2 focus:ring-forest-100 focus:outline-hidden text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full bg-forest-600 hover:bg-forest-700 disabled:bg-forest-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl shadow-lg shadow-forest-500/20 flex items-center justify-center gap-2 transition-all"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeOpacity="0.3"
                      strokeWidth="3"
                    />
                    <path
                      d="M22 12a10 10 0 0 1-10 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Đang đăng nhập...</span>
                </>
              ) : (
                <>
                  <span>Đăng nhập</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-[11px] text-gray-400">
              Phiên đăng nhập được lưu trong trình duyệt. Đăng xuất để bảo vệ tài khoản.
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-emerald-200/60 mt-6">
          © {new Date().getFullYear()} Garden House. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
