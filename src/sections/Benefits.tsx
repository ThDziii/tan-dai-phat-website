import React from 'react';
import { Truck, Users, ShieldCheck, Headphones } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { BENEFITS_DATA } from '../data/services';
import './Benefits.css';

export const Benefits: React.FC = () => {
  const renderBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'truck':
        return <Truck size={24} color="#D71920" strokeWidth={2.2} />;
      case 'users':
        return <Users size={24} color="#D71920" strokeWidth={2.2} />;
      case 'shield-check':
        return <ShieldCheck size={24} color="#D71920" strokeWidth={2.2} />;
      case 'headphones':
        return <Headphones size={24} color="#D71920" strokeWidth={2.2} />;
      default:
        return null;
    }
  };

  return (
    <section className="section benefits-section" id="benefits">
      <Container>
        <SectionTitle
          eyebrow="VÌ SAO CHỌN TÂN ĐẠI PHÁT?"
          title="Vững tay lái. Trọn niềm tin."
          align="center"
        />

        <div className="benefits__grid">
          {BENEFITS_DATA.map((item) => (
            <div key={item.id} className="benefit-card">
              <div className="benefit-card__icon-wrapper">
                {renderBenefitIcon(item.iconName)}
              </div>
              <h3 className="benefit-card__title">{item.title}</h3>
              <p className="benefit-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
