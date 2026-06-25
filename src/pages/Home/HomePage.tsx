import {
  ArrowRight,
  CheckCircle2,
  MapPin, Maximize,
  Quote,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
  Loader2
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Testimonial } from '../../types';
import { projectApi } from '../../lib/admin/api/services';
import { Project } from '../../lib/admin/types';

function extractImagesFromHtml(html: string): string[] {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const images: string[] = [];
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    images.push(match[1]);
  }
  return images;
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setProjectsLoading(true);
        setProjectsError(false);
        const data = await projectApi.list({ limit: 6 });
        setProjects(data.items);
      } catch (err) {
        console.error('Lỗi khi tải dự án:', err);
        setProjectsError(true);
      } finally {
        setProjectsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      author: 'Anh Trần Văn Minh',
      role: 'Chủ nhà phố tại TP. Quảng Ngãi',
      location: 'TP. Quảng Ngãi',
      rating: 5,
      content: 'Đội ngũ thi công rất chuyên nghiệp và có trách nhiệm. Nhà phố 5 tầng của tôi hoàn thành đúng tiến độ, chất lượng vượt mong đợi. Gia đình tôi rất hài lòng với kết quả.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 't2',
      author: 'Bà Nguyễn Thị Hương',
      role: 'Chủ biệt thự tại xã Nghĩa Hà',
      location: 'TP. Quảng Ngãi',
      rating: 5,
      content: 'Tôi đã tham khảo nhiều nhà thầu trước khi chọn đội ngũ này. Họ báo giá rõ ràng, không phí ẩn và thi công cực kỳ tỉ mỉ. Biệt thự của tôi hoàn thành rất đẹp, đúng như mong đợi.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 't3',
      author: 'Anh Lê Hoàng Nam',
      role: 'Giám đốc doanh nghiệp tại Quảng Ngãi',
      location: 'TP. Quảng Ngãi',
      rating: 5,
      content: 'Văn phòng làm việc được thi công hoàn thiện chỉ trong 45 ngày, đúng tiến độ cam kết. Đội thợ làm việc sạch sẽ, đúng kỹ thuật và hỗ trợ rất nhiệt tình sau bàn giao.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <div className="bg-[#fcfdfc] text-gray-800">
      <SEO
        title="Trang chủ"
        description="Garden House - Đơn vị thi công xây dựng nhà ở, biệt thự, công trình công cộng uy tín. Cam kết chất lượng, đúng tiến độ, báo giá minh bạch, bảo hành dài hạn."
        keywords="thi công xây dựng, xây nhà phố, xây biệt thự, sửa chữa nhà, cải tạo nhà cũ, báo giá xây dựng"
      />
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-forest-950 overflow-hidden py-16 md:py-24">
        {/* Background Image Panel */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Construction site professional team"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-forest-950 via-forest-950/50 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#FCFDFC] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-fit inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-500/20 border border-forest-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Thi Công Xây Dựng Uy Tín & Chuyên Nghiệp</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6.5xl font-bold text-white leading-[1.12]"
            >
              Xây Dựng Ngôi Nhà <br />
              <span className="text-emerald-400 italic font-semibold">Mơ Ước</span> Vững Bền Theo Thời Gian
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              Chúng tôi nhận thiết kế và thi công xây dựng nhà ở, biệt thự, cải tạo và sửa chữa công trình với đội ngũ thợ nề lành nghề, vật tư chính hãng, giám sát chặt chẽ từng hạng mục, bàn giao đúng tiến độ với chi phí hợp lý.
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
                <span>Xem Dịch Vụ & Báo Giá</span>
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
                <span className="block font-serif text-2xl sm:text-3.5xl font-bold text-emerald-400">8+</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider block mt-1">Năm kinh nghiệm</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3.5xl font-bold text-emerald-400">200+</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider block mt-1">Công trình hoàn thành</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3.5xl font-bold text-emerald-400">99%</span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider block mt-1">Khách hàng hài lòng</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars / Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Tại Sao Chọn Chúng Tôi</span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold tracking-tight text-forest-950">
            Cam Kết Chất Lượng - Đúng Tiến Độ - Giá Hợp Lý
          </h2>
          <div className="w-16 h-1 bg-forest-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Với hơn 8 năm kinh nghiệm trong ngành xây dựng, chúng tôi tự hào mang đến những công trình bền vững, an toàn và thẩm mỹ. Đội ngũ thợ nề lành nghề, vật tư chính hãng và quy trình giám sát chặt chẽ là cam kết của chúng tôi với mỗi khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-forest-100 hover:border-forest-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-forest-900 font-serif">Chất Lượng Được Cam Kết</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Mọi hạng mục thi công đều tuân thủ tiêu chuẩn kỹ thuật nghiêm ngặt. Chúng tôi sử dụng vật tư chính hãng, có nguồn gốc rõ ràng và bảo hành dài hạn sau bàn giao.
            </p>
            <ul className="text-xs font-semibold text-forest-700 flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Vật tư chính hãng, có chứng nhận</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Giám sát kỹ thuật từng hạng mục</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-forest-100 hover:border-forest-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
              <Ruler className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-forest-900 font-serif">Báo Giá Minh Bạch</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Báo giá chi tiết từng hạng mục, không phí ẩn, không phát sinh ngoài hợp đồng. Gia chủ hoàn toàn yên tâm kiểm soát ngân sách xây dựng từ đầu đến cuối.
            </p>
            <ul className="text-xs font-semibold text-forest-700 flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Báo giá rõ ràng trước khi ký hợp đồng</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Không phí ẩn, không phát sinh</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-forest-100 hover:border-forest-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-forest-900 font-serif">Đúng Tiến Độ Cam Kết</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Lập kế hoạch thi công chi tiết theo từng giai đoạn, cập nhật tiến độ thường xuyên cho gia chủ. Bàn giao đúng hẹn là nguyên tắc bắt buộc của đội ngũ chúng tôi.
            </p>
            <ul className="text-xs font-semibold text-forest-700 flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Lập tiến độ chi tiết trước thi công</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Cập nhật tiến độ định kỳ cho gia chủ</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Showcase Portfolio Section */}
      {!projectsError && projects.length > 0 && (
      <section className="py-20 bg-forest-50/50 border-y border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Dự án tiêu biểu</span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-bold tracking-tight text-forest-950">
              Các Công Trình Đã Hoàn Thành
            </h2>
            <p className="text-gray-500 text-sm">
              Những công trình nhà ở, biệt thự và công trình công cộng tiêu biểu đã được đội ngũ chúng tôi hoàn thiện với chất lượng cao nhất.
            </p>
          </div>

          {/* Grid list of projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsLoading ? (
              <div className="col-span-3 flex flex-col items-center justify-center py-20">
                <Loader2 className="w-10 h-10 text-forest-600 animate-spin mb-3" />
                <p className="text-gray-500 text-xs font-semibold">Đang tải dự án...</p>
              </div>
            ) : (
            <AnimatePresence mode="popLayout">
              {projects.map((project) => {
                const gallery = extractImagesFromHtml(project.summary);
                const coverImage = project.mainImage || gallery[0] || '';
                return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project._id}
                  className="bg-white rounded-2xl overflow-hidden border border-forest-100 shadow-sm hover:shadow-lg transition-transform duration-300 group"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                    <img
                      src={coverImage}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-forest-900/90 backdrop-blur-xs text-emerald-400 font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between min-h-[200px]">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-forest-600 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-forest-500" />
                        <span>{project.address}</span>
                        {project.completionYear && (
                          <>
                            <span className="text-gray-300">|</span>
                            <Maximize className="w-3.5 h-3.5 text-forest-500" />
                            <span>{project.completionYear}</span>
                          </>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-lg text-forest-950 group-hover:text-forest-600 transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    <Link
                      to={`/projects/${project.slug || project._id}`}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="mt-4 text-xs font-bold text-forest-700 hover:text-emerald-600 flex items-center gap-1.5 group-hover:translate-x-1 duration-200 transition-all text-left focus:outline-hidden"
                    >
                      <span>Xem chi tiết công trình</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
                );
              })}
            </AnimatePresence>
            )}
          </div>
        </div>
      </section>
      )}

      {/* 4. Journey/Process Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 mb-16">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Quy Trình Làm Việc</span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold tracking-tight text-forest-950">
            4 Bước Xây Dựng Chuyên Nghiệp
          </h2>
          <p className="text-gray-500 text-sm">
            Từ khâu khảo sát ban đầu đến bàn giao hoàn công, mỗi bước đều được thực hiện chu đáo, minh bạch và đúng tiến độ:
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
              <h3 className="font-bold text-base text-forest-950 mb-1.5">Khảo Sát & Báo Giá</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Kỹ sư đến tận công trình đo đạc, kiểm tra nền móng và tư vấn giải pháp tối ưu. Gửi báo giá chi tiết trong 24 giờ.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-forest-600 text-white font-serif font-bold text-lg flex items-center justify-center shadow-lg shadow-forest-100">
              02
            </div>
            <div>
              <h3 className="font-bold text-base text-forest-950 mb-1.5">Ký Hợp Đồng</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Hai bên thống nhất phạm vi, tiến độ, chi phí và tiêu chuẩn kỹ thuật. Hợp đồng rõ ràng minh bạch với điều khoản bảo hành.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-forest-600 text-white font-serif font-bold text-lg flex items-center justify-center shadow-lg shadow-forest-100">
              03
            </div>
            <div>
              <h3 className="font-bold text-base text-forest-950 mb-1.5">Thi Công & Giám Sát</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Đội thợ lành nghề thi công đúng tiêu chuẩn, giám sát chặt chẽ từng hạng mức, cập nhật tiến độ thường xuyên cho gia chủ.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-forest-950 font-serif font-bold text-lg flex items-center justify-center shadow-lg shadow-emerald-200">
              04
            </div>
            <div>
              <h3 className="font-bold text-base text-forest-950 mb-1.5">Nghiệm Thu & Bàn Giao</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Kiểm tra chất lượng từng chi tiết, nghiệm thu cùng gia chủ, bàn giao hồ sơ hoàn công đầy đủ và kích hoạt bảo hành.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Luxury Testimonial Section */}
      <section className="py-20 bg-forest-950 text-white relative overflow-hidden/50">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Construction professional background"
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
                  className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ${activeTestimonial === idx
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
                Ưu Đãi Khảo Sát & Báo Giá Chi Tiết Tận Công Trình
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Chúng tôi tặng MIỄN PHÍ suất khảo sát hiện trạng, tư vấn phương án thiết kế và báo giá chi tiết (Trị giá 3.000.000 VNĐ) cho 10 khách hàng đăng ký sớm nhất trong tháng này.
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
                Xem Bảng Giá Thi Công
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-white hover:bg-forest-50 text-forest-800 border border-forest-200 font-semibold py-4 rounded-xl text-center transition-all"
              >
                Nhận Suất Khảo Sát Miễn Phí
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
