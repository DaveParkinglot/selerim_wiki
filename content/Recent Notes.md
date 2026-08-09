---
publish: true
created: 2026-08-08T00:41:36.793Z
modified: 2026-08-09T15:56:27.704Z
published: 2026-08-09T15:56:27.704Z
unlisted: true
---

```base
filters:
  and:
    - '!file.path.contains("z_assets")'
    - file.name != "Recent Notes"
    - file.name != "index"
    - file.name != "404"
    - '!file.path.contains("tags")'
formulas:
  created_date: file.ctime.format("MM/DD/YYYY")
properties:
  file.name:
    displayName: Title
  formula.created_date:
    displayName: Created
views:
  - type: table
    name: Recent Notes
    order:
      - file.name
      - file.ctime
    sort:
      - property: file.ctime
        direction: DESC

```
