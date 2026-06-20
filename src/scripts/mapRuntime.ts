import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const STYLE_URL = 'https://demotiles.maplibre.org/style.json';

type MapNode = HTMLElement & { dataset: DOMStringMap & { config?: string; mapReady?: string; mapLoaded?: string } };

function readConfig(node: MapNode) {
  if (!node.dataset.config) throw new Error('Map configuration is missing.');
  return JSON.parse(decodeURIComponent(node.dataset.config));
}

function showFailure(node: MapNode, error: unknown) {
  console.error('Map failed to initialize:', error);
  node.classList.add('map-unavailable');
  node.closest('figure')?.querySelector<HTMLElement>('[data-map-fallback]')?.removeAttribute('hidden');
}

function prepareMap(node: MapNode, config: any, defaultCenter: [number, number], defaultZoom: number) {
  const map = new maplibregl.Map({
    container: node,
    style: STYLE_URL,
    center: config.center ?? defaultCenter,
    zoom: config.zoom ?? defaultZoom,
    attributionControl: true,
  });

  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  return map;
}

function pointCollection(points: any[]) {
  return {
    type: 'FeatureCollection' as const,
    features: points.map((point) => ({
      type: 'Feature' as const,
      properties: {
        label: point.label,
        detail: point.detail ?? '',
        color: point.color ?? '#d99a2b',
        size: point.size ?? 7,
      },
      geometry: { type: 'Point' as const, coordinates: [point.lon, point.lat] },
    })),
  };
}

function lineCollection(lines: any[]) {
  return {
    type: 'FeatureCollection' as const,
    features: lines.map((line) => ({
      type: 'Feature' as const,
      properties: { color: line.color ?? '#527ca8', width: line.width ?? 2 },
      geometry: { type: 'LineString' as const, coordinates: line.coordinates },
    })),
  };
}

function addPoints(map: maplibregl.Map, points: any[], prefix: string) {
  const sourceId = `${prefix}-points`;
  map.addSource(sourceId, { type: 'geojson', data: pointCollection(points) });
  map.addLayer({
    id: sourceId,
    type: 'circle',
    source: sourceId,
    paint: {
      'circle-radius': ['get', 'size'],
      'circle-color': ['get', 'color'],
      'circle-stroke-color': '#ffffff',
      'circle-stroke-width': 1.5,
    },
  });
  map.addLayer({
    id: `${prefix}-labels`,
    type: 'symbol',
    source: sourceId,
    layout: { 'text-field': ['get', 'label'], 'text-size': 11, 'text-offset': [0, 1.25], 'text-anchor': 'top' },
    paint: { 'text-color': '#172033', 'text-halo-color': '#ffffff', 'text-halo-width': 1.5 },
  });
  map.on('click', sourceId, (event) => {
    const feature = event.features?.[0];
    if (!feature) return;
    const properties = feature.properties ?? {};
    new maplibregl.Popup()
      .setLngLat(event.lngLat)
      .setText([properties.label, properties.detail].filter(Boolean).join('\n'))
      .addTo(map);
  });
  map.on('mouseenter', sourceId, () => { map.getCanvas().style.cursor = 'pointer'; });
  map.on('mouseleave', sourceId, () => { map.getCanvas().style.cursor = ''; });
}

function addLines(map: maplibregl.Map, lines: any[], prefix: string) {
  if (!lines.length) return;
  const sourceId = `${prefix}-routes`;
  map.addSource(sourceId, { type: 'geojson', data: lineCollection(lines) });
  map.addLayer({
    id: sourceId,
    type: 'line',
    source: sourceId,
    paint: {
      'line-color': ['get', 'color'],
      'line-width': ['get', 'width'],
      'line-opacity': 0.72,
    },
  }, `${prefix}-points`);
}

function initialize(node: MapNode, build: (map: maplibregl.Map, config: any) => void, center: [number, number], zoom: number) {
  if (node.dataset.mapReady) return;
  node.dataset.mapReady = 'initializing';

  try {
    const config = readConfig(node);
    const map = prepareMap(node, config, center, zoom);
    let loaded = false;

    map.once('load', () => {
      try {
        build(map, config);
        if (config.bounds) map.fitBounds(config.bounds, { padding: 42, duration: 0 });
        loaded = true;
        node.dataset.mapLoaded = 'true';
        node.dataset.mapReady = 'true';
        node.classList.add('map-loaded');
        node.closest('figure')?.querySelector<HTMLElement>('[data-map-fallback]')?.setAttribute('hidden', '');
        requestAnimationFrame(() => map.resize());
      } catch (error) {
        showFailure(node, error);
      }
    });

    map.on('error', (event) => {
      console.error('MapLibre error:', event.error ?? event);
      if (!loaded) showFailure(node, event.error ?? event);
    });
  } catch (error) {
    showFailure(node, error);
  }
}

export function initWorldCupMaps() {
  document.querySelectorAll<MapNode>('[data-world-cup-map]').forEach((node) => {
    initialize(node, (map, config) => {
      addPoints(map, config.points, node.id);
      addLines(map, config.lines ?? [], node.id);
    }, [-98, 38], 2.6);
  });
}

export function initFlowMaps() {
  document.querySelectorAll<MapNode>('[data-flow-map]').forEach((node) => {
    initialize(node, (map, config) => {
      addPoints(map, config.points, node.id);
      const lines = config.flows.map((flow: any) => ({
        coordinates: [[flow.from.lon, flow.from.lat], [flow.to.lon, flow.to.lat]],
        color: flow.color,
        width: flow.width,
      }));
      addLines(map, lines, node.id);
    }, [-55, 40], 1.5);
  });
}
