import { useState, FormEvent } from 'react';
import { Leaf, Mail, Phone, MapPin, Send, CheckCircle, ArrowUpRight, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type NavTarget = 'home' | 'about' | 'services' | 'projects' | 'contact';

const targetToPath: Record<NavTarget, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  projects: '/projects',
  contact: '/contact',
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNav = (id: NavTarget) => {
    navigate(targetToPath[id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: NavTarget; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'services', label: 'Dịch vụ & Tính giá' },
    { id: 'projects', label: 'Công trình thực tế' },
    { id: 'contact', label: 'Liên hệ tư vấn' },
  ];

  const servicesLinks: { label: string; href: NavTarget }[] = [
    { label: 'Thi công Sân vườn & Tiểu cảnh', href: 'services' },
    { label: 'Hồ cá Koi bình dân, giá tốt', href: 'services' },
    { label: 'Đắp hòn non bộ & tranh đá', href: 'services' },
    { label: 'Cung cấp cây xanh & thảm cỏ', href: 'services' },
  ];

  return (
    <footer className="bg-forest-950 text-gray-300 border-t border-forest-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-forest-500 flex items-center justify-center text-white">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Garden House
              </span>
              {/* Hidden admin trigger — blends with logo, only reveals tooltip on hover */}
              <button
                type="button"
                onClick={() => navigate('/admin')}
                title="Khu vực quản trị"
                aria-label="Đăng nhập quản trị"
                className="ml-1 w-7 h-7 rounded-md flex items-center justify-center text-forest-800 hover:text-emerald-400 hover:bg-forest-900/60 transition-colors opacity-40 hover:opacity-100"
              >
                <Lock className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mt-2">
              Chuyên thiết kế và thi công sân vườn, nhà vườn, hồ cá Koi trọn gói giá tốt. Đội ngũ thợ quê lành nghề, nhiệt tình, làm có tâm, cam kết bền đẹp và tiết kiệm tối đa chi phí cho gia chủ.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-forest-900/40 border border-forest-800 text-xs flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse block"></span>
              <span>Đang mở cửa: 08:00 - 18:30 (Thứ 2 - CN)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-forest-400">
              Chuyên Mục
            </h3>
            <ul className="space-y-3 mt-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="group text-sm hover:text-emerald-400 text-gray-400 flex items-center gap-1.5 transition-all focus:outline-hidden"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-forest-700 group-hover:text-emerald-400 transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-forest-400">
              Giải Pháp Xanh
            </h3>
            <ul className="space-y-3 mt-6">
              {servicesLinks.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-sm hover:text-emerald-400 text-gray-400 text-left flex items-center gap-1.5 transition-all focus:outline-hidden"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-800"></span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-base tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-forest-400">
              Nhận Tin Tức
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mt-2">
              Đăng ký để nhận những mẫu thiết kế nhà vườn đẹp nhất và cẩm nang chăm sóc cây cảnh hàng tuần.
            </p>
            <form onSubmit={handleSubscribe} className="mt-2">
              <div className="relative flex rounded-xl border border-forest-800 overflow-hidden bg-forest-900/50 focus-within:border-forest-500 transition-all">
                <input
                  type="email"
                  required
                  placeholder="Email của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="bg-forest-600 hover:bg-forest-500 transition-colors text-white px-4 flex items-center justify-center cursor-pointer"
                  aria-label="Submit Email"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
            {subscribed && (
              <div className="flex items-center gap-2 text-emerald-400 text-xs mt-1 animate-fade-in">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Cảm ơn định kỳ! Chúng tôi sẽ gửi tin tức sớm nhất.</span>
              </div>
            )}
          </div>
        </div>

        {/* Brand Contact details bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-forest-900 text-sm text-gray-400">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest-900 flex items-center justify-center text-forest-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Văn phòng chính</p>
              <p className="text-white text-xs mt-0.5">188 Đường Cổ Linh, Quận Long Biên, Hà Nội</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest-900 flex items-center justify-center text-forest-400 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Tổng đài tư vấn</p>
              <a href="tel:0988888888" className="text-white text-xs hover:text-emerald-400 block mt-0.5">098.888.8888</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest-900 flex items-center justify-center text-forest-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Gửi yêu cầu dự án</p>
              <a href="mailto:lienhe@gardenhouse.com" className="text-white text-xs hover:text-emerald-400 block mt-0.5">lienhe@gardenhouse.com</a>
            </div>
          </div>
        </div>

        {/* Legal and copy bar */}
        <div className="border-t border-forest-900/60 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Garden House. Tất cả bản quyền được bảo lưu.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Quy trình thi công</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
