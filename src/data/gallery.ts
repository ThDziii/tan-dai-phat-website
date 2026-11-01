import type { GalleryItem } from '../types';

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'Tất cả hình ảnh' },
  { id: 'warehouse', label: 'Kho bãi tập kết' },
  { id: 'operation', label: 'Hoạt động giao nhận' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
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
