export const meta = {
  name: 'Mihail Pesterev',
  role: 'Senior Fullstack Developer',
  bio: 'Building fast, SEO-ready web applications — from pixel-perfect UIs to scalable Node.js backends. 12+ years shipping production code.',
  location: 'Georgia · Remote worldwide',
  linkedin: 'https://www.linkedin.com/in/mihail-pesterev-76997543/',
  email: 'monya1987@gmail.com',
  cvUrl: '/cv.pdf',
}

export const about = [
  `12+ years building production-grade web applications. I led the Odesa frontend team at <strong>Ecentria Solutions</strong>, shipping features for <strong>opticsplanet.com</strong> — a high-traffic US e-commerce platform.`,
  `I care about <strong>SEO</strong>, <strong>Core Web Vitals</strong>, and <strong>UI/UX</strong> as much as clean code. Comfortable owning features end-to-end: design → frontend → BFF layer. I ramp up fast in any team and can deliver independently.`,
]

export const stack = {
  primary: ['React', 'TypeScript', 'Next.js', 'Node.js'],
  secondary: ['Redux', 'Redux-Saga', 'GraphQL', 'Express', 'MongoDB', 'Webpack', 'Jest', 'Docker', 'Storybook', 'Figma', 'SEO', 'Core Web Vitals'],
}

export interface Job {
  period: string
  company: string
  role: string
  desc: string
  bullets?: string[]
  tags: string[]
  current?: boolean
}

export const experience: Job[] = [
  {
    period: 'Oct 2024 — present',
    company: 'OLSYS',
    role: 'Frontend Developer',
    desc: 'Headless e-commerce on Next.js + GraphCommerce + GraphQL. Frontend architecture and BFF layer (Node.js / Express), integrating with Magento backend.',
    tags: ['Next.js', 'GraphQL', 'Node.js', 'Express', 'TypeScript'],
    current: true,
  },
  {
    period: 'May 2018 — May 2024',
    company: 'Ecentria Solutions',
    role: 'Senior Front End Developer',
    desc: 'Led the Odesa frontend team (3 developers), delivering features for opticsplanet.com — a major US outdoor & sports e-commerce platform.',
    bullets: [
      'Built custom SSR/SSG using react-on-rails + limenius — no off-the-shelf framework',
      'Architected a design system (40+ components) with automated Figma variable sync',
      'Led platform-wide migration from Universal Analytics to GA4',
      'Implemented A/B testing infrastructure with GrowthBook + GA',
    ],
    tags: ['React', 'TypeScript', 'Redux-Saga', 'Webpack', 'Storybook', 'Jest'],
  },
  {
    period: 'Oct 2017 — May 2018',
    company: 'GBSFO',
    role: 'Fullstack JS Developer (MERN)',
    desc: 'Sole developer on an analytics dashboard SPA. Built the full MERN stack from scratch — REST API, MongoDB data layer, React frontend.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
  },
  {
    period: 'Dec 2013 — Jun 2017',
    company: 'Radaris',
    role: 'Senior Front End / UI Developer',
    desc: 'People search platform — UI development across the main platform and a network of regional satellite sites.',
    tags: ['JavaScript', 'Backbone.js', 'jQuery', 'Webpack'],
  },
  {
    period: 'Jan 2012 — Oct 2013',
    company: 'Comodo',
    role: 'Front End / UI Developer',
    desc: 'Shared UI component library for multiple Comodo security products — Antispam Gateway, Network Center and others.',
    tags: ['JavaScript', 'jQuery', 'HTML', 'CSS'],
  },
]
