import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin, Phone, Mail, Send, CheckCircle2,
  Sparkles, Clock
} from 'lucide-react';
import { contactApi } from '../../lib/admin/api/services';
import SEO from '../../components/SEO';

export default function ContactPage() {
  const [costCalculation, setCostCalculation] = useState<{
    style: string;
    area: number;
    price: number;
    addons: string[];
  } | null>(null);

  // Input fields state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Yêu cầu tư vấn thiết kế nhà vườn');
  const [message, setMessage] = useState('');

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load prefilled calculation from sessionStorage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('garden_house_prefill');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCostCalculation(parsed);
        setSubject(`Đăng ký thiết kế thi công sân vườn phong cách ${parsed.style}`);
        setMessage(`Xin chào Garden House, tôi muốn nhận khảo sát thực địa cho dự án:\n- Phong cách lựa chọn: ${parsed.style}\n- Diện tích ước tính: ${parsed.area}m²\n- Hạng mục đính kèm chọn lọc: ${parsed.addons.join(', ') || 'Không chọn hạng mục phụ'}\n- Dự toán trực tuyến ước tính: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parsed.price)}.\n\nRất mong mỏi sớm liên lạc đặt lịch khảo sát.`);
      } catch {
        // ignore
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await contactApi.create({
        name: fullName,
        email,
        phone,
        message: `[${subject}]\n${message}`,
      });

      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('Yêu cầu tư vấn thiết kế nhà vườn');
      setMessage('');
      setCostCalculation(null);
      sessionStorage.removeItem('garden_house_prefill');
      setSubmitSuccess(true);

      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch {
      setSubmitError('Gửi yêu cầu không thành công. Vui lòng gọi trực tiếp hotline để được hỗ trợ.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearPrefillAlert = () => {
    setCostCalculation(null);
    sessionStorage.removeItem('garden_house_prefill');
    setSubject('Yêu cầu tư vấn thiết kế nhà vườn');
    setMessage('');
  };

  const formatVND = (value?: number) => {
    if (!value) return '';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  return (
    <div className="bg-[#fcfdfc] py-16">
      <SEO 
        title="Liên hệ" 
        description="Đăng ký tư vấn thiết kế thi công sân vườn, thảm cỏ, ao cá Koi, đo đạc phong thủy miễn phí tận nơi tại Garden House."
        keywords="liên hệ garden house, địa chỉ thợ sân vườn, hotline thợ vườn quê, đăng ký khảo sát miễn phí"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Page Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16 animate-fade-in">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Lời hẹn kết nối</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950">
            Tư Vấn & Đo Đạc Sân Vườn Miễn Phí
          </h1>
          <div className="w-16 h-1 bg-forest-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Hãy gửi nhu cầu của các bác cho chúng tôi ngay hôm nay. Tổ thợ lành nghề quê mùa thật thà sẽ chủ động phản hồi tư vấn qua điện thoại hoặc Zalo chỉ trong 15 phút.
          </p>
        </div>

        {/* Contact direct detail layouts and form block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Details column left - 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-forest-900 text-white rounded-3xl p-8 border border-forest-850 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500 rounded-bl-full z-0 opacity-10"></div>

              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block">GẶP GỠ TRỰC TIẾP</span>
                <h3 className="font-serif font-extrabold text-2xl tracking-normal mt-1 text-white">Văn Phòng Đội Thợ</h3>
                <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                  Các bác luôn được chào đón ghé thăm văn phòng của tổ thợ Garden House tại Quảng Ngãi để trực tiếp trao đổi phương án thiết kế và giám sát tiến độ thi công cảnh quan cho công trình của mình.
                </p>
              </div>

              <div className="relative z-10 p-4 rounded-xl bg-forest-800 border border-forest-750 text-xs text-gray-300 mt-6 md:mt-2 w-full flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Tiếp khách tại văn phòng: 08:30 - 17:00 hàng ngày.</span>
              </div>
            </div>

            {/* Direct contact list cards */}
            <div className="flex flex-col gap-4">
              {/* Address card */}
              <div className="bg-white p-5 rounded-2xl border border-forest-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider">Trụ sở & Văn phòng</h4>
                  <p className="font-bold text-forest-950 text-sm mt-1 leading-tight">11 Trương Định, Phường Nghĩa Lộ, TP. Quảng Ngãi</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">Mr. Khôi - phụ trách dự án</p>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-white p-5 rounded-2xl border border-forest-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider">Bộ phận đường dây nóng</h4>
                  <a href="tel:0789490590" className="font-bold text-forest-950 hover:text-forest-600 text-sm mt-1 block">Mr. Khôi: 078.9490.590</a>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">Zalo: 0789490590</p>
                </div>
              </div>

              {/* Mail card */}
              <div className="bg-white p-5 rounded-2xl border border-forest-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider">Hòm thư điện tử</h4>
                  <a href="mailto:lienhe@gardenhouse.com" className="font-bold text-forest-950 hover:text-forest-600 text-sm mt-1 block">lienhe@gardenhouse.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form column right - 7 columns */}
          <div className="h-fit lg:col-span-7 bg-white rounded-3xl border border-forest-100 p-6 sm:p-10 shadow-xs relative">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-950 mb-6 flex items-center gap-2">
              <span>Đăng ký nhận lịch Tư vấn đo đạc thực tế</span>
            </h3>

            {/* Active Prefilled Alert Notification Box */}
            {costCalculation && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 animate-fade-in relative">
                <div className="flex gap-2.5 items-start">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-900 leading-relaxed">
                    <p className="font-bold">Hệ thống đang nạp thông số dự toán của bạn:</p>
                    <p className="font-medium mt-0.5 text-emerald-800">
                      Phong cách: <span className="font-bold text-forest-950">{costCalculation.style}</span> |
                      Mặt bằng: <span className="font-bold text-forest-950">{costCalculation.area}m²</span> |
                      Báo giá sơ ước: <span className="font-bold text-forest-950">{formatVND(costCalculation.price)}</span>
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={clearPrefillAlert}
                  className="text-[10px] bg-white border border-emerald-200 text-emerald-800 font-bold px-2 py-1 rounded-lg hover:bg-emerald-100 hover:text-emerald-900 shrink-0 self-end sm:self-center transition-colors cursor-pointer"
                >
                  Xóa đính kèm
                </button>
              </div>
            )}

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="full-name" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Họ và tên quý khách *</label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-hidden focus:border-forest-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Số điện thoại / Zalo *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="098.888.8888"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-hidden focus:border-forest-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Địa chỉ email liên lạc *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="nguyenvana@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-hidden focus:border-forest-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Chủ đề mong muốn</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Xây dựng tiểu cảnh sân vườn mới"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-hidden focus:border-forest-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Mô tả hiện trạng và mong muốn nhu cầu *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tôi muốn thiết kế một khoảng sân nho nhỏ bọc lót đá tự nhiên phía sau sảnh nhà khách, kèm thác nước..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-hidden focus:border-forest-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forest-600 hover:bg-forest-700 disabled:bg-forest-300 text-white font-bold py-4 rounded-xl shadow-lg shadow-forest-100 flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Đang gửi...' : 'Gửi Thông Tin Yêu Cầu'}</span>
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-50 border border-red-200 flex gap-2.5 items-start mt-2"
                  >
                    <div className="text-xs text-red-800 leading-relaxed">
                      <p className="font-bold">Gửi yêu cầu không thành công</p>
                      <p className="mt-0.5">{submitError}</p>
                    </div>
                  </motion.div>
                )}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex gap-2.5 items-start mt-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-emerald-900 leading-relaxed">
                      <p className="font-bold">Đã gửi yêu cầu tư vấn thành công!</p>
                      <p className="mt-0.5">Hệ thống ghi nhận thông tin của quý khách. Mr. Khôi sẽ gọi trao đổi trong vòng 15 phút hoặc nhắn qua Zalo.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
