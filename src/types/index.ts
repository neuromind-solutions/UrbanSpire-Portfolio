export interface Company {
  id: string;
  name: string;
  slug: string;
  shortSummary: string;
  description: string;
  specialization: string;
  established: string;
  keyServices: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  featuredProjectsCount: number;
  contactEmail?: string;
  isDemo: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  sector: 'Commercial' | 'Residential' | 'Infrastructure' | 'Hospitality' | 'Social Infrastructure' | 'Industrial';
  companyId: string;
  companyName: string;
  summary: string;
  description: string;
  year: string;
  location: string;
  heroImage: string;
  gallery?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  isFeatured: boolean;
  isNewlyAwarded?: boolean;
  isDemo: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  iconName: string;
  features: string[];
  affiliatedCompany?: string;
}

export interface Sector {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  projectCount: number;
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}
