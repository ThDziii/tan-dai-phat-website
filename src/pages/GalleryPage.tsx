import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, Truck, Building2, Package, Phone, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import { COMPANY_DATA } from '../data/company';
import type { GalleryItem } from '../types';
import './GalleryPage.css';

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filter items
  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case 'fleet':
        return <Truck size={14} />;
      case 'warehouse':
        return <Building2 size={14} />;
      case 'operation':
        return <Package size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className="gallery-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero">
        <Container>
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">HÌNH ẢNH HOẠT ĐỘNG THỰC TẾ</span>
            <h1 className="page-hero__title">
              Thư Viện <span className="text-primary">Đội Xe & Kho Bãi</span>
            </h1>
            <p className="page-hero__desc">
              Ghi nhận các hoạt động thực tế từ khâu tiếp nhận, bảo quản, đóng gói chằng buộc
              đến hành trình vận chuyển hàng hóa Bắc – Nam của Tân Đại Phát.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Gallery Filter & Grid */}
      <section className="section gallery-section">
        <Container>
          {/* Category Tabs */}
          <div className="gallery-tabs">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`gallery-tab-btn ${activeTab === cat.id ? 'gallery-tab-btn--active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedItem(item);
                  }
                }}
              >
                {/* Visual Placeholder Box */}
                <div className="gallery-card__thumb">
                  <div className="gallery-card__placeholder-content">
                    <div className="gallery-card__category-icon">
                      {renderCategoryIcon(item.category)}
                    </div>
                    <span className="gallery-card__badge">{item.placeholderBadge}</span>
                    <span className="gallery-card__zoom-hint">
                      <ZoomIn size={16} />
                      <span>Nhấn để xem lớn</span>
                    </span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="gallery-card__meta">
                  <span className="gallery-card__category">{item.categoryLabel}</span>
                  <h3 className="gallery-card__title">{item.title}</h3>
                  <p className="gallery-card__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Interactive Lightbox Modal */}
      {selectedItem && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="gallery-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-modal__close-btn"
              onClick={() => setSelectedItem(null)}
              aria-label="Đóng xem ảnh"
            >
              <X size={24} />
            </button>

            {/* Large Preview Area */}
            <div className="gallery-modal__preview">
              <div className="gallery-modal__badge">
                {selectedItem.placeholderBadge}
              </div>
            </div>

            {/* Information */}
            <div className="gallery-modal__info">
              <span className="gallery-modal__category">{selectedItem.categoryLabel}</span>
              <h2 className="gallery-modal__title">{selectedItem.title}</h2>
              <p className="gallery-modal__desc">{selectedItem.description}</p>
              <div className="gallery-modal__note">
                * Vị trí khung ảnh chuẩn bị sẵn. Khi bạn cung cấp file ảnh thực tế từ bãi xe,
                hệ thống sẽ tự động hiển thị hình ảnh gốc độ phân giải cao tại đây.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Bottom Contact CTA */}
      <section className="section gallery-cta-section">
        <Container>
          <div className="gallery-cta__card">
            <h2 className="gallery-cta__title">Bạn muốn trực tiếp kiểm tra bãi xe và gửi hàng?</h2>
            <p className="gallery-cta__desc">
              Tân Đại Phát luôn mở cửa đón tiếp khách hàng tại hai đầu kho bãi Hà Nội và TP. Hồ Chí Minh.
              Liên hệ hotline để nhận vị trí kho bãi chính xác nhất.
            </p>
            <div className="gallery-cta__actions">
              <Button
                href={COMPANY_DATA.hotline}
                variant="phone"
                size="lg"
                icon={<Phone size={18} />}
                iconPosition="left"
              >
                Hotline: {COMPANY_DATA.hotlineDisplay}
              </Button>
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
                  Xem thông tin liên hệ chi tiết
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
