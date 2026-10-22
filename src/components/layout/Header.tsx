import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { COMPANY_DATA } from '../../data/company';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isCurrentActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <Container>
        <div className="header__inner">
          {/* Logo */}
          <Link to="/" className="header__logo">
            <img
              src="/images/logo-transparent.png"
              alt="Logo Vận tải Tân Đại Phát"
              className="header__logo-img"
            />
            <div className="header__logo-text">
              <span className="header__logo-name">{COMPANY_DATA.name}</span>
              <span className="header__logo-slogan">{COMPANY_DATA.tagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav hide-on-mobile" aria-label="Main Navigation">
            <ul className="header__nav-list">
              {NAVIGATION_ITEMS.map((item) => {
                const active = isCurrentActive(item.href);
                return (
                  <li key={item.id} className="header__nav-item">
                    <Link
                      to={item.href}
                      className={`header__nav-link ${active ? 'header__nav-link--active' : ''}`}
                    >
                      {item.label}
                      {active && <span className="header__nav-indicator" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action: Phone Hotline */}
          <div className="header__action hide-on-mobile">
            <Button
              href={COMPANY_DATA.hotline}
              variant="phone"
              size="sm"
              icon={<Phone size={15} />}
              iconPosition="left"
            >
              {COMPANY_DATA.hotlineDisplay}
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="header__mobile-toggle show-on-mobile"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="header__mobile-menu show-on-mobile">
            <ul className="header__mobile-nav-list">
              {NAVIGATION_ITEMS.map((item) => {
                const active = isCurrentActive(item.href);
                return (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      className={`header__mobile-nav-link ${active ? 'header__mobile-nav-link--active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="header__mobile-cta">
              <Button
                href={COMPANY_DATA.hotline}
                variant="phone"
                size="md"
                fullWidth
                icon={<Phone size={18} />}
                iconPosition="left"
              >
                {COMPANY_DATA.hotlineDisplay}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
