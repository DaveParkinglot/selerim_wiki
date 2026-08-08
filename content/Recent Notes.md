---
publish: true
created: 2026-08-08T00:41:36.793Z
modified: 2026-08-08T01:40:34.396Z
published: 2026-08-08T01:40:34.396Z
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
      - file.ctime
    sort:
      - property: file.ctime
        direction: DESC

```
