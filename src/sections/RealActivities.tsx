import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Truck, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { COMPANY_DATA } from '../data/company';
import { DIRECTOR_DATA } from '../data/about';
import './RealActivities.css';

export const RealActivities: React.FC = () => {
  return (
    <section className="section real-activities-section" id="real-activities">
      <Container>
        <SectionTitle
          eyebrow="HÌNH ẢNH HOẠT ĐỘNG THỰC TẾ"
          title="Người thật – Việc thật – Doanh nghiệp uy tín"
          subtitle="Tân Đại Phát minh bạch thông tin điều hành, cơ sở kho bãi và phương tiện vận chuyển để quý khách hoàn toàn an tâm khi gửi gắm hàng hóa."
          align="center"
        />

        {/* 1. Main Spotlight: Real Director & Office Management */}
        <div className="real-activities__spotlight">
          <div className="real-activities__director-card">
            {/* Real Director Photo - Fills entire left column */}
            <div className="real-activities__photo-wrapper">
              <img
                src={DIRECTOR_DATA.imageUrl}
                alt={`${DIRECTOR_DATA.namePlaceholder} - ${DIRECTOR_DATA.titlePlaceholder}`}
                className="real-activities__director-img"
              />
              <div className="real-activities__verified-pill">
                <CheckCircle2 size={16} className="real-activities__pill-icon" />
                <span>Ảnh chụp thực tế tại văn phòng Tân Đại Phát</span>
              </div>
            </div>

            {/* Director Information & Company Credibility */}
            <div className="real-activities__info-col">
              <div className="real-activities__badge-row">
                <span className="real-activities__tag">BAN ĐIỀU HÀNH DOANH NGHIỆP</span>
                <span className="real-activities__status-badge">✓ Đã xác thực thực tế</span>
              </div>

              <h3 className="real-activities__director-name">{DIRECTOR_DATA.namePlaceholder}</h3>
              <p className="real-activities__director-role">{DIRECTOR_DATA.titlePlaceholder}</p>

              <blockquote className="real-activities__quote">
                “Tân Đại Phát lấy chữ TÍN và sự MINH BẠCH làm kim chỉ nam. Từ hàng lẻ ghép chuyến
                đến nguyên xe bao tuyến Bắc – Nam, mỗi đơn hàng đều có hợp đồng, biên bản giao nhận
                rõ ràng và bảo hiểm trách nhiệm 100%. Quý khách trao niềm tin, chúng tôi trao sự an tâm tuyệt đối.”
              </blockquote>

              <div className="real-activities__credentials-grid">
                <div className="real-activities__cred-item">
                  <MapPin size={16} className="text-primary" />
                  <div>
                    <strong>Trụ sở kho bãi:</strong>
                    <span>709 Lê Thị Riêng, P. Thới An, Q.12, TP.HCM</span>
                  </div>
                </div>
                <div className="real-activities__cred-item">
                  <Truck size={16} className="text-primary" />
                  <div>
                    <strong>Chuyên tuyến:</strong>
                    <span>Hà Nội ⇄ TP. Hồ Chí Minh (Chạy cố định hàng ngày)</span>
                  </div>
                </div>
                <div className="real-activities__cred-item">
                  <ShieldCheck size={16} className="text-primary" />
                  <div>
                    <strong>Cam kết trách nhiệm:</strong>
                    <span>Hợp đồng vận tải, biên bản bàn giao, bảo hiểm hàng hóa</span>
                  </div>
                </div>
              </div>

              <div className="real-activities__actions">
                <Link to="/about" className="real-activities__btn-outline">
                  <span>Tìm hiểu thêm về công ty</span>
                  <ArrowRight size={16} />
                </Link>
                <a href={COMPANY_DATA.hotline} className="real-activities__btn-phone">
                  <Phone size={16} />
                  <span>Gọi trực tiếp: {COMPANY_DATA.hotlineDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Three Operational Pillars (Fleet, Warehouse, Operations) */}
        <div className="real-activities__grid">
          {/* Item 1: Bãi tập kết */}
          <div className="activity-item-card">
            <div className="activity-item-card__photo-box">
              <img
                src="/images/gallery/bai-xe-tap-ket.jpg"
                alt="Bãi tập kết xe máy và xe tải dưới mái che"
                className="activity-item-card__real-img"
              />
              <div className="activity-item-card__live-indicator">
                <span className="activity-item-card__dot" />
                <span>Xuất bến hàng ngày</span>
              </div>
            </div>

            <div className="activity-item-card__content">
              <span className="activity-item-card__category">BÃI TẬP KẾT</span>
              <h4 className="activity-item-card__title">Xe máy và xe tải sẵn sàng xuất bến</h4>
              <p className="activity-item-card__desc">
                Hàng xe máy được xếp dưới mái che, cạnh xe thùng bạt trước mỗi chuyến đi.
              </p>
              <ul className="activity-item-card__list">
                <li>✓ Bãi có mái che, xe ra vào thuận tiện</li>
                <li>✓ Xe máy xếp hàng chờ lên thùng</li>
                <li>✓ Xe tải tập kết ngay tại bãi</li>
              </ul>
            </div>
          </div>

          {/* Item 2: Kho bãi tập kết */}
          <div className="activity-item-card">
            <div className="activity-item-card__photo-box">
              <img
                src="/images/gallery/kho-xe-da-boc.jpg"
                alt="Xe máy đã bọc nilon trong kho mái che"
                className="activity-item-card__real-img"
              />
              <div className="activity-item-card__live-indicator">
                <span className="activity-item-card__dot" />
                <span>Mở cửa 24/7</span>
              </div>
            </div>

            <div className="activity-item-card__content">
              <span className="activity-item-card__category">CƠ SỞ VẬT CHẤT</span>
              <h4 className="activity-item-card__title">Kho bảo quản xe và hàng hóa</h4>
              <p className="activity-item-card__desc">
                Xe máy được bọc nilon và xếp trong kho mái che, cùng hàng tiêu dùng chờ lên xe.
              </p>
              <ul className="activity-item-card__list">
                <li>✓ Kho có mái che, hàng khô ráo</li>
                <li>✓ Xe máy bọc kín trước khi xuất</li>
                <li>✓ Hàng hóa xếp riêng, dễ kiểm đếm</li>
              </ul>
            </div>
          </div>

          {/* Item 3: Đóng gói và giao nhận */}
          <div className="activity-item-card">
            <div className="activity-item-card__photo-box">
              <img
                src="/images/gallery/boc-xe-may.jpg"
                alt="Nhân viên bọc xốp và kiểm tra xe máy"
                className="activity-item-card__real-img"
              />
              <div className="activity-item-card__live-indicator">
                <span className="activity-item-card__dot" />
                <span>Cẩn trọng tuyệt đối</span>
              </div>
            </div>

            <div className="activity-item-card__content">
              <span className="activity-item-card__category">QUY TRÌNH GIAO NHẬN</span>
              <h4 className="activity-item-card__title">Đóng gói bọc lót & kiểm đếm tận tâm</h4>
              <p className="activity-item-card__desc">
                Nhân viên bọc xốp nổ cho xe máy và đối soát chứng từ ngay tại kho trước khi xếp hàng lên xe.
              </p>
              <ul className="activity-item-card__list">
                <li>✓ Bọc xốp nổ chống trầy xước</li>
                <li>✓ Kiểm tra xe trước khi lên thùng</li>
                <li>✓ Đối chiếu vận đơn từng kiện hàng</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Link to Gallery Page */}
        <div className="real-activities__bottom-bar">
          <Link to="/gallery" className="real-activities__gallery-link">
            <span>Xem trọn bộ thư viện hình ảnh đội xe & bãi xe Tân Đại Phát</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
};
