import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''} ${className}`.trim()}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
};
