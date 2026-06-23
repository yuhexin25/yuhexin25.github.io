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
    // Placeholder live-page screenshot. Replace with a custom cropped project-output screenshot when available.
    image: 'project-previews/hub-atlas-real.png',
    imageAlt: 'Screenshot of the U.S. Airline Hub Atlas showing routes, hub airports, and network metrics.',
    href: 'https://yuhexin25.github.io/us-airline-hub-atlas/',
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
    // Placeholder operational screenshot. Replace with a custom analysis-output screenshot when available.
    image: 'research/houston-iah-delay.jpg',
    imageAlt: 'Screenshot showing observed airport delay conditions at Houston George Bush Intercontinental Airport.',
    href: 'https://yuhexin25.github.io/usflightdelay/',
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
    // Placeholder live-page screenshot. Replace with a custom cropped dashboard screenshot when available.
    image: 'project-previews/live-delay-page.png',
    imageAlt: 'Screenshot of the Live Flight Delay Analysis project page showing the Hub Resilience Monitor.',
    href: 'https://yuhexin25.github.io/livedelayanalysis/',
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
    // Placeholder live-page screenshot. Replace with a custom cropped article visualization screenshot when available.
    image: 'project-previews/world-cup-article-page.png',
    imageAlt: 'Screenshot of the World Cup aviation blog article page showing the hubs and alliances analysis.',
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
