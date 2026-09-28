# Duplicate and Dataset Completeness Validation

## Purpose

Phase 1 checks the current city dataset for duplicate records,
missing records, invalid relationships, and basic geographic
completeness indicators.

This validation covers the internal integrity of the current
33-city dataset. It does not claim that the dataset is a complete
gazetteer of every city or settlement in Sudan.

## Dataset Counts

- States: 18
- Cities: 33
- Unique city IDs: 33
- City IDs: 1–33

## Duplicate Detection

No duplicate city IDs were found.

No normalized duplicate English city names were found.

No normalized duplicate Arabic city names were found.

No exact duplicate latitude/longitude pairs were found.

## Record Completeness

All 33 city records contain:

- An English name
- An Arabic name
- A state ID
- A latitude
- A longitude

All city state IDs reference one of the 18 states in `sql/state.sql`.

No city IDs are missing from the sequence 1–33.

## State Coverage

Every one of the 18 states has at least one city record.

| State | City Count |
|---|---:|
| Sennar | 2 |
| Khartoum | 3 |
| River Nile | 5 |
| Red Sea | 3 |
| Northern | 1 |
| North Darfur | 1 |
| Kassala | 1 |
| Al Qdarif | 1 |
| Blue Nile | 2 |
| White Nile | 3 |
| North Kurdofan | 2 |
| South Kurdofan | 1 |
| West Darfur | 1 |
| East Darfur | 1 |
| South Darfur | 1 |
| Central Darfur | 1 |
| West Kurdofan | 2 |
| Al Jazeera | 2 |

## Coordinate Screening

All coordinates contain valid latitude and longitude values.

All 33 records fall within the broad screening bounding box used for
this validation:

- Latitude: 8° to 23° N
- Longitude: 21° to 39° E

This is only a plausibility screen. It does not establish that each
individual coordinate is accurate or that each point lies inside the
official Sudan boundary.

Individual coordinate validation remains a separate Phase 1 task.

## Dataset Scope

The validation establishes that the current 33-city dataset is
internally consistent and has representation from all 18 states.

It does **not** establish that the 33 records represent every city,
town, locality, or settlement in Sudan.

A broader geographic source and explicit inclusion criteria are
required before the dataset can be described as nationally complete.

## Result

No duplicate, missing-record, invalid-reference, or basic coordinate
plausibility issues were identified.

No changes to `sql/cities.sql` were required from this validation.
