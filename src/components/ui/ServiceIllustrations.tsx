import React from 'react';

// 1. Hàng lẻ, hàng ghép: Thùng carton và kiện hàng màu đỏ / nâu kraft
export const RetailGroupageIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Soft ground shadow */}
    <ellipse cx="100" cy="118" rx="85" ry="8" fill="rgba(15, 23, 42, 0.08)" />

    {/* Back Box 1 (Tan Kraft) */}
    <rect x="35" y="42" width="60" height="66" rx="4" fill="#E8D1B5" stroke="#D3B896" strokeWidth="1.5" />
    <line x1="65" y1="42" x2="65" y2="108" stroke="#D3B896" strokeWidth="1" />
    <rect x="45" y="52" width="22" height="14" rx="2" fill="#FFFFFF" opacity="0.8" />
    <line x1="48" y1="56" x2="62" y2="56" stroke="#94A3B8" strokeWidth="1" />
    <line x1="48" y1="60" x2="58" y2="60" stroke="#94A3B8" strokeWidth="1" />

    {/* Back Box 2 (Red Brand Box) */}
    <rect x="85" y="52" width="55" height="56" rx="4" fill="#D71920" stroke="#BF151B" strokeWidth="1.5" />
    <rect x="108" y="52" width="9" height="56" fill="#BF151B" opacity="0.3" />
    {/* White Shipping Label */}
    <rect x="92" y="62" width="22" height="16" rx="2" fill="#FFFFFF" />
    {/* QR code / barcode mockup */}
    <line x1="96" y1="66" x2="108" y2="66" stroke="#0F172A" strokeWidth="1" />
    <line x1="96" y1="70" x2="104" y2="70" stroke="#0F172A" strokeWidth="1" />

    {/* Front Left Box (Large Kraft) */}
    <rect x="55" y="68" width="54" height="42" rx="3" fill="#DDBB95" stroke="#C49F75" strokeWidth="1.5" />
    <rect x="55" y="86" width="54" height="6" fill="#C49F75" opacity="0.4" />

    {/* Front Right Box (Red Accent) */}
    <rect x="130" y="76" width="38" height="34" rx="3" fill="#C4131A" stroke="#9B0D13" strokeWidth="1.5" />
    <rect x="145" y="76" width="8" height="34" fill="#9B0D13" opacity="0.3" />
  </svg>
);

// 2. Hàng nguyên chuyến: Xe tải Tân Đại Phát thu nhỏ
export const FullTruckloadIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ground shadow */}
    <ellipse cx="100" cy="116" rx="90" ry="7" fill="rgba(15, 23, 42, 0.08)" />

    {/* Chassis */}
    <rect x="22" y="94" width="158" height="6" rx="1" fill="#1E293B" />

    {/* Red Container */}
    <rect x="58" y="42" width="122" height="54" rx="3" fill="#D71920" stroke="#B8141A" strokeWidth="1" />
    {/* Corrugated ribs */}
    {[...Array(6)].map((_, i) => (
      <line key={i} x1={72 + i * 18} y1="44" x2={72 + i * 18} y2="94" stroke="rgba(0, 0, 0, 0.12)" strokeWidth="1" />
    ))}
    {/* Container text */}
    <text x="119" y="69" fill="#FFFFFF" fontFamily="'Be Vietnam Pro', sans-serif" fontWeight="800" fontSize="11" textAnchor="middle">
      TÂN ĐẠI PHÁT
    </text>

    {/* White Cab */}
    <path
      d="M 18 94 L 18 68 Q 20 54 34 46 L 56 46 L 56 94 Z"
      fill="#FFFFFF"
      stroke="#CBD5E1"
      strokeWidth="1"
    />
    {/* Windshield */}
    <path d="M 24 66 Q 26 52 36 49 L 46 49 L 46 66 Z" fill="#1E293B" />
    {/* Window accent */}
    <rect x="49" y="49" width="6" height="17" fill="#334155" />
    {/* Red stripe on cab */}
    <rect x="18" y="78" width="38" height="4" fill="#D71920" />
    {/* Front Bumper */}
    <rect x="16" y="88" width="10" height="7" rx="1" fill="#1E293B" />

    {/* Mudguards */}
    <path d="M 28 98 A 9 9 0 0 1 48 98" stroke="#1E293B" strokeWidth="3" fill="none" />
    <path d="M 124 98 A 9 9 0 0 1 144 98" stroke="#1E293B" strokeWidth="3" fill="none" />
    <path d="M 144 98 A 9 9 0 0 1 164 98" stroke="#1E293B" strokeWidth="3" fill="none" />

    {/* Wheels */}
    {/* Front wheel */}
    <circle cx="38" cy="100" r="9" fill="#1E293B" />
    <circle cx="38" cy="100" r="5" fill="#CBD5E1" />
    {/* Rear wheels */}
    <circle cx="134" cy="100" r="9" fill="#1E293B" />
    <circle cx="134" cy="100" r="5" fill="#CBD5E1" />
    <circle cx="154" cy="100" r="9" fill="#1E293B" />
    <circle cx="154" cy="100" r="5" fill="#CBD5E1" />
  </svg>
);

