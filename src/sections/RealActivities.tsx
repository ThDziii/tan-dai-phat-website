import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Truck, Building2, PackageCheck, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
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
          {/* Item 1: Đội xe tải đường dài */}
          <div className="activity-item-card">
            <div className="activity-item-card__photo-box">
              <img
                src="/images/fleet-depot.jpg"
                alt="Dàn xe tải đường dài Tân Đại Phát"
                className="activity-item-card__real-img"
              />
              <div className="activity-item-card__live-indicator">
                <span className="activity-item-card__dot" />
                <span>Xuất bến hàng ngày</span>
              </div>
            </div>

            <div className="activity-item-card__content">
              <span className="activity-item-card__category">PHƯƠNG TIỆN VẬN TẢI</span>
              <h4 className="activity-item-card__title">Đội xe tải đường dài 5T – 20T</h4>
              <p className="activity-item-card__desc">
                Hệ thống xe tải thùng kín bảo ôn và bạt mui đời mới, kiểm tra kỹ thuật nghiêm ngặt
                trước mỗi chuyến đi xuyên Việt trên Quốc lộ 1A.
              </p>
              <ul className="activity-item-card__list">
                <li>✓ Xe xuất bến đều đặn 7 ngày trong tuần</li>
                <li>✓ Giám sát định vị GPS lộ trình 24/7</li>
                <li>✓ Tải trọng đa dạng từ 5 tấn đến 20 tấn</li>
              </ul>
            </div>
          </div>

          {/* Item 2: Kho bãi tập kết */}
          <div className="activity-item-card">
            <div className="activity-item-card__photo-box">
              <div className="activity-item-card__placeholder">
                <div className="activity-item-card__icon-circle">
                  <Building2 size={22} />
                </div>
                <span className="activity-item-card__badge-tag">
                  [Vị trí ảnh thực tế: Bãi xe & kho hàng hai đầu]
                </span>
                <span className="activity-item-card__hint">
                  Kho TP.HCM (709 Lê Thị Riêng)
                </span>
              </div>
              <div className="activity-item-card__live-indicator">
                <span className="activity-item-card__dot" />
                <span>Mở cửa 24/7</span>
              </div>
            </div>

            <div className="activity-item-card__content">
              <span className="activity-item-card__category">CƠ SỞ VẬT CHẤT</span>
              <h4 className="activity-item-card__title">Kho bãi tập kết hai đầu Bắc – Nam</h4>
              <p className="activity-item-card__desc">
                Mặt bằng bãi xe rộng rãi, thuận tiện xe container và xe tải lớn ra vào quay đầu,
                trang bị xe nâng hạ hàng nặng và camera an ninh 24/24.
              </p>
              <ul className="activity-item-card__list">
                <li>✓ Kho có mái che bảo quản hàng khô ráo</li>
                <li>✓ Trang bị xe nâng hạ hàng hóa chuyên dụng</li>
                <li>✓ Điểm trung chuyển thuận tiện giao nhận</li>
              </ul>
            </div>
          </div>

          {/* Item 3: Đóng gói và giao nhận */}
          <div className="activity-item-card">
            <div className="activity-item-card__photo-box">
              <div className="activity-item-card__placeholder">
                <div className="activity-item-card__icon-circle">
                  <PackageCheck size={22} />
                </div>
                <span className="activity-item-card__badge-tag">
                  [Vị trí ảnh thực tế: Bọc xe máy & bốc xếp hàng]
                </span>
                <span className="activity-item-card__hint">
                  Bọc xốp nổ 3 lớp, chằng buộc tăng đơ dù
                </span>
              </div>
              <div className="activity-item-card__live-indicator">
                <span className="activity-item-card__dot" />
                <span>Cẩn trọng tuyệt đối</span>
              </div>
            </div>

            <div className="activity-item-card__content">
              <span className="activity-item-card__category">QUY TRÌNH GIAO NHẬN</span>
              <h4 className="activity-item-card__title">Đóng gói bọc lót & kiểm đếm tận tâm</h4>
              <p className="activity-item-card__desc">
                Nhân viên cẩn thận bọc màng xốp nổ 3 lớp cho xe máy, rút xăng phòng cháy chữa cháy,
                đối soát tem nhãn mã hàng và ký nhận biên bản đầy đủ.
              </p>
              <ul className="activity-item-card__list">
                <li>✓ Bọc xốp nổ + bìa carton chống trầy xước</li>
                <li>✓ Dán tem mã vận đơn chính xác từng kiện</li>
                <li>✓ Giao nhận tận nơi theo yêu cầu của khách</li>
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
