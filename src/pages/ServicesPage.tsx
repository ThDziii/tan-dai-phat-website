import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import {
  RetailGroupageIllustration,
  FullTruckloadIllustration,
  MotorbikeIllustration,
  OversizedCargoIllustration,
} from '../components/ui/ServiceIllustrations';
import { SERVICES_DATA, PROCESS_STEPS } from '../data/services';
import { COMPANY_DATA } from '../data/company';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  const renderIllustration = (id: string) => {
    switch (id) {
      case 'retail-groupage':
        return <RetailGroupageIllustration className="service-detail-card__graphic" />;
      case 'full-truckload':
        return <FullTruckloadIllustration className="service-detail-card__graphic" />;
      case 'motorbike-transport':
        return <MotorbikeIllustration className="service-detail-card__graphic" />;
      case 'oversized-cargo':
        return <OversizedCargoIllustration className="service-detail-card__graphic" />;
      default:
        return null;
    }
  };

  return (
    <div className="services-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero">
        <Container>
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">DỊCH VỤ VẬN CHUYỂN BẮC – NAM</span>
            <h1 className="page-hero__title">
              Mỗi Loại Hàng – <span className="text-primary">Một Giải Pháp</span>
            </h1>
            <p className="page-hero__desc">
              Tân Đại Phát cung cấp trọn gói các giải pháp vận tải đường bộ linh hoạt, tối ưu chi phí
              cho doanh nghiệp và cá nhân. Đội xe lăn bánh đều mỗi ngày trên trục Bắc - Nam.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Detailed Service Cards Section */}
      <section className="section services-detail-section">
        <Container>
          <div className="services-detail__list">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`service-detail-card ${index % 2 === 1 ? 'service-detail-card--reverse' : ''}`}
              >
                {/* Visual Area */}
                <div className="service-detail-card__visual">
                  <div className="service-detail-card__illustration-box">
                    {renderIllustration(service.id)}
                  </div>
                  <div className="service-detail-card__commitment-badge">
                    <ShieldCheck size={18} className="text-primary" />
                    <span>{service.details?.commitment}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="service-detail-card__content">
                  <span className="service-detail-card__tag">{service.tag}</span>
                  <h2 className="service-detail-card__title">{service.title}</h2>
                  <p className="service-detail-card__desc">{service.description}</p>

                  {/* Suitable For */}
                  {service.details?.suitableFor && (
                    <div className="service-detail-card__block">
                      <h4 className="service-detail-card__subheading">Phù hợp với:</h4>
                      <p className="service-detail-card__text">{service.details.suitableFor}</p>
                    </div>
                  )}

                  {/* Advantages List */}
                  {service.details?.advantages && (
                    <div className="service-detail-card__block">
                      <h4 className="service-detail-card__subheading">Ưu thế dịch vụ:</h4>
                      <ul className="service-detail-card__points">
                        {service.details.advantages.map((adv, idx) => (
                          <li key={idx} className="service-detail-card__point-item">
                            <CheckCircle2 size={18} className="service-detail-card__point-icon" />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="service-detail-card__actions">
                    <Button
                      href={COMPANY_DATA.hotline}
                      variant="primary"
                      size="md"
                      icon={<Phone size={16} />}
                      iconPosition="left"
                    >
                      Báo giá: {COMPANY_DATA.hotlineDisplay}
                    </Button>
                    <Link to="/contact">
                      <Button variant="secondary" size="md" icon={<ArrowRight size={16} />}>
                        Gửi yêu cầu tư vấn
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Reused 4-Step Process Flow */}
      <section className="section services-process-section">
        <Container>
          <SectionTitle
            eyebrow="QUY TRÌNH GỬI HÀNG"
            title="4 Bước đơn giản để hàng hóa về đích an toàn"
            subtitle="Quy trình chuẩn hóa giúp bạn theo dõi lộ trình và hoàn toàn an tâm suốt hành trình."
            align="center"
          />

          <div className="process__grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="process-step">
                <div className="process-step__header">
                  <span className="process-step__number">{step.step}</span>
                  <Clock size={20} className="process-step__corner-icon" />
                </div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Customer Support Guarantee CTA */}
      <section className="section services-cta-section">
        <Container>
          <div className="services-cta__card">
            <div className="services-cta__icon-circle">
              <Headphones size={36} color="#D71920" />
            </div>
            <h2 className="services-cta__title">Chưa rõ loại hàng của bạn thuộc diện nào?</h2>
            <p className="services-cta__desc">
              Hãy gọi ngay cho nhân viên tư vấn của Tân Đại Phát để được tính cước phí chính xác
              và sắp xếp xe bốc hàng nhanh nhất.
            </p>
            <div className="services-cta__actions">
              <Button
                href={COMPANY_DATA.hotline}
                variant="phone"
                size="lg"
                icon={<Phone size={18} />}
                iconPosition="left"
              >
                Gọi ngay {COMPANY_DATA.hotlineDisplay}
              </Button>
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
                  Xem thông tin bãi xe & liên hệ
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
