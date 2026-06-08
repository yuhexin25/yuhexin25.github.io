export const projects = [
  {
    title: 'U.S. Airline Hub Atlas',
    year: '2026',
    description:
      'Interactive visualization of U.S. airline hub-and-spoke networks, exploring airport connectivity and regional access through geographic visualization.',
    tags: ['aviation', 'network analysis', 'geovisualization'],
    image: 'project-previews/hub-atlas.svg',
    imageAlt: 'Stylized route map preview for the U.S. Airline Hub Atlas project.',
    href: 'https://yuhexin25-oss.github.io/us-airline-hub-atlas/',
    githubHref: 'https://github.com/yuhexin25-oss/us-airline-hub-atlas',
  },
  {
    title: 'U.S. Flight Delay Analysis',
    year: '2026',
    description:
      'Exploratory analysis of U.S. flight delays, cancellations, and disruption patterns using public aviation datasets.',
    tags: ['flight delay', 'BTS data', 'transportation analytics'],
    image: 'project-previews/flight-delay.svg',
    imageAlt: 'Stylized dashboard preview for the U.S. Flight Delay Analysis project.',
    href: 'https://yuhexin25-oss.github.io/usflightdelay/',
    githubHref: 'https://github.com/yuhexin25-oss/usflightdelay',
  },
  {
    title: 'Live Delay Analysis / Route Risk',
    year: '2026',
    description:
      'A real-time aviation analytics prototype for monitoring route risk, airport congestion, and possible delay propagation.',
    tags: ['real-time mapping', 'API', 'aviation operations'],
    image: 'project-previews/route-risk.svg',
    imageAlt: 'Stylized live route risk map preview with airport nodes and alerts.',
    href: 'https://yuhexin25-oss.github.io/livedelayanalysis/',
    githubHref: 'https://github.com/yuhexin25-oss/livedelayanalysis',
  },
];

export const projectsByYear = projects.reduce<Record<string, typeof projects>>((groups, project) => {
  groups[project.year] = groups[project.year] || [];
  groups[project.year].push(project);
  return groups;
}, {});
