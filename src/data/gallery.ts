import type { GalleryItem } from '../types';

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'Tất cả hình ảnh' },
  { id: 'fleet', label: 'Đội xe tải' },
  { id: 'warehouse', label: 'Kho bãi tập kết' },
  { id: 'operation', label: 'Hoạt động giao nhận' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'fleet-1',
    category: 'fleet',
    categoryLabel: 'Đội xe tải',
    title: 'Dàn xe tải thùng kín Tân Đại Phát sẵn sàng xuất bến',
    description: 'Hệ thống xe tải đời mới từ 5 tấn đến 20 tấn đầu trắng thùng đỏ thương hiệu Tân Đại Phát.',
    placeholderBadge: 'Ảnh thực tế đội xe tải đường dài - Cần thay ảnh thật',
  },
  {
    id: 'warehouse-1',
    category: 'warehouse',
    categoryLabel: 'Kho bãi tập kết',
    title: 'Bãi tập kết hàng hóa đầu cầu Hà Nội',
    description: 'Khu vực bãi xe rộng rãi, thuận tiện cho các phương tiện trung chuyển ra vào bốc dỡ.',
    placeholderBadge: 'Ảnh thực tế kho bãi Hà Nội - Cần thay ảnh thật',
  },
  {
    id: 'operation-1',
    category: 'operation',
    categoryLabel: 'Hoạt động giao nhận',
    title: 'Công tác chằng buộc và cố định xe máy',
    description: 'Nhân viên Tân Đại Phát bao bọc xốp nổ và chằng đai dù chuyên dụng an toàn.',
    placeholderBadge: 'Ảnh thực tế bọc và chằng buộc xe máy - Cần thay ảnh thật',
  },
  {
    id: 'fleet-2',
    category: 'fleet',
    categoryLabel: 'Đội xe tải',
    title: 'Xe tải kiểm tra kỹ thuật trước khi khởi hành',
    description: 'Quy trình kiểm tra lốp, phanh, máy móc định kỳ nghiêm ngặt trước mỗi chuyến đi xuyên Việt.',
    placeholderBadge: 'Ảnh thực tế bảo dưỡng & kiểm tra xe - Cần thay ảnh thật',
  },
  {
    id: 'warehouse-2',
    category: 'warehouse',
    categoryLabel: 'Kho bãi tập kết',
    title: 'Kho trung chuyển hàng hóa tại TP. Hồ Chí Minh',
    description: 'Kho lưu trữ có mái che, bảo quản hàng khô ráo, trang bị camera an ninh 24/24.',
    placeholderBadge: 'Ảnh thực tế kho bãi TP.HCM - Cần thay ảnh thật',
  },
  {
    id: 'operation-2',
    category: 'operation',
    categoryLabel: 'Hoạt động giao nhận',
    title: 'Kiểm đếm và phân loại kiện hàng trước khi lên xe',
    description: 'Nhân sự đối soát vận đơn, dán tem mã hàng để đảm bảo giao đúng nơi, đúng người nhận.',
    placeholderBadge: 'Ảnh thực tế kiểm đếm hàng hóa - Cần thay ảnh thật',
  },
  {
    id: 'fleet-3',
    category: 'fleet',
    categoryLabel: 'Đội xe tải',
    title: 'Chuyến xe Tân Đại Phát lăn bánh trên Quốc lộ 1A',
    description: 'Hình ảnh xe lăn bánh trên cung đường Bắc - Nam kết nối giao thương giữa các tỉnh thành.',
    placeholderBadge: 'Ảnh thực tế xe tải trên đường trường - Cần thay ảnh thật',
  },
  {
    id: 'operation-3',
    category: 'operation',
    categoryLabel: 'Hoạt động giao nhận',
    title: 'Bàn giao hàng tận nơi cho khách hàng doanh nghiệp',
    description: 'Đội ngũ giao hàng tận tình, hỗ trợ khách hàng ký nhận và nghiệm thu biên bản bàn giao.',
    placeholderBadge: 'Ảnh thực tế bàn giao hàng tận nơi - Cần thay ảnh thật',
  },
];
