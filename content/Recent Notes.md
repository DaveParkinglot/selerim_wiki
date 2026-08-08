---
publish: true
created: 2026-08-08T00:41:36.793Z
modified: 2026-08-08T01:10:57.981Z
published: 2026-08-08T01:10:57.981Z
unlisted: "true"
---

```base
filters:
  and:
    - '!file.path.contains("z_assets")'
    - file.name != "Recent Notes"
    - file.name != "index"
    - file.path.containsAny("Selerim Wiki/", "content/")
    - file.name != "404"
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
