import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { COMPANY_DATA } from '../data/company';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero">
        <Container>
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">KẾT NỐI VỚI CHÚNG TÔI</span>
            <h1 className="page-hero__title">
              Liên Hệ <span className="text-primary">{COMPANY_DATA.name}</span>
            </h1>
            <p className="page-hero__desc">
              Chúng tôi luôn sẵn sàng lắng nghe, tư vấn phương án vận chuyển tối ưu và báo giá nhanh chóng.
              Đội xe vẫn lăn bánh đều mỗi ngày để phục vụ bạn!
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Direct Contact Channels Section */}
      <section className="section contact-channels-section">
        <Container>
          <div className="contact-channels__grid">
            {/* Channel 1: Hotline Gọi Điện Trực Tiếp */}
            <div className="contact-card contact-card--highlight">
              <div className="contact-card__icon-box">
                <Phone size={28} />
              </div>
              <span className="contact-card__label">GỌI ĐIỆN TƯ VẤN NHANH</span>
              <h3 className="contact-card__title">Hotline 24/7</h3>
              <p className="contact-card__phone-number">{COMPANY_DATA.hotlineDisplay}</p>
              <p className="contact-card__desc">
                Nhân viên trực tổng đài hỗ trợ tư vấn tuyến đường, báo giá và tiếp nhận đơn hàng mọi lúc.
              </p>
              <Button
                href={COMPANY_DATA.hotline}
                variant="phone"
                size="md"
                fullWidth
                icon={<Phone size={16} />}
                iconPosition="left"
              >
                Bấm để gọi ngay
              </Button>
            </div>

            {/* Channel 2: Nhắn Tin Zalo */}
            <div className="contact-card">
              <div className="contact-card__icon-box contact-card__icon-box--zalo">
                <MessageCircle size={28} />
              </div>
              <span className="contact-card__label">KẾT NỐI ZALO</span>
              <h3 className="contact-card__title">Chat Zalo Báo Giá</h3>
              <p className="contact-card__phone-number">{COMPANY_DATA.hotlineDisplay}</p>
              <p className="contact-card__desc">
                Gửi hình ảnh kiện hàng, kích thước và yêu cầu cụ thể qua Zalo để nhận báo giá chi tiết.
              </p>
              <Button
                href={COMPANY_DATA.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                fullWidth
                icon={<MessageCircle size={16} />}
                iconPosition="left"
              >
                Nhắn tin qua Zalo
              </Button>
            </div>

            {/* Channel 3: Hộp Thư Email & Giờ Làm Việc */}
            <div className="contact-card">
              <div className="contact-card__icon-box">
                <Mail size={28} />
              </div>
              <span className="contact-card__label">HỘP THƯ ĐIỆN TỬ</span>
              <h3 className="contact-card__title">Email Doanh Nghiệp</h3>
              <p className="contact-card__email-text">{COMPANY_DATA.emailPlaceholder}</p>
              <p className="contact-card__desc">
                Dành cho khách hàng doanh nghiệp cần gửi hợp đồng vận tải nguyên chuyến, hồ sơ thầu.
              </p>
              <div className="contact-card__work-time">
                <Clock size={16} className="text-primary" />
                <span>Hoạt động: 24/7 (Cả ngày lễ & Chủ nhật)</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Two Depots / Warehouses Locations (Hà Nội & TP.HCM) */}
      <section className="section contact-depots-section">
        <Container>
          <div className="contact-depots__header">
            <span className="contact-depots__tag">HỆ THỐNG ĐIỂM GIAO NHẬN</span>
            <h2 className="contact-depots__title">Kho Bãi Hai Đầu Cầu Bắc – Nam</h2>
            <p className="contact-depots__desc">
              Vị trí kho bãi rộng rãi, thuận tiện xe tải lớn ra vào bốc dỡ hàng hóa.
            </p>
          </div>

          <div className="contact-depots__grid">
            {/* Depot Hanoi */}
            <div className="depot-card">
              <div className="depot-card__header">
                <div className="depot-card__pin-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="depot-card__region">ĐẦU CẦU MIỀN BẮC</span>
                  <h3 className="depot-card__title">Kho Bãi Hà Nội</h3>
                </div>
              </div>

              <div className="depot-card__content">
                <div className="depot-card__info-row">
                  <MapPin size={18} className="depot-card__info-icon" />
                  <span className="depot-card__address">
                    {COMPANY_DATA.addressHanoiPlaceholder}
                  </span>
                </div>
                <div className="depot-card__info-row">
                  <Truck size={18} className="depot-card__info-icon" />
                  <span>Tiếp nhận hàng lẻ, hàng ghép và xe tải xuất bến hàng ngày</span>
                </div>
                <div className="depot-card__info-row">
                  <ShieldCheck size={18} className="depot-card__info-icon" />
                  <span>Kho có mái che, trang bị xe nâng hạ và camera an ninh 24/7</span>
                </div>
              </div>

              <div className="depot-card__footer">
                <a href={COMPANY_DATA.hotline} className="depot-card__call-link">
                  <Phone size={14} />
                  <span>Liên hệ kho Hà Nội: {COMPANY_DATA.hotlineDisplay}</span>
                </a>
              </div>
            </div>

            {/* Depot HCMC */}
            <div className="depot-card">
              <div className="depot-card__header">
                <div className="depot-card__pin-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="depot-card__region">ĐẦU CẦU MIỀN NAM</span>
                  <h3 className="depot-card__title">Kho Bãi TP. Hồ Chí Minh</h3>
                </div>
              </div>

              <div className="depot-card__content">
                <div className="depot-card__info-row">
                  <MapPin size={18} className="depot-card__info-icon" />
                  <span className="depot-card__address">
                    {COMPANY_DATA.addressHcmPlaceholder}
                  </span>
                </div>
                <div className="depot-card__info-row">
                  <Truck size={18} className="depot-card__info-icon" />
                  <span>Điểm giao trả hàng tận nơi hoặc trả tại bãi xe trung tâm</span>
                </div>
                <div className="depot-card__info-row">
                  <ShieldCheck size={18} className="depot-card__info-icon" />
                  <span>Đầy đủ thiết bị bốc xếp chuyên dụng cho hàng nặng và cồng kềnh</span>
                </div>
              </div>

              <div className="depot-card__footer">
                <a href={COMPANY_DATA.hotline} className="depot-card__call-link">
                  <Phone size={14} />
                  <span>Liên hệ kho TP.HCM: {COMPANY_DATA.hotlineDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Shipping Guide Notes (No fake form) */}
      <section className="section contact-guide-section">
        <Container>
          <div className="contact-guide__card">
            <h3 className="contact-guide__title">Lưu ý chuẩn bị trước khi gửi hàng</h3>
            <div className="contact-guide__list">
              <div className="contact-guide__item">
                <CheckCircle2 size={20} className="contact-guide__icon" />
                <div>
                  <strong>Đối với hàng hóa thông thường:</strong> Quý khách nên đóng thùng carton,
                  dán băng dính chắc chắn và ghi rõ thông tin tên, số điện thoại người nhận.
                </div>
              </div>
              <div className="contact-guide__item">
                <CheckCircle2 size={20} className="contact-guide__icon" />
                <div>
                  <strong>Đối với xe máy:</strong> Vui lòng chuẩn bị bản sao cà vẹt xe (đăng ký xe),
                  chủ động rút bớt xăng để thuận tiện cho quá trình bọc lót chống trầy xước.
                </div>
              </div>
              <div className="contact-guide__item">
                <CheckCircle2 size={20} className="contact-guide__icon" />
                <div>
                  <strong>Đối với hàng hóa giá trị cao hoặc máy móc:</strong> Vui lòng khai báo giá trị
                  hàng để được tư vấn gói bảo hiểm chuyến hàng đầy đủ theo quy định.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
