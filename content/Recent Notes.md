---
publish: true
created: 2026-08-08T00:41:36.793Z
modified: 2026-08-08T00:51:40.612Z
published: 2026-08-08T00:51:40.612Z
unlisted: "true"
---

```base
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
