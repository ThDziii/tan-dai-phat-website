import React from 'react';
import { MessageSquare, ClipboardCheck, Truck, PackageCheck } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PROCESS_STEPS } from '../data/services';
import './Process.css';

export const Process: React.FC = () => {
  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'phone-call':
        return <MessageSquare size={22} className="process-step__corner-icon" />;
      case 'clipboard-check':
        return <ClipboardCheck size={22} className="process-step__corner-icon" />;
      case 'truck':
        return <Truck size={22} className="process-step__corner-icon" />;
      case 'package-check':
        return <PackageCheck size={22} className="process-step__corner-icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="section process-section" id="process">
      <Container>
        <SectionTitle
          eyebrow="QUY TRÌNH ĐƠN GIẢN"
          title="Gửi hàng nhẹ tênh, an tâm cả hành trình"
          subtitle="Chỉ 4 bước để kết nối hàng hóa từ Bắc vào Nam."
          align="center"
        />

        <div className="process__grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="process-step">
              <div className="process-step__header">
                <span className="process-step__number">{step.step}</span>
                {renderStepIcon(step.iconName)}
              </div>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
