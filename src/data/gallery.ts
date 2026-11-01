import type { GalleryItem } from '../types';

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'Tất cả hình ảnh' },
  { id: 'fleet', label: 'Đội xe & xe nâng' },
  { id: 'warehouse', label: 'Kho bãi tập kết' },
  { id: 'operation', label: 'Hoạt động giao nhận' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'fleet-office',
    category: 'fleet',
    categoryLabel: 'Đội xe & xe nâng',
    title: 'Xe tải trước trụ sở Tân Đại Phát Logistics',
    description:
      'Xe tải đỗ ngay trước văn phòng kho bãi mang biển hiệu Tân Đại Phát Logistics, sẵn sàng nhận hàng xuất bến.',
    imageUrl: '/images/gallery/tru-so-kho-bai.jpg',
    imageAlt: 'Xe tải trắng trước trụ sở Tân Đại Phát Logistics',
  },
  {
    id: 'fleet-forklift',
    category: 'fleet',
    categoryLabel: 'Đội xe & xe nâng',
    title: 'Xe nâng làm việc giữa dàn xe tải',
    description:
      'Xe nâng Komatsu bốc xếp hàng giữa các xe thùng bạt và xe Hino tại bãi, trong khi xe bên cạnh đang chở xe máy.',
    imageUrl: '/images/gallery/xe-nang-bai-xe.jpg',
    imageAlt: 'Xe nâng hoạt động giữa các xe tải tại bãi Tân Đại Phát',
  },
  {
    id: 'operation-coordinate',
    category: 'operation',
    categoryLabel: 'Hoạt động giao nhận',
    title: 'Nhân viên điều phối xe máy trước khi lên xe',
    description:
      'Đội ngũ áo Tân Đại Phát tập kết xe máy trắng, phối hợp xếp lên thùng xe ngay tại bãi.',
    imageUrl: '/images/gallery/dieu-phoi-xep-xe.jpg',
    imageAlt: 'Nhân viên Tân Đại Phát đứng giữa dãy xe máy và xe tải đang xếp hàng',
  },
  {
    id: 'warehouse-yard',
    category: 'warehouse',
    categoryLabel: 'Kho bãi tập kết',
    title: 'Bãi xe và xe tải tập kết dưới mái che',
    description:
      'Xe máy được xếp hàng sẵn sàng xuất bến cạnh xe thùng bạt tại bãi tập kết của Tân Đại Phát.',
    imageUrl: '/images/gallery/bai-xe-tap-ket.jpg',
    imageAlt: 'Dãy xe máy và xe tải thùng bạt tập kết dưới mái che',
  },
  {
    id: 'warehouse-wrapped',
    category: 'warehouse',
    categoryLabel: 'Kho bãi tập kết',
    title: 'Kho bảo quản xe máy đã bọc nilon',
    description:
      'Xe máy được bọc nilon nhiều màu, xếp trong kho có mái che cùng hàng hóa khác trước khi lên xe.',
    imageUrl: '/images/gallery/kho-xe-da-boc.jpg',
    imageAlt: 'Xe máy bọc nilon hồng, vàng, trắng trong kho có mái che',
  },
  {
    id: 'operation-wrap',
    category: 'operation',
    categoryLabel: 'Hoạt động giao nhận',
    title: 'Bọc xốp và kiểm tra xe máy trước khi lên xe',
    description:
      'Nhân viên Tân Đại Phát bọc xốp nổ và kiểm tra từng xe máy để hạn chế trầy xước khi vận chuyển.',
    imageUrl: '/images/gallery/boc-xe-may.jpg',
    imageAlt: 'Nhân viên kiểm tra xe máy đã bọc xốp nổ trong kho',
  },
  {
    id: 'operation-count',
    category: 'operation',
    categoryLabel: 'Hoạt động giao nhận',
    title: 'Đối soát chứng từ và kiểm đếm hàng hóa',
    description:
      'Nhân viên đối chiếu vận đơn ngay tại kho, cạnh các kiện hàng tiêu dùng đã xếp pallet.',
    imageUrl: '/images/gallery/kiem-dem-hang.jpg',
    imageAlt: 'Nhân viên kiểm chứng từ bên các thùng cháo Tổ Yến',
  },
  {
    id: 'operation-load',
    category: 'operation',
    categoryLabel: 'Hoạt động giao nhận',
    title: 'Xếp xe máy lên xe tải xuất bến',
    description:
      'Đội ngũ xếp xe máy lên thùng xe, chuẩn bị chuyến vận chuyển từ bãi tập kết.',
    imageUrl: '/images/gallery/xep-xe-len-xe.jpg',
    imageAlt: 'Nhân viên xếp xe máy trắng lên xe tải tại bãi',
  },
];
