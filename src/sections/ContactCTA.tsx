import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { TruckIllustration } from '../components/ui/TruckIllustration';
import { COMPANY_DATA } from '../data/company';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  return (
    <section className="contact-cta" id="news">
      <Container>
        <div className="contact-cta__card">
          {/* Background Scenery: Sun, Clouds & Hills */}
          <div className="contact-cta__scenery">
            <div className="contact-cta__sun" />
            <div className="contact-cta__cloud contact-cta__cloud--1" />
            <div className="contact-cta__cloud contact-cta__cloud--2" />
            <div className="contact-cta__hill" />
          </div>

          <div className="contact-cta__inner">
            {/* Left Column: Text & Buttons */}
            <div className="contact-cta__content">
              <span className="contact-cta__tag">BẠN CẦN GỬI HÀNG BẮC - NAM?</span>
              <h2 className="contact-cta__title">
                Bạn cứ yên tâm gửi hàng. <br />
                <span className="contact-cta__title--highlight">Để {COMPANY_DATA.name} lo!</span>
              </h2>
              <p className="contact-cta__desc">
                Một cuộc gọi, một giải pháp phù hợp. Liên hệ ngay để được tư vấn và nhận
                báo giá cho chuyến hàng của bạn.
              </p>
              <div className="contact-cta__actions">
                <Button
                  href={COMPANY_DATA.hotline}
                  variant="phone"
                  size="md"
                  icon={<Phone size={18} />}
                  iconPosition="left"
                >
                  {COMPANY_DATA.hotlineDisplay}
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  icon={<ArrowUpRight size={18} />}
                >
                  Đăng ký tư vấn
                </Button>
              </div>
            </div>

            {/* Right Column: Truck Visual */}
            <div className="contact-cta__visual">
              <div className="contact-cta__truck-wrapper">
                <TruckIllustration className="contact-cta__truck-svg" facing="left" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
