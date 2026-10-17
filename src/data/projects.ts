import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'prj-01',
    title: 'The Vertex Innovation Tower (Demo)',
    slug: 'vertex-innovation-tower',
    sector: 'Commercial',
    companyId: 'urbanspire-construction-pune',
    companyName: 'Urbanspire Construction Pvt Ltd, Pune',
    summary: 'A 54-story commercial tower featuring aerodynamic kinetic solar façades and ultra-efficient low-carbon concrete cores.',
    description: 'Constructed as an architectural centerpiece for modern tech enterprises, The Vertex Innovation Tower features column-free floor plates spanning 2,400 m², multi-level sky atriums, and an integrated thermal mass cooling system that reduces annual HVAC demand by 34%. Delivered on an accelerated 28-month fast-track timeline using BIM 4D digital scheduling.',
    year: '2024',
    location: 'Metropolitan Financial District (Demo)',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    stats: [
      { label: 'Total Height', value: '242 m' },
      { label: 'Built-up Area', value: '118,000 m²' },
      { label: 'Sustainability', value: 'LEED Platinum' },
      { label: 'Poured Concrete', value: '82,000 m³' }
    ],
    isFeatured: true,
    isNewlyAwarded: false,
    isDemo: true
  },
  {
    id: 'prj-02',
    title: 'Azure Horizon Waterfront Enclave (Demo)',
    slug: 'azure-horizon-enclave',
    sector: 'Residential',
    companyId: 'urbanspire-marine-mumbai',
    companyName: 'Urbanspire Marine Pvt Ltd, Mumbai',
    summary: 'Twin residential towers resting over a sculpted coastal marine podium with deep sea-wall defense foundations.',
    description: 'Directly overlooking the harbor, Azure Horizon required sophisticated marine geotechnical engineering including continuous diaphragm walls down to -38m and corrosion-resistant post-tensioned slabs. The twin 42-story towers accommodate 360 luxury residences, private sky gardens, and cantilevered infinity pools.',
    year: '2025',
    location: 'Coastal Marina Sector (Demo)',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    stats: [
      { label: 'Tower Heights', value: '175 m & 195 m' },
      { label: 'Diaphragm Depth', value: '-38 m' },
      { label: 'Units', value: '360 Residences' },
      { label: 'Structural Steel', value: '14,500 Tons' }
    ],
    isFeatured: true,
    isNewlyAwarded: false,
    isDemo: true
  },
  {
    id: 'prj-03',
    title: 'Grand Coastal Cruise Terminal (Demo)',
    slug: 'grand-coastal-cruise-terminal',
    sector: 'Infrastructure',
    companyId: 'urbanspire-marine-mumbai',
    companyName: 'Urbanspire Marine Pvt Ltd, Mumbai',
    summary: 'A signature maritime gateway capable of berthing mega-vessels simultaneously, featuring long-span architectural steel trusses.',
    description: 'Designed as a futuristic transport portal, the Grand Coastal Cruise Terminal features 80-meter unsupported roof spans, high-throughput automated baggage handling tunnels, and offshore berthing dolphins engineered to withstand 100-year wave surges. The project was completed with zero lost-time incidents across 4.2 million man-hours.',
    year: '2023',
    location: 'Deepwater Gateway Harbor (Demo)',
    heroImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80',
    stats: [
      { label: 'Berth Length', value: '920 m' },
      { label: 'Roof Span', value: '80 m Clear' },
      { label: 'Annual Passenger Cap', value: '2.5M' },
      { label: 'Safe Man-Hours', value: '4.2M' }
    ],
    isFeatured: true,
    isNewlyAwarded: false,
    isDemo: true
  },
  {
    id: 'prj-04',
    title: 'Aura Luxury Wellness Resort & Pavilion (Demo)',
    slug: 'aura-luxury-wellness-resort',
    sector: 'Hospitality',
    companyId: 'urbanspire-global-service-dubai',
    companyName: 'Urbanspire Global Service, Dubai',
    summary: 'A 5-star luxury sanctuary integrating handcrafted limestone masonry, acoustic cedar screening, and geothermal HVAC.',
    description: 'Aura Resort required museum-grade craftsmanship across 120 guest pavilions, fine dining pavilions, and subterranean thermal bath complexes. Urbanspire Global Service engineered quiet displacement ventilation (<22 NC acoustic rating) and bespoke lighting management systems synchronized with natural solar rhythms.',
    year: '2024',
    location: 'Oasis Conservation Reserve (Demo)',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    stats: [
      { label: 'Guest Pavilions', value: '120 Keys' },
      { label: 'Site Footprint', value: '85,000 m²' },
      { label: 'Acoustic Rating', value: 'NC 22 Super Silent' },
      { label: 'Geothermal Efficiency', value: '41% Saved' }
    ],
    isFeatured: true,
    isNewlyAwarded: false,
    isDemo: true
  },
  {
    id: 'prj-05',
    title: 'National Centre for Digital Sciences (Demo)',
    slug: 'national-centre-digital-sciences',
    sector: 'Social Infrastructure',
    companyId: 'urbanspire-global-service-dubai',
    companyName: 'Urbanspire Global Service, Dubai',
    summary: 'State-of-the-art national research institution equipped with cryogenic computing labs and dynamic auditoriums.',
    description: 'Commissioned by academic and federal authorities, this complex brings together quantum computation facilities, vibration-isolated microscopy cleanrooms (Class 100), and a 1,200-seat amphitheater with curved glulam timber ceilings.',
    year: '2025',
    location: 'Science & Technology Park (Demo)',
    heroImage: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1600&q=80',
    stats: [
      { label: 'Laboratory Area', value: '34,000 m²' },
      { label: 'Vibration Isolation', value: 'VC-E Standard' },
      { label: 'Research Capacity', value: '800 Fellows' }
    ],
    isFeatured: false,
    isNewlyAwarded: true,
    isDemo: true
  },
  {
    id: 'prj-06',
    title: 'Helios Eco-Logistics Terminal (Demo)',
    slug: 'helios-eco-logistics-terminal',
    sector: 'Industrial',
    companyId: 'urbanspire-construction-pune',
    companyName: 'Urbanspire Construction Pvt Ltd, Pune',
    summary: 'Net-zero automated distribution facility featuring 2.4 MW rooftop solar arrays and post-tensioned superflat slabs.',
    description: 'Helios Terminal accommodates autonomous robotics warehousing with FM1 tolerance superflat concrete floors. Built with low-carbon geo-polymer binder blends, reducing embedded concrete carbon footprint by 45%.',
    year: '2025',
    location: 'Industrial Free Zone (Demo)',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    stats: [
      { label: 'Floor Surface', value: '62,000 m²' },
      { label: 'Solar Output', value: '2.4 MW' },
      { label: 'Carbon Reduction', value: '-45% Embodied CO₂' }
    ],
    isFeatured: false,
    isNewlyAwarded: true,
    isDemo: true
  }
];
