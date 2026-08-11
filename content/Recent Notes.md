---
publish: true
created: 2026-08-08T00:41:36.793Z
modified: 2026-08-11T15:40:30.995Z
published: 2026-08-11T15:40:30.995Z
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
  file.ctime:
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
