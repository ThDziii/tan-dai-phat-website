import type { NavItem } from '../types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'home', label: 'Trang chủ', href: '/' },
  { id: 'about', label: 'Về chúng tôi', href: '/about' },
  { id: 'services', label: 'Dịch vụ', href: '/services' },
  { id: 'gallery', label: 'Hình ảnh hoạt động', href: '/gallery' },
  { id: 'contact', label: 'Liên hệ', href: '/contact' },
];

export const FOOTER_SERVICES_LINKS = [
  { label: 'Hàng lẻ, hàng ghép', href: '/services#retail-groupage' },
  { label: 'Hàng nguyên chuyến', href: '/services#full-truckload' },
  { label: 'Vận chuyển xe máy', href: '/services#motorbike-transport' },
  { label: 'Hàng cồng kềnh, siêu trường', href: '/services#oversized-cargo' },
];

export const FOOTER_DISCOVER_LINKS = [
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Dịch vụ vận tải', href: '/services' },
  { label: 'Hình ảnh hoạt động', href: '/gallery' },
  { label: 'Liên hệ & Kho bãi', href: '/contact' },
];
