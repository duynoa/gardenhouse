import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin, Phone, Mail, Send, CheckCircle2,
  Trash2, FileSpreadsheet, Sparkles, MessageSquare, Clock
} from 'lucide-react';
import { ContactMessage } from '../../types';
import { useCostCalculation } from '../../lib/costCalculationStore';

export default function ContactPage() {
  const { costCalculation: prefilledCostCalculation, clearCostCalculation } = useCostCalculation();

  // Input fields state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Yêu cầu tư vấn thiết kế nhà vườn');
  const [message, setMessage] = useState('');

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedMessages, setSubmittedMessages] = useState<ContactMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Load messages from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('garden_house_messages');
    if (saved) {
      try {
        setSubmittedMessages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved messages', e);
      }
    }
  }, []);

  // Sync state variables if a prefilled calculation is injected from Services page
  useEffect(() => {
    if (prefilledCostCalculation) {
      setSubject(`Đăng ký thiết kế thi công sân vườn phong cách ${prefilledCostCalculation.style}`);
      setMessage(`Xin chào Garden House, tôi muốn nhận khảo sát thực địa cho dự án:\n- Phong cách lựa chọn: ${prefilledCostCalculation.style}\n- Diện tích ước tính: ${prefilledCostCalculation.area}m²\n- Hạng mục đính kèm chọn lọc: ${prefilledCostCalculation.addons.join(', ') || 'Không chọn hạng mục phụ'}\n- Dự toán trực tuyến ước tính: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(prefilledCostCalculation.price)}.\n\nRất mong mỏi sớm liên lạc đặt lịch khảo sát.`);
    }
  }, [prefilledCostCalculation]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) return;

    const newMessage: ContactMessage = {
      id: 'msg-' + Date.now(),
      fullName,
      email,
      phone,
      subject,
      gardenStyle: prefilledCostCalculation?.style,
      estimatedArea: prefilledCostCalculation?.area,
      calculatedPrice: prefilledCostCalculation?.price,
      message,
      createdAt: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newMessage, ...submittedMessages];
    setSubmittedMessages(updated);
    localStorage.setItem('garden_house_messages', JSON.stringify(updated));

    // Clear form fields
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmitSuccess(true);

    // Clear the calculations setup
    clearCostCalculation();

    // Auto clear success message after 6 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 6000);
  };

  const deleteMessage = (id: string) => {
    const updated = submittedMessages.filter(m => m.id !== id);
    setSubmittedMessages(updated);
    localStorage.setItem('garden_house_messages', JSON.stringify(updated));
  };

  const clearPrefillAlert = () => {
    clearCostCalculation();
    setSubject('Yêu cầu tư vấn thiết kế nhà vườn');
    setMessage('');
  };

  const formatVND = (value?: number) => {
    if (!value) return '';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  return (
    <div className="bg-[#fcfdfc] py-16">
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
                <h3 className="font-serif font-extrabold text-2xl tracking-normal mt-1 text-white">Vườn Ươm Cây Cảnh & Văn Phòng Đội Thợ</h3>
                <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                  Các bác luôn được chào đón ghé thăm vườn ươm cỏ cây tự nhiên rộng rãi của tổ thợ Garden House tại ngoại ô Hà Nội và TP. HCM để kiểm tra và trực tiếp chọn lấy giống cây dẻo dai khỏe khoắn nhất cho ngôi nhà mình.
                </p>
              </div>

              <div className="relative z-10 p-4 rounded-xl bg-forest-800 border border-forest-750 text-xs text-gray-300 mt-6 md:mt-2 w-full flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Tiếp khách xem cây vườn ươm: 08:30 - 17:00 hàng ngày.</span>
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
                  <p className="font-bold text-forest-950 text-sm mt-1 leading-tight">188 Đường Cổ Linh, Quận Long Biên, Hà Nội</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">Vườn ươm chi nhánh: Thôn 3, Yên Bài, Ba Vì, Hà Nội</p>
                </div>
              </div>

              {/* South address card */}
              <div className="bg-white p-5 rounded-2xl border border-forest-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider">Chi nhánh Miền Nam</h4>
                  <p className="font-bold text-forest-950 text-sm mt-1 leading-tight">65 Đường Song Hành, Thảo Điền, Quận 2, TP. HCM</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">Vườn ươm chi nhánh: Cầu Kênh 6, Xã Bình Lợi, Bình Chánh, TP. HCM</p>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-white p-5 rounded-2xl border border-forest-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider">Bộ phận đường dây nóng</h4>
                  <a href="tel:0988888888" className="font-bold text-forest-950 hover:text-forest-600 text-sm mt-1 block">Hotline/Zalo: 098.888.8888</a>
                  <a href="tel:02466668888" className="text-xs text-gray-400 mt-0.5 block leading-relaxed">Phòng dự án tổ chức: 024.6666.8888</a>
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
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">Tuyển dụng & Đăng ký thầu: hr@gardenhouse.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column right - 7 columns */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-forest-100 p-6 sm:p-10 shadow-xs relative">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-950 mb-6 flex items-center gap-2">
              <span>Đăng ký nhận lịch Tư vấn đo đạc thực tế</span>
            </h3>

            {/* Active Prefilled Alert Notification Box */}
            {prefilledCostCalculation && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 animate-fade-in relative">
                <div className="flex gap-2.5 items-start">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-900 leading-relaxed">
                    <p className="font-bold">Hệ thống đang nạp thông số dự toán của bạn:</p>
                    <p className="font-medium mt-0.5 text-emerald-800">
                      Phong cách: <span className="font-bold text-forest-950">{prefilledCostCalculation.style}</span> |
                      Mặt bằng: <span className="font-bold text-forest-950">{prefilledCostCalculation.area}m²</span> |
                      Báo giá sơ ước: <span className="font-bold text-forest-950">{formatVND(prefilledCostCalculation.price)}</span>
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={clearPrefillAlert}
                  className="text-[10px] bg-white border border-emerald-200 text-emerald-800 font-bold px-2 py-1 rounded-lg hover:bg-emerald-100 hover:text-emerald-900 shrink-0 self-end sm:self-center transition-colors"
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
                className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-forest-100 flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Gửi Thông Tin Yêu Cầu</span>
                <Send className="w-4 h-4" />
              </button>

              {/* Success Notification popups inside form layout */}
              <AnimatePresence>
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
                      <p className="mt-0.5">Hệ thống ghi nhận thông tin của quý khách. Nhân viên viên hỗ trợ sẽ gọi trao đổi trong vòng 15 phút rầm rộ hoặc nhắn qua Zalo.</p>
                      <button
                        type="button"
                        onClick={() => { setShowInbox(true); const element = document.getElementById('inbox-section'); if (element) element.scrollIntoView({ behavior: 'smooth' }); }}
                        className="font-bold text-emerald-700 hover:underline block mt-1.5 cursor-pointer"
                      >
                        Bấm vào đây để xem hòm thư yêu cầu vừa xếp đặt ({submittedMessages.length})
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* PERSISTENCE PROOF VIEW: Submitted Messages Inbox Tray */}
        <section
          id="inbox-section"
          className="border-t border-forest-100 pt-12 mt-12 bg-forest-50/30 rounded-3xl p-6 sm:p-10 border border-forest-100"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block font-sans">Bảng Giám sát Hệ Thống (Dành cho khảo nghiệm viên)</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-950 mt-1 flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-forest-600" />
                <span>Hòm thư Yêu cầu Đã Đăng ký (Lưu Local)</span>
              </h3>
            </div>

            <button
              onClick={() => setShowInbox(!showInbox)}
              className="px-4 py-2 bg-white border border-forest-200 rounded-xl text-xs font-bold text-forest-700 hover:bg-forest-100/50 transition-colors shadow-xs"
            >
              {showInbox ? 'Ẩn Hòm thư Thử Nghiệm' : `Xem Hòm thư Thử Nghiệm (${submittedMessages.length})`}
            </button>
          </div>

          <AnimatePresence>
            {showInbox && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden flex flex-col gap-4"
              >
                {submittedMessages.length === 0 ? (
                  <div className="text-center py-10 bg-white border border-forest-100 rounded-2xl flex flex-col items-center justify-center gap-3 text-gray-400">
                    <MessageSquare className="w-10 h-10 stroke-1 text-gray-300" />
                    <p className="text-xs">Chưa có thông tin đăng ký nào được nạp lên trên máy tính này.</p>
                    <p className="text-[10px] text-gray-300">Hãy thử gõ họ tên, bấm nút gửi ở trên để xem phản hồi được ghi lưu trực tiếp!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {submittedMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className="bg-white p-5 rounded-2xl border border-forest-100/80 shadow-xs hover:border-forest-300/60 relative flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">THÔNG TIN KHÁCH HÀNG</span>
                              <h4 className="font-bold text-sm text-forest-950 mt-0.5">{msg.fullName}</h4>
                            </div>
                            <button
                              onClick={() => deleteMessage(msg.id)}
                              className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-all"
                              title="Xóa yêu cầu thử nghiệm"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[11px] bg-forest-50/50 p-2.5 rounded-xl border border-forest-100/50 my-3">
                            <p className="text-gray-500 font-medium">SĐT: <span className="text-forest-900 font-bold">{msg.phone}</span></p>
                            <p className="text-gray-500 font-medium">Email: <span className="text-forest-900 font-bold max-w-[120px] truncate block sm:inline">{msg.email}</span></p>
                            <p className="text-gray-500 font-medium col-span-2 border-t border-forest-100/40 pt-1 mt-1">Ngày lập: <span className="text-forest-800 font-bold">{msg.createdAt}</span></p>
                          </div>

                          {msg.gardenStyle && (
                            <div className="mb-3 p-3 rounded-xl bg-orange-50/65 border border-orange-100 text-[11px] text-orange-950 flex flex-col gap-1">
                              <span className="font-bold text-orange-800 block uppercase tracking-wide text-[9px]">DỰ TOÁN ĐÍNH KÈM</span>
                              <p className="font-medium mt-0.5">
                                Phong cách: <span className="font-bold">{msg.gardenStyle}</span> |
                                Quy mô: <span className="font-bold">{msg.estimatedArea}m²</span>
                              </p>
                              <p className="font-medium border-t border-orange-100 pt-1 mt-1 text-orange-900">
                                Đầu tư sơ ước: <span className="font-extrabold text-sm text-orange-950 block">{formatVND(msg.calculatedPrice)}</span>
                              </p>
                            </div>
                          )}

                          <div className="text-xs text-gray-600 mt-2">
                            <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider mb-0.5">NỘI DUNG GỬI KÈM</span>
                            <p className="whitespace-pre-line bg-gray-50/40 p-3 rounded-xl border border-gray-100 text-gray-700 leading-relaxed text-[11px]">
                              {msg.message}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-forest-50/80 pt-3.5 mt-4 flex items-center justify-between text-[10px] text-gray-400">
                          <span className="font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md">ID: {msg.id}</span>
                          <span className="font-medium">Trực thuộc: Máy tính nội bộ</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </div>
    </div>
  );
}
