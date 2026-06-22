import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, CheckCircle2, Trees, ShieldCheck,
  MapPin, Maximize, Eye, User, Landmark, Compass, Quote
} from 'lucide-react';
import { Project, Testimonial } from '../../types';

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Portfolio projects
  const projects: Project[] = [
    {
      id: 'p1',
      title: 'Thi Công Sân Vườn Nhà Mái Thái',
      category: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      area: '450m²',
      location: 'Sóc Sơn, Hà Nội',
      description: 'Lắp đặt thảm cỏ nhung Nhật bọc quanh lối đi lát sỏi cuội nhỏ chống trơn, đem lại bóng mát dịu lành cho khoảng sân quê đón gió trời.'
    },
    {
      id: 'p2',
      title: 'Hồ Cá Koi Quê Em Tiểu Cảnh Cúc Lan',
      category: 'Hồ cá Koi & Non Bộ xi măng',
      image: 'https://images.unsplash.com/photo-1558905612-4ee4eb15891d?auto=format&fit=crop&w=1000&q=80',
      area: '120m²',
      location: 'Quận 12, TP. Hồ Chí Minh',
      description: 'Sắp sỏi bọc bờ, đắp tiểu cảnh vách núi giả xi măng kết hợp nuôi bể cá chép rực rỡ và trồng khóm trúc đằm thắm mộc quê.'
    },
    {
      id: 'p3',
      title: 'Nhà Vườn Ao Cá Cây Ăn Quả Sum Suê',
      category: 'Vườn Cây Ăn Quả & Luống Rau',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
      area: '800m²',
      location: 'Hòa Lạc, Hà Nội',
      description: 'Quy hoạch vùng trồng bưởi Da Xanh, mít Thái mát ngọt kết hợp bồn xi măng gieo rau muống cải xanh mát tươm tất cho mâm cơm nhà.'
    },
    {
      id: 'p4',
      title: 'Tiểu Cảnh Lan Tre Ban Công Chung Cư',
      category: 'Tiểu cảnh Góc Sân & Ban công',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80',
      area: '15m²',
      location: 'Vinhomes Ocean Park, Gia Lâm',
      description: 'Bày bồn sỏi rải trắng tinh tươm, treo giỏ phong lan ta và lắp giàn tre hoa giấy xum xuê chịu mát tốt, thi công sạch sẽ vô lo.'
    },
    {
      id: 'p5',
      title: 'Nhà Cấp 4 Mái Ngói Đẹp Bình Yên',
      category: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      area: '250m²',
      location: 'Sa Pa, Lào Cai',
      description: 'Rải hoa dại bản địa xen kẽ viền sỏi xá thạch chống xói mòn, kết hợp trổng khóm ngô hoa hướng dương mang đậm sắc màu quê kiểng.'
    },
    {
      id: 'p6',
      title: 'Ao Chòi Mái Lá Đón Gió Mát KhChiều',
      category: 'Hồ cá Koi & Non Bộ xi măng',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80',
      area: '200m²',
      location: 'Huyện Củ Chi, TP. Hồ Chí Minh',
      description: 'Xây chòi tre lợp lá dừa mộc mạc bên hồ lắng nước chống phèn tự chế. Nơi nghỉ chân thanh bình đón gió mát xua tan mệt nhọc lao động.'
    }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      author: 'Anh Nguyễn Huy Hoàng',
      role: 'Chủ nhà vườn Sóc Sơn',
      location: 'Hà Nội',
      rating: 5,
      content: 'Bà con làng xóm ai cũng tấm tắc khen ngợi cách bố trí dải cỏ gieo hoa của tổ thợ này. Họ làm việc cực kì thật thà cẩn thận, lấy giá rất bình dân phù hợp túi tiền của người dân lao động ở quê chúng tôi dọn tươm tất dấp dính lộc lá.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 't2',
      author: 'Chị Phạm Thùy Linh',
      role: 'Gia đình nhà ống tại Quận 12',
      location: 'TP. Hồ Chí Minh',
      rating: 5,
      content: 'Tôi làm hòn non bộ xi măng mini với bể cá cảnh tự lọc chế nước của chú Lâm thợ nước. Giá rẻ đến ngỡ ngàng so với bên báo giá công ty sang chảnh khác mà nước bể trong vắt không lo đục rêu nấm rùa, cá lội khỏe lắm.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 't3',
      author: 'Bác Nguyễn Anh Tuấn',
      role: 'Chủ nhà cấp 4 mái Thái',
      location: 'Hòa Bình',
      rating: 5,
      content: 'Ấn tượng nhất bụng là thợ mộc mạc thật thà làm tới đâu dọn đất phẳng sạch tới nấy. Cam kết hậu mãi hướng dẫn gia đình bón phân chăm hoa cỏ cũng cực kì nhiệt tình, không hề bỏ mặc khách dẫu giá thi công rẻ bèo nhèo.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const tags = ['Tất cả', 'Nhà Vườn Thảm Cỏ Mộc Mạc', 'Hồ cá Koi & Non Bộ xi măng', 'Vườn Cây Ăn Quả & Luống Rau', 'Tiểu cảnh Góc Sân & Ban công'];

  const filteredProjects = selectedTag === 'Tất cả'
    ? projects
    : projects.filter(p => p.category === selectedTag);

  return (
    <div className="bg-[#fcfdfc] text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-forest-950 overflow-hidden py-16 md:py-24">
        {/* Background Image Panel */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"
            alt="Beautiful Garden Estate"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-500/20 border border-forest-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Thi Công Sân Vườn Tiểu Cảnh Giá Bình Dân</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6.5xl font-bold text-white leading-[1.12]"
            >
              Làm Đẹp Sân Vườn <br />
              <span className="text-emerald-400 italic font-semibold">Bên Gia Đình</span> Thật Ấm Cúng
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              Chúng tôi nhận thi công rải cỏ nhung Nhật bọc quanh lối đi, lắp đặt hệ thống lọc nước cá Koi tự chế vi sinh giá siêu rẻ bèo bền vững, đắp hòn non bộ trét xi măng tỉ mỉ bằng bàn tay thợ quê giàu kinh nghiệm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4"
            >
              <Link
                to="/services"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-emerald-500 hover:bg-emerald-600 text-forest-950 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/15 group transition-all cursor-pointer"
              >
                <span>Xem Dịch Vụ & Dự Toán</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-8 py-4 rounded-xl transition-colors cursor-pointer text-center"
              >
                Nhận Khảo Sát Miễn Phí
              </Link>
            </motion.div>

            {/* Statistics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-10 mt-6 max-w-xl text-white"
            >
              <div>
                <span className="block font-serif text-2xl sm:text-3.5xl font-bold text-emerald-400">11+</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider block mt-1">Năm làm thợ quê</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3.5xl font-bold text-emerald-400">450+</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider block mt-1">Sân vườn hoàn thành</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3.5xl font-bold text-emerald-400">99.8%</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider block mt-1">Bà con khen ngợi</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars / Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Phương Châm Tổ Thợ Quê</span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold tracking-tight text-forest-950">
            Bền - Đẹp - Rẻ Hợp Túi Tiền Cho Bà Con
          </h2>
          <div className="w-16 h-1 bg-forest-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Chúng tôi không vẽ vời bản thiết kế hào sảng tốn tiền mua máy móc đắt đỏ. Tổ thợ trực tiếp thi công cọ xát dầm sương nắng để tính toán bọc sỏi cuội tự nhiên, đào đắp ao chòi tươm tất bép xanh hợp lộc cho gia chủ với đơn giá tốt nhất quả đất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-forest-100 hover:border-forest-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-forest-900 font-serif">Giống cảnh vườn quê dẻo dai</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Chúng tôi chọn kỹ giống cây bản xứ quen đất bốc gốc khỏe khoắn, rải thảm cỏ cỏ nhung ta mộc mạc xanh mướt, giúp sân vườn luôn xanh tươi quanh năm thích ứng thời tiết.
            </p>
            <ul className="text-xs font-semibold text-forest-700 flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Sắp đặt khóm đất trồng phù hợp</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Hoa dại thảm cỏ nịnh mắt mộc mạc</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-forest-100 hover:border-forest-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-forest-900 font-serif">Phong thủy mát nhà lộc lá</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Bố trí hướng đặt hòn non bộ đắp xi măng kết hợp lu nước luân chuyển gió róc rách đón khí lành mát nhà, giúp gia đình luân chuyển khí lộc dào dạt sảng khoái.
            </p>
            <ul className="text-xs font-semibold text-forest-700 flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Tư vấn khí phong thủy theo tuổi thô</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Hơi nước mát lành đưa hơi ẩm trong trẻo</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-forest-100 hover:border-forest-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-forest-900 font-serif">Hồ nước tự chế vi sinh siêu tiết kiệm</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Hồ cá Koi dọn lọc vi sinh bằng lọc thùng nhựa thạch anh cực sạch nước trong văn vắt mà không tốn kém trang thiết bị đắt nhập khẩu. Hệ tưới rải béc hẹn giờ pin cực nhàn.
            </p>
            <ul className="text-xs font-semibold text-forest-700 flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Hệ thống tưới thô béc đồng bền bỉ</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Bộ lọc rêu bùn hồ cá Koi trong văn vắt</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Showcase Portfolio Section */}
      <section className="py-20 bg-forest-50/50 border-y border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl flex flex-col gap-3">
              <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Công trình thực tế</span>
              <h2 className="font-serif text-3xl sm:text-4.5xl font-bold tracking-tight text-forest-950">
                Hình Ảnh Các Công Trình Đã Làm
              </h2>
              <p className="text-gray-500 text-sm">
                Bức ảnh lưu giữ một số công trình ao cá, thảm cỏ, non bộ xi măng tươm tất do chính tay tổ thợ của chúng tôi hoàn thiện tại nhà các bác chủ.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-forest-600 text-white shadow-xs shadow-forest-200'
                      : 'bg-white text-gray-600 hover:bg-forest-100/50 border border-forest-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid list of projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden border border-forest-100 shadow-sm hover:shadow-lg transition-transform duration-300 group"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-forest-900/90 backdrop-blur-xs text-emerald-400 font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between h-[230px]">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-forest-600 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-forest-500" />
                        <span>{project.location}</span>
                        <span className="text-gray-300">|</span>
                        <Maximize className="w-3.5 h-3.5 text-forest-500" />
                        <span>{project.area}</span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-forest-950 mb-2 group-hover:text-forest-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="mt-4 text-xs font-bold text-forest-700 hover:text-emerald-600 flex items-center gap-1.5 group-hover:translate-x-1 duration-200 transition-all text-left focus:outline-hidden"
                    >
                      <span>Tôi muốn tư vấn mẫu này</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Journey/Process Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 mb-16">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Kỳ Công Từng Centimet</span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold tracking-tight text-forest-950">
            Quy Trình Sáng Tạo Chuyên Nghiệp
          </h2>
          <p className="text-gray-500 text-sm">
            Từng viên sỏi, tán lá mọc lên đều trải qua khâu phân tích kịch bản kỹ lưỡng bốn bước vững chắc:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Decorative lines */}
          <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-forest-100 z-0"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-forest-600 text-white font-serif font-bold text-lg flex items-center justify-center shadow-lg shadow-forest-100">
              01
            </div>
            <div>
              <h3 className="font-bold text-base text-forest-950 mb-1.5">Khảo sát & Lắng nghe</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Kỹ sư đo lường hướng nắng gió, trắc địa mẫu đất, phong thủy tuổi trực tiếp để hình thành tâm tư nguyện vọng.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-forest-600 text-white font-serif font-bold text-lg flex items-center justify-center shadow-lg shadow-forest-100">
              02
            </div>
            <div>
              <h3 className="font-bold text-base text-forest-950 mb-1.5">Mô phỏng 3D Sống Động</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Chuyển hóa dữ liệu thô thành bản dựng Virtual 3D trực quan, bóc tách thực cảnh góc nhìn ảo cho gia chủ duyệt trước.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-forest-600 text-white font-serif font-bold text-lg flex items-center justify-center shadow-lg shadow-forest-100">
              03
            </div>
            <div>
              <h3 className="font-bold text-base text-forest-950 mb-1.5">Nghệ Thuật Thi Công</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Đội ngũ nghệ nhân xếp đặt đá dăm, đào xới hồ, đấu điện, kết nối thảm cỏ hoàn hảo và sạch sẽ từng khâu nhỏ nhất.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-forest-950 font-serif font-bold text-lg flex items-center justify-center shadow-lg shadow-emerald-200">
              04
            </div>
            <div>
              <h3 className="font-bold text-base text-forest-950 mb-1.5">Bàn Giao & Đồng Hành</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Hướng dẫn vận hành hệ thống công nghệ, gửi tặng cẩm nang sinh thái và bảo hành chăm sóc định kỳ chuyên tâm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Luxury Testimonial Section */}
      <section className="py-20 bg-forest-950 text-white relative overflow-hidden/50">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1558905612-4ee4eb15891d?auto=format&fit=crop&w=1200&q=80"
            alt="Japanese garden background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center gap-6">
            <Quote className="w-12 h-12 text-emerald-400 rotate-180 opacity-50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <p className="font-serif text-lg sm:text-2xl leading-relaxed max-w-3xl italic font-normal text-gray-100">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].author}
                    className="w-14 h-14 rounded-full border-2 border-emerald-400 object-cover shadow-md"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-base text-white leading-tight">{testimonials[activeTestimonial].author}</h4>
                    <p className="text-xs text-emerald-400 font-medium mt-0.5">{testimonials[activeTestimonial].role}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Vị trí: {testimonials[activeTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonials indicator bubbles */}
            <div className="flex gap-2.5 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                    activeTestimonial === idx
                      ? 'bg-emerald-400 border-emerald-400 px-3'
                      : 'bg-white/20 border-white/10 hover:bg-white/40'
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. High conversion interactive banner block */}
      <section className="py-16 bg-[#f0f5f0] border-t border-forest-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest-100 shadow-md flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-3/5 flex flex-col gap-4">
              <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.15em] block">Dành riêng cho tuần này</span>
              <h2 className="font-serif text-2xl sm:text-3.5xl font-bold tracking-tight text-forest-900 leading-tight">
                Ưu Đãi Đo Đạc Phong Thủy & Tạo Lập Layout Dự Án Sơ Bộ Trực Tiếp Tại Nhà
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Chúng tôi tặng MIỄN PHÍ suất khảo sát trị thổ, phân tích vi khí hậu và lên phương án mặt bằng sơ bộ (Trị giá 5.000.000 VNĐ) cho 15 khách hàng đăng ký sớm nhất trong tháng này.
              </p>
              <div className="flex items-center gap-3 text-xs font-semibold text-emerald-800 bg-emerald-50 self-start px-3.5 py-2 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Không cam kết ràng buộc dịch vụ! Tư vấn thân thiện 100%.</span>
              </div>
            </div>
            <div className="lg:w-2/5 w-full flex flex-col gap-3">
              <Link
                to="/services"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 rounded-xl text-center shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Nhập Thử Diện Tích & Dự Toán Chi Phí
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-white hover:bg-forest-50 text-forest-800 border border-forest-200 font-semibold py-4 rounded-xl text-center transition-all"
              >
                Nhận Suất Đăng Ký Khảo Sát
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
