import React from 'react';
import { ArrowUpRight, ShieldCheck, Clock, Headphones, MapPin, Truck } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { COMPANY_DATA, ROUTE_INFO } from '../data/company';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <Container className="hero__container">
        <div className="hero__grid">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="hero__content">
            {/* Eyebrow badge */}
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-line" />
              <span className="hero__eyebrow-text">CÔNG TY TNHH KINH DOANH VẬN TẢI TÂN ĐẠI PHÁT</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero__title">
              Vận chuyển hàng hóa <br />
              <span className="hero__title--highlight">BẮC – NAM</span> uy tín, <br />
              nhanh chóng & an toàn
            </h1>

            {/* Subtitle */}
            <p className="hero__desc">
              Chuyên tuyến cố định Hà Nội ⇄ TP. Hồ Chí Minh với đội xe tải thùng kín 5T – 20T xuất bến hàng ngày.
              Minh bạch chi phí, bảo hiểm hàng hóa 100% và luôn đồng hành tận tâm trên mọi cung đường.
            </p>

            {/* Action Buttons & Hotline */}
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
                Xem dịch vụ vận tải
              </Button>
              {/* <a href={COMPANY_DATA.hotline} className="hero__hotline-link">
                <div className="hero__hotline-icon">
                  <Phone size={16} />
                </div>
                <div className="hero__hotline-text">
                  <span className="hero__hotline-label">Hotline điều vận 24/7</span>
                  <span className="hero__hotline-num">{COMPANY_DATA.hotlineDisplay}</span>
                </div>
              </a> */}
            </div>

            {/* Feature Checklist */}
            <div className="hero__badges">
              <div className="hero__badge-item">
                <div className="hero__badge-icon-box">
                  <ShieldCheck size={16} />
                </div>
                <span>Bảo hiểm 100%</span>
              </div>
              <div className="hero__badge-item">
                <div className="hero__badge-icon-box">
                  <Clock size={16} />
                </div>
                <span>Xe chạy hàng ngày</span>
              </div>
              <div className="hero__badge-item">
                <div className="hero__badge-icon-box">
                  <Headphones size={16} />
                </div>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>

            {/* Route Slogan Overlay */}
            <div className="hero__route-slogan">
              <p className="hero__route-slogan-title">{COMPANY_DATA.slogan}</p>
              <div className="hero__route-slogan-line">
                <span className="hero__route-point">{ROUTE_INFO.origin}</span>
                <span className="hero__route-divider" />
                <span className="hero__route-point">{ROUTE_INFO.destination}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Company Photography Showcase */}
          <div className="hero__real-showcase">
            <div className="hero__showcase-card">
              {/* Main Real Company Photo: Dàn xe tải & bãi xe thực tế */}
              <div className="hero__photo-container">
                <img
                  src="/images/gallery/bai-xe-tap-ket.jpg"
                  alt="Bãi tập kết xe máy và xe tải Tân Đại Phát"
                  className="hero__real-img"
                />

                {/* Top Overlay Badge */}
                <div className="hero__company-badge">
                  <img
                    src="/images/logo-transparent.png"
                    alt="Logo Tân Đại Phát"
                    className="hero__badge-logo"
                  />
                  <div className="hero__badge-info">
                    <strong className="hero__badge-brand">TÂN ĐẠI PHÁT</strong>
                    <span className="hero__badge-sub">BÃI TẬP KẾT THỰC TẾ</span>
                  </div>
                </div>

                {/* Verified Photo Tag at Bottom */}
                {/* <div className="hero__photo-caption">
                  <CheckCircle2 size={16} className="hero__caption-icon" />
                  <span>Ảnh chụp thực tế dàn xe tải & bãi xe Tân Đại Phát</span>
                </div> */}
              </div>

              {/* Floating Credential Cards */}
              <div className="hero__float-card hero__float-card--top">
                <div className="hero__float-icon hero__float-icon--green">
                  <ShieldCheck size={18} />
                </div>
                <div className="hero__float-text">
                  <strong>Bảo hiểm hàng hóa</strong>
                  <span>Hợp đồng & hóa đơn VAT đầy đủ</span>
                </div>
              </div>

              <div className="hero__float-card hero__float-card--bottom">
                <div className="hero__float-icon hero__float-icon--red">
                  <MapPin size={18} />
                </div>
                <div className="hero__float-text">
                  <strong>Kho bãi tập kết TP.HCM</strong>
                  <span>709 Lê Thị Riêng, P. Thới An, Q.12</span>
                </div>
              </div>

              {/* Fleet & Facilities Quick Strip */}
              <div className="hero__showcase-strip">
                <div className="hero__strip-item">
                  <Truck size={16} className="text-primary" />
                  <span>Xe tải 5T – 20T thùng kín</span>
                </div>
                <div className="hero__strip-divider" />
                <div className="hero__strip-item">
                  <Clock size={16} className="text-primary" />
                  <span>Tiến độ 48h - 60h Bắc ⇄ Nam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
