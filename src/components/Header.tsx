import { ChevronRight, Menu, PhoneCall, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavTarget = 'home' | 'about' | 'services' | 'projects' | 'contact';

const pathToTarget: Record<string, NavTarget> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/projects': 'projects',
  '/contact': 'contact',
};

const targetToPath: Record<NavTarget, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  projects: '/projects',
  contact: '/contact',
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const activePage: NavTarget = pathToTarget[location.pathname] ?? 'home';

  const menuItems: { id: NavTarget; label: string }[] = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'about', label: 'Giới Thiệu' },
    { id: 'services', label: 'Dịch Vụ' },
    { id: 'projects', label: 'Công Trình' },
    { id: 'contact', label: 'Liên Hệ' },
  ];

  const handleBookSurvey = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: NavTarget) => {
    navigate(targetToPath[id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img src="/logo1.png" alt="Garden House" width={60} height={60} className="rounded-lg"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 font-medium transition-all duration-300 text-sm tracking-wide ${activePage === item.id
                    ? 'text-forest-600 font-semibold'
                    : 'text-gray-600 hover:text-forest-500'
                  }`}
              >
                {item.label}
                {activePage === item.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0789490590"
              className="flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-500 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-forest-500" />
              <span>0789.490.590</span>
            </a>
            <button
              onClick={handleBookSurvey}
              className="bg-forest-600 hover:bg-forest-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm shadow-forest-100 transition-all duration-300 hover:shadow-md active:scale-98"
            >
              <span>Đặt lịch khảo sát</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:0789490590"
              className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-700"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 rounded-xl bg-forest-50 hover:bg-forest-100 flex items-center justify-center text-forest-800 transition-colors focus:outline-hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-y-0 h-screen inset-x-0 z-40 bg-black md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 bottom-0 h-screen right-0 z-40 w-72 max-w-sm bg-white shadow-2xl flex flex-col pt-24 pb-8 px-6 md:hidden"
            >
              <div className="flex flex-col gap-5">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-left font-medium transition-all duration-200 ${activePage === item.id
                        ? 'bg-forest-500 text-white'
                        : 'text-gray-700 hover:bg-forest-50'
                      }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </button>
                ))}
              </div>

              <div className="mt-auto border-t border-forest-50 pt-6">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3 px-2">
                  Liên hệ gấp
                </p>
                <a
                  href="tel:0789490590"
                  className="flex items-center gap-3 text-forest-700 font-bold text-lg mb-4 px-2"
                >
                  <PhoneCall className="w-5 h-5 text-forest-500" />
                  <span>0789.490.590</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleBookSurvey();
                  }}
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <span>Khảo Sát Miễn Phí</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
