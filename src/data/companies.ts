import type { Company } from '../types';

export const companies: Company[] = [
  {
    id: 'urbanspire-construction-pune',
    name: 'Urbanspire Construction Pvt Ltd, Pune',
    slug: 'urbanspire-construction-pune',
    specialization: 'Civil Infrastructure & General Construction',
    established: '2008',
    shortSummary: 'Delivering premier commercial complexes, industrial campuses, and high-rise structural developments across Pune and Western India.',
    description: 'Urbanspire Construction Pvt Ltd, based in Pune, serves as the Group’s cornerstone general contracting and civil engineering powerhouse. Leading landmark commercial towers, advanced industrial facilities, IT tech parks, and urban infrastructure developments, the company brings robust structural engineering, precision pre-cast construction methods, and comprehensive EPC turnkey execution.',
    keyServices: [
      'Turnkey Commercial & Industrial EPC',
      'High-Rise Reinforced Concrete Frameworks',
      'Pre-Engineered Buildings & Industrial Parks',
      'Urban Infrastructure & Civil Works',
      'Seismic Retrofitting & Geotechnical Solutions'
    ],
    metrics: [
      { label: 'Completed Projects', value: '140+' },
      { label: 'Specialist Workforce', value: '450+' },
      { label: 'Constructed Area', value: '1.2M m²' },
      { label: 'Safety Record', value: 'Zero Harm' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    featuredProjectsCount: 14,
    contactEmail: 'construction.pune@urbanspire-group.demo',
    isDemo: false
  },
  {
    id: 'urbanspire-marine-mumbai',
    name: 'Urbanspire Marine Pvt Ltd, Mumbai',
    slug: 'urbanspire-marine-mumbai',
    specialization: 'Marine Infrastructure & Coastal Engineering',
    established: '2012',
    shortSummary: 'Specialized in port terminals, offshore piling, coastal defense reclamation, and maritime structural engineering across Mumbai.',
    description: 'Urbanspire Marine Pvt Ltd, headquartered in Mumbai, spearheads the Group’s marine civil engineering and coastal development initiatives. Deploying specialized marine plant, heavy floating cranes, and dredging systems, the enterprise executes commercial container berths, coastal breakwaters, offshore piling, jetties, and waterfront enclaves with strict marine environmental compliance.',
    keyServices: [
      'Port & Deepwater Container Terminals',
      'Coastal Protection & Marine Seawalls',
      'Offshore Piling & Jetty Construction',
      'Marine Dredging & Land Reclamation',
      'Maritime Defense & Waterfront Enclaves'
    ],
    metrics: [
      { label: 'Maritime Contracts', value: '45+' },
      { label: 'Berths & Jetties Built', value: '18+' },
      { label: 'Environmental Standard', value: 'ISO 14001' },
      { label: 'Marine Plant Units', value: '32+' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    featuredProjectsCount: 10,
    contactEmail: 'marine.mumbai@urbanspire-group.demo',
    isDemo: false
  },
  {
    id: 'urbanspire-global-service-dubai',
    name: 'Urbanspire Global Service, Dubai',
    slug: 'urbanspire-global-service-dubai',
    specialization: 'International PMO, Smart MEP & Global Services',
    established: '2015',
    shortSummary: 'Managing global project consulting, BIM Level 3 digital coordination, and high-specification smart building engineering from Dubai.',
    description: 'Operating from Dubai, Urbanspire Global Service represents the Group’s international project management office (PMO), digital engineering, and global technology services hub. Coordinating cross-border procurement, BIM/VDC virtual construction modeling, intelligent building management systems (BMS/MEP), and luxury interior fit-outs, it drives regional and international delivery benchmarks.',
    keyServices: [
      'International Project Management & EPC Advisory',
      'BIM Level 3 Cloud Coordination & Digital Twins',
      'Smart MEP Engineering & Building Automation',
      'Luxury Architectural Interiors & Façade Systems',
      'Global Procurement & Technical Supply Chain'
    ],
    metrics: [
      { label: 'International Projects', value: '95+' },
      { label: 'Managed Floor Area', value: '1.8M m²' },
      { label: 'Global Supply Partners', value: '28+' },
      { label: 'Energy Efficiency Avg', value: '32%' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
    featuredProjectsCount: 12,
    contactEmail: 'global.dubai@urbanspire-group.demo',
    isDemo: false
  }
];
