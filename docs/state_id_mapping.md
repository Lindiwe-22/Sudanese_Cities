# State ID Conversion

The original `sql/cities.sql` uses a zero-based `state_id` index,
while `sql/state.sql` uses one-based state IDs.

Phase 1 normalizes `cities.state_id` so that it directly references
the corresponding `states.id`.

| Original city state_id | Normalized states.id | State |
|---:|---:|---|
| 0 | 1 | Sennar |
| 1 | 2 | Khartoum |
| 2 | 3 | River Nile |
| 3 | 4 | Red Sea |
| 4 | 5 | Northern |
| 5 | 6 | North Darfur |
| 6 | 7 | Kassala |
| 7 | 8 | Al Qdarif |
| 8 | 9 | Blue Nile |
| 9 | 10 | White Nile |
| 10 | 11 | North Kurdofan |
| 11 | 12 | South Kurdofan |
| 12 | 13 | West Darfur |
| 13 | 14 | East Darfur |
| 14 | 15 | South Darfur |
| 15 | 16 | Central Darfur |
| 16 | 17 | West Kurdofan |
| 17 | 18 | Al Jazeera |

## Why this matters

The normalized relationship is:

    states.id = cities.state_id

This allows cities to reference their parent state directly and
removes the ambiguity created by the original zero-based index.

The normalization does not independently validate city names,
state assignments, coordinates, or geographic boundaries. Those are
separate Phase 1 validation tasks.
