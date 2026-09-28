# City Name Validation

## Purpose

Phase 1 validates the English city names in `sql/cities.sql` and
establishes a consistent display form where authoritative geographic
sources support a different canonical spelling.

This validation does not change city identity, state assignment,
coordinates, or Arabic names.

## Naming Principle

English place names can have multiple transliteration and romanization
forms.

The dataset therefore does not attempt to remove every diacritic or
force every name into one transliteration system.

A name is changed only where the available geographic reference
supports a clearer canonical English display form.

## Validated Changes

| City ID | Previous Name | Canonical Name | Alternate / Previous Form |
|---:|---|---|---|
| 19 | Sannār | **Sennar** | Sennār |
| 20 | An Nuhūd | **En Nahud** | An Nuhūd |
| 21 | EdDamer | **Ed Damer** | EdDamer |
| 22 | Ad Diwem | **Al Dewaym** | Ad Diwem |

## Names Retained

The following names were reviewed but were not changed:

| City ID | Current Name | Reason |
|---:|---|---|
| 8 | Kūstī | A documented English/transliteration form of Kosti. |
| 17 | Al Manāqil | A documented English form of the city's name. |
| 25 | Abū Ḩamad | A documented transliteration form of Abu Hamad. |

These names may have alternate English spellings, but an alternate
spelling alone is not sufficient reason to modify the dataset.

## Arabic Names

Arabic names were not modified during English-name validation.

## Coordinates

Coordinates were not modified during English-name validation.

Coordinate accuracy will be handled as a separate Phase 1 task.

## Result

The city dataset remains at 33 records.

Four English city names were normalized:

- Sannār → Sennar
- An Nuhūd → En Nahud
- EdDamer → Ed Damer
- Ad Diwem → Al Dewaym

No city records were added or removed.

## Source

Geographic place-name references, including GeoNames records for Sudan,
were used to compare English place-name forms and identify documented
alternate spellings.

The purpose of the external reference was name validation, not to
replace the repository dataset wholesale.
