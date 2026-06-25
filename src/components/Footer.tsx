import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
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
  const navigate = useNavigate();

  const handleNav = (id: NavTarget) => {
    navigate(targetToPath[id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: NavTarget; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Về Chúng Tôi' },
    { id: 'services', label: 'Dịch Vụ' },
    { id: 'projects', label: 'Công Trình' },
    { id: 'contact', label: 'Liên Hệ' },
  ];

  const servicesLinks: { label: string; href: NavTarget }[] = [
    { label: 'Xây Nhà Cấp 4 Trọn Gói', href: 'services' },
    { label: 'Biệt Thự & Nhà Phố Cao Cấp', href: 'services' },
    { label: 'Thiết Kế Kiến Trúc & Nội Thất', href: 'services' },
    { label: 'Sửa Chữa & Cải Tạo Nhà Cũ', href: 'services' },
    { label: 'Sân Vườn & Thảm Cỏ Mộc Mạc', href: 'services' },
    { label: 'Hồ Cá Koi & Hòn Non Bộ', href: 'services' },
  ];

  return (
    <footer className="bg-forest-950 text-gray-300 border-t border-forest-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Garden House" width={60} height={60} className="rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Garden House
                </span>
                <p className="text-xs text-gray-400">Không Gian Sống Xanh, Nhà Ở Mát Mẻ</p>
                <p className="text-[10px] text-gray-500 italic mt-0.5">
                  Thành viên của Công ty TNHH Đầu Tư Xây Dựng & Cảnh Quan Thiên Mộc
                </p>
              </div>

            </div>
            <p className="text-sm leading-relaxed text-gray-400 mt-2">
              Chuyên thiết kế và thi công nhà ở xanh mát, không gian sống trong lành kết hợp cây xanh và ánh sáng tự nhiên. Đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, cam kết mang đến ngôi nhà mát mẻ quanh năm cho gia đình bạn.
            </p>
            <div className="mt-4 p-4 w-fit rounded-xl bg-forest-900/40 border border-forest-800 text-xs flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse block"></span>
              <span>Tư vấn miễn phí: 08:30 - 17:00 (Thứ 2 - Thứ 7)</span>
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
        </div>

        {/* Brand Contact details bar */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 py-8 border-t border-forest-900 text-sm text-gray-400">
          <div className="flex items-center gap-3 col-span-2">
            <div className="w-9 h-9 rounded-full bg-forest-900 flex items-center justify-center text-forest-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Văn phòng chính</p>
              <p className="text-white text-xs mt-0.5">15 Trương Định, Phường Nghĩa Lộ, TP. Quảng Ngãi</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest-900 flex items-center justify-center text-forest-400 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Tổng đài tư vấn</p>
              <a href="tel:0789490590" className="text-white text-xs hover:text-emerald-400 block mt-0.5">0789.490.590</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest-900 flex items-center justify-center text-forest-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Tư vấn không gian xanh</p>
              <a href="mailto:thienmocgreen@gmail.com" className="text-white text-xs hover:text-emerald-400 block mt-0.5">thienmocgreen@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Legal and copy bar */}
        <div className="border-t border-forest-900/60 pt-6 flex justify-center items-center text-xs text-gray-500 gap-4">
          <p>© 2017 Garden House. Tất cả bản quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
