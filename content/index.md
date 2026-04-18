---
publish: true
title: Welcome to Selerim
created: 2025-09-29T11:06:14.000-04:00
modified: 2026-04-18T10:35:41.565-04:00
published: 2026-04-18T10:35:41.565-04:00
Author: Jordan
---

> [!Quote|author mark] [[Arctur Execlostrabaum]] <br> Loremaster of Selerim, Headmaster of [[White Grove|White Grove Academy]]
> The world of Selerim is ever-changing, inconsistent, and seemingly always unfinished. Its histories are neither a science, nor are they exact.

```base
views:
  - type: cards
    name: Cards
    filters:
      or:
        - file.name == "World Overview"
        - file.name == "Selerim Timeline"
        - file.name == "Adventure Log"
    sort:
      - property: file.name
        direction: DESC
    image: note.image
    imageAspectRatio: 0.55

```

### Interactive Map of the [[Inhabitable Lands]]:

```base
views:
  - type: leaflet-map
    name: Inhabitable Lands Interactive Map
    mapName: Inhabitable_Lands_Map
    image: z_assets/inhabitable_lands.webp
    height: 600
    minZoom: -3
    maxZoom: 3
    defaultZoom: -2
    zoomDelta: 0.3
    scale: "0.0935"
    unit: mi
```

[[inhabitable_lands.webp|View full map image]]
