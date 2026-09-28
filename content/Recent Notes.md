---
publish: true
created: 2026-08-08T00:41:36.793Z
modified: 2026-08-13T12:53:53.953Z
published: 2026-08-13T12:53:53.953Z
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
  Created Date: file.ctime.format("YYYY-MM-DD")
properties:
  file.name:
    displayName: Title
  file.ctime:
    displayName: Created
views:
  - type: table
    name: Recent Notes
    order:
      - file.name
      - formula.Created Date
    sort:
      - property: formula.Created Date
        direction: DESC

```
