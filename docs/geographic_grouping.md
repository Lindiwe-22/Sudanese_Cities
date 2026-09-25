# Sudan Geographic Grouping

## Purpose

The 18 Sudanese states remain the administrative units used by the
dataset.

This document defines a separate geographic grouping used for
visualization, navigation, and filtering in the future GIS
application.

These geographic groups are **not an additional official
administrative level** and do not replace the 18 states.

The intended application hierarchy is:

    Sudan
      → Geographic Group
        → State
          → City

## Geographic Groups

| State ID | State | Geographic Group | Broad Position |
|---:|---|---|---|
| 1 | Sennar | Central / Southeast | Southeast-central |
| 2 | Khartoum | Central | Central |
| 3 | River Nile | Northern | North-central |
| 4 | Red Sea | Northeast | Northeast |
| 5 | Northern | Northern | Far north |
| 6 | North Darfur | Darfur | Northwest |
| 7 | Kassala | Northeast | East |
| 8 | Al Qdarif | East / Southeast | East |
| 9 | Blue Nile | East / Southeast | Southeast |
| 10 | White Nile | Central | South of Khartoum |
| 11 | North Kurdofan | Kordofan | West-central |
| 12 | South Kurdofan | Kordofan | South-central / west |
| 13 | West Darfur | Darfur | West |
| 14 | East Darfur | Darfur | Southeast Darfur |
| 15 | South Darfur | Darfur | Southwest |
| 16 | Central Darfur | Darfur | Central-west |
| 17 | West Kurdofan | Kordofan | Southwest / central-west |
| 18 | Al Jazeera | Central | Central-east |

## Group Summary

### Northern

- Northern
- River Nile

### Northeast

- Red Sea
- Kassala

### Central

- Khartoum
- White Nile
- Al Jazeera

### Central / Southeast

- Sennar

### East / Southeast

- Al Qdarif
- Blue Nile

### Kordofan

- North Kurdofan
- South Kurdofan
- West Kurdofan

### Darfur

- North Darfur
- West Darfur
- Central Darfur
- East Darfur
- South Darfur

## Data Model Principle

Geographic grouping is currently a documented classification only.

A `region_id` or equivalent field will **not** be added to the SQL
schema during Phase 1.

The database schema will be reconsidered during Phase 2, after the
application architecture and GIS data model have been investigated.

## Naming Principle

The geographic grouping is independent of state-name normalization.
State names and aliases will be validated separately before any
canonical naming changes are made to the underlying data.
