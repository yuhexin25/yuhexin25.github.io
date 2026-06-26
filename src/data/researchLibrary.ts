export const libraryCategories = [
  {
    name: 'FAA / Operations',
    description: 'Operational guidance, live conditions, performance reports, and aviation-system measurements.',
    sources: [
      { name: 'Cirium', slug: 'cirium' },
      { name: 'IATA', slug: 'iata' },
      { name: 'FAA', slug: 'faa' },
      { name: 'FlightAware', slug: 'flightaware' },
    ],
  },
  {
    name: 'BTS / Delay Data',
    description: 'Public datasets and notes on delays, cancellations, traffic, and airline operational performance.',
    sources: [{ name: 'BTS', slug: 'bts' }],
  },
  {
    name: 'Academic Papers',
    description: 'Scholarly work on aviation operations, transportation networks, and air transport management.',
    sources: [
      { name: 'European Physical Journal Special Topics', slug: 'european-physical-journal-special-topics' },
      { name: 'Transportation Research Journals', slug: 'transportation-research-journals' },
      { name: 'Air Transport Management Journals', slug: 'air-transport-management-journals' },
    ],
  },
  {
    name: 'Airline Networks',
    description: 'Sources on route structures, carrier strategy, market access, hubs, and network change.',
    sources: [
      { name: 'CBS News', slug: 'cbs-news' },
      { name: 'Aviation Week', slug: 'aviation-week' },
      { name: 'Simple Flying', slug: 'simple-flying' },
    ],
  },
  {
    name: 'Transportation Geography',
    description: 'Reporting and analysis on accessibility, regional mobility, infrastructure, and spatial change.',
    sources: [{ name: 'Reuters', slug: 'reuters' }],
  },
];

export const librarySources = libraryCategories.flatMap((category) =>
  category.sources.map((source) => ({
    ...source,
    category: category.name,
  })),
);

export const getLibrarySource = (slug: string) => librarySources.find((source) => source.slug === slug);
