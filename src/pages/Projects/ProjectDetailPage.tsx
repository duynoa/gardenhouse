import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Maximize, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  AlertTriangle, 
  Wrench, 
  UserCheck, 
  PhoneCall,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { mapProjectToFE } from '../../lib/projectsData';
import { projectApi } from '../../lib/admin/api/services';
import { Project } from '../../types';
import SEO from '../../components/SEO';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    async function fetchProjectData() {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        
        // 1. Tải chi tiết dự án hiện tại (bằng ID hoặc bằng Slug)
        const isMongoId = /^[0-9a-fA-F]{24}$/.test(id);
        const data = isMongoId 
          ? await projectApi.get(id) 
          : await projectApi.getBySlug(id);
          
        const mapped = mapProjectToFE(data);
        setProject(mapped);

        // 2. Tải các dự án liên quan từ API
        const listData = await projectApi.list({ limit: 4 });
        const mappedList = listData.items
          .map(mapProjectToFE)
          .filter((p) => p.id !== mapped.id)
          .slice(0, 3);
        setRelatedProjects(mappedList);
      } catch (err) {
        console.error('Lỗi khi tải chi tiết dự án:', err);
        setError('Không tìm thấy dự án hoặc có lỗi xảy ra.');
      } finally {
        setLoading(false);
      }
    }
    fetchProjectData();
  }, [id]);

  // Trạng thái đang tải dữ liệu
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-forest-50/20 px-4">
        <SEO title="Đang tải..." description="Đang tải dữ liệu công trình thực tế." />
        <Loader2 className="w-10 h-10 text-forest-600 animate-spin mb-3" />
        <p className="text-gray-500 text-xs font-semibold">Đang tải chi tiết công trình...</p>
      </div>
    );
  }

  // Nếu có lỗi hoặc không tìm thấy dự án
  if (error || !project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-forest-50/20 px-4">
        <SEO 
          title="Không tìm thấy dự án" 
          description="Không tìm thấy dự án hoặc dự án đã bị xóa khỏi hệ thống."
        />
        <div className="bg-white p-8 rounded-3xl border border-forest-100 shadow-md text-center max-w-md w-full">
          <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4 animate-bounce" />
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

  // Danh sách các ảnh cho gallery (nếu không có thì dùng ảnh chính)
  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  // Chuẩn bị thông tin meta cho SEO động
  const seoTitle = `${project.title}`;
  const seoDescription = `${project.title} tại ${project.location} diện tích ${project.area}. Chi tiết quá trình thi công thảm cỏ, hồ cá cảnh giá bình dân bởi Garden House.`;
  const seoKeywords = `${project.title}, ${project.category}, ${project.location}, thi công sân vườn, thảm cỏ nhật, hồ cá koi giá rẻ, tiểu cảnh sân vườn`;

  return (
    <div className="bg-forest-50/20 py-10">
      {/* Tích hợp component SEO động cập nhật thẻ title & meta description */}
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />

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

        {/* Cấu trúc Header Dự án */}
        <div className="mb-10">
          <div className="inline-block mb-3">
            <span className="bg-forest-900 text-emerald-400 font-semibold text-[11px] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950 mb-4 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-forest-500" />
              <span className="font-medium text-gray-700">{project.location}</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <Maximize className="w-4 h-4 text-forest-500" />
              <span className="font-medium text-gray-700">Diện tích: {project.area}</span>
            </div>
          </div>
        </div>

        {/* Bố cục chính: Ảnh bên trái, thông tin chi tiết bên phải */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Gallery hình ảnh thực tế */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden bg-gray-100 border border-forest-100 shadow-sm">
              <img
                src={images[activeImageIndex]}
                alt={`${project.title} - Ảnh ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded-md text-xs font-semibold">
                Hình ảnh thực tế {activeImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-18 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all duration-300 cursor-pointer ${
                      activeImageIndex === idx 
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

          {/* Hộp thông tin tóm tắt & Kế hoạch ngân sách */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 border border-forest-100 shadow-sm flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-forest-950 pb-4 border-b border-forest-50">
                Thông số kỹ thuật
              </h3>

              <div className="grid grid-cols-1 gap-4">
                
                {/* Thời gian */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-forest-50 text-forest-600">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-bold">Thời gian thi công</span>
                    <span className="text-sm font-semibold text-forest-950">{project.duration || 'Liên hệ khảo sát'}</span>
                  </div>
                </div>

                {/* Chi phí ước tính */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-forest-50 text-forest-600">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-bold">Chi phí hoàn thiện</span>
                    <span className="text-sm font-semibold text-emerald-600">{project.costRange || 'Liên hệ báo giá'}</span>
                  </div>
                </div>

                {/* Tổ thợ đảm nhiệm */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-forest-50 text-forest-600">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-bold">Tổ thợ thực hiện</span>
                    <span className="text-sm font-semibold text-forest-950">Tổ thợ chuyên sỏi cuội & thảm cỏ Garden House</span>
                  </div>
                </div>

              </div>

              {/* Cam kết nghiệm thu */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-emerald-900 mb-0.5">Đã nghiệm thu đưa vào sử dụng</span>
                  Công trình chạy ổn định, hệ lọc vi sinh tự nhiên hoạt động hoàn hảo, thảm cỏ bám rễ sâu tươi tốt.
                </div>
              </div>
            </div>

            {/* Gọi tư vấn nhanh */}
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

        {/* Nội dung chi tiết quá trình thi công */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Cột trái rộng: Chi tiết thử thách, giải pháp, các bước */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* 1. Tổng quan & Câu chuyện dự án */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-forest-950 mb-4">Câu chuyện thi công</h3>
              <div 
                className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 project-rich-content"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              {/* Bổ sung danh sách đặc điểm nổi bật nếu có */}
              {project.features && project.features.length > 0 && (
                <div className="bg-forest-50/40 rounded-2xl p-5 border border-forest-100">
                  <h4 className="text-sm font-bold text-forest-900 mb-3 uppercase tracking-wider">Đặc điểm nổi bật của công trình</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 2. Thách thức và Giải pháp */}
            {project.challenges && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-xs">
                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-4">Khó khăn & Giải pháp khắc phục</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wide block mb-2">Thách thức hiện trạng</span>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{project.challenges}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block mb-2">Giải pháp của tổ thợ</span>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{project.solutions}</p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Các bước triển khai thực tế */}
            {project.detailedSteps && project.detailedSteps.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-xs">
                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-6">Nhật ký các bước thi công thực tế</h3>
                
                <div className="relative border-l border-forest-100 ml-4 pl-6 sm:pl-8 flex flex-col gap-8">
                  {project.detailedSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Node tròn */}
                      <span className="absolute -left-[39px] sm:-left-[47px] top-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-forest-600 text-white text-[10px] font-bold ring-4 ring-white shadow-xs">
                        {idx + 1}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-forest-950 mb-1.5">{step.stepName}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{step.stepDesc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Cột phải hẹp: Vật liệu chủ đạo & Phản hồi khách hàng */}
          <div className="flex flex-col gap-6">
            
            {/* Vật liệu sử dụng */}
            {project.materials && project.materials.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-forest-100 shadow-sm">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-forest-50">
                  <Wrench className="w-5 h-5 text-forest-600" />
                  <h3 className="font-serif text-lg font-bold text-forest-950">Vật liệu cây trồng chủ đạo</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {project.materials.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 bg-forest-50/50 p-2.5 rounded-xl border border-forest-100/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-400 shrink-0"></div>
                      <span className="font-medium">{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Đánh giá phản hồi */}
            {project.clientQuote && (
              <div className="bg-white rounded-3xl p-6 border border-forest-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-4 right-4 text-forest-100 font-serif text-7xl font-bold leading-none select-none pointer-events-none">
                  “
                </div>
                <h3 className="font-serif text-lg font-bold text-forest-950 mb-4 pb-2 border-b border-forest-50">Đánh giá của chủ nhà</h3>
                <p className="text-gray-500 italic text-xs sm:text-sm leading-relaxed mb-6 relative z-10">
                  "{project.clientQuote.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 font-bold text-sm">
                    {project.clientQuote.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-forest-950">{project.clientQuote.author}</h5>
                    <span className="text-[10px] sm:text-xs text-gray-400">{project.clientQuote.role}</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Các dự án liên quan */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-forest-100 pt-16 mb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-bold text-forest-600 tracking-wider block mb-1">Tham khảo thêm</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">Các công trình thực tế khác</h2>
              </div>
              <Link 
                to="/projects" 
                className="text-xs sm:text-sm font-bold text-forest-600 hover:text-forest-800 flex items-center gap-1 transition-colors"
              >
                Xem tất cả
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <Link
                  key={proj.id}
                  to={`/projects/${proj.slug || proj.id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-forest-100 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] uppercase font-semibold text-forest-600 block mb-1.5">{proj.category}</span>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-forest-950 group-hover:text-forest-600 transition-colors line-clamp-1">
                        {proj.title}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-2 mt-1.5 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-3 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-500">
                    <span className="flex items-center gap-1 font-semibold text-forest-700">
                      <MapPin className="w-3 h-3 text-forest-500" />
                      {proj.location}
                    </span>
                    <span>{proj.area}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
