---
publish: true
created: 2026-08-08T00:41:36.793Z
modified: 2026-11-22T21:21:08.682Z
published: 2026-11-22T21:21:08.682Z
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
    - '!file.fullname.endsWith("base")'
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
