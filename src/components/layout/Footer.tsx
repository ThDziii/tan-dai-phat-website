import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import { Container } from './Container';
import { COMPANY_DATA } from '../../data/company';
import { FOOTER_SERVICES_LINKS, FOOTER_DISCOVER_LINKS } from '../../data/navigation';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <Container>
        <div className="footer__grid">
          {/* Column 1: Company Info */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-badge">
                <img
                  src="/images/logo-transparent.png"
                  alt="Logo Vận tải Tân Đại Phát"
                  className="footer__logo-img"
                />
              </div>
              <div className="footer__logo-text">
                <span className="footer__logo-name">{COMPANY_DATA.name}</span>
                <span className="footer__logo-slogan">{COMPANY_DATA.tagline}</span>
              </div>
            </Link>
            <p className="footer__desc">
              Kết nối hàng hóa Bắc – Nam. Đồng hành cùng bạn bằng sự tận tâm trong từng chuyến đi.
            </p>
            {/* Social Icons */}
            <div className="footer__socials">
              <a href={COMPANY_DATA.socials.facebook} className="footer__social-btn" aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href={COMPANY_DATA.socials.youtube} className="footer__social-btn" aria-label="YouTube">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href={COMPANY_DATA.socials.tiktok} className="footer__social-btn" aria-label="TikTok">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.65 1.45-.11 2.68-1.21 2.87-2.65.1-1.3.06-2.61.06-3.92V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="footer__col">
            <h4 className="footer__col-title">Liên hệ với chúng tôi</h4>
            <ul className="footer__contact-list">
              <li>
                <a href={COMPANY_DATA.hotline} className="footer__contact-item">
                  <Phone size={16} className="footer__contact-icon" />
                  <span>{COMPANY_DATA.hotlineDisplay}</span>
                </a>
              </li>
              <li className="footer__contact-item">
                <MapPin size={16} className="footer__contact-icon" />
                <span>{COMPANY_DATA.addressHanoiPlaceholder}</span>
              </li>
              <li className="footer__contact-item">
                <Mail size={16} className="footer__contact-icon" />
                <span>{COMPANY_DATA.emailPlaceholder}</span>
              </li>
            </ul>
            {/* <p className="footer__placeholder-note">
              * Thông tin mang tính giả lập khi chưa có dữ liệu thật.
            </p> */}
          </div>

          {/* Column 3: Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Dịch vụ</h4>
            <ul className="footer__links-list">
              {FOOTER_SERVICES_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Discover */}
          <div className="footer__col">
            <h4 className="footer__col-title">Khám phá</h4>
            <ul className="footer__links-list">
              {FOOTER_DISCOVER_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer__bottom">
          <p className="footer__copyright">{COMPANY_DATA.copyright}</p>
          <p className="footer__tagline">Vận chuyển an toàn, kết nối trọn vẹn niềm tin.</p>
        </div>
      </Container>
    </footer>
  );
};
