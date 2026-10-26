import React from 'react';
import { MessageSquare, ClipboardCheck, Truck, PackageCheck } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { TruckIllustration } from '../components/ui/TruckIllustration';
import { PROCESS_STEPS } from '../data/services';
import { COMPANY_DATA, ROUTE_INFO } from '../data/company';
import './Process.css';

export const Process: React.FC = () => {
  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'phone-call':
        return <MessageSquare size={22} className="process-step__corner-icon" />;
      case 'clipboard-check':
        return <ClipboardCheck size={22} className="process-step__corner-icon" />;
      case 'truck':
        return <Truck size={22} className="process-step__corner-icon" />;
      case 'package-check':
        return <PackageCheck size={22} className="process-step__corner-icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="process-section" id="process">
      {/* Background Landscape Elements: Sky, Sun, Clouds, Mountains & Highway Road */}
      <div className="process__background" aria-hidden="true">
        {/* Sun */}
        <div className="process__sun" />

        {/* Clouds */}
        <div className="process__cloud process__cloud--1" />
        <div className="process__cloud process__cloud--2" />

        {/* Distant Mountains & Pine Hills */}
        <svg
          className="process__mountains"
          viewBox="0 0 1440 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Distant Pale Blue Mountains */}
          <path
            d="M 0 240 L 0 170 L 160 120 L 320 180 L 480 110 L 640 170 L 780 130 L 960 190 L 1120 120 L 1280 180 L 1440 140 L 1440 280 Z"
            fill="#D5E7ED"
          />
          {/* Layer 2: Midground Rolling Hills */}
          <path
            d="M 0 280 L 0 200 Q 220 160 480 190 T 960 210 Q 1200 170 1440 220 L 1440 280 Z"
            fill="#A3CAD1"
          />
          {/* Layer 3: Closer Teal-Green Hill Slope */}
          <path
            d="M 0 280 L 0 220 Q 350 170 750 230 T 1440 240 L 1440 280 Z"
            fill="#8DB7BE"
          />

          {/* Pine Trees on Left Hill */}
          <g fill="#37685F">
            <path d="M 68 220 L 63 234 L 73 234 Z M 68 228 L 60 244 L 76 244 Z" />
            <rect x="67" y="244" width="2" height="4" fill="#2C4F48" />
            <path d="M 108 208 L 103 222 L 113 222 Z M 108 216 L 100 232 L 116 232 Z" />
            <rect x="107" y="232" width="2" height="4" fill="#2C4F48" />
            <path d="M 148 218 L 143 232 L 153 232 Z M 148 226 L 140 242 L 156 242 Z" />
            <rect x="147" y="242" width="2" height="4" fill="#2C4F48" />

            {/* Trees on Far Right */}
            <path d="M 1320 226 L 1315 240 L 1325 240 Z M 1320 234 L 1312 250 L 1328 250 Z" />
            <rect x="1319" y="250" width="2" height="4" fill="#2C4F48" />
            <path d="M 1360 216 L 1355 230 L 1365 230 Z M 1360 224 L 1352 240 L 1368 240 Z" />
            <rect x="1359" y="240" width="2" height="4" fill="#2C4F48" />
          </g>
        </svg>

        {/* Foreground Highway Road */}
        <div className="process__road">
          <div className="process__road-strip">
            <div className="process__road-lines" />
          </div>
        </div>
      </div>

      {/* Main Content: Floating Steps & Moving Truck */}
      <Container className="process__container">
        <SectionTitle
          eyebrow="QUY TRÌNH ĐƠN GIẢN"
          title="Gửi hàng nhẹ tênh, an tâm cả hành trình"
          subtitle="Chỉ 4 bước để kết nối hàng hóa từ Bắc vào Nam."
          align="center"
        />

        {/* 4 Process Cards floating over the landscape */}
        <div className="process__grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="process-step">
              <div className="process-step__header">
                <span className="process-step__number">{step.step}</span>
                {renderStepIcon(step.iconName)}
              </div>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Highway Truck Driving Scene directly along the road */}
        <div className="process__road-showcase">
          <div className="process__route-pill">
            <span className="process__pulse-dot" />
            <span className="process__route-slogan-text">{COMPANY_DATA.slogan}</span>
            <span className="process__route-divider" />
            <span className="process__route-cities">
              {ROUTE_INFO.origin} ⇄ {ROUTE_INFO.destination} (48h – 60h)
            </span>
          </div>

          <div className="process__truck-box">
            <TruckIllustration className="process__truck-svg" facing="left" />
          </div>
        </div>
      </Container>
    </section>
  );
};
