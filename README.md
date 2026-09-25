# Sudan states and cities
![Sudan](https://raw.githubusercontent.com/hassankotti/sql-sudanese-cities/c1ffcbba89fe6a6cf932d6572a5ee38b06a27615/assets/sudan.svg)

## What is this ?
This is a SQL dump of the whole list of Sudanese cities with the State they belong to, in a sister table.

## How to use it ?
Just import the two files ```states.sql``` and ```cities.sql``` (in this order) into your database and get to work !

## Project Development

This repository is being developed in phases to establish a reliable geographic foundation for an interactive Sudanese cities GIS application.

### Phase 1 — Data & Geographic Foundation

The first phase focuses on validating and preparing the geographic data before building the interactive map.

#### Data audit

The repository contains two city datasets:

- `sql/cities.sql` — 33 Sudanese city records
- `json/cities.json` — 4,639 records

Repository history showed that the 4,639-record JSON dataset originated from the earlier dataset in the project history and does not represent the current Sudanese city dataset. It is therefore not being merged into the Sudan city dataset at this stage.

#### State ID normalization

The original SQL city records used zero-based state indexes (`0–17`), while `sql/state.sql` uses state IDs (`1–18`).

The SQL city records have now been normalized so that:

    cities.state_id = states.id

The complete conversion is documented in `docs/state_id_mapping.md`.

This is important because it establishes a direct and unambiguous relationship between each city and its parent state, providing a cleaner foundation for the GIS database, application queries, APIs, and future geographic layers.

#### Phase 1 remaining work

- Validate canonical state names
- Validate city names and state assignments
- Identify duplicate and missing city records
- Validate city coordinates
- Establish geographic boundary sources
- Validate the completed geographic dataset
- Document data sources and methodology
- Run final Phase 1 tests
