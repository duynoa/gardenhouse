import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { projectApi } from '../../lib/admin/api/services';
import { Project } from '../../lib/admin/types';
import SEO from '../../components/SEO';

function extractImagesFromHtml(html: string): string[] {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const images: string[] = [];
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    images.push(match[1]);
  }
  return images;
}

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const data = await projectApi.list({ limit: 100 });
        setProjects(data.items);
      } catch (err) {
        console.error('Lỗi khi tải danh sách dự án:', err);
        setError('Có lỗi xảy ra khi tải danh sách công trình thực tế.');
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const tags = ['Tất cả', ...Array.from(new Set(projects.map(p => p.type)))];

  const filteredProjects = selectedTag === 'Tất cả'
    ? projects
    : projects.filter(p => p.type === selectedTag);

  return (
    <div className="py-12 bg-forest-50/30">
      <SEO 
        title="Dự án hoàn thành" 
        description="Các công trình sân vườn mái thái, hồ cá Koi tự chế vi sinh, hòn non bộ đắp xi măng bình dân đã hoàn thành tươm tất bởi tổ thợ Garden House."
        keywords="dự án sân vườn, công trình hoàn thành, thảm cỏ nhung nhật, hồ cá koi tự chế, hòn non bộ xi măng"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tiêu đề trang công trình */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Hình ảnh thực tế</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950">
            Các Công Trình Chúng Tôi Đã Làm
          </h1>
          <div className="w-16 h-1 bg-forest-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Chúng tôi tự hào giới thiệu những ngôi nhà vườn, ao cá Koi tự chế vi sinh, hòn non bộ đắp xi măng bình dân đã được tổ thợ hoàn thành trọn vẹn, chạy tốt, tươm tất với chi phí rẻ như mong đợi của khách hàng.
          </p>
        </div>

        {/* Thanh lọc dự án */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-forest-600 text-white shadow-md shadow-forest-200'
                  : 'bg-white text-gray-600 hover:bg-forest-100/50 border border-forest-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Danh sách lưới các công trình dự án */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-forest-600 animate-spin" />
            <p className="text-gray-500 text-xs mt-3 font-semibold">Đang tải danh sách công trình...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-forest-100 max-w-md mx-auto p-6 shadow-xs">
            <p className="text-gray-500 text-sm">{error}</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-forest-100 max-w-md mx-auto p-6 shadow-xs">
            <p className="text-gray-500 text-sm">Chưa có công trình nào được công bố.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => {
              const gallery = extractImagesFromHtml(project.summary);
              const coverImage = project.mainImage || gallery[0] || '';
              return (
              <Link
              key={project._id}
              to={`/projects/${project.slug || project._id}`}
              className="bg-white rounded-2xl overflow-hidden border border-forest-100 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                  <img
                    src={coverImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-forest-900/90 backdrop-blur-xs text-emerald-400 font-semibold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-semibold text-forest-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-forest-500" />
                      <span>{project.address}</span>
                    </div>
                    {project.completionYear && (
                      <>
                        <span className="text-gray-300 hidden sm:inline">|</span>
                        <div className="flex items-center gap-1">
                          <Maximize className="w-3.5 h-3.5 text-forest-500" />
                          <span>{project.completionYear}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-lg text-forest-950 mb-2 group-hover:text-forest-600 transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs text-forest-800">
                <span className="font-bold flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Đội thợ thi công trực tiếp
                </span>
                <span className="text-gray-400">Đã nghiệm thu</span>
              </div>
            </Link>
              );
            })}
          </div>
        )}

        {/* Cam kết của tổ thợ xứ quê */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-forest-100 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in mb-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-forest-950 mb-3">
              Mời Các Bác Ghé Xem Thực Tế & Nhận Khảo Sát Tận Nhà
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Tổ thợ chúng tôi xuất thân từ thợ mộc miền núi quê chiêm trũng, có nhiều năm cọ xát ao sỏi, thảm cỏ, non bộ xi măng. Chúng tôi sẵn lòng dẫn các bác đến trực tiếp một số công trình lân cận đã thi công xong để các bác xem kiểm tra tận mắt hệ thống lọc hồ cá thắm cỏ trước khi quyết định làm. Hân hạnh được phục vụ bà con hết lòng!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
