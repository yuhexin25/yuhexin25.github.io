# World Cup aviation data

Processed data used by `src/pages/research/world-cup-air-travel-network.astro`.

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
