import csLogo from '../assets/computer_science.png'
import itLogo from '../assets/information_technology.png'
import bsdmiaLogo from '../assets/midas.png'
import blisLogo from '../assets/LISSO-150x150.png'

export const programs = [
  {
    id: 'bsit',
    code: 'BSIT',
    title: 'Bachelor of Science in Information Technology',
    logo: itLogo,
    gradient: 'linear-gradient(135deg, #0dd406 0%, #33643a 100%)',
    badgeColor: '#ff02d5',
    tagline: 'Enterprise Systems, Cloud & Mobile Tech',
    description: 'Bridges theoretical computing with enterprise IT systems management. Students master full-stack software development, cybersecurity, network administration, and cloud deployment.',
    outcomes: [
      'Full Stack Web & Mobile App Development',
      'Cybersecurity & Network Administration',
      'Cloud Infrastructure & DevOps',
      'Database Architecture & IT Governance'
    ],
    careerPaths: ['Full Stack Developer', 'Cloud/DevOps Engineer', 'Cybersecurity Analyst', 'Network Administrator']
  },
  {
    id: 'bscs',
    code: 'BSCS',
    title: 'Bachelor of Science in Computer Science',
    logo: csLogo,
    gradient: 'linear-gradient(135deg, #f53606 0%, #f2f5f4 100%)',
    badgeColor: '#62ffcb',
    tagline: 'Algorithms, Software Architecture & AI',
    description: 'Explores the deep mathematical, algorithmic, and architectural foundations of modern computing. Focuses on software engineering, AI/machine learning, data science, and system design.',
    outcomes: [
      'Advanced Algorithm Engineering & Complexity',
      'Artificial Intelligence & Machine Learning',
      'Operating Systems & Kernel Programming',
      'Data Analytics & Big Data Systems'
    ],
    careerPaths: ['Software Architect', 'AI/Machine Learning Engineer', 'Data Scientist', 'Algorithms Engineer']
  },
  {
    id: 'bsdmia',
    code: 'BSDMIA',
    title: 'Bachelor of Science in Data Mining and Information Analytics',
    logo: bsdmiaLogo,
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    badgeColor: '#8B5CF6',
    tagline: 'Data Analysis, Mining & Visualization',
    description: 'Focuses on extracting insights from large datasets using advanced analytics and machine learning techniques. Covers data mining, statistical analysis, predictive modeling, and data visualization.',
    outcomes: [
      'Interactive UI/UX & Digital Product Design',
      '2D/3D Asset Modeling & Animation',
      'Game Development & Virtual Reality',
      'Digital Audio/Visual Post-Production'
    ],
    careerPaths: ['UI/UX Designer', 'Game Developer', '3D Technical Animator', 'Digital Producer']
  },
  {
    id: 'blis',
    code: 'BLIS',
    title: 'Bachelor of Library & Information Science',
    logo: blisLogo,
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    badgeColor: '#F59E0B',
    tagline: 'Digital Archiving & Knowledge Management',
    description: 'Prepares information professionals in managing digital archives, knowledge repositories, information classification, records management, and electronic library systems.',
    outcomes: [
      'Digital Library Architecture & Curation',
      'Knowledge Management Systems',
      'Information Organization & Taxonomy',
      'Archival Records & Data Governance'
    ],
    careerPaths: ['Licensed Librarian', 'Digital Archivist', 'Information Specialist', 'Knowledge Manager']
  }
]
