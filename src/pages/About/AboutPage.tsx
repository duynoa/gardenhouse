import { useState } from 'react';
import { ShieldCheck, Heart, Award, Compass, MessageSquare, Briefcase, Sparkles, Sprout } from 'lucide-react';
import { TeamMember } from '../../types';

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<string | null>('tm1');

  const team: TeamMember[] = [
    {
      id: 'tm1',
      name: 'Anh Nguyễn Duy Đông',
      role: 'Trưởng nhóm kỹ thuật & Thi công thực chiến',
      specialty: 'Bố trí mặt bằng & Giám sát thi công xây dựng',
      bio: 'Hơn 12 năm kinh nghiệm thực tế lăn lộn tại các công trường xây dựng, làm sân vườn tiểu cảnh. Với tính cách thật thà, anh luôn tối ưu phương án xây dựng mộc mạc, tận dụng tối đa nguyên liệu có sẵn để tiết kiệm chi phí nhất cho bà con.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'tm2',
      name: 'Bác Trần Văn Bản',
      role: 'Thợ cả đắp hòn non bộ & Tranh đá phong cảnh',
      specialty: 'Nghệ thuật đắp xi măng hòn non bộ, luồn khe nước & Sắp sỏi',
      bio: 'Người có hơn 25 năm bôn ba khắp các tỉnh chuyên nghề đắp non bộ xi măng mô phỏng vách núi tự nhiên, đắp tranh đá tiểu cảnh sân vườn. Bác chỉ cần ngắm qua thế đất là biết đặt non bộ hay bể nước ở đâu để đón gió mát, tụ tài lộc.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'tm3',
      name: 'Chị Nguyễn Thị Mai',
      role: 'Chuyên viên giống cây & Thảm cỏ vườn ươm',
      specialty: 'Xử lý thổ nhưỡng, chọn giống cây dễ sống, chăm sóc thảm cỏ',
      bio: 'Thạc sĩ Nông nghiệp Sinh học tinh gọn Đại học Sydney. Chị Mai chuyên quy hoạch sơ đồ tự lọc hồ cá cân bằng sinh học vi khuẩn hữu cơ tuyệt vời mà không lạm dụng hóa chất nhân tạo gây hại.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'tm4',
      name: 'Anh Hoàng Văn Lâm',
      role: 'Thợ điện nước & Kỹ thuật hồ cá cá cảnh',
      specialty: 'Lắp hệ thống lọc vi sinh tự chế cho hồ cá Koi, luồng bơm tự động',
      bio: 'Chuyên trị lọc nước rêu xanh, nước đục hồ cá Koi. Anh Lâm có tài tự chế tạo các hệ lọc vi sinh bình dị bằng bồn nhựa hay bể lắng lọc xếp cát thạch anh, đá nham thạch cực kỳ hiệu quả mà lại tiết kiệm tiền mua thiết bị đắt đỏ ngoài thị trường.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    }
  ];

  // Specific quotes from experts
  const expertQuotes: Record<string, string> = {
    tm1: '“Chúng tôi không vẽ bản vẽ đắt đỏ, chúng tôi mang sự thật thà, lấy công làm lãi để làm sân vườn mát mẻ, tiết kiệm nhất cho anh chị chủ nhà.”',
    tm2: '“Đất với đá tự nhiên thô kệch, nhưng nếu thợ có tâm sắp đặt khéo léo phối với nước chảy róc rách, tự khắc khu vườn sẽ tràn trề sinh khí.”',
    tm3: '“Cây cỏ vườn nhà chỉ cần siêng tưới, chọn giống bản địa dễ sống và hợp đất trồng là xanh mướt, hoa nở đẹp quanh năm, không lo héo úa.”',
    tm4: '“Nước hồ cá Koi có sạch trong thì nuôi cá mới sướng mắt. Tôi lắp bộ lọc tự chế đảm bảo nước trong veo, dễ bảo dưỡng lau rửa và cam kết chi phí rẻ nhất.”'
  };

  const currentMember = team.find(m => m.id === selectedMember) || team[0];

  return (
    <div className="bg-[#fcfdfc] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-20 animate-fade-in">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Chúng Tôi Là Ai</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950">
            Đội Ngũ Thợ Vườn <br />Người Quê Bình Dân & Thật Thà
          </h1>
          <div className="w-16 h-1 bg-forest-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Garden House khởi nghiệp từ một tổ thợ quê lành nghề, dạn dày sương gió từ năm 2015. Là những người thợ trực tiếp thi công tại công trường đầy nắng gió, chúng tôi tự hào mang đến các công trình sân vườn, hồ cá Koi, thảm cỏ mộc mạc bền đẹp với chi phí rẻ bình dân, vừa túi tiền của mọi nhà.
          </p>
        </div>

        {/* Story Section & Big Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-forest-600 rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-15 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80"
              alt="Our greenhouse design process"
              className="rounded-3xl object-cover w-full aspect-4/3 shadow-lg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-lg border border-forest-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-forest-500 flex items-center justify-center text-white">
                <Sprout className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Cam kết bảo vệ</p>
                <p className="text-forest-900 font-bold text-sm">Hơn 500.000 cây xanh đã gieo</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold w-fit">
              <Sparkles className="w-3.5 h-3.5 text-forest-600" />
              <span>Giá trị lưu giữ muôn đời</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3.5xl font-bold text-forest-900 leading-tight">
              Làm Việc Bằng Cái Tâm, Tiết Kiệm Tối Đa Cho Gia Chủ
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Chúng tôi trực tiếp lựa giống cây cỏ bản địa dai sức tại nhà vườn bản xứ, bứng gốc trồng theo kỹ thuật đằm đất tơi xốp tự nhiên. Điều này đảm bảo cây phát triển khỏe khoắn mà không tốn kém tiền bạc mua phân thuốc hay dụng cụ chăm sóc đắt đỏ sau này.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-forest-900">Tính trung thực tuyệt đối</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Luôn cung cấp đúng kích thước, chủng loại cây cảnh khỏe nhất được cam kết trên hợp đồng.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-forest-900">Tôn trọng hệ sinh thái</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Không dùng thuốc diệt cỏ nguy hại, ưu tiên dòng đất mẹ màu mỡ và sinh học an toàn.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-forest-900">Bảo hành uy tín chu đáo</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Cam kết hỗ trợ chăm sóc tận nhà, thay thế các bụi cây suy yếu hoàn toàn miễn phi trong những tháng đầu bám rễ.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 mt-1">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-forest-900">Tinh tế từng thớ sỏi</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Đặt sự tập trung tối đa vào kỹ năng đặt hầm gối đá phong thủy dấp dính tựa thiên tạo bấy lâu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Team Section with specific biography viewing */}
        <section className="py-16 bg-forest-50/40 rounded-3xl p-8 sm:p-12 border border-forest-100">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Tab selection list of Team Members */}
            <div className="lg:w-2/5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase font-bold text-forest-600 tracking-wider">Thợ quê lành nghề</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  Những Bàn Tay Thực Chiến Trực Tiếp Đắp Đá Cắm Cây
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                  Bấm chọn từng người anh em trong tổ thợ mộc mạc dưới đây để hiểu thêm về tay nghề và cống hiến thực tế tại công trình của chúng tôi:
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                {team.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member.id)}
                    className={`p-4 rounded-2xl flex items-center gap-4 text-left border transition-all duration-300 w-full focus:outline-hidden ${
                      selectedMember === member.id
                        ? 'bg-white border-forest-400 shadow-md translate-x-2'
                        : 'bg-transparent border-transparent hover:bg-forest-100/50'
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-forest-950 leading-tight">{member.name}</h4>
                      <p className="text-xs text-forest-600 mt-0.5">{member.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Micro display block of chosen specialist with quotes */}
            <div className="lg:w-3/5 bg-white rounded-3xl p-6 sm:p-10 border border-forest-100/60 shadow-xs flex flex-col sm:flex-row gap-8 items-center sm:items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-50 rounded-bl-full z-0 opacity-40"></div>

              <div className="w-full sm:w-1/3 shrink-0 relative z-10">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-full aspect-3/4 rounded-2xl object-cover shadow-md border-3 border-forest-50"
                />
              </div>

              <div className="w-full sm:w-2/3 flex flex-col gap-4 relative z-10 justify-between h-full min-h-[300px]">
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg w-fit">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Lĩnh vực: {currentMember.specialty}</span>
                  </div>

                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-forest-950">
                    {currentMember.name}
                  </h4>
                  <p className="text-[11px] font-bold text-forest-500 uppercase tracking-wider -mt-2">
                    {currentMember.role}
                  </p>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-2">
                    {currentMember.bio}
                  </p>
                </div>

                <div className="mt-6 border-t border-forest-50 pt-4">
                  <div className="flex gap-2 text-forest-700">
                    <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="font-serif italic text-xs sm:text-sm text-forest-800 leading-relaxed">
                      {expertQuotes[currentMember.id]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
