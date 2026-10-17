import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'general-contracting',
    title: 'Turnkey General Contracting & EPC',
    slug: 'general-contracting',
    category: 'EPC & Construction Management',
    summary: 'Comprehensive Engineering, Procurement, and Construction (EPC) delivery for mega-scale commercial, industrial, and residential landmarks.',
    description: 'Acting as principal contractor from our Pune headquarters, Urbanspire Construction oversees end-to-end execution from groundbreaking to client handover. We maintain complete control over budget, quality assurance, sub-contractor alignment, and aggressive fast-track schedules.',
    iconName: 'briefcase',
    features: [
      'Full EPC Turnkey Project Delivery',
      'Industrial Tech Parks & High-Rise Towers',
      'Pre-Cast Construction & Steel Engineering',
      'Stringent Quality Management Systems (ISO 9001)'
    ],
    affiliatedCompany: 'Urbanspire Construction Pvt Ltd, Pune'
  },
  {
    id: 'marine-engineering',
    title: 'Marine Infrastructure & Coastal Civil',
    slug: 'marine-infrastructure',
    category: 'Marine & Maritime Engineering',
    summary: 'Deep sea berthing, port terminals, coastal protection seawalls, and specialized offshore piling works.',
    description: 'From Mumbai, Urbanspire Marine executes critical maritime civil works. Our teams deploy heavy floating crane barges, hydraulic piling rigs, and environmental silt curtains to engineer resilient commercial berths and coastal defenses.',
    iconName: 'building',
    features: [
      'Deepwater Berths, Jetties & Quayside Terminals',
      'Offshore Foundation Piling & Subsea Grouting',
      'Coastal Protection Seawalls & Rock Armoring',
      'Marine Dredging & Land Reclamation'
    ],
    affiliatedCompany: 'Urbanspire Marine Pvt Ltd, Mumbai'
  },
  {
    id: 'smart-mep',
    title: 'Smart MEP & Systems Automation',
    slug: 'smart-mep-automation',
    category: 'Mechanical & Electrical',
    summary: 'Intelligent HVAC cooling, electrical infrastructure, clean energy integration, and building management systems (BMS).',
    description: 'Directed by Urbanspire Global Service in Dubai, our MEP division designs and installs precision mechanical and electrical infrastructure optimized for energy efficiency, silent acoustics, and predictive IoT maintenance.',
    iconName: 'cpu',
    features: [
      'Central Chilled-Water District Cooling Systems',
      'Smart IoT Building Automation & BMS Integration',
      'Substation, Power Distribution & Emergency UPS',
      'Precision Cleanroom Ventilation & Gas Suppression'
    ],
    affiliatedCompany: 'Urbanspire Global Service, Dubai'
  },
  {
    id: 'bim-digital-twins',
    title: 'BIM Level 3 & Digital Construction',
    slug: 'bim-digital-construction',
    category: 'Digital Innovation',
    summary: 'Cloud-coordinated 4D scheduling, 5D cost-mapping, and real-time lidar scanning to eliminate site clashes before fabrication.',
    description: 'We construct every building digitally before pouring the first yard of concrete. By integrating parametric BIM workflows with drone volumetric surveys, our teams detect spatial clashes early, resulting in a 95% reduction in field rework.',
    iconName: 'layers',
    features: [
      'BIM Level 3 Cloud Collaboration Environment',
      '4D Construction Sequence Simulation',
      'Lidar 3D Laser Scanning & As-Built Verification',
      'Asset Lifecycle Handover Models (COBie)'
    ],
    affiliatedCompany: 'Urbanspire Global Service, Dubai'
  },
  {
    id: 'facades-interiors',
    title: 'Architectural Interiors & Façades',
    slug: 'interiors-facades',
    category: 'Architectural Craft',
    summary: 'Bespoke unitized glass curtain walls, kinetic shading envelopes, and museum-grade interior architectural fit-outs.',
    description: 'Elevating aesthetic impact and building envelope performance. From acoustic stone cladding and bespoke wood millwork to high-wind double-glazed unitized façades, our craftspeople deliver flawless finishes.',
    iconName: 'compass',
    features: [
      'High-Performance Unitized Curtain Wall Systems',
      'Acoustic Ceiling & Wall Interior Paneling',
      'Luxury Hospitality Millwork & Stone Joinery',
      'Custom Skylights & Structural Glass Atriums'
    ],
    affiliatedCompany: 'Urbanspire Global Service, Dubai'
  },
  {
    id: 'sustainability-leed',
    title: 'Sustainability & Coastal Ecology',
    slug: 'sustainability-decarbonization',
    category: 'Environmental Leadership',
    summary: 'Low-carbon concrete formulation, solar rooftop integration, circular material recycling, and LEED/BREEAM accreditation.',
    description: 'We lead the transition toward zero-emission building lifecycles. Our environmental specialists work with clients to achieve LEED Platinum and Net Zero carbon certifications through material recycling, renewable energy, and water recycling loops.',
    iconName: 'leaf',
    features: [
      'Low-Carbon Geopolymer Concrete Blends',
      '90%+ On-Site Construction Waste Diversion',
      'Rooftop & Façade Solar Photovoltaic Integration',
      'LEED & BREEAM Project Certification Support'
    ],
    affiliatedCompany: 'Urbanspire Marine Pvt Ltd, Mumbai'
  }
];
