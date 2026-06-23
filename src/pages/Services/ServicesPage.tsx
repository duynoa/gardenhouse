import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Calculator, Trees, Sparkles, CheckCircle2, Heart, Info,
  Paintbrush, Droplets, Waves, LucideIcon, Compass, ArrowRight, Zap, SunMoon, Footprints
} from 'lucide-react';
import { Service } from '../../types';
import { useCostCalculation } from '../../lib/costCalculationStore';
import SEO from '../../components/SEO';

export default function ServicesPage() {
  const navigate = useNavigate();
  const { setCostCalculation } = useCostCalculation();
  const [area, setArea] = useState<number>(80);
  const [styleId, setStyleId] = useState<string>('zen');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['irrigation', 'stone-walk']);

  // Core service packages
  const services: Service[] = [
    {
      id: 's1',
      title: 'Làm Sân Vườn Mộc Mạc & Thảm Cỏ Quê',
      description: 'Lắp đặt thảm cỏ nhung, dải sỏi tự nhiên mộc mạc và bày trí cây ăn quả, hoa cỏ quanh sân mát rượi.',
      detailedDescription: 'Phù hợp cho các nhà cấp 4, nhà vườn ở quê lẫn nhà ống ở đô thị. Chúng tôi bố trí mặt bằng khoa học, bọc thảm cỏ nhung Nhật xanh mướt mềm mịn chân, bón lót phân vi sinh hữu cơ để cây phát triển lâu dài không lo suy thoái.',
      iconName: 'Trees',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      basePrice: 150000,
      features: [
        'Mẫu phác thảo mặt bằng mộc mạc, dễ hiểu',
        'Vận chuyển tận nhà phân bón và thảm cỏ xịn',
        'Hỗ trợ đầm đất phẳng phiu, thoát nước chuẩn',
        'Thay cây suy yếu miễn phí trong 3 tháng đầu'
      ]
    },
    {
      id: 's2',
      title: 'Đắp Hòn Non Bộ & Hồ Cá Koi Giá Bình Dân',
      description: 'Đắp tiểu cảnh non bộ bằng xi măng dừa, xếp đá cuội tự nhiên kết hợp hồ lọc vi sinh giá rẻ cá khỏe.',
      detailedDescription: 'Thợ cả đắp hòn non bộ bằng lõi thép xi măng tạo thế núi trùng điệp sương khói rêu phong. Đi kèm là hồ lọc nước cá Koi tự chế vi sinh thông minh bằng bồn chứa lắng lọc cát, sỏi, xỉ nham thạch giúp nước trong vắt mà lắp đặt siêu rẻ.',
      iconName: 'Compass',
      image: 'https://images.unsplash.com/photo-1558905612-4ee4eb15891d?auto=format&fit=crop&w=800&q=80',
      basePrice: 950000,
      features: [
        'Khảo sát hướng đón gió đón nắng kỹ lưỡng',
        'Thợ cả trực tiếp đắp ghép xi măng, trang đá đẹp',
        'Lắp đặt hệ thống sục khí vi sinh tự chế giá bèo',
        'Cung cấp sỏi cuội tự nhiên rải đáy hồ miễn phí'
      ]
    },
    {
      id: 's3',
      title: 'Bố Trí Luống Rau Sạch & Cây Ăn Quả Quanh Nhà',
      description: 'Bày khuôn đất trồng cây ăn quả sum suê bưởi, cam, mít kết hợp giàn rau sạch mát lành cho bữa cơm quê.',
      detailedDescription: 'Mang hương vị quê hương vào khoảng sân trống bằng cách thiết kế quy hoạch bồn rau xanh, giàn leo bầu bí mát mẻ kết hợp trồng cỏ nhung Nhật đi kèm các bụi hoa dân dã nở quanh năm chăm sóc nhàn tênh.',
      iconName: 'Paintbrush',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      basePrice: 120000,
      features: [
        'Quy hoạch vùng trồng cây bóng mát và nông sản',
        'Trộn đất dinh dưỡng phối trấu sả xơ dừa tơi xốp',
        'Làm giàn tre, gỗ hoặc giàn sắt leo bền bỉ',
        'Tặng bộ hạt giống rau sạch dễ trồng gia truyền'
      ]
    },
    {
      id: 's4',
      title: 'Tiểu Cảnh Góc Sân & Ban Công Nhỏ Giá Rẻ',
      description: 'Tận dụng khay treo làm tường cỏ nhựa ban công kết hợp máng sỏi róc rách, lu nước nhỏ mộc mạc thư thái.',
      detailedDescription: 'Chuyên giải quyết các vệt góc chết khô khan ở sân trước sân sau hay hành lang ban công chật hẹp. Chúng tôi đắp bể đá bồn sỏi dạt dào nước róc rách, treo giỏ hoa tươi mang sinh cảnh đồng quê tĩnh lặng giữa phố xá rộn rãng.',
      iconName: 'Droplets',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      basePrice: 350000,
      features: [
        'Module chậu thông minh chống chảy nước bẩn ra sàn',
        'Sử dụng các loại cây ưa mát, chịu hạn sống cực dai',
        'Không chiếm diện tích đi lại, rải sỏi trắng sạch',
        'Lắp van tưới nhỏ giọt kết nối vòi van đơn giản'
      ]
    }
  ];

  // Map string name to Lucide icons
  const iconMap: Record<string, LucideIcon> = {
    Paintbrush: Paintbrush,
    Compass: Compass,
    Trees: Trees,
    Droplets: Droplets
  };

  // Styles configuration for the interactive calculator
  const stylesConfig = [
    {
      id: 'zen',
      name: 'Hồ cá Koi & Non Bộ xi măng',
      baseFactor: 950000,
      desc: 'Ao chòi mát mẻ kết hợp hòn non bộ đắp tay mộc mạc và hồ cá sinh thái tụ khí đón gió lành',
      plants: 'Cây trúc quân tử, hoa súng chậu dại, dương xỉ núi, rêu tự nhiên bám vách'
    },
    {
      id: 'tropical',
      name: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
      baseFactor: 150000,
      desc: 'Xanh um thảm cỏ nhung Nhật kết hợp trồng xen kẽ hoa dại dễ sống, lối sỏi trắng sạch bóng mát',
      plants: 'Cây chuối cảnh, hoa nhài ta, cau sâm banh đón nắng, dừa cạn nở hoa bền bỉ'
    },
    {
      id: 'classic',
      name: 'Vườn Cây Ăn Quả & Luống Rau',
      baseFactor: 120000,
      desc: 'Quy hoạch vùng vườn nhà trồng rau sạch cải, muống kết hợp cây ăn quả mát ngọt dễ sai trĩu quả',
      plants: 'Giống ổi Đài Loan giòn ngọt, tranh ta mọng nước, rau muống sọc đỏ ta, giàn leo mướp bầu gác mái'
    },
    {
      id: 'vertical',
      name: 'Tiểu cảnh Góc Sân & Ban công',
      baseFactor: 350000,
      desc: 'Trang trí bồn nước lu gỗ rêu phong, giàn tre nứa treo giỏ lan ta bền dai thích nghi mọi bóng râm',
      plants: 'Lan đuôi công thích hợp hiên nhà mộc mạc, thường xuân phong thủy dai sức'
    }
  ];

  // Addons list
  const addonsConfig = [
    {
      id: 'koi-pond',
      name: 'Hồ cá Koi lọc vi sinh tự chế (Dưới 10 khối)',
      price: 15000000,
      icon: Waves,
      desc: 'Xây gạch trát vữa xi măng bọc lót chống thấm kỹ, kèm bộ lọc chế lắng lọc cực bền'
    },
    {
      id: 'waterfall',
      name: 'Thác xi măng tạo dòng róc rách phong thủy',
      price: 5500000,
      icon: Waves,
      desc: 'Đắp xi măng tay tạo vách đá luồn nước róc rách, kèm máy bơm chìm dân dụng tiết kiệm điện'
    },
    {
      id: 'irrigation',
      name: 'Hệ thống van tưới phun sương hẹn giờ',
      price: 1800000,
      icon: Droplets,
      desc: 'Bao gồm đường ống nước mềm lắp vòi xịt xoay, đồng hồ cơ hẹn giờ pin tự động'
    },
    {
      id: 'art-light',
      name: 'Hệ đèn dây trang trí ấm cúng sân vườn',
      price: 2500000,
      icon: SunMoon,
      desc: 'Đèn LED bọc vỏ chống nước nối phích an toàn chiếu sáng các khóm cây lung linh buổi tụ hội'
    },
    {
      id: 'stone-walk',
      name: 'Lối đi bậc đá tấm mộc mạc chống trơn',
      price: 3000000,
      icon: Footprints,
      desc: 'Chọn đá sa thạch cắt thô bọc quanh lớp sỏi dăm mọc mạc, đi êm chân không sợ ẩm rêu'
    }
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Memoized calculations
  const estimationResult = useMemo(() => {
    const selectedStyle = stylesConfig.find(s => s.id === styleId) || stylesConfig[0];
    const baseCost = area * selectedStyle.baseFactor;

    const addonsCost = selectedAddons.reduce((sum, addonId) => {
      const addon = addonsConfig.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const total = baseCost + addonsCost;

    // Custom execution timeline based on size
    let timeline = '12 - 15 ngày';
    if (area > 300) timeline = '35 - 45 ngày';
    else if (area > 150) timeline = '20 - 25 ngày';

    // Staffing requirements
    const engineers = area > 200 ? 3 : 1;
    const workers = Math.max(3, Math.round(area / 30));

    return {
      styleName: selectedStyle.name,
      baseCost,
      addonsCost,
      total,
      plants: selectedStyle.plants,
      timeline,
      engineers,
      workers
    };
  }, [area, styleId, selectedAddons]);

  // Handle transfer estimates to contact form
  const handleTransferToContact = () => {
    setCostCalculation({
      style: estimationResult.styleName,
      area: area,
      price: estimationResult.total,
      addons: selectedAddons.map(aid => addonsConfig.find(a => a.id === aid)?.name || aid)
    });
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatVND = (value: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  return (
    <div className="bg-[#fcfdfc] py-16">
      <SEO 
        title="Dịch vụ & Dự toán" 
        description="Các gói thi công thảm cỏ, đào hồ cá cảnh Koi lọc tự chế, đắp non bộ xi măng giá rẻ và bảng tính giá dự toán sơ bộ trực tuyến tiện lợi tại Garden House."
        keywords="dự toán sân vườn, giá thi công cỏ nhung nhật, báo giá hồ cá koi tự chế, đắp hòn non bộ giá rẻ"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section of services */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-20">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">Bình dân & Giá tốt</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950">
            Dịch Vụ Thi Công Cực Kỳ Bình Dân
          </h1>
          <div className="w-16 h-1 bg-forest-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Chúng tôi khảo sát nhiệt tình, tư vấn thật thà và trực tiếp tay bùn tay cát thi công. Đảm bảo chất lượng bền, cây dễ sống, thảm cỏ đẹp và tối ưu ngân sách nhà bạn.
          </p>
        </div>

        {/* Detailed services list of cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Paintbrush;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-forest-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-xs text-forest-700 flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-8">
                    <span className="text-xs font-bold text-forest-500 uppercase tracking-wider block mb-2">Đơn giá cơ sở từ: {formatVND(service.basePrice)}/m²</span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.detailedDescription}
                    </p>

                    <div className="border-t border-forest-50 pt-5">
                      <h4 className="text-xs font-bold uppercase text-forest-800 tracking-wider mb-3">Cam kết trong gói bao gồm:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 mt-2">
                  <button
                    onClick={() => {
                      if (service.id === 's2') setStyleId('zen');
                      else if (service.id === 's3') setStyleId('tropical');
                      else if (service.id === 's4') setStyleId('vertical');
                      else setStyleId('classic');

                      const element = document.getElementById('project-calculator');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 px-4 rounded-xl border border-forest-200 text-forest-700 hover:bg-forest-50 hover:border-forest-400 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Tính giá sân vườn mẫu này</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Cost Estimator Tool panel */}
        <section
          id="project-calculator"
          className="bg-white rounded-3xl border border-forest-200 shadow-xl overflow-hidden scroll-mt-24"
        >
          {/* Section banner */}
          <div className="bg-forest-900 p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-forest-800 relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500 rounded-bl-full opacity-5 z-0"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-xs font-bold uppercase mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>Tiện ích tính giá sơ bộ trực tuyến</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3.5xl font-bold tracking-tight text-white leading-none">
                Bảng Tính Giá Sân Vườn Tham Khảo
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl">
                Bạn chỉ cần nhập diện tích sân vườn nhà mình, chọn phong cách ưa thích và các phần bổ sung đi kèm, hệ thống sẽ tự tính tiền dự kiến hợp lý nhất cho thợ làm.
              </p>
            </div>
            <div className="bg-forest-800 shrink-0 text-xs max-w-xs text-gray-300 p-4 rounded-xl border border-forest-700 relative z-10">
              <Info className="w-4 h-4 text-emerald-400 inline-block mr-1.5 align-text-bottom" />
              <span>Báo giá được tính toán theo dữ liệu giá cả vật liệu thực, cây cảnh thực tế quý {new Date().getMonth() > 5 ? 'III' : 'II'} năm {new Date().getFullYear()}.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Calculation controls left - 7 columns on desktop */}
            <div className="p-8 lg:col-span-7 flex flex-col gap-8 border-b lg:border-b-0 lg:border-r border-forest-100">

              {/* Size Slider config */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-bold uppercase text-forest-800 tracking-wider">
                    1. Diện tích quy hoạch sân vườn
                  </label>
                  <div className="flex items-center gap-1 bg-forest-50 border border-forest-100 px-3 py-1 rounded-lg">
                    <input
                      type="number"
                      value={area}
                      min={10}
                      max={2000}
                      onChange={(e) => setArea(Math.max(10, parseInt(e.target.value) || 10))}
                      className="w-16 bg-transparent text-right font-bold text-forest-900 border-none focus:outline-hidden text-sm"
                    />
                    <span className="font-bold text-xs text-forest-600">m²</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="5"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full accent-forest-600 h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-3"
                />

                <div className="flex justify-between text-[11px] text-gray-400 font-semibold mt-1">
                  <span>Ban công hẹp (10m²)</span>
                  <span>Trung bình (150m²)</span>
                  <span>Biệt thự đại vườn (500m²)</span>
                  <span>Cảnh quan rộng (1000m²+)</span>
                </div>
              </div>

              {/* Style selector custom cards */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase text-forest-800 tracking-wider block">
                  2. Chọn Phong Cách Cảnh Quan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {stylesConfig.map((style) => (
                    <div
                      key={style.id}
                      onClick={() => setStyleId(style.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col gap-1.5 ${
                        styleId === style.id
                          ? 'border-forest-600 bg-forest-50/40 shadow-xs'
                          : 'border-forest-100 hover:border-forest-300 hover:bg-gray-50/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm text-forest-900">{style.name}</span>
                        {styleId === style.id && <span className="w-2.5 h-2.5 rounded-full bg-forest-600"></span>}
                      </div>
                      <p className="text-[11px] text-gray-500 leading-tight">{style.desc}</p>
                      <div className="border-t border-forest-100/60 pt-2 mt-1">
                        <span className="text-[10px] text-forest-600 font-semibold block uppercase tracking-wide">
                          Đơn giá thiết kế & thi công: {formatVND(style.baseFactor)}/m²
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Addons Selection checklist */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase text-forest-800 tracking-wider block">
                  3. Bổ Sung Hạng Mục Đi Đính Kèm (Không bắt buộc)
                </label>
                <div className="flex flex-col gap-2 mt-1">
                  {addonsConfig.map((addon) => {
                    const AddonIcon = addon.icon;
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-50/20'
                            : 'border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <div className="flex gap-3 items-center">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                            <AddonIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-semibold text-xs sm:text-sm text-gray-900 block leading-tight">{addon.name}</span>
                            <span className="text-[11px] text-gray-500 block mt-0.5">{addon.desc}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-bold text-xs sm:text-sm text-emerald-800">
                            + {formatVND(addon.price)}
                          </span>
                          <span className="text-[10px] block text-gray-300 mt-0.5 uppercase tracking-wide font-semibold">TÍNH KHỐI LƯỢNG GÓI</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Calculations results right panel - 5 columns on desktop */}
            <div className="lg:col-span-5 p-8 bg-forest-50/60 flex flex-col gap-6 justify-between">

              {/* Estimate Details */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xs font-bold uppercase text-forest-800 tracking-wider">
                  4. Kết Quả Báo Giá Sơ Bộ
                </h3>

                <div className="bg-white p-5 rounded-2xl border border-forest-100 flex flex-col gap-4 shadow-xs">
                  {/* Total pricing large */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">TỔNG MỨC ĐẦU TƯ DỰ KIẾN</span>
                    <span className="font-serif text-2xl lg:text-3.5xl font-extrabold text-forest-900 mt-1 block">
                      {formatVND(estimationResult.total)}
                    </span>
                  </div>

                  <hr className="border-forest-50" />

                  {/* Pricing detail items */}
                  <div className="flex flex-col gap-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Cơ sở thiết kế & thi công ({area}m²):</span>
                      <span className="font-semibold text-gray-900">{formatVND(estimationResult.baseCost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hạng mục tiểu cảnh bổ sung ({selectedAddons.length}):</span>
                      <span className="font-semibold text-gray-900">{formatVND(estimationResult.addonsCost)}</span>
                    </div>
                  </div>
                </div>

                {/* Sub-technical specifications details from choices */}
                <div className="flex flex-col gap-3.5 py-2">
                  <div className="flex gap-2.5 items-start text-xs leading-relaxed text-gray-600">
                    <Trees className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-forest-900">Gợi ý thảm thực vật phù hợp:</p>
                      <p className="text-gray-500 mt-0.5">{estimationResult.plants}</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start text-xs leading-relaxed text-gray-600">
                    <Zap className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-forest-900">Thời gian quy chuẩn dự tính:</p>
                      <p className="text-gray-500 mt-0.5">Khoảng <span className="font-bold text-forest-950">{estimationResult.timeline}</span> kể từ ngày ký hợp đồng khởi công.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start text-xs leading-relaxed text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-forest-900">Nhân công điều nhiệm quy chuẩn:</p>
                      <p className="text-gray-500 mt-0.5"><span className="font-semibold text-forest-950">{estimationResult.engineers} kỹ sỹ thực chiến</span> giám sát trực tiếp tại vườn và đội ngũ <span className="font-semibold text-forest-950">{estimationResult.workers} thợ lành nghề quê </span> làm cỏ đắp đá tỉ mẩn của Garden House.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Buttons to forward info to contact form page */}
              <div className="flex flex-col gap-3 mt-6 border-t border-forest-100 pt-6">
                <button
                  onClick={handleTransferToContact}
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-forest-100 transition-all cursor-pointer"
                >
                  <span>Áp Dụng Dự Toán Cho Liên Hệ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider font-semibold">
                  Mức báo giá mang tính chất tương đối và sẽ chính xác sau cuộc đo đạc thực địa.
                </p>
              </div>

            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
