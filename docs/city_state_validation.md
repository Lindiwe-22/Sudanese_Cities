# City and State Validation

## Purpose

Phase 1 validates that each city in `sql/cities.sql` is assigned to
the correct Sudanese state.

The validation was performed after normalizing `cities.state_id` to
match the one-based IDs in `sql/state.sql`.

## Dataset Baseline

- States: 18
- Cities: 33
- City IDs: 1–33
- All city `state_id` values reference an existing state ID.

## Corrections

Five city/state assignments in the original dataset were incorrect.

| City ID | City | Original State | Correct State |
|---:|---|---|---|
| 18 | Atbara | Blue Nile | River Nile |
| 21 | EdDamer | Blue Nile | River Nile |
| 25 | Abū Ḩamad | Blue Nile | River Nile |
| 26 | Berber | Blue Nile | River Nile |
| 29 | Rabak | Northern | White Nile |

### River Nile corrections

Atbara, Ed Damer, Abu Hamad, and Berber are geographically
associated with the River Nile state.

These four records had originally been assigned to Blue Nile.

### White Nile correction

Rabak is geographically associated with White Nile.

The original record assigned Rabak to Northern.

## Validation Result

After correction:

- 33 city records remain in the dataset.
- All 33 cities reference one of the 18 valid state IDs.
- No city has an unknown state ID.
- The five identified state-assignment errors have been corrected.
- City names and coordinates have not been changed as part of this
  validation step.

## Scope Boundary

This document validates city-to-state relationships only.

The following remain separate Phase 1 tasks:

- Canonical English city names
- Arabic city names
- Duplicate detection
- Coordinate validation
- Geographic boundary data
- Complete dataset coverage

Those fields will not be changed based solely on this validation.

## Sources

Geographic administrative references used during validation include
GeoNames administrative and place records for Sudan.

The external geographic reference was used to verify the relationship
between the city and its administrative state; it was not used to
replace the repository's entire city dataset.
