import { Project } from '../types';

export const allProjects: Project[] = [
  {
    id: 'p1',
    title: 'Thi Công Sân Vườn Nhà Mái Thái',
    category: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    area: '450m²',
    location: 'Sóc Sơn, Hà Nội',
    description: 'Dọn sạch mặt bằng thô, rải thảm cỏ nhung Nhật bọc quanh lối đi lát đá cuội xám chống trơn, đem lại không gian thoáng đãng sạch mát cho khoảng sân ngôi nhà cấp 4.',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=80'
    ],
    duration: '10 ngày',
    costRange: '45 - 55 triệu VNĐ',
    materials: ['Cỏ nhung Nhật chuẩn loại 1', 'Đá cuội xám tự nhiên', 'Đất thịt phù sa', 'Hệ thống tưới xoay tự động'],
    features: ['Thảm cỏ phẳng phiu êm chân', 'Lối đi lát đá bo góc tự nhiên chống trơn', 'Dễ dàng cắt tỉa và bảo dưỡng'],
    challenges: 'Nền đất ban đầu nhiều xà bần và đá dăm từ quá trình xây dựng nhà mái Thái, khả năng thoát nước kém dễ gây úng cỏ.',
    solutions: 'Tổ thợ đã đào xúc bỏ 15cm lớp mặt xà bần, rải lớp cát sỏi thoát nước phía dưới, bổ sung đất thịt màu mỡ trước khi trải thảm cỏ trồng.',
    detailedSteps: [
      { stepName: 'Bước 1: Giải phóng mặt bằng', stepDesc: 'Xúc dọn gạch đá vụn, xà bần xây dựng, san phẳng mặt nền thô.' },
      { stepName: 'Bước 2: Xử lý hệ thống thoát nước', stepDesc: 'Tạo độ dốc nhẹ 2% hướng ra ngoài vườn để thoát nước mặt tốt, rải lớp cát lót.' },
      { stepName: 'Bước 3: Đổ đất dinh dưỡng', stepDesc: 'Bồi đắp lớp đất thịt tơi xốp dày 10cm trộn phân hữu cơ vi sinh tốt cho rễ.' },
      { stepName: 'Bước 4: Trồng thảm cỏ & Đặt đá lối đi', stepDesc: 'Trải từng tấm cỏ nhung Nhật khít nhau, lu và đầm nhẹ cho rễ bám đất. Đặt đá cuội lối đi đan xen tinh tế.' }
    ],
    clientQuote: {
      text: 'Mấy chú thợ quê rất nhiệt tình, làm việc từ sáng sớm tới tối mịt. Sân vườn hoàn thiện phẳng lỳ, cỏ xanh mướt, mấy đứa nhỏ nhà tôi thích chạy chơi trên sân lắm!',
      author: 'Anh Nguyễn Văn Hùng',
      role: 'Chủ nhà - Kinh doanh tự do'
    }
  },
  {
    id: 'p2',
    title: 'Hồ Cá Koi Quê Em Tiểu Cảnh Cúc Lan',
    category: 'Hồ cá Koi & Non Bộ xi măng',
    image: 'https://images.unsplash.com/photo-1558905612-4ee4eb15891d?auto=format&fit=crop&w=1000&q=80',
    area: '120m²',
    location: 'Quận 12, TP. Hồ Chí Minh',
    description: 'Sắp sỏi bọc bờ ao, đắp tiểu cảnh vách núi xi măng mini kết hợp thả chép rực rỡ và trồng cỏ bụi xanh mỡ màng đọng sương dọn mát góc hiên.',
    gallery: [
      'https://images.unsplash.com/photo-1558905612-4ee4eb15891d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535268647977-a403b69fc756?auto=format&fit=crop&w=1000&q=80'
    ],
    duration: '15 ngày',
    costRange: '75 - 90 triệu VNĐ',
    materials: ['Đá cổ thạch tự nhiên', 'Xi măng mác cao chống thấm', 'Sỏi cuội suối lớn nhỏ', 'Hệ lọc tràn 4 ngăn vi sinh tự chế'],
    features: ['Hệ thống lọc tuần hoàn nước trong vắt', 'Thác nước róc rách tạo oxy dồi dào', 'Tiểu cảnh đá xếp tay nghệ thuật'],
    challenges: 'Diện tích góc sân bị hạn chế, hướng nắng chiếu trực tiếp dễ gây rêu tảo xanh làm đục nước hồ cá.',
    solutions: 'Tổ thợ thiết kế hệ lọc tràn 4 ngăn đảo hạt kaldnes kết hợp đèn UV diệt rêu chuyên dụng, trồng thêm khóm chuối rẻ quạt che bớt nắng trưa.',
    detailedSteps: [
      { stepName: 'Bước 1: Đào lòng hồ & Đi đường ống', stepDesc: 'Định hình hố đào sâu 80cm - 1m, đặt hệ thống hút đáy, hút mặt và thổi luồng.' },
      { stepName: 'Bước 2: Đổ bê tông cốt thép', stepDesc: 'Đổ đáy và thành hồ dày 12cm kèm phụ gia chống thấm chuyên dụng Sika.' },
      { stepName: 'Bước 3: Xếp đá cổ thạch & Đắp núi', stepDesc: 'Tổ thợ khéo léo chọn và dựng các khối đá lớn làm vách dựng, tạo dòng chảy thác chảy nhẹ nhàng.' },
      { stepName: 'Bước 4: Lắp đặt hệ lọc & Vận hành', stepDesc: 'Bố trí chổi lọc, tấm bùi nhùi J-Mat, sứ lọc và chạy thử nghiệm nước sạch 3 ngày trước khi thả cá.' }
    ],
    clientQuote: {
      text: 'Chi phí rẻ hơn nhiều so với báo giá của các công ty lớn mà nước lúc nào cũng trong vắt nhìn thấy rõ từng con cá Koi bơi lội dưới đáy. Rất hài lòng.',
      author: 'Chú Trần Minh Quang',
      role: 'Cựu chiến binh nghỉ hưu'
    }
  },
  {
    id: 'p3',
    title: 'Nhà Vườn Ao Cá Cây Ăn Quả Sum Suê',
    category: 'Vườn Cây Ăn Quả & Luống Rau',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
    area: '800m²',
    location: 'Hòa Lạc, Hà Nội',
    description: 'Quy hoạch vùng trồng hai đồi bưởi Diễn trĩu quả kết hợp gieo rau muống đỏ, mồng tơi ta tươm tất bép xanh phục vụ bữa cơm dân dã tươi mướt cho gia đình.',
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1000&q=80'
    ],
    duration: '20 ngày',
    costRange: '110 - 130 triệu VNĐ',
    materials: ['Đất thịt màu đỏ Tây Nguyên', 'Hệ thống luống gạch thẻ đỏ', 'Cây giống bưởi Diễn trích cành', 'Giàn leo tre tầm vông'],
    features: ['Vườn cây ăn trái cho thu hoạch quanh năm', 'Khu luống rau sạch phân ô gọn gàng', 'Ao thả cá trắm cỏ sinh thái'],
    challenges: 'Khu đất đồi dốc dốc nhẹ nên nước tưới dễ trôi mất chất dinh dưỡng, đất thịt cằn cỗi nhiều đất sét pha.',
    solutions: 'San gạt tạo ruộng bậc thang nhẹ, dùng gạch thẻ đỏ quây thành từng luống cao để giữ phân bón, bồi thêm lượng lớn phân bò hoai mục.',
    detailedSteps: [
      { stepName: 'Bước 1: Quy hoạch tổng thể', stepDesc: 'Xác định rõ khu vực trồng cây ăn quả, khu làm luống rau sạch và lối đi dạo.' },
      { stepName: 'Bước 2: Xây luống rau sạch', stepDesc: 'Xây bao quanh luống bằng gạch đỏ cao 30cm giúp giữ đất dinh dưỡng không bị trôi khi mưa.' },
      { stepName: 'Bước 3: Trồng cây ăn quả giống tuyển chọn', stepDesc: 'Đào hố rộng 80cm, lót phân hữu cơ và đặt bầu bưởi Diễn, nhãn lồng mập mạp.' },
      { stepName: 'Bước 4: Lắp đặt đường ống tưới tiết kiệm', stepDesc: 'Đi đường ống nhỏ giọt trực tiếp đến từng gốc cây giúp tiết kiệm nước và công chăm sóc.' }
    ],
    clientQuote: {
      text: 'Gia đình tôi giờ cuối tuần nào cũng về đây nghỉ ngơi. Rau ăn không hết, bưởi thì sắp đến mùa hái quả ngọt. Tổ thợ làm việc có tâm lắm.',
      author: 'Cô Mai Thị Lan',
      role: 'Giáo viên cấp 3 nghỉ hưu'
    }
  },
  {
    id: 'p4',
    title: 'Tiểu Cảnh Lan Tre Ban Công Chung Cư',
    category: 'Tiểu cảnh Góc Sân & Ban công',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80',
    area: '15m²',
    location: 'Vinhomes Ocean Park, Gia Lâm',
    description: 'Rải bửng sỏi dăm trắng tinh tươm hắt sáng nhẹ, treo các giỏ phong lan ta và lắp giàn nứa leo hoa giấy vừa gọn gàng vừa rực rỡ gió thông.',
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=80'
    ],
    duration: '3 ngày',
    costRange: '12 - 15 triệu VNĐ',
    materials: ['Tre nứa Hun khói chống mối mọt', 'Sỏi dăm trắng Ninh Bình', 'Chậu đất nung treo dây thừng', 'Cây hoa giấy ngũ sắc'],
    features: ['Tối ưu không gian nhỏ hẹp chung cư', 'Hương lan rừng dịu mát thư thái', 'Dễ dàng di chuyển, thay cây linh hoạt'],
    challenges: 'Không gian ban công hẹp, trọng tải ban công có giới hạn nên không thể dùng các loại đá tảng nặng hoặc xây bồn bê tông.',
    solutions: 'Sử dụng hệ khung tre siêu nhẹ gắn tường và chậu treo đất nung nhẹ, lót sỏi nhẹ siêu xốp ở dưới đáy chậu giúp giảm tối đa khối lượng.',
    detailedSteps: [
      { stepName: 'Bước 1: Đo đạc & Thiết kế hệ khung treo', stepDesc: 'Đo kích thước vách tường ban công, gia công khung tre hun khói tại xưởng.' },
      { stepName: 'Bước 2: Lắp đặt khung tre cố định', stepDesc: 'Khoan bắt ốc vít inox chống rỉ sét chắc chắn vào tường bê tông để treo chậu cây an toàn.' },
      { stepName: 'Bước 3: Rải sỏi trắng & Xếp chậu lan', stepDesc: 'Rải lớp sỏi trắng dăm trên sàn lót lưới nhựa bảo vệ, treo chậu lan rừng và cây hoa giấy đón nắng.' }
    ],
    clientQuote: {
      text: 'Góc ban công nhỏ nhưng đầy nắng gió. Tối tối ra ngồi nhâm nhi tách trà ngắm hoa phong lan nở thì không gì bằng. Cảm ơn các chú thợ!',
      author: 'Chị Nguyễn Hoài Thương',
      role: 'Nhân viên văn phòng'
    }
  },
  {
    id: 'p5',
    title: 'Nhà Cấp 4 Mái Ngói Đẹp Bình Yên',
    category: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    area: '250m²',
    location: 'Sa Pa, Lào Cai',
    description: 'Rải sỏi núi, cắm khóm hoa hướng dương vàng hoe cùng bồn sắn nhỏ bao quanh bậc đá mộc sần dạo mát đón mây đèo trong lành thơ mộng.',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80'
    ],
    duration: '12 ngày',
    costRange: '50 - 65 triệu VNĐ',
    materials: ['Đá phiến Sa Pa tự nhiên', 'Sỏi núi mộc màu vàng đất', 'Cây cúc họa mi & Hướng dương', 'Gỗ thông pallet tái chế làm hàng rào'],
    features: ['Phong cách mộc mạc đậm chất vùng cao', 'Bậc đá tự nhiên bám rêu phong xanh', 'Hàng rào gỗ nhỏ xinh xắn'],
    challenges: 'Thời tiết Sa Pa mưa ẩm thất thường, đất dốc dễ bị sạt lở hoặc xói mòn lớp đất mặt khi có mưa lũ.',
    solutions: 'Kè chặt các bậc đá phiến tự nhiên bản lớn để giữ đất, trồng cỏ gừng chịu lạnh tốt xen kẽ giữa các khe đá chống xói mòn.',
    detailedSteps: [
      { stepName: 'Bước 1: Định hình bậc đá dạo', stepDesc: 'Chọn lựa các phiến đá dẹt tự nhiên dày, xếp giật cấp dọc theo triền dốc tạo lối đi hài hòa.' },
      { stepName: 'Bước 2: Gia cố hàng rào gỗ', stepDesc: 'Đóng hàng rào gỗ thông đã xử lý chống ẩm mốc xung quanh khu vườn.' },
      { stepName: 'Bước 3: Trồng hoa bụi bản địa', stepDesc: 'Trồng xen kẽ hoa hướng dương nhỏ, cúc họa mi và cây sắn ta tạo cảm giác hoang sơ gần gũi.' }
    ],
    clientQuote: {
      text: 'Ngôi nhà nhỏ ẩn sau lớp sương mù nay đã có lối đi bằng đá cực đẹp. Khách đến chơi ai cũng khen khu vườn tự nhiên ấm áp.',
      author: 'Anh Sùng A Tủa',
      role: 'Chủ Homestay nhỏ'
    }
  },
  {
    id: 'p6',
    title: 'Ao Chòi Mái Lá Đón Gió Mát Chiều Quê',
    category: 'Hồ cá Koi & Non Bộ xi măng',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80',
    area: '200m²',
    location: 'Huyện Củ Chi, TP. Hồ Chí Minh',
    description: 'Xây chòi hóng mát khung tre lợp lá dừa nước dân dã kề cận hồ lắng chống phèn bơi lấp trong vắt. Chốn tĩnh tại nghỉ chân cực kỳ thảnh thơi.',
    gallery: [
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1000&q=80'
    ],
    duration: '18 ngày',
    costRange: '80 - 95 triệu VNĐ',
    materials: ['Tre gai ngâm bùn chống mối mọt', 'Lá dừa nước khô lợp mái', 'Cột gỗ tràm vững chãi', 'Đất sét bọc đáy ao lắng'],
    features: ['Chòi tre mái lá mát rượi giữa trưa nắng', 'Ao nước lọc phèn tự nhiên thả hoa súng', 'Lối đi lát tre dăm mộc mạc'],
    challenges: 'Nước giếng khoan và đất vùng Củ Chi bị nhiễm phèn sắt nặng, nếu không xử lý kỹ sẽ làm vàng đáy hồ và chết cá súng.',
    solutions: 'Xây dựng một ao lắng lọc phèn bằng cát thạch anh, than hoạt tính trước khi dẫn nước sạch vào ao nuôi chính.',
    detailedSteps: [
      { stepName: 'Bước 1: Đào ao và đắp bờ tràm', stepDesc: 'Đào ao sâu 1.2m, đóng cọc gỗ tràm dọc bờ ao để chống sạt lở đất sình.' },
      { stepName: 'Bước 2: Xây dựng giàn lọc phèn sinh học', stepDesc: 'Lắp hệ thống lọc giàn mưa khử sắt tự nhiên.' },
      { stepName: 'Bước 3: Dựng chòi tre lá dừa', stepDesc: 'Đóng cột tràm, dựng kèo tre gai ngâm bùn kỹ lưỡng và lợp 3 lớp lá dừa nước mát rượi.' }
    ],
    clientQuote: {
      text: 'Trưa trưa nằm võng dưới mái chòi lá này mát như ở miền Tây. Ao cá súng nở hoa tím lịm rất thanh bình. Cảm ơn tổ thợ lành nghề.',
      author: 'Bác Nguyễn Minh Triết',
      role: 'Nông dân làm vườn'
    }
  },
  {
    id: 'p7',
    title: 'Cải Tạo Thảm Cỏ Lối Đi Nhà Ống Phố Hẹp',
    category: 'Nhà Vườn Thảm Cỏ Mộc Mạc',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80',
    area: '60m²',
    location: 'Thanh Trì, Hà Nội',
    description: 'Tận dụng hành lang lối đi nhỏ bên sườn nhà ống bọc cỏ lá tre thô bền bỉ chịu dẫm đạp, rải thạch mộc đi bước êm chân rôm rả.',
    gallery: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1000&q=80'
    ],
    duration: '5 ngày',
    costRange: '18 - 22 triệu VNĐ',
    materials: ['Cỏ lá tre bản địa chịu mát', 'Đá dăm xám nhỏ', 'Phiến thạch mộc dạo lối', 'Lưới ngăn cỏ lan dưới đất'],
    features: ['Dành riêng cho không gian bóng râm sườn nhà', 'Cỏ chịu dẫm đạp cực tốt, ít tốn nước', 'Lối đi thạch mộc sạch sẽ không dính bùn đất'],
    challenges: 'Khu vực hành lang sườn nhà bị tường cao che khuất nên thiếu sáng trầm trọng, cỏ nhung Nhật thông thường sẽ bị lụi dần.',
    solutions: 'Thay thế bằng cỏ lá tre cỏ gừng bản địa chịu bóng râm rất tốt kết hợp bổ sung phân vi sinh thúc rễ sâu.',
    detailedSteps: [
      { stepName: 'Bước 1: Làm đất & Diệt cỏ dại', stepDesc: 'Xới đất cũ, làm sạch rễ cỏ gấu dại, phun xử lý mầm cỏ dại để bảo vệ thảm cỏ trồng.' },
      { stepName: 'Bước 2: Trải lưới thoát nước', stepDesc: 'Trải lớp lưới chuyên dụng giúp ngăn cỏ phát triển quá sâu làm tắc cống thoát nước sườn nhà.' },
      { stepName: 'Bước 3: Đặt đá phiến và trồng cỏ lá tre', stepDesc: 'Định hình phiến thạch dạo mộc mạc, trồng đan xen các khóm cỏ lá tre khỏe mạnh quanh đá.' }
    ],
    clientQuote: {
      text: 'Trước đây hành lang này ẩm thấp muỗi bay đầy. Từ lúc lót đá trải cỏ xanh sạch sẽ hẳn lên, chiều mát ra đi bộ thư giãn rất tốt.',
      author: 'Cô Lê Thị Kim Đông',
      role: 'Nội trợ gia đình'
    }
  },
  {
    id: 'p8',
    title: 'Hòn Non Bộ Xi Măng Nuôi Cá Trê Ta',
    category: 'Hồ cá Koi & Non Bộ xi măng',
    image: 'https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1000&q=80',
    area: '45m²',
    location: 'Ý Yên, Nam Định',
    description: 'Vừa trang trí tạo dòng chảy róc rách phong thủy vừa làm ao nhỏ cho các cụ nuôi vui cá trắm cá trê, đá đắp tay tỉa tót rất công phu dân dã mộc dày.',
    gallery: [
      'https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80'
    ],
    duration: '10 ngày',
    costRange: '35 - 45 triệu VNĐ',
    materials: ['Đá cuội Ý Yên tự nhiên', 'Xi măng mác cao chịu mặn phèn', 'Máy bơm chìm mini 25W', 'Cây dương xỉ rừng & Rêu bám đá'],
    features: ['Non bộ đắp xi măng truyền thống bền chắc', 'Thả cá trê ta dễ nuôi không tốn nhiều công chăm', 'Tận dụng không gian góc sân nhỏ trước hiên'],
    challenges: 'Khách hàng muốn có tiếng nước chảy róc rách êm tai nhưng không được ồn ào và hóa đơn tiền điện hàng tháng phải thật tiết kiệm.',
    solutions: 'Bố trí máy bơm chìm công suất thấp 25W chạy siêu êm, thiết kế máng nước bằng đá xẻ răng cưa làm nhỏ tia nước rơi giúp giảm tiếng ồn lớn.',
    detailedSteps: [
      { stepName: 'Bước 1: Làm bể chứa nước', stepDesc: 'Xây bể vuông bo góc bằng gạch đặc, trát chống thấm 2 lớp dày.' },
      { stepName: 'Bước 2: Xếp lõi gạch tạo dáng non bộ', stepDesc: 'Dùng gạch vỡ tạo phôi sườn cốt bên trong núi để giảm trọng lượng xi măng và đá.' },
      { stepName: 'Bước 3: Đắp xi măng giả đá & Xếp cuội cảnh', stepDesc: 'Tổ thợ tay nghề đắp xi măng tạo thớ núi tự nhiên, cấy khóm rêu rừng và cây dương xỉ quanh khe.' }
    ],
    clientQuote: {
      text: 'Hòn non bộ đắp nhìn rất thật và tự nhiên. Thả mấy con cá trê ta tụi nhỏ thích lắm, cứ rảnh là ra cho ăn. Thợ làm rất tận tâm, dọn dẹp sạch sẽ trước khi bàn giao.',
      author: 'Ông Phạm Văn Thịnh',
      role: 'Thợ mộc nghỉ hưu'
    }
  }
];

