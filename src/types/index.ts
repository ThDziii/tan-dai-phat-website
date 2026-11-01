export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  details?: {
    suitableFor: string;
    advantages: string[];
    commitment: string;
  };
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: 'phone-call' | 'clipboard-check' | 'truck' | 'package-check';
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'truck' | 'users' | 'shield-check' | 'headphones';
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  slogan: string;
  tagline: string;
  hotline: string;
  hotlineDisplay: string;
  zaloUrl: string;
  addressHanoiPlaceholder: string;
  addressHcmPlaceholder: string;
  emailPlaceholder: string;
  copyright: string;
  socials: {
    facebook: string;
    youtube: string;
    tiktok: string;
  };
}

export interface DirectorInfo {
  namePlaceholder: string;
  titlePlaceholder: string;
  message: string;
  imagePlaceholderNote: string;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  category: 'fleet' | 'warehouse' | 'operation';
  categoryLabel: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}
