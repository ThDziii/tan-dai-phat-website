import React from 'react';

interface TruckIllustrationProps {
  className?: string;
  facing?: 'left' | 'right';
  animated?: boolean;
}

export const TruckIllustration: React.FC<TruckIllustrationProps> = ({
  className = '',
  facing = 'left',
  animated = true,
}) => {
  return (
    <svg
      viewBox="0 0 680 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`truck-svg ${animated ? 'truck-svg--driving' : ''} ${className}`}
      style={{
        transform: facing === 'right' ? 'scaleX(-1)' : 'none',
        overflow: 'visible',
      }}
    >
      <defs>
        {/* Soft ground shadow */}
        <filter id="truckGroundShadow" x="-10%" y="0%" width="120%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
        </filter>

        {/* Headlight beam gradient */}
        <linearGradient id="headlightBeam" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="rgba(254, 240, 138, 0.45)" />
          <stop offset="60%" stopColor="rgba(254, 240, 138, 0.15)" />
          <stop offset="100%" stopColor="rgba(254, 240, 138, 0)" />
        </linearGradient>

        {/* Gradients */}
        <linearGradient id="containerRedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D71920" />
          <stop offset="100%" stopColor="#C0141A" />
        </linearGradient>

        <linearGradient id="cabFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        <linearGradient id="windowGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        <linearGradient id="wheelRimFigma" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        <style>
          {`
            @keyframes wheelRotation {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            @keyframes truckSuspensionBounce {
              0% { transform: translateY(0px) rotate(0deg); }
              20% { transform: translateY(-2px) rotate(-0.15deg); }
              40% { transform: translateY(1px) rotate(0.1deg); }
              60% { transform: translateY(-1.5px) rotate(-0.1deg); }
              80% { transform: translateY(0.5px) rotate(0.05deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            @keyframes windStreak {
              0% { stroke-dashoffset: 60; opacity: 0; }
              30% { opacity: 0.7; }
              70% { opacity: 0.7; }
              100% { stroke-dashoffset: -60; opacity: 0; }
            }
            @keyframes shadowPulse {
              0%, 100% { rx: 315; ry: 8; opacity: 0.45; }
              50% { rx: 320; ry: 9; opacity: 0.55; }
            }
            .truck-svg--driving .truck-wheel-spin {
              animation: wheelRotation 0.45s linear infinite;
              transform-box: fill-box;
              transform-origin: center;
            }
            .truck-svg--driving .truck-body-motion {
              animation: truckSuspensionBounce 0.9s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
              transform-origin: bottom center;
            }
            .truck-svg--driving .truck-ground-shadow {
              animation: shadowPulse 0.9s ease-in-out infinite;
            }
            .truck-svg--driving .truck-wind-streak-1 {
              stroke-dasharray: 40 40;
              animation: windStreak 0.7s linear infinite;
            }
            .truck-svg--driving .truck-wind-streak-2 {
              stroke-dasharray: 30 50;
              animation: windStreak 0.85s linear infinite 0.2s;
            }
            .truck-svg--driving .truck-wind-streak-3 {
              stroke-dasharray: 35 45;
              animation: windStreak 0.65s linear infinite 0.4s;
            }
          `}
        </style>
      </defs>

      {/* Ground Shadow */}
      <ellipse
        cx="355"
        cy="242"
        rx="315"
        ry="8"
        fill="rgba(15, 23, 42, 0.45)"
        filter="url(#truckGroundShadow)"
        className="truck-ground-shadow"
      />

      {/* Forward Headlight Light Beam Cast on Road */}
      <polygon
        points="52,174 -70,160 -100,240 50,202"
        fill="url(#headlightBeam)"
        opacity="0.85"
      />

      {/* Wind Aerodynamic Streaks (Visualizing highway speed) */}
      <line x1="60" y1="62" x2="-40" y2="62" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="truck-wind-streak-1" />
      <line x1="190" y1="46" x2="60" y2="46" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="truck-wind-streak-2" />
      <line x1="640" y1="120" x2="720" y2="120" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" className="truck-wind-streak-3" />

      {/* --- SUSPENSION-BOUNCING TRUCK BODY GROUP --- */}
      <g className="truck-body-motion">
        {/* --- CHASSIS & LOWER FRAME --- */}
        <rect x="75" y="196" width="555" height="12" rx="2" fill="#1E293B" />
        {/* Fuel tank & battery boxes */}
        <rect x="175" y="194" width="75" height="18" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="1" />
        <rect x="260" y="194" width="55" height="18" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="1" />

        {/* --- RED CARGO CONTAINER --- */}
        <g id="figmaContainer">
          {/* Main Cargo Box */}
          <rect
            x="192"
            y="56"
            width="442"
            height="142"
            rx="4"
            fill="url(#containerRedGrad)"
          />

          {/* Corrugated Vertical Ribs */}
          {[...Array(26)].map((_, i) => (
            <line
              key={i}
              x1={208 + i * 16.5}
              y1="58"
              x2={208 + i * 16.5}
              y2="196"
              stroke="rgba(0, 0, 0, 0.12)"
              strokeWidth="1.2"
            />
          ))}

          {/* Top Edge Highlight */}
          <line x1="194" y1="58" x2="632" y2="58" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />

          {/* White Text on Container */}
          <text
            x="413"
            y="126"
            fill="#FFFFFF"
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight="900"
            fontSize="35"
            letterSpacing="0.8"
            textAnchor="middle"
          >
            TÂN ĐẠI PHÁT
          </text>
          <text
            x="413"
            y="150"
            fill="#FFFFFF"
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight="600"
            fontSize="12.5"
            letterSpacing="2"
            textAnchor="middle"
            opacity="0.95"
          >
            VẬN CHUYỂN NIỀM TIN
          </text>

          {/* Container Rear Frame/Hinges */}
          <rect x="628" y="60" width="6" height="134" rx="2" fill="#B91319" />
        </g>

        {/* --- 2.5D WHITE CABIN (FIDELITY TO FIGMA) --- */}
        <g id="figmaCab">
          {/* Cab Main Body (Side Profile) */}
          <path
            d="M 85 200 
               L 85 110 
               Q 88 78 120 70 
               L 192 70 
               L 192 200 
               Z"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />

          {/* Cab Front Face (Perspective angle facing left) */}
          <path
            d="M 54 195 
               L 54 125 
               Q 57 88 85 75 
               L 120 70 
               L 85 110 
               L 85 200 
               L 54 195 
               Z"
            fill="url(#cabFrontGrad)"
            stroke="#CBD5E1"
            strokeWidth="1.2"
          />

          {/* Front Windshield (Angled 2.5D) */}
          <path
            d="M 62 124 
               Q 66 92 84 82 
               L 114 78 
               L 84 108 
               Z"
            fill="url(#windowGlassGrad)"
          />

          {/* Side Window */}
          <path
            d="M 96 108 
               L 118 78 
               L 178 78 
               L 178 124 
               L 96 124 
               Z"
            fill="url(#windowGlassGrad)"
          />

          {/* Side Window Pillar */}
          <line x1="120" y1="78" x2="102" y2="124" stroke="#CBD5E1" strokeWidth="2.5" />

          {/* Window Reflection Stripe */}
          <path
            d="M 130 82 
               L 145 82 
               L 132 120 
               L 118 120 
               Z"
            fill="rgba(255, 255, 255, 0.2)"
          />

          {/* Side Mirror */}
          <rect x="52" y="100" width="6" height="26" rx="2" fill="#0F172A" />
          <line x1="58" y1="108" x2="68" y2="108" stroke="#0F172A" strokeWidth="2.5" />

          {/* Door Seam */}
          <path d="M 124 124 L 124 192 L 186 192 L 186 124" stroke="#E2E8F0" strokeWidth="1.2" fill="none" />

          {/* Door Handle */}
          <rect x="130" y="140" width="12" height="4" rx="1.5" fill="#64748B" />

          {/* "TDP" Red Branding on Door */}
          <text
            x="155"
            y="166"
            fill="#D71920"
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontWeight="900"
            fontSize="15"
            letterSpacing="1"
            textAnchor="middle"
          >
            TDP
          </text>

          {/* Front Bumper & Red Horizontal Stripe */}
          <path
            d="M 52 168 
               L 98 168 
               L 96 178 
               L 52 178 
               Z"
            fill="#D71920"
          />

          {/* Lower Front Bumper (Black) */}
          <path
            d="M 50 186 
               L 88 186 
               L 86 204 
               L 50 200 
               Z"
            fill="#1E293B"
          />

          {/* Glowing Yellow Headlight & Fog Light */}
          <rect x="53" y="188" width="14" height="6" rx="1.5" fill="#FEF08A" stroke="#F59E0B" strokeWidth="0.8" />
          <circle cx="58" cy="191" r="5" fill="#FDE047" opacity="0.6" filter="blur(2px)" />
        </g>
      </g>

      {/* --- WHEELS WITH FAST ROTATING RIMS (HIGH SPEED ROLLING) --- */}
      {[
        { cx: 132, cy: 206, key: 'w-front' },
        { cx: 442, cy: 206, key: 'w-rear-1' },
        { cx: 504, cy: 206, key: 'w-rear-2' },
        { cx: 566, cy: 206, key: 'w-rear-3' },
      ].map(({ cx, cy, key }) => (
        <g key={key} transform={`translate(${cx}, ${cy})`}>
          {/* Static Tire Outer Rubber & Mudguard Shadow */}
          <circle cx="0" cy="0" r="24" fill="#1E293B" />
          <circle cx="0" cy="0" r="21" stroke="#0F172A" strokeWidth="2" fill="#334155" />

          {/* FAST ROTATING RIM & DAISY HOLES */}
          <g className="truck-wheel-spin">
            {/* Silver Rim */}
            <circle cx="0" cy="0" r="15" fill="url(#wheelRimFigma)" />
            {/* 8 Circular Holes (Daisy Pattern Spinning) */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <circle
                key={deg}
                cx={10.5 * Math.cos((deg * Math.PI) / 180)}
                cy={10.5 * Math.sin((deg * Math.PI) / 180)}
                r="2.2"
                fill="#1E293B"
              />
            ))}
            {/* Center Axle Hub */}
            <circle cx="0" cy="0" r="7" fill="#1E293B" />
            <circle cx="0" cy="0" r="3.5" fill="#F1F5F9" />
          </g>
        </g>
      ))}
    </svg>
  );
};
