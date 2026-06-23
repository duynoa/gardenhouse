import { useState } from 'react';
import { ShieldCheck, Heart, Award, Compass, MessageSquare, Sparkles, Sprout, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';
import SEO from '../../components/SEO';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: '10+', label: 'Năm hoạt động', desc: 'Từ tổ thợ quê lập nghiệp năm 2015' },
    { value: '500+', label: 'Khu vườn hoàn thiện', desc: 'Sân vườn tiểu cảnh lớn nhỏ toàn quốc' },
    { value: '100%', label: 'Thật thà & Cam kết', desc: 'Đúng cây, đúng đá, báo giá minh bạch' },
    { value: '3 - 6', label: 'Tháng bảo hành', desc: 'Hỗ trợ chăm sóc định kỳ cho đến khi cây bám rễ' }
  ];

  const steps = [
    {
      number: '01',
      title: 'Khảo Sát Thực Địa',
      desc: 'Chúng tôi đến tận nhà vườn, đo đạc thế đất, hướng nắng, hướng gió và lắng nghe ước muốn của gia chủ hoàn toàn miễn phí.',
      icon: Compass,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    {
      number: '02',
      title: 'Phác Thảo Sơ Đồ',
      desc: 'Lập sơ đồ mặt bằng mộc mạc trên giấy, bố trí đá, hồ nước và chủng loại cây hợp phong thủy mà không tính phí thiết kế vẽ vời vẽ bóng.',
      icon: Briefcase,
      color: 'bg-amber-50 text-amber-700 border-amber-100'
    },
    {
      number: '03',
      title: 'Tuyển Lựa Cây & Đá',
      desc: 'Đích thân thợ cả lựa chọn từng cây xanh khỏe mạnh tại vườn bản địa và săn tìm những viên đá cuội tự nhiên có dáng hình đẹp nhất.',
      icon: Sprout,
      color: 'bg-forest-50 text-forest-700 border-forest-100'
    },
    {
      number: '04',
      title: 'Thi Công Thực Chiến',
      desc: 'Đội thợ lành nghề tiến hành đào hồ cá Koi, lắp lọc vi sinh tự chế tiết kiệm và sắp xếp từng viên đá, bụi cây tỉ mỉ, chắc chắn.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    {
      number: '05',
      title: 'Bàn Giao & Hướng Dẫn',
      desc: 'Vệ sinh sạch sẽ, nghiệm thu cùng chủ nhà, hướng dẫn kỹ thuật chăm sóc cây cỏ tự nhiên và kích hoạt gói bảo hành chu đáo.',
      icon: Award,
      color: 'bg-purple-50 text-purple-700 border-purple-100'
    }
  ];

  const faqs = [
    {
      q: 'Garden House có tính phí thiết kế bản vẽ 3D trước khi thi công không?',
      a: 'Không, chúng tôi tối ưu chi phí tối đa cho bạn bằng việc phác thảo ý tưởng và sơ đồ bố trí 2D trực tiếp tại khu đất hoàn toàn miễn phí. Chúng tôi không tính phí thiết kế vẽ phối cảnh 3D đắt đỏ.'
    },
    {
      q: 'Chính sách bảo hành cây trồng sau khi bàn giao như thế nào?',
      a: 'Tất cả cây trồng do Garden House cung cấp đều được bảo hành từ 3 đến 6 tháng. Nếu cây bị héo úa hoặc suy yếu do kỹ thuật trồng trong thời gian này, chúng tôi sẽ đến thay thế cây mới hoàn toàn miễn phí.'
    },
    {
      q: 'Chi phí thi công trung bình khoảng bao nhiêu?',
      a: 'Tùy thuộc vào diện tích và mong muốn của gia chủ. Nhờ sử dụng giống cây bản địa khỏe mạnh và nguyên liệu đá tự nhiên địa phương, chi phí của chúng tôi thường tiết kiệm hơn 30% so với thị trường.'
    },
    {
      q: 'Tổ thợ của Garden House nhận công trình ở khu vực nào?',
      a: 'Chúng tôi nhận khảo sát và thi công trực tiếp tại địa phương và tất cả các tỉnh thành lân cận. Với các công trình lớn, tổ thợ sẵn sàng di chuyển xa để phục vụ bà con.'
    }
  ];

  return (
    <div className="bg-[#fcfdfc] py-16">
      <SEO 
        title="Về chúng tôi" 
        description="Garden House khởi nghiệp từ một tổ thợ quê lành nghề năm 2017. Chúng tôi cam kết làm việc bằng cái tâm, mang lại sân vườn xanh mát giá tốt nhất."
        keywords="thợ vườn quê, đội ngũ garden house, thợ thi công thảm cỏ, thợ đắp non bộ xi măng"
      />
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

        {/* Stats Section */}
        <section className="py-12 border-y border-forest-100 mb-20 bg-forest-50/10 rounded-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 p-4">
                <span className="font-serif text-3.5xl sm:text-5xl font-extrabold text-forest-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-forest-750">
                  {stat.label}
                </span>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[200px] mx-auto">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps Showcase */}
        <section className="py-16 bg-forest-50/30 rounded-3xl p-8 sm:p-12 border border-forest-100/60 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-forest-600 tracking-wider">Cách Chúng Tôi Làm Việc</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950 mt-2">
              Quy Trình 5 Bước Mộc Mạc
            </h3>
            <div className="w-12 h-0.5 bg-forest-300 mx-auto mt-3"></div>
            <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
              Không rườm rà bản vẽ đắt đỏ, chúng tôi làm việc trực tiếp tại thực địa, tối ưu hóa từng khâu để mang lại sân vườn đẹp nhất với chi phí tiết kiệm nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-6 border border-forest-100/40 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  <div className="absolute top-4 right-4 text-3xl font-bold text-forest-100 font-serif group-hover:text-forest-200 transition-colors">
                    {step.number}
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${step.color} shrink-0`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <h4 className="font-serif font-bold text-base text-forest-950">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold text-forest-600 tracking-wider">Giải đáp thắc mắc</span>
            <h3 className="font-serif text-2xl sm:text-3.5xl font-bold text-forest-950 mt-2">
              Những Câu Hỏi Thường Gặp
            </h3>
            <div className="w-12 h-0.5 bg-forest-300 mx-auto mt-3"></div>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-forest-100/50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-forest-950 focus:outline-hidden hover:bg-forest-50/20 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-forest-500 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === idx ? 'max-h-[200px] border-t border-forest-50' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 text-xs sm:text-sm text-gray-500 leading-relaxed bg-[#fafbfa]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative rounded-3xl overflow-hidden bg-forest-950 text-white p-8 sm:p-16 text-center shadow-lg">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-6 items-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Liên hệ khảo sát miễn phí</span>
            <h3 className="font-serif text-3xl sm:text-4.5xl font-bold leading-tight">
              Biến Góc Sân Nhà Bạn Thành Thiên Đường Xanh
            </h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-xl">
              Nhấc máy gọi cho tổ thợ quê chúng tôi để được tư vấn thiết kế mặt bằng sơ bộ và khảo sát đất vườn tại nhà hoàn toàn không mất phí.
            </p>
            <button className="mt-4 px-8 py-3.5 bg-white text-forest-950 font-bold rounded-full shadow-md hover:bg-emerald-50 hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2 text-sm focus:outline-hidden">
              <span>Đăng Ký Tư Vấn Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
