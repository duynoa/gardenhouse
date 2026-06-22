import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  Mail,
  FolderKanban,
  Leaf,
  LogOut,
  ExternalLink,
} from 'lucide-react';
import { useAuth } from '../../lib/admin/AuthContext';

const navItems = [
  {
    to: '/admin/contacts',
    label: 'Liên hệ',
    icon: Mail,
    end: false,
  },
  {
    to: '/admin/projects',
    label: 'Dự án',
    icon: FolderKanban,
    end: false,
  },
] as const;

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col shrink-0">
        {/* Brand */}
        <div className="px-5 py-5 border-b border-gray-800">
          <Link
            to="/admin/contacts"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-forest-600 text-white flex items-center justify-center group-hover:bg-forest-500 transition-colors">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-base text-white leading-tight">
                Garden House
              </p>
              <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                Admin Console
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <p className="px-3 py-2 text-[10px] uppercase font-bold tracking-wider text-gray-500">
            Điều hướng
          </p>
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
                  isActive
                    ? 'bg-forest-600/20 text-emerald-300 border border-forest-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60 border border-transparent',
                ].join(' ')
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* User card */}
        <div className="px-3 py-4 border-t border-gray-800">
          <div className="bg-gray-800/60 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-forest-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {(user?.fullName || user?.username || 'A').charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate">
                {user?.fullName || user?.username}
              </p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                {user?.role ?? 'admin'}
              </p>
            </div>
            <button
              onClick={logout}
              title="Đăng xuất"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors shrink-0"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-500 hover:text-emerald-400 transition-colors py-1.5"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Xem trang chủ</span>
          </a>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
              Quản trị
            </p>
            <h1 className="font-serif font-bold text-xl text-white mt-0.5">
              {navItems.find((n) => location.pathname.startsWith(n.to))?.label ??
                'Liên hệ'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 bg-gray-800 px-3 py-1.5 rounded-full border border-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Đang trực tuyến
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
