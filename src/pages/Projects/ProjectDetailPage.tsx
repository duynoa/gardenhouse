import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  PhoneCall,
  Recycle,
  ShieldCheck,
  Star,
  ThumbsUp,
  Users,
  Wrench
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import { projectApi } from '../../lib/admin/api/services';
import { Project } from '../../lib/admin/types';

const CONSTRUCTION_STEPS = [
  {
    step: 'Bước 1',
    title: 'Khảo sát & Tư vấn miễn phí',
    desc: 'Tổ thợ đến tận nơi khảo sát thực tế, đo đạc diện tích, nắm hướng nắng gió, điều kiện đất và lắng nghe nhu cầu của gia chủ.',
    icon: Clock
  },
  {
    step: 'Bước 2',
    title: 'Báo giá & Ký hợp đồng',
    desc: 'Lên phương án thiết kế sơ bộ, báo giá chi tiết từng hạng mục. Khi đồng ý, hai bên ký hợp đồng rõ ràng về tiến độ và chi phí.',
    icon: BadgeCheck
  },
  {
    step: 'Bước 3',
    title: 'Thi công chuyên nghiệp',
    desc: 'Tổ thợ thi công trực tiếp tại công trình, đảm bảo đúng kỹ thuật từng hạng mục. Gia chủ có thể giám sát trực tiếp tại site.',
    icon: Wrench
  },
  {
    step: 'Bước 4',
    title: 'Nghiệm thu & Bàn giao',
    desc: 'Cùng gia chủ kiểm tra từng chi tiết công trình trước khi bàn giao. Hướng dẫn sử dụng, bảo dưỡng và chăm sóc cây cảnh ban đầu.',
    icon: ThumbsUp
  }
];

