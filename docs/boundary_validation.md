# State Boundary Source and Validation

## Purpose

Phase 1 establishes a reliable geographic foundation for the Sudanese
cities GIS map.

This document records the administrative boundary source selected for
the project and the relationship between the project's existing
18-state model and the current boundary dataset.

## Boundary Source

Administrative boundaries are sourced from the United Nations Office for
the Coordination of Humanitarian Affairs (OCHA) / Humanitarian Data
Exchange (HDX) dataset:

**Sudan - Subnational Administrative Boundaries**

Dataset identifier:

`cod-ab-sdn`

The current dataset provides several formats. Phase 1 inspected the
GeoJSON distribution:

`sdn_admin_boundaries.geojson.zip`

The Level-1 boundary file used for validation is:

`sdn_admin1.geojson`

Source:

https://data.humdata.org/dataset/cod-ab-sdn

## Source Validation

The downloaded GeoJSON archive was tested before use.

The archive contained:

- `sdn_admin0.geojson`
- `sdn_admin1.geojson`
- `sdn_admin2.geojson`
- `sdn_adminpoints.geojson`
- `sdn_adminlines.geojson`

The compressed archive passed integrity testing with no extraction
errors.

The Level-1 dataset contains:

**19 features**

All 19 Level-1 features use Polygon geometry.

## Level-1 Features

The source contains the project's 18 Sudanese states plus one additional
Level-1 geographic feature:

| OCHA P-code | OCHA name |
|---|---|
| SD19 | Abyei PCA |
| SD15 | Aj Jazirah |
| SD08 | Blue Nile |
| SD06 | Central Darfur |
| SD05 | East Darfur |
| SD12 | Gedaref |
| SD11 | Kassala |
| SD01 | Khartoum |
| SD02 | North Darfur |
| SD13 | North Kordofan |
| SD17 | Northern |
| SD10 | Red Sea |
| SD16 | River Nile |
| SD14 | Sennar |
| SD03 | South Darfur |
| SD07 | South Kordofan |
| SD04 | West Darfur |
| SD18 | West Kordofan |
| SD09 | White Nile |

## Project State Mapping

The project's existing `states.id` values are retained. OCHA P-codes
provide the external geographic identifier for the corresponding
boundary.

| Project ID | Project state | OCHA name | OCHA P-code |
|---:|---|---|---|
| 1 | Sennar | Sennar | SD14 |
| 2 | Khartoum | Khartoum | SD01 |
| 3 | River Nile | River Nile | SD16 |
| 4 | Red Sea | Red Sea | SD10 |
| 5 | Northern | Northern | SD17 |
| 6 | North Darfur | North Darfur | SD02 |
| 7 | Kassala | Kassala | SD11 |
| 8 | Al Qdarif | Gedaref | SD12 |
| 9 | Blue Nile | Blue Nile | SD08 |
| 10 | White Nile | White Nile | SD09 |
| 11 | North Kurdofan | North Kordofan | SD13 |
| 12 | South Kurdofan | South Kordofan | SD07 |
| 13 | West Darfur | West Darfur | SD04 |
| 14 | East Darfur | East Darfur | SD05 |
| 15 | South Darfur | South Darfur | SD03 |
| 16 | Central Darfur | Central Darfur | SD06 |
| 17 | West Kurdofan | West Kordofan | SD18 |
| 18 | Al Jazeera | Aj Jazirah | SD15 |

## Naming Differences

The project and boundary source use different English naming conventions
for some states.

Examples include:

- `Al Qdarif` ↔ `Gedaref`
- `North Kurdofan` ↔ `North Kordofan`
- `South Kurdofan` ↔ `South Kordofan`
- `West Kurdofan` ↔ `West Kordofan`
- `Al Jazeera` ↔ `Aj Jazirah`

These differences do not indicate different states.

The project keeps its existing state names at this stage. The OCHA name
and P-code are recorded as the external boundary-source identifiers.

## Abyei PCA

The OCHA Level-1 dataset contains an additional feature:

`SD19 | Abyei PCA`

Abyei PCA is not added to the project's existing 18-state relational
model in Phase 1.

This is intentional.

The project currently models the 18 states represented in
`sql/state.sql`. Adding a 19th state merely because it appears in an
external boundary dataset would change the project's administrative
model without first establishing the appropriate data and product
requirements.

For now, Abyei PCA is documented as an additional geographic feature in
the boundary source.

Its treatment in the interactive map can be decided during the
application/schema design phase.

## Boundary Scope

The boundary source provides administrative geographic polygons.

It does not determine:

- which cities belong in the project's city dataset
- whether the current 33 cities constitute a complete national
  gazetteer
- the canonical English or Arabic spelling of every city
- the application's final database schema
- the final map interaction model

Those questions are handled by separate Phase 1 validation work or by
the later application design phase.

## Why This Matters

The boundary source establishes a verified geographic foundation for the
interactive map.

Using an external administrative boundary dataset also means the map
does not need to infer state shapes from city coordinates.

The verified relationship is:

    project state → OCHA P-code → administrative boundary

This provides a stable path for connecting the project's city records
to geographic state boundaries during later application development.

## Phase 1 Result

The current boundary source has been identified, downloaded, integrity
checked, extracted, and inspected.

Result:

- 19 OCHA Level-1 features verified
- 18 project states mapped to OCHA P-codes
- 1 additional Abyei PCA feature documented separately
- Boundary geometry confirmed as Polygon
- Naming differences documented
- No project schema changes made at this stage

The GeoJSON boundary files are not yet committed to the repository.
The source and mapping are documented first so that the final boundary
representation can be selected deliberately during application/schema
design.
