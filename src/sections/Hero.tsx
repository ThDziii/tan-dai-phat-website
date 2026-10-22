import React from 'react';
import { ArrowUpRight, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { TruckIllustration } from '../components/ui/TruckIllustration';
import { COMPANY_DATA, ROUTE_INFO } from '../data/company';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      {/* Background Landscape Elements (Full-Width Sky, Clouds, Sun, Mountains) */}
      <div className="hero__background" aria-hidden="true">
        {/* Sun */}
        <div className="hero__sun" />

        {/* Clouds */}
        <div className="hero__cloud hero__cloud--1" />
        <div className="hero__cloud hero__cloud--2" />

        {/* Distant Mountain Peaks */}
        <svg
          className="hero__mountains"
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
          {/* Layer 2: Midground Soft Green Rolling Hills */}
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
            {/* Tree 1 */}
            <path d="M 68 220 L 63 234 L 73 234 Z M 68 228 L 60 244 L 76 244 Z" />
            <rect x="67" y="244" width="2" height="4" fill="#2C4F48" />
            {/* Tree 2 */}
            <path d="M 108 208 L 103 222 L 113 222 Z M 108 216 L 100 232 L 116 232 Z" />
            <rect x="107" y="232" width="2" height="4" fill="#2C4F48" />
            {/* Tree 3 */}
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
        <div className="hero__road">
          <div className="hero__road-strip">
            <div className="hero__road-lines" />
          </div>
        </div>
      </div>

      {/* Main Hero Content (Aligned with Container) */}
      <Container className="hero__container">
        <div className="hero__grid">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="hero__content">
            {/* Eyebrow badge */}
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-line" />
              <span className="hero__eyebrow-text">KẾT NỐI HAI MIỀN - TRỌN VẸN NIỀM TIN</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero__title">
              Vận chuyển hàng hóa <br />
              <span className="hero__title--highlight">BẮC – NAM</span> an toàn, <br />
              nhanh chóng
            </h1>

            {/* Subtitle */}
            <p className="hero__desc">
              Từ kiện hàng nhỏ đến chuyến hàng lớn, {COMPANY_DATA.name} luôn đồng hành để
              hàng hóa đến nơi an toàn, đúng hẹn.
            </p>

            {/* Action Buttons */}
            <div className="hero__actions">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowUpRight size={18} />}
              >
                Nhận báo giá ngay
              </Button>
              <Button
                to="/services"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRight size={18} />}
              >
                Tìm hiểu thêm
              </Button>
            </div>

            {/* Feature Checklist */}
            <div className="hero__badges">
              <div className="hero__badge-item">
                <div className="hero__badge-icon-box">
                  <ShieldCheck size={16} />
                </div>
                <span>An toàn</span>
              </div>
              <div className="hero__badge-item">
                <div className="hero__badge-icon-box">
                  <Clock size={16} />
                </div>
                <span>Đúng hẹn</span>
              </div>
              <div className="hero__badge-item">
                <div className="hero__badge-icon-box">
                  <Headphones size={16} />
                </div>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>

            {/* Route Slogan Overlay on Hill/Road (Figma Element) */}
            <div className="hero__route-slogan">
              <p className="hero__route-slogan-title">{COMPANY_DATA.slogan}</p>
              <div className="hero__route-slogan-line">
                <span className="hero__route-point">{ROUTE_INFO.origin}</span>
                <span className="hero__route-divider" />
                <span className="hero__route-point">{ROUTE_INFO.destination}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Tân Đại Phát Truck directly on the road */}
          <div className="hero__truck-showcase">
            <div className="hero__truck-box">
              <TruckIllustration className="hero__truck-svg" facing="left" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
