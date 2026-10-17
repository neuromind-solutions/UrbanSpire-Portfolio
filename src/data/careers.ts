export interface JobOpening {
  id: string;
  title: string;
  companySlug: 'urbanspire-construction-pune' | 'urbanspire-marine-mumbai' | 'urbanspire-global-service-dubai';
  companyName: string;
  location: string;
  department: string;
  experience: string;
  type: string;
  description: string;
  keySkills: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'uc-pm-01',
    title: 'Senior Project Manager — High-Rise Civil',
    companySlug: 'urbanspire-construction-pune',
    companyName: 'Urbanspire Construction Pvt Ltd',
    location: 'Pune, India',
    department: 'Civil & Commercial Infrastructure',
    experience: '10–15 Years',
    type: 'Full-Time',
    description: 'Lead site execution, contractor management, schedule governance, and structural quality for landmark high-rise and commercial developments in Pune.',
    keySkills: ['High-Rise RC Frames', 'Primavera P6', 'EPC Contracting', 'QHSE Site Governance']
  },
  {
    id: 'um-marine-02',
    title: 'Lead Marine Structural Engineer',
    companySlug: 'urbanspire-marine-mumbai',
    companyName: 'Urbanspire Marine Pvt Ltd',
    location: 'Mumbai, India',
    department: 'Marine & Coastal Works',
    experience: '8–12 Years',
    type: 'Full-Time',
    description: 'Design and supervise maritime civil structures, deep-water berths, breakwaters, and port terminals across coastal Maharashtra and Western India.',
    keySkills: ['Jetty & Port Design', 'Marine Geotechnics', 'Offshore Piling', 'Maritime Standards']
  },
  {
    id: 'ugs-bim-03',
    title: 'BIM Level 3 Coordinator / Digital Twin Specialist',
    companySlug: 'urbanspire-global-service-dubai',
    companyName: 'Urbanspire Global Service',
    location: 'Dubai, UAE',
    department: 'Digital Engineering & BIM',
    experience: '6–10 Years',
    type: 'Full-Time',
    description: 'Drive multi-disciplinary 3D/4D/5D BIM coordination, model integrity, and digital twin implementations for international projects managed from Dubai.',
    keySkills: ['Autodesk Revit & Navisworks', 'BIM Level 3 Protocol', 'Clash Resolution', 'Digital Twins']
  },
  {
    id: 'uc-qs-04',
    title: 'Senior Contracts & Quantity Surveyor',
    companySlug: 'urbanspire-construction-pune',
    companyName: 'Urbanspire Construction Pvt Ltd',
    location: 'Pune, India',
    department: 'Commercial & Cost Management',
    experience: '7–11 Years',
    type: 'Full-Time',
    description: 'Oversee bill of quantities, tender analysis, subcontractor agreements, variation approvals, and FIDIC-aligned contractual claims for civil projects.',
    keySkills: ['FIDIC Contracts', 'BOQ Preparation', 'Subcontract Management', 'Cost Auditing']
  },
  {
    id: 'um-coastal-05',
    title: 'Coastal Geotechnical & Reclamation Engineer',
    companySlug: 'urbanspire-marine-mumbai',
    companyName: 'Urbanspire Marine Pvt Ltd',
    location: 'Mumbai, India',
    department: 'Marine Engineering',
    experience: '5–8 Years',
    type: 'Full-Time',
    description: 'Manage marine soil investigations, reclamation fill stability, bathymetric data analysis, and dredging works for waterfront infrastructure projects.',
    keySkills: ['Marine Soil Mechanics', 'Reclamation & Dredging', 'Bathymetric Surveying', 'Ground Improvement']
  },
  {
    id: 'ugs-proc-06',
    title: 'International MEP Procurement Specialist',
    companySlug: 'urbanspire-global-service-dubai',
    companyName: 'Urbanspire Global Service',
    location: 'Dubai, UAE',
    department: 'Global Supply Chain',
    experience: '6–9 Years',
    type: 'Full-Time',
    description: 'Lead global sourcing of heavy MEP equipment, HVAC machinery, and precision architectural materials, managing UAE customs and cross-border logistics.',
    keySkills: ['Global Vendor Sourcing', 'MEP Equipment', 'International Trade & Incoterms', 'Technical Compliance']
  }
];

export const careerPillars = [
  {
    title: 'Signature Megaprojects',
    description: 'Work on defining civil landmarks, deep-water marine hubs, and technologically advanced smart facilities across India and the UAE.',
    icon: 'building'
  },
  {
    title: 'Safety Without Compromise',
    description: 'Be part of a team committed to an uncompromising Zero-Harm philosophy, certified to ISO 45001 safety and health protocols.',
    icon: 'shield'
  },
  {
    title: 'Cross-Border Career Mobility',
    description: 'Experience professional growth across our operating companies in Pune, Mumbai, and Dubai, with structured leadership tracks.',
    icon: 'globe'
  },
  {
    title: 'Digital & BIM Innovation',
    description: 'Utilize state-of-the-art tools including BIM Level 3, reality capture, and digital project twins to build with precision.',
    icon: 'cpu'
  }
];
