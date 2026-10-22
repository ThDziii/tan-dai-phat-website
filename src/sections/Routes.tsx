import React from 'react';
import { MapPin } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { ROUTE_INFO } from '../data/company';
import './Routes.css';

export const Routes: React.FC = () => {
  return (
    <section className="routes-section" id="pricing">
      <Container>
        <div className="routes__card">
          {/* Origin Point: Hà Nội */}
          <div className="routes__point routes__point--origin">
            <div className="routes__pin-icon">
              <MapPin size={20} color="#D71920" />
            </div>
            <span className="routes__city-name">{ROUTE_INFO.origin}</span>
          </div>

          {/* Curved Route Visual */}
          <div className="routes__track-container">
            <svg
              viewBox="0 0 800 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="routes__svg"
              preserveAspectRatio="none"
            >
              {/* Background Glow Line */}
              <path
                d="M 40 85 Q 240 25 400 65 T 760 35"
                stroke="rgba(215, 25, 32, 0.15)"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
              />
              {/* Main Dashed Red Road Line */}
              <path
                d="M 40 85 Q 240 25 400 65 T 760 35"
                stroke="#D71920"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Traveling Mini Truck in Center */}
            <div className="routes__truck-anchor">
              <div className="routes__mini-truck">
                <svg viewBox="0 0 120 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Chassis */}
                  <rect x="10" y="32" width="102" height="4" rx="1" fill="#1E293B" />
                  {/* Container Red */}
                  <rect x="36" y="8" width="76" height="26" rx="2" fill="#D71920" />
                  <text
                    x="74"
                    y="24"
                    fill="#FFFFFF"
                    fontFamily="'Be Vietnam Pro', sans-serif"
                    fontWeight="800"
                    fontSize="7"
                    textAnchor="middle"
                  >
                    TÂN ĐẠI PHÁT
                  </text>
                  {/* White Cab */}
                  <path d="M 12 32 L 12 18 Q 14 10 22 10 L 34 10 L 34 32 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
                  <path d="M 16 18 Q 17 12 24 12 L 28 12 L 28 18 Z" fill="#1E293B" />
                  <rect x="12" y="24" width="22" height="2.5" fill="#D71920" />
                  {/* Wheels */}
                  <circle cx="22" cy="35" r="5" fill="#1E293B" />
                  <circle cx="22" cy="35" r="2.5" fill="#94A3B8" />
                  <circle cx="78" cy="35" r="5" fill="#1E293B" />
                  <circle cx="78" cy="35" r="2.5" fill="#94A3B8" />
                  <circle cx="92" cy="35" r="5" fill="#1E293B" />
                  <circle cx="92" cy="35" r="2.5" fill="#94A3B8" />
                </svg>
              </div>

              {/* Slogan Pill Under Truck */}
              <div className="routes__badge">
                <span>{ROUTE_INFO.badge}</span>
              </div>
            </div>
          </div>

          {/* Destination Point: TP. Hồ Chí Minh */}
          <div className="routes__point routes__point--dest">
            <div className="routes__pin-icon">
              <MapPin size={20} color="#D71920" />
            </div>
            <span className="routes__city-name">{ROUTE_INFO.destination}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
