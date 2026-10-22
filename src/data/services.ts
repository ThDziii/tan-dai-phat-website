import type { ServiceItem, ProcessStep, BenefitItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'retail-groupage',
    tag: 'TIẾT KIỆM CHI PHÍ',
    title: 'Hàng lẻ, hàng ghép',
    description: 'Gửi hàng linh hoạt, ghép chuyến mỗi ngày. Phù hợp với kiện hàng nhỏ, lẻ.',
    linkText: 'Tìm hiểu dịch vụ',
    linkHref: '/services#retail-groupage',
    details: {
      suitableFor: 'Doanh nghiệp thương mại, shop bán lẻ, cá nhân gửi từ 1 kiện đến vài tạ/tấn hàng hóa cần ghép chung xe để tối ưu ngân sách.',
      advantages: [
        'Ghép chuyến liên tục từ thứ 2 đến chủ nhật, không để hàng lưu kho quá ngày.',
        'Được phân loại theo nhóm hàng, đóng gói pallet cẩn thận chống móp méo.',
        'Cước phí tính chuẩn theo trọng lượng (kg) hoặc khối lượng (m3) minh bạch.',
        'Hỗ trợ giao nhận tại kho bãi Tân Đại Phát hoặc giao tận nơi theo yêu cầu.',
      ],
      commitment: 'Đảm bảo hàng hóa nguyên đai nguyên kiện, ký biên bản bàn giao đầy đủ.',
    },
  },
  {
    id: 'full-truckload',
    tag: 'CHỦ ĐỘNG LỊCH TRÌNH',
    title: 'Hàng nguyên chuyến',
    description: 'Chủ động lịch trình với xe riêng, đáp ứng trọn vẹn nhu cầu vận chuyển.',
    linkText: 'Tìm hiểu dịch vụ',
    linkHref: '/services#full-truckload',
    details: {
      suitableFor: 'Nhà máy, xí nghiệp, tổng kho hoặc dự án lớn cần vận chuyển khối lượng lớn từ 5 tấn đến 30 tấn hoặc bao trọn thùng xe.',
      advantages: [
        'Xe xuất phát ngay sau khi bốc hàng xong, không dừng đón trả hàng dọc đường.',
        'Tối ưu thời gian vận chuyển nhanh nhất tuyến Bắc - Nam (chỉ từ 48h - 60h).',
        'Được niêm phong chì niêm (seal) thùng xe trước sự chứng kiến của chủ hàng.',
        'Có hợp đồng vận tải pháp lý, hóa đơn VAT và bảo hiểm chuyến hàng rõ ràng.',
      ],
      commitment: 'Thời gian chính xác tuyệt đối, hỗ trợ giám sát hành trình xe trực tiếp.',
    },
  },
  {
    id: 'motorbike-transport',
    tag: 'RÀNG BUỘC CẨN THẬN',
    title: 'Vận chuyển xe máy',
    description: 'Bọc bạt cẩn thận, cố định chắc chắn để chiếc xe an tâm về đích.',
    linkText: 'Tìm hiểu dịch vụ',
    linkHref: '/services#motorbike-transport',
    details: {
      suitableFor: 'Sinh viên, người đi làm chuyển nơi sinh sống, người mua bán xe trên toàn quốc cần gửi xe số, xe ga, xe phân khối lớn.',
      advantages: [
        'Bọc lót chống trầy xước 3 lớp: xốp nổ (bubble wrap), bìa carton và màng co PE.',
        'Rút cạn xăng trước khi xếp xe lên thùng để đảm bảo phòng cháy chữa cháy 100%.',
        'Có giá đỡ chuyên dụng hoặc chằng buộc bằng dây tăng đơ vải dù chịu tải cao.',
        'Thủ tục nhanh gọn: chỉ cần bản sao đăng ký xe và CMND/CCCD của người gửi.',
      ],
      commitment: 'Không để xe va chạm, giữ nguyên vẹn nước sơn và phụ tùng nguyên bản.',
    },
  },
  {
    id: 'oversized-cargo',
    tag: 'PHÙ HỢP TẢI TRỌNG LỚN',
    title: 'Hàng cồng kềnh, siêu trường',
    description: 'Tư vấn phương án phù hợp cho hàng kích thước lớn, khó vận chuyển.',
    linkText: 'Tìm hiểu dịch vụ',
    linkHref: '/services#oversized-cargo',
    details: {
      suitableFor: 'Kết cấu thép, máy móc cơ khí công nghiệp, dây chuyền sản xuất, bồn bể, thiết bị công trình có quy cách vượt khổ tiêu chuẩn.',
      advantages: [
        'Đội xe đầu kéo, sơ-mi rơ-moóc sàn, fooc lùn chuyên chở thiết bị đặc thù.',
        'Khảo sát cung đường, trạm thu phí, cầu vượt trước khi xe khởi hành.',
        'Đội ngũ tài xế nhiều năm kinh nghiệm xử lý các góc cua hiểm và đường đèo dốc.',
        'Cung cấp phương tiện cẩu hạ, nâng hàng tại hai đầu giao nhận chuyên nghiệp.',
      ],
      commitment: 'An toàn tuyệt đối trên mọi cây số với phương án chằng buộc kỹ thuật cao.',
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Liên hệ tư vấn',
    description: 'Chia sẻ loại hàng, điểm nhận và điểm giao. Chúng tôi tư vấn phương án phù hợp.',
    iconName: 'phone-call',
  },
  {
    step: '02',
    title: 'Xác nhận đơn hàng',
    description: 'Thống nhất báo giá, lịch trình và thời gian giao nhận rõ ràng.',
    iconName: 'clipboard-check',
  },
  {
    step: '03',
    title: 'Vận chuyển',
    description: 'Hàng được sắp xếp cẩn thận và theo dõi trong suốt hành trình.',
    iconName: 'truck',
  },
  {
    step: '04',
    title: 'Giao hàng tận nơi',
    description: 'Kiểm tra, bàn giao hàng hóa và hoàn tất đơn hàng cùng bạn.',
    iconName: 'package-check',
  },
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'modern-fleet',
    title: 'Đội xe hiện đại',
    description: 'Đa dạng tải trọng, phù hợp với từng loại hàng hóa.',
    iconName: 'truck',
  },
  {
    id: 'professional-team',
    title: 'Đội ngũ chuyên nghiệp',
    description: 'Tận tâm tư vấn, cẩn thận trong từng khâu giao nhận.',
    iconName: 'users',
  },
  {
    id: 'competitive-pricing',
    title: 'Giá cả cạnh tranh',
    description: 'Báo giá rõ ràng, tối ưu chi phí theo nhu cầu của bạn.',
    iconName: 'shield-check',
  },
  {
    id: 'support-247',
    title: 'Hỗ trợ 24/7',
    description: 'Luôn sẵn sàng lắng nghe, đồng hành suốt hành trình.',
    iconName: 'headphones',
  },
];
