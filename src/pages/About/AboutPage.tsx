import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Compass, ChevronDown, ArrowRight, Sparkles, Briefcase } from 'lucide-react';
import SEO from '../../components/SEO';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: '8+', label: 'Năm hoạt động', desc: 'Từ đội thợ nề xây dựng năm 2017 tại Quảng Ngãi' },
    { value: '200+', label: 'Công trình hoàn thành', desc: 'Nhà ở, biệt thự, công trình công cộng tại Quảng Ngãi và vùng lân cận' },
    { value: '100%', label: 'Cam kết chất lượng', desc: 'Đúng tiến độ, đúng ngân sách, bảo hành dài hạn' },
    { value: '3-12', label: 'Tháng bảo hành', desc: 'Tùy loại công trình và hạng mục thi công' }
  ];

  const steps = [
    {
      number: '01',
      title: 'Khảo Sát & Báo Giá',
      desc: 'Chúng tôi đến tận công trình, đo đạc diện tích, kiểm tra nền móng và lắng nghe nhu cầu của gia chủ hoàn toàn miễn phí, sau đó gửi báo giá chi tiết trong 24 giờ.',
      icon: Compass,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    {
      number: '02',
      title: 'Ký Hợp Đồng',
      desc: 'Hai bên thống nhất về phạm vi, tiến độ, chi phí và quy chuẩn kỹ thuật. Hợp đồng rõ ràng minh bạch, không phí ẩn, có điều khoản bảo hành cụ thể.',
      icon: Briefcase,
      color: 'bg-amber-50 text-amber-700 border-amber-100'
    },
    {
      number: '03',
      title: 'Thiết Kế Chi Tiết',
      desc: 'Kỹ sư lập bản vẽ kỹ thuật, dự toán vật tư và phương án thi công cụ thể. Gửi chủ nhà duyệt trước khi triển khai xây dựng thực tế.',
      icon: Briefcase,
      color: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    {
      number: '04',
      title: 'Thi Công Chuyên Nghiệp',
      desc: 'Đội thợ lành nghề thi công đúng tiêu chuẩn, giám sát chặt chẽ từng hạng mục, cập nhật tiến độ thường xuyên cho gia chủ theo dõi.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    {
      number: '05',
      title: 'Nghiệm Thu & Bàn Giao',
      desc: 'Kiểm tra chất lượng từng chi tiết cuối cùng, nghiệm thu cùng chủ nhà, bàn giao hồ sơ hoàn công đầy đủ và kích hoạt bảo hành chu đáo.',
      icon: Award,
      color: 'bg-purple-50 text-purple-700 border-purple-100'
    }
  ];

  const faqs = [
    {
      q: 'Công ty có hỗ trợ thiết kế bản vẽ kỹ thuật trước khi thi công không?',
      a: 'Có, chúng tôi cung cấp bản vẽ thiết kế chi tiết bao gồm mặt bằng, mặt cắt và dự toán vật tư. Phí thiết kế được tính vào chi phí tổng thể nếu quý khách tiếp tục ký hợp đồng thi công.'
    },
    {
      q: 'Chính sách bảo hành công trình sau khi bàn giao như thế nào?',
      a: 'Tùy loại công trình, chúng tôi cung cấp bảo hành từ 3 đến 12 tháng. Các hạng mục như nền móng, kết cấu bê tông được bảo hành dài hạn hơn. Nếu phát sinh lỗi kỹ thuật trong thời gian bảo hành, chúng tôi sẽ khắc phục hoàn toàn miễn phí.'
    },
    {
      q: 'Chi phí thi công trung bình khoảng bao nhiêu?',
      a: 'Chi phí phụ thuộc vào quy mô, loại công trình và vật tư lựa chọn. Chúng tôi cam kết báo giá minh bạch chi tiết từng hạng mục, không phí ẩn, giúp gia chủ kiểm soát ngân sách hiệu quả.'
    },
    {
      q: 'Đội ngũ thi công của công ty nhận công trình ở khu vực nào?',
      a: 'Chúng tôi nhận khảo sát và thi công trực tiếp tại TP. Quảng Ngãi và các huyện lân cận như Tư Nghĩa, Nghĩa Hà, Sơn Tịnh, Mộ Đức. Với các công trình lớn, đội thợ sẵn sàng di chuyển đến tận nơi để phục vụ khách hàng.'
    }
  ];

  return (
    <div className="bg-[#fcfdfc] py-16">
      <SEO 
        title="Về chúng tôi"
        description="Garden House - Đội ngũ xây dựng uy tín tại Quảng Ngãi với hơn 8 năm kinh nghiệm. Thi công nhà ở, biệt thự, công trình công cộng đúng tiến độ, chất lượng và giá hợp lý."
        keywords="công ty xây dựng quảng ngãi, đội thợ nề quảng ngãi, thi công nhà ở quảng ngãi, xây dựng biệt thự quảng ngãi, sửa chữa nhà quảng ngãi"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-20 animate-fade-in">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Giới Thiệu</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950">
            Đội Ngũ Xây Dựng <br />Uy Tín Tại Quảng Ngãi
          </h1>
          <div className="w-16 h-1 bg-forest-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Chúng tôi khởi nghiệp với đội ngũ thợ nề lành nghề tại TP. Quảng Ngãi từ năm 2017. Là những người thợ trực tiếp thi công tại công trường, chúng tôi tự hào mang đến các công trình xây dựng chất lượng, đúng tiến độ với chi phí hợp lý, phục vụ người dân Quảng Ngãi và vùng lân cận.
          </p>
        </div>

        {/* Story Section & Big Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-forest-600 rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-15 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
              alt="Construction site team at work"
              className="rounded-3xl object-cover w-full aspect-4/3 shadow-lg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-lg border border-forest-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-forest-500 flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Cam kết</p>
                <p className="text-forest-900 font-bold text-sm">Hơn 200 công trình tại Quảng Ngãi</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold w-fit">
              <Sparkles className="w-3.5 h-3.5 text-forest-600" />
              <span>Giải pháp xây dựng toàn diện</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3.5xl font-bold text-forest-900 leading-tight">
              Thi Công Chất Lượng, Đúng Tiến Độ & Giá Hợp Lý
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Chúng tôi trực tiếp thi công với đội ngũ thợ nề lành nghề, sử dụng vật tư chính hãng có nguồn gốc rõ ràng. Tất cả công trình đều được giám sát chặt chẽ từ khâu nền móng đến hoàn thiện, đảm bảo chất lượng và an toàn lao động.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-forest-900">Cam kết chất lượng</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Mọi hạng mục thi công đều tuân thủ tiêu chuẩn kỹ thuật, nghiệm thu kỹ lưỡng trước khi bàn giao.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-forest-900">Minh bạch chi phí</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Báo giá chi tiết từng hạng mục, không phí ẩn, giúp gia chủ yên tâm kiểm soát ngân sách.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-forest-900">Bảo hành uy tín</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Cam kết bảo hành dài hạn, hỗ trợ sửa chữa và bảo trì công trình sau bàn giao.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 mt-1">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-forest-900">Đúng tiến độ</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Lập kế hoạch chi tiết, thi công đúng cam kết, bàn giao đúng hẹn cho gia chủ.</p>
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
              Quy Trình 5 Bước Chuyên Nghiệp
            </h3>
            <div className="w-12 h-0.5 bg-forest-300 mx-auto mt-3"></div>
            <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
              Từ khâu khảo sát ban đầu đến bàn giao hoàn công, chúng tôi đảm bảo mỗi bước đều được thực hiện chu đáo, minh bạch và đúng tiến độ.
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
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]"></div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-6 items-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Liên hệ tư vấn miễn phí</span>
            <h3 className="font-serif text-3xl sm:text-4.5xl font-bold leading-tight">
              Biến Dự Án Của Bạn Thành Hiện Thực
            </h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-xl">
              Hãy liên hệ ngay với chúng tôi để được khảo sát, tư vấn thiết kế và báo giá chi tiết hoàn toàn miễn phí. Đội ngũ chuyên nghiệp sẵn sàng lắng nghe và hỗ trợ bạn 24/7.
            </p>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 px-8 py-3.5 bg-white text-forest-950 font-bold rounded-full shadow-md hover:bg-emerald-50 hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2 text-sm focus:outline-hidden"
            >
              <span>Liên Hệ Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
