# World Cup aviation data

Processed data supporting the World Cup aviation posts under `src/pages/blog/`.

## Interactive map files

- `hostCities2026.json`: 16 FIFA host cities, nearby airport codes, match counts, and approximate city coordinates.
- `qatar2022Venues.json`: eight Qatar 2022 stadiums and approximate coordinates.
- `airportHubs.json`: selected U.S. alliance hubs and exploratory connectivity indicators used only in the labeled conceptual comparison.
- `allianceHubs.json`: selected alliance origin gateways, U.S. hubs, airlines, and display colors.
- `houstonCaseStudy.json`: Houston airports, downtown, fan-activity area, stadium, analytical routes, and field-observation timeline.
- `sampleFanCorridors.json`: an explicitly conceptual Germany supporter corridor. It is not passenger tracking or a forecast.

The interactive maps use MapLibre GL JS with OpenFreeMap's public Liberty style. The maps require no API key. D3 renders only the curved alliance and fan-corridor overlays. Coordinates are approximate and intended for regional-scale analysis rather than navigation.

## Sources

- `host-cities.json`: match allocations transcribed from FIFA's official 2026 match schedule, published December 6, 2025. Airport codes and coordinates are analytical additions identifying the major commercial gateways used in the article.
- `faa-2024-enplanements.csv`: FAA CY2024 ACAIS commercial-service enplanements, published September 15, 2025. Enplanements are departing revenue passengers, not aircraft operations.
- `pressure-index.csv`: derived exploratory index for the 11 U.S. host markets.

## Pressure index

`Pressure Index = 100 * (match component + activity component + hub score) / 3`

- Match component: host-city match count divided by the maximum host-city count (9).
- Activity component: associated metro-airport CY2024 enplanements divided by the maximum among U.S. host markets (72,725,989 for JFK + EWR + LGA).
- Hub score: 1.0 when the airport system contains an FAA large hub; 0.5 for a medium hub.

The index gives equal weight to tournament load, baseline passenger scale, and FAA hub class. It is a descriptive screening measure, not a forecast of delay, demand, or airport capacity. It does not include runway configuration, schedule peaking, weather, staffing, international processing, or spare capacity.