// 3. Vận chuyển xe máy: Xe máy chằng buộc an toàn
export const MotorbikeIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ground shadow */}
    <ellipse cx="100" cy="116" rx="80" ry="7" fill="rgba(15, 23, 42, 0.08)" />

    {/* Rear Wheel */}
    <circle cx="62" cy="94" r="18" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
    <circle cx="62" cy="94" r="10" fill="#CBD5E1" />

    {/* Front Wheel */}
    <circle cx="145" cy="94" r="18" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
    <circle cx="145" cy="94" r="10" fill="#CBD5E1" />

    {/* Bike Frame & Engine */}
    <path d="M 62 94 L 92 84 L 118 84 L 145 94" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
    <rect x="85" y="84" width="22" height="15" rx="3" fill="#334155" />

    {/* Bike Red Body */}
    <path
      d="M 68 76 Q 88 64 108 66 L 126 58 L 138 68 L 112 78 Z"
      fill="#D71920"
      stroke="#B8141A"
      strokeWidth="1.5"
    />

    {/* Seat */}
    <path d="M 68 74 Q 85 70 102 74" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />

    {/* Handlebars & Mirror */}
    <line x1="124" y1="60" x2="132" y2="44" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
    <circle cx="128" cy="40" r="3" fill="#1E293B" />
    <line x1="126" y1="44" x2="138" y2="44" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

    {/* Front Fork */}
    <line x1="130" y1="56" x2="145" y2="94" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />

    {/* Protective Straps / Chằng buộc */}
    <line x1="52" y1="108" x2="88" y2="68" stroke="#E2E8F0" strokeWidth="2.5" strokeDasharray="3 2" />
    <line x1="156" y1="108" x2="120" y2="66" stroke="#E2E8F0" strokeWidth="2.5" strokeDasharray="3 2" />
  </svg>
);

// 4. Hàng cồng kềnh, siêu trường: Bó ống thép / kết cấu công nghiệp
export const OversizedCargoIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ground shadow */}
    <ellipse cx="100" cy="116" rx="85" ry="7" fill="rgba(15, 23, 42, 0.08)" />

    {/* Flatbed Trailer Base */}
    <rect x="25" y="92" width="150" height="7" rx="1.5" fill="#D71920" stroke="#B8141A" strokeWidth="1" />
    <rect x="35" y="99" width="130" height="4" fill="#1E293B" />

    {/* Trailer Wheels */}
    <circle cx="48" cy="104" r="8" fill="#1E293B" />
    <circle cx="48" cy="104" r="4" fill="#94A3B8" />
    <circle cx="145" cy="104" r="8" fill="#1E293B" />
    <circle cx="145" cy="104" r="4" fill="#94A3B8" />
    <circle cx="162" cy="104" r="8" fill="#1E293B" />
    <circle cx="162" cy="104" r="4" fill="#94A3B8" />

    {/* Wooden Stanchions / Chocks */}
    <rect x="42" y="84" width="8" height="9" fill="#92400E" />
    <rect x="148" y="84" width="8" height="9" fill="#92400E" />

    {/* Steel Pipes (Stack of 3 bottom, 2 top) */}
    {/* Bottom Pipe 1 */}
    <rect x="30" y="74" width="140" height="12" rx="3" fill="#94A3B8" stroke="#64748B" strokeWidth="1" />
    <circle cx="170" cy="80" r="5" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
    {/* Bottom Pipe 2 */}
    <rect x="30" y="61" width="140" height="12" rx="3" fill="#64748B" stroke="#475569" strokeWidth="1" />
    <circle cx="170" cy="67" r="5" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
    {/* Top Pipe */}
    <rect x="35" y="48" width="130" height="12" rx="3" fill="#94A3B8" stroke="#64748B" strokeWidth="1" />
    <circle cx="165" cy="54" r="5" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />

    {/* Heavy-duty Red Tie-down Straps */}
    <line x1="58" y1="46" x2="58" y2="92" stroke="#D71920" strokeWidth="3" />
    <line x1="135" y1="46" x2="135" y2="92" stroke="#D71920" strokeWidth="3" />
    {/* Ratchet buckles */}
    <rect x="56" y="66" width="5" height="6" rx="1" fill="#1E293B" />
    <rect x="133" y="66" width="5" height="6" rx="1" fill="#1E293B" />
  </svg>
);
