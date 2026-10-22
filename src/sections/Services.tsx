import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { SERVICES_DATA } from '../data/services';
import {
  RetailGroupageIllustration,
  FullTruckloadIllustration,
  MotorbikeIllustration,
  OversizedCargoIllustration,
} from '../components/ui/ServiceIllustrations';
import './Services.css';

export const Services: React.FC = () => {
  // Render matching illustration per service id
  const renderIllustration = (id: string) => {
    switch (id) {
      case 'retail-groupage':
        return <RetailGroupageIllustration className="service-card__illustration" />;
      case 'full-truckload':
        return <FullTruckloadIllustration className="service-card__illustration" />;
      case 'motorbike-transport':
        return <MotorbikeIllustration className="service-card__illustration" />;
      case 'oversized-cargo':
        return <OversizedCargoIllustration className="service-card__illustration" />;
      default:
        return null;
    }
  };

  return (
    <section className="section services-section" id="services">
      <Container>
        <SectionTitle
          eyebrow="DỊCH VỤ VẬN CHUYỂN"
          title="Mỗi loại hàng, một giải pháp"
          subtitle="Bạn cần gửi gì? Chúng tôi có phương án phù hợp."
          align="center"
        />

        <div className="services__grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-card">
              {/* Top Graphic Area */}
              <div className="service-card__graphic-wrapper">
                {renderIllustration(service.id)}
              </div>

              {/* Content Body */}
              <div className="service-card__body">
                <span className="service-card__tag">{service.tag}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <Link to={service.linkHref} className="service-card__link">
                  <span>{service.linkText}</span>
                  <ArrowRight size={16} className="service-card__link-icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