const PROJECT_FEATURES = [
  'Đội thợ thi công trực tiếp, không qua trung gian',
  'Vật liệu tự nhiên nội địa, rõ nguồn gốc',
  'Thi công nhanh gọn, đúng tiến độ cam kết',
  'Bảo hành bảo dưỡng miễn phí 6 tháng đầu',
  'Tư vấn khảo sát hoàn toàn miễn phí tận nơi',
  'Giá bình dân, phù hợp túi tiền gia đình Việt'
];

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: 'Bảo hành 6 tháng',
    desc: 'Bảo hành toàn bộ công trình trong 6 tháng đầu, bao gồm thảm cỏ, hệ thống lọc và cây trồng còn sống.'
  },
  {
    icon: Users,
    title: 'Hỗ trợ bảo dưỡng',
    desc: 'Tổ thợ hỗ trợ hướng dẫn chăm sóc và bảo dưỡng định kỳ. Gia chủ có thể gọi điện nhờ tư vấn bất kỳ lúc nào.'
  },
  {
    icon: Recycle,
    title: 'Cam kết chất lượng',
    desc: 'Nếu cây chết trong vòng 1 tháng, tổ thợ sẽ đến thay cây mới miễn phí. Đá cuội và vật liệu cố định bảo hành trọn đời.'
  }
];

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    async function fetchProjectData() {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);

        const isMongoId = /^[0-9a-fA-F]{24}$/.test(id);
        const data = isMongoId
          ? await projectApi.get(id)
          : await projectApi.getBySlug(id);

        setProject(data);
      } catch (err) {
        console.error('Lỗi khi tải chi tiết dự án:', err);
        setError('Không tìm thấy dự án hoặc có lỗi xảy ra.');
      } finally {
        setLoading(false);
      }
    }
    fetchProjectData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-forest-50/20 px-4">
        <SEO title="Đang tải..." description="Đang tải dữ liệu công trình thực tế." />
        <Loader2 className="w-10 h-10 text-forest-600 animate-spin mb-3" />
        <p className="text-gray-500 text-xs font-semibold">Đang tải chi tiết công trình...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-forest-50/20 px-4">
        <SEO
          title="Không tìm thấy dự án"
          description="Không tìm thấy dự án hoặc dự án đã được gỡ xuống."
        />
        <div className="bg-white p-8 rounded-3xl border border-forest-100 shadow-md text-center max-w-md w-full">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-16 h-16 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest-950 mb-2">Không tìm thấy công trình</h2>
          <p className="text-gray-500 text-sm mb-6">
            Rất tiếc, thông tin công trình này không tồn tại hoặc đã được gỡ xuống.
          </p>
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách dự án
          </button>
        </div>
      </div>
    );
  }

  const images = project.mainImage ? [project.mainImage] : [];

  const seoTitle = project.name;
  const seoDescription = `${project.name} tại ${project.address}. Chi tiết công trình do Garden House thi công.`;
  const seoKeywords = `${project.name}, ${project.type}, ${project.address}, thi công sân vườn, thảm cỏ nhật, hồ cá koi giá rẻ, tiểu cảnh sân vườn`;

  return (
    <div className="bg-forest-50/20 py-10">
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} ogImage={images[0]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nút quay lại */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-900 font-semibold text-sm transition-colors group"
          >
            <span className="p-2 rounded-lg bg-white border border-forest-100 group-hover:bg-forest-50 transition-colors">
              <ArrowLeft className="w-4 h-4 text-forest-600" />
            </span>
            Quay lại tất cả dự án
          </Link>
        </div>

        {/* Header Dự án */}
        <div className="mb-10">
          <div className="inline-block mb-3">
            <span className="bg-forest-900 text-emerald-400 font-semibold text-[11px] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              {project.type}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950 mb-4 leading-tight">
            {project.name}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-forest-500" />
              <span className="font-medium text-gray-700">{project.address}</span>
            </div>
            {project.completionYear && (
              <>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-gray-700">Hoàn thành {project.completionYear}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bố cục chính: Gallery + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

          {/* Gallery */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden bg-gray-100 border border-forest-100 shadow-sm">
              <img
                src={images[activeImageIndex]}
                alt={`${project.name} - Ảnh ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded-md text-xs font-semibold">
                Hình ảnh thực tế {activeImageIndex + 1} / {images.length}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-18 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all duration-300 cursor-pointer ${activeImageIndex === idx
                        ? 'border-forest-600 scale-95 shadow-md'
                        : 'border-transparent hover:border-forest-200'
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 border border-forest-100 shadow-sm flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-forest-950 pb-4 border-b border-forest-50">
                Thông số kỹ thuật
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-forest-50 text-forest-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-bold">Đơn vị thi công</span>
                  <span className="text-sm font-semibold text-forest-950">Tổ thợ Garden House</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-emerald-900 mb-0.5">Đã nghiệm thu đưa vào sử dụng</span>
                  Công trình chạy ổn định, bàn giao tươm tất cho chủ nhà.
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-forest-950 text-white rounded-3xl p-6 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-800/40 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-120"></div>
              <h4 className="font-serif text-lg font-bold mb-2">Thích kiểu thiết kế này?</h4>
              <p className="text-forest-200 text-xs leading-relaxed mb-6">
                Liên hệ ngay với tổ thợ chúng tôi để nhận tư vấn, báo giá ước lượng và khảo sát hiện trạng đất thực tế miễn phí tận nơi.
              </p>
              <a
                href="tel:0987654321"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-3 px-4 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                Bấm gọi thợ: 0987 654 321
              </a>
            </div>
          </div>
        </div>

        {/* Giới thiệu công trình */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-xs mb-10">
          <h2 className="font-serif text-2xl font-bold text-forest-950 mb-4">Giới thiệu công trình</h2>
          <div
            className="text-gray-600 text-sm sm:text-base leading-relaxed project-rich-content"
            dangerouslySetInnerHTML={{ __html: project.summary }}
          />
        </div>

        {/* Đặc điểm nổi bật */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-xs mb-10">
          <h2 className="font-serif text-2xl font-bold text-forest-950 mb-2">Đặc điểm nổi bật của công trình</h2>
          <div className="w-12 h-1 bg-forest-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECT_FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-forest-50/50 border border-forest-100/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quy trình thi công */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-xs mb-10">
          <h2 className="font-serif text-2xl font-bold text-forest-950 mb-2">Quy trình thi công</h2>
          <div className="w-12 h-1 bg-forest-400 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONSTRUCTION_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  {idx < CONSTRUCTION_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-forest-200 z-0" />
                  )}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-forest-500 tracking-widest mb-1">{step.step}</span>
                  <h4 className="font-serif font-bold text-base text-forest-950 mb-2 leading-tight">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phản hồi khách hàng */}
        <div className="mb-10 bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-xs relative overflow-hidden">
          <div className="absolute top-6 right-6 text-forest-100 font-serif text-8xl font-bold leading-none select-none pointer-events-none">"</div>
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-forest-50">
            <Star className="w-5 h-5 text-forest-600" />
            <h3 className="font-serif text-xl font-bold text-forest-950">Đánh giá của khách hàng</h3>
          </div>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-500 italic text-sm leading-relaxed mb-6 relative z-10">
            Cảm ơn tổ thợ đã thi công công trình rất tận tâm, chu đáo. Chất lượng vật liệu tốt, tiến độ đúng hẹn. Chúng tôi rất hài lòng với kết quả.
          </p>
        </div>

        {/* Chính sách bảo hành & cam kết */}
        <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">Chính sách bảo hành & Cam kết</h2>
          </div>
          <div className="w-12 h-1 bg-emerald-500/40 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUARANTEES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-forest-800/50 rounded-2xl p-5 border border-forest-700/50">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-forest-300 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA cuối trang */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-forest-100 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
            <PhoneCall className="w-7 h-7 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-forest-950 mb-2">
              Liên hệ ngay để nhận báo giá chi tiết
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
              Tổ thợ Garden House sẵn sàng đến tận nơi khảo sát miễn phí, tư vấn phương án thiết kế và báo giá chi tiết từng hạng mục. Không phí ẩn, không chào giá trên trời.
            </p>
          </div>
          <a
            href="tel:0789490590"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-4 px-8 rounded-xl transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            Gọi ngay: 078.949.0590
          </a>
        </div>

      </div>
    </div>
  );
}
