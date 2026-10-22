import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, HeartHandshake, FileCheck, ArrowRight, Phone, CheckCircle2, User } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { TruckIllustration } from '../components/ui/TruckIllustration';
import { COMPANY_DATA } from '../data/company';
import { DIRECTOR_DATA, COMPANY_STORY, CORE_VALUES, COMPANY_MILESTONES } from '../data/about';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  const renderValueIcon = (num: string) => {
    switch (num) {
      case '01':
        return <ShieldCheck size={28} className="about-value__icon" />;
      case '02':
        return <Clock size={28} className="about-value__icon" />;
      case '03':
        return <HeartHandshake size={28} className="about-value__icon" />;
      case '04':
        return <FileCheck size={28} className="about-value__icon" />;
      default:
        return <CheckCircle2 size={28} className="about-value__icon" />;
    }
  };

  return (
    <div className="about-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero">
        <Container>
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">CÂU CHUYỆN THƯƠNG HIỆU</span>
            <h1 className="page-hero__title">
              Về Chúng Tôi – <span className="text-primary">{COMPANY_DATA.name}</span>
            </h1>
            <p className="page-hero__desc">
              Hành trình kết nối hai miền Nam - Bắc bằng sự tận tâm, an toàn và chuyên nghiệp.
              Xe vẫn lăn bánh đều mỗi ngày để mọi chuyến hàng cập bến đúng hẹn!
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Company Introduction & Story */}
      <section className="section about-story">
        <Container>
          <div className="about-story__grid">
            <div className="about-story__text">
              <span className="about-story__tag">KẾT NỐI HAI MIỀN</span>
              <h2 className="about-story__heading">{COMPANY_STORY.headline}</h2>
              {COMPANY_STORY.paragraphs.map((p, idx) => (
                <p key={idx} className="about-story__p">
                  {p}
                </p>
              ))}

              <div className="about-story__stats">
                {COMPANY_MILESTONES.map((item, idx) => (
                  <div key={idx} className="about-stat">
                    <span className="about-stat__value">{item.value}</span>
                    <span className="about-stat__label">{item.label}</span>
                    <span className="about-stat__sub">{item.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-story__visual">
              <div className="about-story__truck-card">
                <TruckIllustration className="about-story__truck-svg" facing="left" />
                <div className="about-story__badge">
                  <span>Vận chuyển an toàn – Trọn niềm tin</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Director Profile Section */}
      <section className="section about-director">
        <Container>
          <div className="about-director__card">
            <div className="about-director__photo-col">
              {/* Director Portrait Photo */}
              <div className="about-director__photo-frame">
                {DIRECTOR_DATA.imageUrl ? (
                  <img
                    src={DIRECTOR_DATA.imageUrl}
                    alt={`${DIRECTOR_DATA.namePlaceholder} - ${DIRECTOR_DATA.titlePlaceholder}`}
                    className="about-director__img"
                  />
                ) : (
                  <div className="about-director__avatar-placeholder">
                    <User size={84} className="about-director__user-icon" />
                    <span className="about-director__note-badge">
                      {DIRECTOR_DATA.imagePlaceholderNote}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="about-director__info-col">
              <span className="about-director__tag">THÔNG ĐIỆP BAN LÃNH ĐẠO</span>
              <h2 className="about-director__name">{DIRECTOR_DATA.namePlaceholder}</h2>
              <p className="about-director__role">{DIRECTOR_DATA.titlePlaceholder}</p>

              <blockquote className="about-director__quote">
                {DIRECTOR_DATA.message}
              </blockquote>

              <div className="about-director__signature">
                <div className="about-director__signature-line" />
                <span className="about-director__signature-text">Tân Đại Phát Logistics</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Real Fleet & Operations Showcase */}
      <section className="section about-activities">
        <Container>
          <SectionTitle
            eyebrow="HÌNH ẢNH THỰC TẾ"
            title="Đội xe, Bãi xe & Đội ngũ nhân sự"
            subtitle="Các hoạt động vận hành thường nhật của Tân Đại Phát tại hai đầu Bắc - Nam."
            align="center"
          />

          <div className="about-activities__grid">
            <div className="activity-card">
              <div className="activity-card__photo-placeholder">
                <div className="activity-card__badge">[Ảnh thực tế dàn xe tải đường dài]</div>
              </div>
              <div className="activity-card__body">
                <h3 className="activity-card__title">Đội xe tải đời mới</h3>
                <p className="activity-card__desc">
                  Dàn xe tải thùng kín, bạt mui từ 5 đến 20 tấn được kiểm tra kỹ thuật định kỳ trước mỗi chuyến đi.
                </p>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-card__photo-placeholder">
                <div className="activity-card__badge">[Ảnh thực tế kho bãi tập kết Hà Nội & TP.HCM]</div>
              </div>
              <div className="activity-card__body">
                <h3 className="activity-card__title">Hệ thống kho bãi hai đầu</h3>
                <p className="activity-card__desc">
                  Kho bãi rộng rãi, trang bị đầy đủ xe nâng, mái che và camera an ninh 24/7 bảo vệ hàng hóa tuyệt đối.
                </p>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-card__photo-placeholder">
                <div className="activity-card__badge">[Ảnh thực tế nhân viên đóng gói & xếp dỡ]</div>
              </div>
              <div className="activity-card__body">
                <h3 className="activity-card__title">Đội ngũ bốc xếp tận tâm</h3>
                <p className="activity-card__desc">
                  Quy trình xếp hàng khoa học, phân chia hàng nặng dưới, hàng nhẹ trên, chằng buộc chống xô lệch.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Core Values & Company Orientation */}
      <section className="section about-values">
        <Container>
          <SectionTitle
            eyebrow="ĐỊNH HƯỚNG & GIÁ TRỊ CỐT LÕI"
            title="Giá trị tạo nên sự tin tưởng bền lâu"
            subtitle="Những nguyên tắc bất di bất dịch trong từng dặm đường của Tân Đại Phát."
            align="center"
          />

          <div className="about-values__grid">
            {CORE_VALUES.map((val) => (
              <div key={val.number} className="about-value-card">
                <div className="about-value-card__header">
                  <div className="about-value-card__icon-box">
                    {renderValueIcon(val.number)}
                  </div>
                  <span className="about-value-card__number">{val.number}</span>
                </div>
                <h3 className="about-value-card__title">{val.title}</h3>
                <p className="about-value-card__desc">{val.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Call to Action at Bottom */}
      <section className="section about-cta">
        <Container>
          <div className="about-cta__card">
            <div className="about-cta__content">
              <span className="about-cta__tag">ĐỒNG HÀNH CÙNG TÂN ĐẠI PHÁT</span>
              <h2 className="about-cta__heading">
                Bạn cần tìm đối tác vận chuyển Bắc – Nam uy tín?
              </h2>
              <p className="about-cta__desc">
                Liên hệ ngay với chúng tôi để nhận tư vấn phương án vận chuyển tối ưu và báo giá
                chi tiết trong vòng 15 phút.
              </p>
              <div className="about-cta__buttons">
                <Button
                  href={COMPANY_DATA.hotline}
                  variant="phone"
                  size="lg"
                  icon={<Phone size={18} />}
                  iconPosition="left"
                >
                  {COMPANY_DATA.hotlineDisplay}
                </Button>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
                    Liên hệ với chúng tôi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
