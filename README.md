# Sudan States and Cities

![Sudan](https://raw.githubusercontent.com/hassankotti/sql-sudanese-cities/c1ffcbba89fe6a6cf932d6572a5ee38b06a27615/assets/sudan.svg)

## What is this?

This project started as a SQL dataset of Sudanese cities and the
states they belong to.

It is now being developed into the data and geographic foundation for
an **interactive GIS map of Sudanese cities and states**.

The project focuses specifically on:

* Sudanese states
* Sudanese cities
* City-to-state relationships
* Geographic coordinates
* Administrative boundaries
* Geographic grouping for map navigation and visualization

The project does **not** use financial or municipal-finance data. Its
focus is geographic exploration of Sudan's cities and administrative
areas.

## How to use it

The original dataset can be imported into a relational database using
the SQL files in the `sql/` directory.

The state table should be created before the city table so that the
state/city relationship can be established.

The repository is currently being developed in phases. The existing SQL
data has been validated and normalized as part of Phase 1, while the
interactive application itself will be developed in a later phase.

---

# Project Development

The repository is being developed in phases to establish a reliable
geographic foundation before building the interactive GIS application.

## Phase 1 — Data & Geographic Foundation

Phase 1 focused on understanding, validating, and preparing the
existing data before introducing the interactive map or changing the
database architecture.

### 1. Existing dataset audit

The repository contains two city datasets:

* `sql/cities.sql` — 33 Sudanese city records
* `json/cities.json` — 4,639 records

Repository history showed that the 4,639-record JSON dataset originated
from the earlier dataset in the project history and does not represent
the current Sudanese city dataset.

It has therefore **not** been merged into the current Sudanese city
dataset.

This distinction is important because increasing the number of records
without establishing what the records represent would undermine the
reliability of the geographic dataset.

### 2. State ID normalization

The original SQL city records used zero-based state indexes (`0–17`),
while `sql/state.sql` uses state IDs (`1–18`).

The city records were normalized so that:

```text
cities.state_id = states.id
```

The complete conversion is documented in:

`docs/state_id_mapping.md`

This establishes a direct and unambiguous relationship between each
city and its parent state.

### 3. Geographic grouping

The 18 states were classified into derived geographic groups for
future map navigation and visualization.

The current groups are:

* Northern
* Northeast
* Central
* Central / Southeast
* East / Southeast
* Kordofan
* Darfur

These groups are a visualization and navigation layer. They are not an
additional official administrative level and do not replace the 18
states.

The full state-to-group mapping is documented in:

`docs/geographic_grouping.md`

No `region_id` has been added to the database during Phase 1. The
database architecture and whether geographic groups should become a
formal schema relationship will be evaluated during Phase 2.

### 4. City/state relationship validation

The city records were checked against independent geographic references
to validate their state assignments.

Five incorrect assignments were identified and corrected:

* Atbara → River Nile
* Ed Damer → River Nile
* Abu Hamad → River Nile
* Berber → River Nile
* Rabak → White Nile

After correction:

* all 33 city records reference valid state IDs
* all 18 states are represented
* no invalid state references remain

The validation methodology and corrections are documented in:

`docs/city_state_validation.md`

### 5. City-name validation

City names were reviewed against independent geographic references,
while avoiding unnecessary changes to established transliterations.

Four English names were normalized:

| Previous form | Current form |
| ------------- | ------------ |
| Sannār        | Sennar       |
| An Nuhūd      | En Nahud     |
| EdDamer       | Ed Damer     |
| Ad Diwem      | Al Dewaym    |

Other documented transliteration forms, including `Kūstī`,
`Al Manāqil`, and `Abū Ḩamad`, were retained.

Arabic names and coordinates were not changed as part of this
validation.

The methodology and changes are documented in:

`docs/city_name_validation.md`

### 6. Duplicate and dataset completeness validation

The current SQL dataset was checked as a single combined diagnostic for
duplicate records and internal completeness.

The result:

* 18 states
* 33 cities
* 33 unique city IDs
* sequential city IDs from 1–33
* no duplicate English names
* no duplicate Arabic names
* no duplicate coordinate pairs
* no missing city names
* no invalid state references
* all 18 states represented

The coordinates also passed basic numerical and broad Sudan geographic
plausibility checks.

This validation is documented in:

`docs/duplicate_and_completeness_validation.md`

Importantly, this establishes **internal completeness and consistency
of the current 33-record dataset**. It does not establish that the
dataset contains every city, town, or locality in Sudan.

A broader national city inventory will require an explicit inclusion
criteria and an appropriate geographic source.

### 7. Coordinate validation

The existing city coordinates were validated against independent
geographic references.

The review confirmed that the coordinates correspond to the named
cities and that no coordinate corrections were required.

The existing values were therefore preserved rather than replaced with
new coordinates simply because other sources may provide slightly
different reference points.

This distinction matters because small coordinate differences can
represent different geographic reference points within the same
populated place.

The methodology and scope of the validation are documented in:

`docs/coordinate_validation.md`

### 8. Administrative boundary source

A geographic boundary source was investigated and validated for the
future GIS map.

The selected source is the **Sudan - Subnational Administrative
Boundaries** dataset provided through the Humanitarian Data Exchange
(HDX).

The current GeoJSON distribution contains:

* `sdn_admin0.geojson`
* `sdn_admin1.geojson`
* `sdn_admin2.geojson`
* `sdn_adminpoints.geojson`
* `sdn_adminlines.geojson`

The Level-1 boundary file was inspected and contains **19 polygon
features**.

Eighteen correspond to the project's existing 18-state model.

The additional feature is:

```text
SD19 — Abyei PCA
```

Abyei PCA has been documented separately rather than being added as a
19th state to the project's existing relational model.

The 18-state mapping between the project and the OCHA boundary source
has also been established using OCHA P-codes.

The boundary source, mapping, naming differences, and Abyei treatment
are documented in:

`docs/boundary_validation.md`

The boundary GeoJSON has **not** yet been committed to the repository.
The source and mapping are being documented first so that the final
boundary representation can be selected deliberately during the
application and schema design phase.

---

## Phase 1 Result

Phase 1 has established a validated geographic foundation for the
interactive Sudanese cities map.

The work completed includes:

* auditing the existing city datasets
* normalizing city/state IDs
* documenting geographic groupings
* validating city/state assignments
* correcting five incorrect city/state relationships
* validating city naming
* normalizing four English city names
* checking duplicate records
* checking internal dataset completeness
* validating coordinate plausibility
* validating existing city coordinates
* identifying and validating an administrative boundary source
* mapping the project's 18 states to OCHA boundary P-codes
* documenting the additional Abyei PCA boundary feature
* documenting the methodology and limitations of the Phase 1 work

The current validated SQL dataset contains:

**18 states and 33 city records.**

The dataset is internally consistent, but the project does **not yet
claim that these 33 records represent every city or locality in Sudan**.

That broader question will be addressed separately from internal data
validation.

---

## Phase 2 — Application & GIS Architecture

With the geographic foundation established, Phase 2 will focus on the
application itself.

Before implementation, the project will investigate and define:

* database/application architecture
* boundary storage and delivery format
* city-to-boundary relationships
* GIS/map technology
* interactive map behavior
* state and city navigation
* geographic grouping behavior
* filtering and search
* API requirements
* frontend/backend responsibilities

The goal is to make these architectural decisions based on the
validated Phase 1 data rather than prematurely restructuring the
database.

---

## Documentation

Phase 1 documentation is organized under `docs/`:

| Document                                   | Purpose                                         |
| ------------------------------------------ | ----------------------------------------------- |
| `state_id_mapping.md`                      | State ID normalization                          |
| `geographic_grouping.md`                   | Derived geographic groups                       |
| `city_state_validation.md`                 | City/state relationship validation              |
| `city_name_validation.md`                  | City-name validation and normalization          |
| `duplicate_and_completeness_validation.md` | Duplicate and internal completeness checks      |
| `coordinate_validation.md`                 | City coordinate validation                      |
| `boundary_validation.md`                   | Administrative boundary source and OCHA mapping |

EOF
