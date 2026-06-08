export const libraryCategories = [
  {
    name: 'Industry Reports',
    description: 'Operational, market, emissions, and performance reports from aviation data and public agencies.',
    sources: [
      { name: 'Cirium', slug: 'cirium' },
      { name: 'IATA', slug: 'iata' },
      { name: 'FAA', slug: 'faa' },
      { name: 'BTS', slug: 'bts' },
      { name: 'FlightAware', slug: 'flightaware' },
    ],
  },
  {
    name: 'News & Analysis',
    description: 'Reported aviation stories and industry analysis that reveal market, policy, and operations questions.',
    sources: [
      { name: 'CBS News', slug: 'cbs-news' },
      { name: 'Reuters', slug: 'reuters' },
      { name: 'Aviation Week', slug: 'aviation-week' },
      { name: 'Simple Flying', slug: 'simple-flying' },
    ],
  },
  {
    name: 'Academic Literature',
    description: 'Research journals and scholarly work on aviation, transportation networks, and air transport systems.',
    sources: [
      { name: 'Transportation Research Journals', slug: 'transportation-research-journals' },
      { name: 'Air Transport Management Journals', slug: 'air-transport-management-journals' },
    ],
  },
];

export const librarySources = libraryCategories.flatMap((category) =>
  category.sources.map((source) => ({
    ...source,
    category: category.name,
  })),
);

export const getLibrarySource = (slug: string) => librarySources.find((source) => source.slug === slug);
