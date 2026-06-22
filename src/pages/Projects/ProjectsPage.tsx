import { useState } from 'react';
import { MapPin, Maximize, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Project } from '../../types';

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');

  // Toàn bộ dự án đã làm của đơn vị thi công bình dân
  const allProjects: Project[] = [
    {
      id: 'p1',
      title: 'Thi Công Sân Vườn Nhà Mái Thái',
      category: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      area: '450m²',
      location: 'Sóc Sơn, Hà Nội',
      description: 'Dọn sạch mặt bằng thô, rải thảm cỏ nhung Nhật bọc quanh lối đi lát đá cuội xám chống trơn, đem lại không gian thoáng đãng sạch mát cho khoảng sân ngôi nhà cấp 4.'
    },
    {
      id: 'p2',
      title: 'Hồ Cá Koi Quê Em Tiểu Cảnh Cúc Lan',
      category: 'Hồ cá Koi & Non Bộ xi măng',
      image: 'https://images.unsplash.com/photo-1558905612-4ee4eb15891d?auto=format&fit=crop&w=1000&q=80',
      area: '120m²',
      location: 'Quận 12, TP. Hồ Chí Minh',
      description: 'Sắp sỏi bọc bờ ao, đắp tiểu cảnh vách núi xi măng mini kết hợp thả chép rực rỡ và trồng cỏ bụi xanh mỡ màng đọng sương dọn mát góc hiên.'
    },
    {
      id: 'p3',
      title: 'Nhà Vườn Ao Cá Cây Ăn Quả Sum Suê',
      category: 'Vườn Cây Ăn Quả & Luống Rau',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
      area: '800m²',
      location: 'Hòa Lạc, Hà Nội',
      description: 'Quy hoạch vùng trồng hai đồi bưởi Diễn trĩu quả kết hợp gieo rau muống đỏ, mồng tơi ta tươm tất bép xanh phục vụ bữa cơm dân dã tươi mướt cho gia đình.'
    },
    {
      id: 'p4',
      title: 'Tiểu Cảnh Lan Tre Ban Công Chung Cư',
      category: 'Tiểu cảnh Góc Sân & Ban công',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80',
      area: '15m²',
      location: 'Vinhomes Ocean Park, Gia Lâm',
      description: 'Rải bửng sỏi dăm trắng tinh tươm hắt sáng nhẹ, treo các giỏ phong lan ta và lắp giàn nứa leo hoa giấy vừa gọn gàng vừa rực rỡ gió thông.'
    },
    {
      id: 'p5',
      title: 'Nhà Cấp 4 Mái Ngói Đẹp Bình Yên',
      category: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      area: '250m²',
      location: 'Sa Pa, Lào Cai',
      description: 'Rải sỏi núi, cắm khóm hoa hướng dương vàng hoe cùng bồn sắn nhỏ bao quanh bậc đá mộc sần dạo mát đón mây đèo trong lành thơ mộng.'
    },
    {
      id: 'p6',
      title: 'Ao Chòi Mái Lá Đón Gió Mát Chiều Quê',
      category: 'Hồ cá Koi & Non Bộ xi măng',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80',
      area: '200m²',
      location: 'Huyện Củ Chi, TP. Hồ Chí Minh',
      description: 'Xây chòi hóng mát khung tre lợp lá dừa nước dân dã kề cận hồ lắng chống phèn bơi lấp trong vắt. Chốn tĩnh tại nghỉ chân cực kỳ thảnh thơi.'
    },
    {
      id: 'p7',
      title: 'Cải Tạo Thảm Cỏ Lối Đi Nhà Ống Phố Hẹp',
      category: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80',
      area: '60m²',
      location: 'Thanh Trì, Hà Nội',
      description: 'Tận dụng hành lang lối đi nhỏ bên sườn nhà ống bọc cỏ lá tre thô bền bỉ chịu dẫm đạp, rải thạch mộc đi bước êm chân rôm rả.'
    },
    {
      id: 'p8',
      title: 'Hòn Non Bộ Xi Măng Nuôi Cá Trê Ta',
      category: 'Hồ cá Koi & Non Bộ xi măng',
      image: 'https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1000&q=80',
      area: '45m²',
      location: 'Ý Yên, Nam Định',
      description: 'Vừa trang trí tạo dòng chảy róc rách phong thủy vừa làm ao nhỏ cho các cụ nuôi vui cá trắm cá trê, đá đắp tay tỉa tót rất công phu dân dã mộc dày.'
    }
  ];

  const tags = [
    'Tất cả',
    'Nhà Vườn Thảm Cỏ Mộc Mạc',
    'Hồ cá Koi & Non Bộ xi măng',
    'Vườn Cây Ăn Quả & Luống Rau',
    'Tiểu cảnh Góc Sân & Ban công'
  ];

  const filteredProjects = selectedTag === 'Tất cả'
    ? allProjects
    : allProjects.filter(p => p.category === selectedTag);

  return (
    <div className="py-12 bg-forest-50/30">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-forest-100 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-forest-900/90 backdrop-blur-xs text-emerald-400 font-semibold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-semibold text-forest-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-forest-500" />
                      <span>{project.location}</span>
                    </div>
                    <span className="text-gray-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1">
                      <Maximize className="w-3.5 h-3.5 text-forest-500" />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-forest-950 mb-2 group-hover:text-forest-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs text-forest-800">
                <span className="font-bold flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Đội thợ thi công trực tiếp
                </span>
                <span className="text-gray-400">Đã nghiệm thu</span>
              </div>
            </div>
          ))}
        </div>

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
