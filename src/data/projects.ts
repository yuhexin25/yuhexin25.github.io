export const projects = [
  {
    title: 'U.S. Airline Hub Atlas',
    year: '2026',
    description:
      'Interactive visualization of U.S. airline hub-and-spoke networks, exploring airport connectivity and regional access through geographic visualization.',
    researchQuestion: 'How do hub-and-spoke structures shape airline connectivity?',
    methods: 'Network analysis, MapLibre, D3',
    data: 'FAA, BTS, airline route data',
    status: 'Published',
    tags: ['aviation', 'network analysis', 'geovisualization'],
    image: 'project-previews/hub-atlas.svg',
    imageAlt: 'Stylized route map preview for the U.S. Airline Hub Atlas project.',
    href: 'https://yuhexin25-oss.github.io/us-airline-hub-atlas/',
    linkLabel: 'View project',
    external: true,
  },
  {
    title: 'U.S. Flight Delay Analysis',
    year: '2026',
    description:
      'Exploratory analysis of U.S. flight delays, cancellations, and disruption patterns using public aviation datasets.',
    researchQuestion: 'Where do delays and cancellations concentrate across the U.S. aviation system?',
    methods: 'Exploratory analysis, delay metrics, data visualization',
    data: 'BTS On-Time Performance data',
    status: 'Published',
    tags: ['flight delay', 'BTS data', 'data analysis'],
    image: 'project-previews/flight-delay.svg',
    imageAlt: 'Stylized dashboard preview for the U.S. Flight Delay Analysis project.',
    href: 'https://yuhexin25-oss.github.io/usflightdelay/',
    linkLabel: 'View analysis',
    external: true,
  },
  {
    title: 'Live Delay Analysis / Route Risk',
    year: '2026',
    description:
      'A real-time aviation analytics prototype for monitoring route risk, airport congestion, and possible delay propagation.',
    researchQuestion: 'How do real-time disruptions affect airport and route reliability?',
    methods: 'API integration, dashboard design, delay risk scoring',
    data: 'FAA, FlightAware and public aviation sources',
    status: 'Active',
    tags: ['real-time mapping', 'API', 'aviation operations'],
    image: 'project-previews/route-risk.svg',
    imageAlt: 'Stylized live route risk map preview with airport nodes and alerts.',
    href: 'https://yuhexin25-oss.github.io/livedelayanalysis/',
    linkLabel: 'Open dashboard',
    external: true,
  },
  {
    title: 'World Cup Air Travel Network',
    year: '2026',
    description:
      'Research-oriented analysis of fan mobility, host-city geography, and airline network responses during FIFA World Cup 2026.',
    researchQuestion: 'How do major sporting events reshape international air mobility?',
    methods: 'GIS, network visualization, comparative case analysis',
    data: 'FIFA host-city data, airline networks, public aviation sources',
    status: 'In Progress',
    tags: ['transportation geography', 'GIS', 'network analysis'],
    image: 'blog/hubs-alliances-world-cup-mobility-hero.png',
    imageAlt: 'North American airline hub network created for the World Cup aviation analysis.',
    href: '/blog/hubs-alliances-world-cup-mobility/',
    linkLabel: 'Read analysis',
    external: false,
  },
];

export const projectsByYear = projects.reduce<Record<string, typeof projects>>((groups, project) => {
  groups[project.year] = groups[project.year] || [];
  groups[project.year].push(project);
  return groups;
}, {});
