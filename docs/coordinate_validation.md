# Coordinate Validation

## Purpose

Phase 1 validates the existing coordinates in `sql/cities.sql`
against independent geographic sources.

The objective is to confirm that each coordinate corresponds to
the named Sudanese city. Existing coordinates are not replaced
simply because another source uses a slightly different point.

Different geographic databases may represent a city using different
reference points, such as a city centre, populated-place centroid,
administrative reference point, or mapped settlement point.

## Validation Result

The current 33 city coordinates were cross-checked against
independent geographic datasets and geographic reference sources.

The coordinates are geographically plausible and correspond to the
named cities.

No coordinate corrections were required.

## Coordinate Source Principle

The repository preserves the existing coordinate values where
independent sources confirm that the point represents the same city
or populated place.

Small differences between sources are treated as normal geographic
reference-point variation rather than errors.

Coordinates are stored as decimal latitude/longitude values.

## Examples of Independent Confirmation

| City | Repository coordinates | Independent reference |
|---|---|---|
| Khartoum | 15.6031, 32.5265 | 15.6031, 32.5265 |
| Omdurman | 15.6835, 32.4629 | 15.6835, 32.4629 |
| Khartoum North | 15.6333, 32.6333 | 15.6333, 32.6333 |
| Port Sudan | 19.6158, 37.2164 | 19.61745, 37.21644 |
| El Obeid | 13.1833, 30.2167 | 13.184, 30.217 |
| Gedaref | 14.0333, 35.3833 | 14.0333, 35.3833 |
| Kosti | 13.1700, 32.6600 | 13.16290, 32.66347 |
| Wad Medani | 14.4000, 33.5100 | 14.4000, 33.5100 |
| Kurmuk | 10.5563, 34.2848 | 10.55662, 34.28495 |
| Zalingei | 12.9092, 23.4706 | 12.90918, 23.47058 |
| Abu Hamad | 19.5370, 33.3260 | approximately 19.5379, 33.3248 |
| Sawakin | 19.1000, 37.3333 | approximately 19.1059, 37.3321 |

These examples demonstrate that the repository coordinates correspond
to the intended populated places. Differences of a few kilometres
can occur between geographic sources because the sources may select
different reference points within the same settlement.

## Scope Limitation

This validation establishes that the existing coordinates correspond
to the named cities.

It does not establish survey-grade positional accuracy.

It also does not establish that the 33-city dataset contains every
city, town, or settlement in Sudan.

Dataset scope and national geographic completeness remain separate
questions.

## Sources

Primary geographic reference:

- GeoNames Sudan geographic database
- GeoNames individual populated-place records

Additional cross-checks:

- World Cities coordinate datasets
- Sudan Meteorological Authority station records
- OpenStreetMap-derived geographic records
- Other geographic reference datasets where required for
  individual locations

## Result

33 city records reviewed.

No coordinate corrections were made.

The existing coordinates are retained for the GIS foundation.