function extractImagesFromHtml(html: string): string[] {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const images: string[] = [];
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    images.push(match[1]);
  }
  return images;
}

export function mapProjectToFE(dbProj: any): Project {
  // Tìm dữ liệu tương ứng trong allProjects theo tiêu đề gần đúng hoặc slug
  const local = allProjects.find(
    (p) =>
      p.id === dbProj._id ||
      p.id === dbProj.slug ||
      dbProj.slug?.includes(p.id) ||
      p.title.toLowerCase() === dbProj.name?.toLowerCase()
  );

  const mainImage = dbProj.mainImage || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80';
  const extractedImages = dbProj.summary ? extractImagesFromHtml(dbProj.summary) : [];
  const gallery = local?.gallery || (extractedImages.length > 0 ? Array.from(new Set([mainImage, ...extractedImages])) : [mainImage]);

  return {
    id: dbProj._id || dbProj.id,
    slug: dbProj.slug,
    title: dbProj.name,
    category: dbProj.type || 'Nhà Vườn Thảm Cỏ Mộc Mạc',
    image: mainImage,
    area: local?.area || '150m²',
    location: dbProj.address || 'Hà Nội',
    description: dbProj.summary || '',
    gallery,
    duration: local?.duration || '10 ngày',
    costRange: local?.costRange || '35 - 55 triệu VNĐ',
    materials: local?.materials || ['Vật liệu tự nhiên địa phương'],
    features: local?.features || ['Thi công trực tiếp bởi tổ thợ quê'],
    challenges: local?.challenges || 'Điều kiện hiện trạng thực tế.',
    solutions: local?.solutions || 'Được tổ thợ tư vấn xử lý tối ưu.',
    detailedSteps: local?.detailedSteps || [
      { stepName: 'Bước 1: Khảo sát hiện trạng', stepDesc: 'Tổ thợ đến khảo sát đất vườn, hướng nắng gió.' },
      { stepName: 'Bước 2: Lập sơ đồ mộc mạc', stepDesc: 'Vẽ phác thảo vị trí cây, đá, thảm cỏ hoàn toàn miễn phí.' },
      { stepName: 'Bước 3: Thi công & Bàn giao', stepDesc: 'San gạt mặt bằng, trồng cỏ cây và kiểm tra nghiệm thu.' }
    ],
    clientQuote: local?.clientQuote || {
      text: 'Đội ngũ làm việc rất nhiệt tình và thật thà, giá thi công bình dân phù hợp.',
      author: 'Anh Nguyễn Huy Hoàng',
      role: 'Chủ nhà vườn'
    }
  };
}
