import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Calculator, Trees, CheckCircle2, Info,
  Paintbrush, Droplets, Waves, LucideIcon, ArrowRight,
  SunMoon, Footprints, Home, Hammer, Layers, RefreshCw,
  Truck, PenLine, Palette, DoorOpen
} from 'lucide-react';
import { Service } from '../../types';
import { useCostCalculation } from '../../lib/costCalculationStore';
import SEO from '../../components/SEO';

export default function ServicesPage() {
  const navigate = useNavigate();
  const { setCostCalculation } = useCostCalculation();
  const [area, setArea] = useState<number>(100);
  const [projectType, setProjectType] = useState<'construction' | 'landscape'>('construction');
  const [styleId, setStyleId] = useState<string>('nha-cap-4');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // ─── CONSTRUCTION SERVICE PACKAGES ───────────────────────────────────────────
  const constructionServices: Service[] = [
    {
      id: 'c1',
      title: 'Xây Nhà Cấp 4 Trọn Gói',
      description: 'Thiết kế và thi công nhà cấp 4 hiện đại, móng băng, tường gạch chịu lực, mái tôn hoặc mái bằng bê tông cốt thép.',
      detailedDescription: 'Phù hợp cho khu vực Quảng Ngãi — đất nền ổn định, nắng nóng quanh năm. Chúng tôi sử dụng gạch Tuynel Đức Phổ bền chắc, sắt Hòa Phát, xi măng Holcim PCB40. Kết cấu móng băng đổ bê tông cốt thép chịu lực tốt, thiết kế thông thoáng đón gió biển tự nhiên, giảm chi phí điện máy lạnh.',
      iconName: 'Home',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      basePrice: 4500000,
      features: [
        'Bản vẽ thiết kế kiến trúc & kết cấu móng băng',
        'Vật liệu xây gạch Tuynel, sắt Hòa Phát, xi măng Holcim',
        'Ốp lát gạch men Bình Dương tầng 1, sơn nước 2 lớp Dulux',
        'Cửa nhôm Xingfa, cửa sổ kính cường lực, điện dân dụng Sino'
      ]
    },
    {
      id: 'c2',
      title: 'Xây Biệt Thự & Nhà Phố Cao Cấp',
      description: 'Thiết kế biệt thự hiện đại 2-4 tầng, nhà phố liền kề với phong cách kiến trúc tinh tế, kết cấu bê tông cốt thép chịu lực toàn khối.',
      detailedDescription: 'Biệt thự và nhà phố cao cấp đòi hỏi kết cấu BTCT toàn khối, cách nhiệt mái tốt chống nóng Quảng Ngãi. Chúng tôi thiết kế mặt đứng kiến trúc đẹp mắt, cảnh quan sân vườn đi kèm. Sử dụng gạch ốp ngoại thất cao cấp, cửa gỗ óc chó hoặc nhôm Xingfa, hệ thống điện âm trần chuẩn công nghiệp.',
      iconName: 'Hammer',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      basePrice: 6500000,
      features: [
        'Thiết kế kiến trúc, kết cấu, điện nước M&E đầy đủ',
        'Móng bè hoặc móng cọc ép tùy khảo sát địa chất',
        'Gạch ốp ngoại thất cao cấp, sơn Jotun weatherbide chống nóng',
        'Cửa gỗ óc chó, nhôm Xingfa kính 10mm, đèn trang trí âm trần'
      ]
    },
    {
      id: 'c3',
      title: 'Thiết Kế Kiến Trúc & Nội Thất',
      description: 'Dịch vụ thiết kế nội thất và kiến trúc chuyên nghiệp — phối cảnh 3D thực tế, bản vẽ kỹ thuật chi tiết từng không gian.',
      detailedDescription: 'Đội ngũ kiến trúc sư và kỹ sư nội thất giàu kinh nghiệm tại Quảng Ngãi. Chúng tôi lắng nghe nhu cầu của gia chủ, tư vấn phong cách phù hợp khí hậu — ưu tiên không gian mở thông thoáng, màu sắc tươi mát, vật liệu bền bỉ với độ ẩm ven biển. Phối cảnh 3D chân thực trước khi thi công, đảm bảo gia chủ hình dung rõ ràng từng chi tiết.',
      iconName: 'PenLine',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      basePrice: 150000,
      features: [
        'Phối cảnh 3D渲染 từng không gian phòng khách, phòng bếp, phòng ngủ',
        'Bản vẽ kỹ thuật chi tiết cho thợ thi công chuẩn milimet',
        'Tư vấn chọn vật liệu hoàn thiện phù hợp khí hậu Quảng Ngãi',
        'Giám sát tác giả 2 buổi/tuần suốt quá trình thi công'
      ]
    },
    {
      id: 'c4',
      title: 'Sửa Chữa & Cải Tạo Nhà Cũ',
      description: 'Nâng nềp, gia cố móng, đập tường cũ thay thế, cải tạo nhà xuống cấp thành không gian sống hiện đại tiện nghi.',
      detailedDescription: 'Nhiều công trình cũ tại Quảng Ngãi xuống cấp sau nhiều năm — nứt tường, ẩm mốc, rỉ sét kết cấu. Chúng tôi khảo sát đánh giá tình trạng thực tế, lập phương án gia cố kết cấu phù hợp (đóng cừ tràm, nâng nềp chống ngập, bơm vữa xi măng gia cường). Thi công cải tạo trong thời gian ngắn, hạn chế ồn ào, vệ sinh sạch sẽ.',
      iconName: 'RefreshCw',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      basePrice: 2500000,
      features: [
        'Khảo sát đánh giá mức độ xuống cấp và lập phương án sửa chữa',
        'Gia cố móng, nâng nềp, bơm vữa xi măng chống nứt tường',
        'Thay toàn bộ hệ thống điện và ống nước mới (sino, Bình Minh)',
        'Ốp lát sơn sửa lại toàn bộ, bảo hành kết cấu 3 năm'
      ]
    }
  ];

  // ─── GARDEN SERVICE PACKAGES ────────────────────────────────────────────────
  const gardenServices: Service[] = [
    {
      id: 's1',
      title: 'Làm Sân Vườn Mộc Mạc & Thảm Cỏ Quê',
      description: 'Lắp đặt thảm cỏ Nhật xanh mướt, dải sỏi tự nhiên mộc mạc và bày trí cây ăn quả, hoa cỏ quanh sân.',
      detailedDescription: 'Phù hợp cho nhà vườn Quảng Ngãi lẫn nhà ống đô thị. Chúng tôi bố trí mặt bằng khoa học, bọc thảm cỏ nhung Nhật xanh mướt mềm mịn chân, bón lót phân vi sinh hữu cơ để cây phát triển lâu dài. Các loại cây được chọn chịu nắng nóng, ưa khô ráo phù hợp khí hậu miền Trung.',
      iconName: 'Trees',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      basePrice: 150000,
      features: [
        'Mẫu phác thảo mặt bằng cảnh quan miễn phí',
        'Vận chuyển tận nhà phân bón và thảm cỏ Nhật chất lượng',
        'Hỗ trợ đầm đất phẳng phiu, thoát nước chuẩn',
        'Thay cây suy yếu miễn phí trong 3 tháng đầu'
      ]
    },
    {
      id: 's2',
      title: 'Đắp Hòn Non Bộ & Hồ Cá Koi Giá Bình Dân',
      description: 'Đắp tiểu cảnh non bộ xi măng-dừa, xếp đá cuội tự nhiên kết hợp hồ lọc vi sinh cá Koi khỏe đẹp.',
      detailedDescription: 'Thợ cả đắp hòn non bộ bằng lõi thép xi măng tạo thế núi trùng điệp sương khói rêu phong. Hồ lọc nước cá Koi tự chế vi sinh bằng bồn chứa lắng lọc cát, sỏi, xỉ nham thạch giúp nước trong vắt. Thiết kế chịu được nắng nóng và mưa lũ ven sông — điển hình khí hậu Quảng Ngãi.',
      iconName: 'Paintbrush',
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
      detailedDescription: 'Mang hương vị quê hương Quảng Ngãi vào khoảng sân trống. Thiết kế quy hoạch bồn rau xanh, giàn leo bầu bí mát mẻ kết hợp trồng cỏ nhung Nhật đi kèm các bụi hoa dân dã nở quanh năm. Các giống cây ăn quả được chọn phù hợp đất đai miền Trung — bưởi, cam, mít, ổi đều sai quả.',
      iconName: 'Droplets',
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
      description: 'Tận dụng góc sân trống, ban công chật hẹp bố trí tiểu cảnh mộc mạc — khay treo, máng sỏi, lu nước nhỏ thư thái.',
      detailedDescription: 'Giải quyết các góc chết khô khan ở sân trước, sân sau hay hành lang ban công chật hẹp. Chúng tôi đắp bể đá bồn sỏi dạt dào nước róc rách, treo giỏ hoa tươi mang sinh cảnh đồng quê tĩnh lặng giữa phố xá. Phù hợp nhà phố Quảng Ngãi diện tích hạn chế.',
      iconName: 'Layers',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      basePrice: 350000,
      features: [
        'Module chậu thông minh chống chảy nước bẩn ra sàn',
        'Sử dụng cây ưa mát, chịu hạn sống cực dai',
        'Không chiếm diện tích đi lại, rải sỏi trắng sạch',
        'Lắp van tưới nhỏ giọt kết nối vòi van đơn giản'
      ]
    }
  ];

  const activeServices = projectType === 'construction' ? constructionServices : gardenServices;

  const iconMap: Record<string, LucideIcon> = {
    Home, Hammer, PenLine, RefreshCw,
    Paintbrush, Trees, Droplets, Layers, Truck
  };

  // ─── STYLE CONFIG ───────────────────────────────────────────────────────────
  const constructionStyles = [
    {
      id: 'nha-cap-4',
      name: 'Nhà Cấp 4 Trọn Gói',
      baseFactor: 4500000,
      desc: 'Móng băng, tường gạch chịu lực, mái tôn / mái bằng BTCT, ốp lát cơ bản hoàn thiện key-in',
      plants: 'Gạch Tuynel Đức Phổ, sắt Hòa Phát, xi măng Holcim, cửa nhôm Xingfa, sơn Dulux'
    },
    {
      id: 'biet-thu',
      name: 'Biệt Thự & Nhà Phố Cao Cấp',
      baseFactor: 6500000,
      desc: 'BTCT toàn khối, móng bè hoặc cọc ép, ốp lát cao cấp, nội thất đồng bộ, cảnh quan đi kèm',
      plants: 'Gạch ốp ngoại thất cao cấp, Jotun weatherbide, cửa gỗ óc chó, đèn âm trần, hệ M&E chuẩn'
    },
    {
      id: 'thiet-ke',
      name: 'Thiết Kế Kiến Trúc & Nội Thất',
      baseFactor: 150000,
      desc: 'Phối cảnh 3D chân thực, bản vẽ kỹ thuật chi tiết từng không gian, giám sát tác giả',
      plants: 'AutoCAD, SketchUp/V-Ray 3D, bản vẽ M&E, dự toán vật tư chi tiết'
    },
    {
      id: 'sua-chua',
      name: 'Sửa Chữa & Cải Tạo Nhà Cũ',
      baseFactor: 2500000,
      desc: 'Gia cố móng, nâng nềp chống ngập, thay hệ thống điện nước, ốp lát sơn sửa toàn bộ',
      plants: 'Cừ tràm gia cố nền, sắt Hòa Phát, ống Bình Minh, gạch men Bình Dương, sơn Jotun'
    }
  ];

  const gardenStyles = [
    {
      id: 'nha-cap-4',
      name: 'Hồ Cá Koi & Non Bộ Xi Măng',
      baseFactor: 950000,
      desc: 'Ao chòi mát mẻ kết hợp hòn non bộ đắp tay mộc mạc và hồ cá sinh thái tụ khí đón gió lành',
      plants: 'Cây trúc quân tử, hoa súng chậu, dương xỉ núi, rêu tự nhiên bám vách đá'
    },
    {
      id: 'biet-thu',
      name: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
      baseFactor: 150000,
      desc: 'Xanh um thảm cỏ nhung Nhật kết hợp trồng xen kẽ hoa dại dễ sống, lối sỏi trắng sạch bóng mát',
      plants: 'Cây chuối cảnh, hoa nhài ta, cau sâm banh đón nắng, dừa cạn nở hoa bền bỉ'
    },
    {
      id: 'thiet-ke',
      name: 'Vườn Cây Ăn Quả & Luống Rau',
      baseFactor: 120000,
      desc: 'Quy hoạch vùng vườn nhà trồng rau sạch cải, muống kết hợp cây ăn quả mát ngọt dễ sai trĩu quả',
      plants: 'Giống ổi Đài Loan giòn ngọt, tranh ta mọng nước, rau muống sọc đỏ ta, giàn leo mướp bầu gác mái'
    },
    {
      id: 'sua-chua',
      name: 'Tiểu Cảnh Góc Sân & Ban Công',
      baseFactor: 350000,
      desc: 'Trang trí bồn nước lu gỗ rêu phong, giàn tre nứa treo giỏ lan ta bền dai thích nghi mọi bóng râm',
      plants: 'Lan đuôi công thích hợp hiên nhà mộc mạc, thường xuân phong thủy dai sức'
    }
  ];

  const stylesConfig = projectType === 'construction' ? constructionStyles : gardenStyles;

  // ─── ADDONS ────────────────────────────────────────────────────────────────
  const constructionAddons = [
    {
      id: 'mai-tach',
      name: 'Mái tôn cách nhiệt chống nóng 3 lớp',
      price: 850000,
      icon: Layers,
      desc: 'Lợp tôn Cliplock 0.45mm cách nhiệt,PU foam 25mm chống nóng hiệu quả cho nhà Quảng Ngãi nắng gắt'
    },
    {
      id: 'mai-bang',
      name: 'Mái bằng BTCT chống thấm sika',
      price: 1200000,
      icon: Layers,
      desc: 'Đổ bê tông sàn mái dày 120mm, sơn lót chống thấm Sika, taluy thoát nước chuẩn'
    },
    {
      id: 'cua-go',
      name: 'Cửa gỗ óc chó / cửa gỗ lim Nam Phi',
      price: 4500000,
      icon: DoorOpen,
      desc: 'Cửa gỗ tự nhiên dày 45mm, sơn UV bề mặt bóng, bản lề Inox 3 cánh mở tự do'
    },
    {
      id: 'op-lat',
      name: 'Ốp lát gạch Granite cao cấp 60x60',
      price: 280000,
      icon: Palette,
      desc: 'Gạch granite VITC, Đồng Tâm hoặc等价 tùy ngân sách, ốp tường trang trí phòng khách'
    },
    {
      id: 'tram-thach-cao',
      name: 'Trần thạch cao khung nhôm phẳng / giật cấp',
      price: 180000,
      icon: Layers,
      desc: 'Thạch cao Gyproc hoặc tương đương, khung nhôm Vĩnh Tường, sơn trắng bóng 2 lớp'
    },
    {
      id: 'dien-am-tran',
      name: 'Hệ thống điện âm trần chuẩn công nghiệp',
      price: 2500000,
      icon: Palette,
      desc: 'Dây cáp điện Cadivi 2.5mm, ống ruột gà Sino âm trần, automat đóng cắt Legrand hoặc Schneider'
    }
  ];

  const gardenAddons = [
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
      desc: 'Đèn LED bọc vỏ chống nước nối phích an toàn chiếu sáng các khóm cây lung linh buổi tối'
    },
    {
      id: 'stone-walk',
      name: 'Lối đi bậc đá tấm mộc mạc chống trơn',
      price: 3000000,
      icon: Footprints,
      desc: 'Chọn đá sa thạch cắt thô bọc quanh lớp sỏi dăm mộc mạc, đi êm chân không sợ ẩm rêu'
    }
  ];

  const addonsConfig = projectType === 'construction' ? constructionAddons : gardenAddons;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const estimationResult = useMemo(() => {
    const selectedStyle = stylesConfig.find(s => s.id === styleId) || stylesConfig[0];
    const baseCost = area * selectedStyle.baseFactor;

    const addonsCost = selectedAddons.reduce((sum, addonId) => {
      const addon = addonsConfig.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const total = baseCost + addonsCost;

    let timeline = projectType === 'construction' ? '45 - 60 ngày' : '12 - 15 ngày';
    if (projectType === 'construction') {
      if (area > 300) timeline = '90 - 120 ngày';
      else if (area > 150) timeline = '60 - 75 ngày';
    } else {
      if (area > 300) timeline = '35 - 45 ngày';
      else if (area > 150) timeline = '20 - 25 ngày';
    }

    const engineers = area > 200 ? 3 : 1;
    const workers = Math.max(3, Math.round(area / (projectType === 'construction' ? 20 : 30)));

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
  }, [area, styleId, selectedAddons, projectType, stylesConfig, addonsConfig]);

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

  const sectionLabel = projectType === 'construction' ? 'Xây Dựng & Kiến Trúc' : 'Cảnh Quan & Sân Vườn';
  const sectionTagline = projectType === 'construction'
    ? 'Từ 4,5 triệu/m² — Miền Trung & Quảng Ngãi'
    : 'Từ 120.000đ/m² — Bình Dân & Giá Tốt';

  return (
    <div className="bg-[#fcfdfc] py-16">
      <SEO
        title="Dịch vụ & Dự toán"
        description="Garden House cung cấp dịch vụ xây dựng trọn gói (nhà cấp 4, biệt thự, sửa chữa) và cảnh quan sân vườn (thảm cỏ, hồ cá Koi, non bộ) tại Quảng Ngãi và miền Trung. Bảng tính giá dự toán trực tuyến."
        keywords="xây nhà trọn gói Quảng Ngãi, thiết kế biệt thự miền Trung, sửa chữa nhà cũ, làm sân vườn, hồ cá Koi, đắp non bộ"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-20">
          <span className="text-xs uppercase font-bold text-forest-600 tracking-[0.2em] block">
            Xây Dựng & Cảnh Quan
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950">
            Trọn Gói Xây Nhà — Làm Vườn Đẹp
          </h1>
          <div className="w-16 h-1 bg-forest-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Garden House đồng hành từ thiết kế kiến trúc, thi công xây dựng đến cảnh quan sân vườn.
            Đội ngũ thợ lành nghề Quảng Ngãi — bền vững theo thời gian, tối ưu ngân sách cho gia chủ.
          </p>
        </div>

        {/* ── Project type tabs ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-forest-200 rounded-2xl p-1.5 gap-1 shadow-xs">
            <button
              onClick={() => { setProjectType('construction'); setStyleId('nha-cap-4'); setSelectedAddons([]); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                projectType === 'construction'
                  ? 'bg-forest-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-forest-700 hover:bg-forest-50'
              }`}
            >
              <Hammer className="w-4 h-4" />
              Xây Dựng & Kiến Trúc
            </button>
            <button
              onClick={() => { setProjectType('landscape'); setStyleId('nha-cap-4'); setSelectedAddons(['irrigation']); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                projectType === 'landscape'
                  ? 'bg-forest-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-forest-700 hover:bg-forest-50'
              }`}
            >
              <Trees className="w-4 h-4" />
              Cảnh Quan & Sân Vườn
            </button>
          </div>
        </div>

        {/* ── Services cards ── */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase text-forest-500 tracking-wider">
              {sectionLabel}
            </span>
            <div className="flex-1 h-px bg-forest-100"></div>
            <span className="text-xs text-forest-400">{sectionTagline}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
          {activeServices.map((service) => {
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
                    <span className="text-xs font-bold text-forest-500 uppercase tracking-wider block mb-2">
                      Đơn giá cơ sở từ: {formatVND(service.basePrice)}/m²
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.detailedDescription}
                    </p>

                    <div className="border-t border-forest-50 pt-5">
                      <h4 className="text-xs font-bold uppercase text-forest-800 tracking-wider mb-3">
                        Cam kết trong gói bao gồm:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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
                      const styleMap: Record<string, string> = {
                        c1: 'nha-cap-4', c2: 'biet-thu', c3: 'thiet-ke', c4: 'sua-chua',
                        s1: 'biet-thu', s2: 'nha-cap-4', s3: 'thiet-ke', s4: 'sua-chua'
                      };
                      setStyleId(styleMap[service.id] || 'nha-cap-4');
                      const el = document.getElementById('project-calculator');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 px-4 rounded-xl border border-forest-200 text-forest-700 hover:bg-forest-50 hover:border-forest-400 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Tính giá dự toán gói này</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Calculator ── */}
        <section
          id="project-calculator"
          className="bg-white rounded-3xl border border-forest-200 shadow-xl overflow-hidden scroll-mt-24"
        >
          <div className="bg-forest-900 p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-forest-800 relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500 rounded-bl-full opacity-5 z-0"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-xs font-bold uppercase mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>Công cụ dự toán chi phí trực tuyến</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3.5xl font-bold tracking-tight text-white leading-none">
                Bảng Tính Giá {projectType === 'construction' ? 'Xây Dựng' : 'Cảnh Quan'} Tham Khảo
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl">
                Nhập diện tích, chọn gói dịch vụ và các hạng mục bổ sung — hệ thống sẽ tự tính chi phí dự kiến sơ bộ.
              </p>
            </div>
            <div className="bg-forest-800 shrink-0 text-xs max-w-xs text-gray-300 p-4 rounded-xl border border-forest-700 relative z-10">
              <Info className="w-4 h-4 text-emerald-400 inline-block mr-1.5 align-text-bottom" />
              <span>Báo giá mang tính tham khảo, sẽ chính xác sau cuộc khảo sát thực tế tại công trình.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left controls */}
            <div className="p-8 lg:col-span-7 flex flex-col gap-8 border-b lg:border-b-0 lg:border-r border-forest-100">

              {/* Area input */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-bold uppercase text-forest-800 tracking-wider">
                    1. Diện tích thi công
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
                  max={projectType === 'construction' ? 500 : 1000}
                  step="5"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full accent-forest-600 h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-3"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-semibold mt-1">
                  {projectType === 'construction' ? (
                    <>
                      <span>Nhỏ (30m²)</span>
                      <span>Trung bình (100m²)</span>
                      <span>Lớn (250m²)</span>
                      <span>Rất lớn (500m²+)</span>
                    </>
                  ) : (
                    <>
                      <span>Ban công (10m²)</span>
                      <span>Trung bình (150m²)</span>
                      <span>Biệt thự (500m²)</span>
                      <span>Cảnh quan rộng (1000m²+)</span>
                    </>
                  )}
                </div>
              </div>

              {/* Style selector */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase text-forest-800 tracking-wider block">
                  2. Chọn Gói Dịch Vụ
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
                        {styleId === style.id && (
                          <span className="w-2.5 h-2.5 rounded-full bg-forest-600"></span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-500 leading-tight">{style.desc}</p>
                      <div className="border-t border-forest-100/60 pt-2 mt-1">
                        <span className="text-[10px] text-forest-600 font-semibold block uppercase tracking-wide">
                          Đơn giá: {formatVND(style.baseFactor)}/m²
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Addons */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase text-forest-800 tracking-wider block">
                  3. Hạng Mục Bổ Sung (Không bắt buộc)
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
                            <span className="font-semibold text-xs sm:text-sm text-gray-900 block leading-tight">
                              {addon.name}
                            </span>
                            <span className="text-[11px] text-gray-500 block mt-0.5">{addon.desc}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-bold text-xs sm:text-sm text-emerald-800">
                            + {formatVND(addon.price)}
                          </span>
                          <span className="text-[10px] block text-gray-300 mt-0.5 uppercase tracking-wide font-semibold">
                            {projectType === 'construction' ? 'GÓI VẬT TƯ' : 'TÍNH KHỐI LƯỢNG'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right results panel */}
            <div className="lg:col-span-5 p-8 bg-forest-50/60 flex flex-col gap-6 justify-between">

              <div className="flex flex-col gap-5">
                <h3 className="text-xs font-bold uppercase text-forest-800 tracking-wider">
                  4. Kết Quả Báo Giá Sơ Bộ
                </h3>

                <div className="bg-white p-5 rounded-2xl border border-forest-100 flex flex-col gap-4 shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                      TỔNG MỨC ĐẦU TƯ DỰ KIẾN
                    </span>
                    <span className="font-serif text-2xl lg:text-3.5xl font-extrabold text-forest-900 mt-1 block">
                      {formatVND(estimationResult.total)}
                    </span>
                  </div>
                  <hr className="border-forest-50" />
                  <div className="flex flex-col gap-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Phần {projectType === 'construction' ? 'xây dựng' : 'cảnh quan'} ({area}m²):</span>
                      <span className="font-semibold text-gray-900">{formatVND(estimationResult.baseCost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hạng mục bổ sung ({selectedAddons.length}):</span>
                      <span className="font-semibold text-gray-900">{formatVND(estimationResult.addonsCost)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 py-2">
                  <div className="flex gap-2.5 items-start text-xs leading-relaxed text-gray-600">
                    <Truck className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-forest-900">Vật tư & vật liệu:</p>
                      <p className="text-gray-500 mt-0.5">{estimationResult.plants}</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start text-xs leading-relaxed text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-forest-900">Thời gian dự kiến:</p>
                      <p className="text-gray-500 mt-0.5">
                        Khoảng <span className="font-bold text-forest-950">{estimationResult.timeline}</span> kể từ ngày khởi công.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start text-xs leading-relaxed text-gray-600">
                    <Home className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-forest-900">Nhân sự dự kiến:</p>
                      <p className="text-gray-500 mt-0.5">
                        <span className="font-semibold text-forest-950">{estimationResult.engineers} kỹ sư</span> giám sát
                        và đội ngũ <span className="font-semibold text-forest-950">{estimationResult.workers} thợ</span> lành nghề Garden House.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-6 border-t border-forest-100 pt-6">
                <button
                  onClick={handleTransferToContact}
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-forest-100 transition-all cursor-pointer"
                >
                  <span>Áp Dụng Dự Toán — Liên Hệ Tư Vấn</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider font-semibold">
                  Mức báo giá mang tính tương đối, chính xác sau đo đạc thực địa
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
