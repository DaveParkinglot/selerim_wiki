---
Author: Jordan
image: "[[timeline_icon.png]]"
---
```dataview
TABLE WITHOUT ID display-date as "Date", title as "Event", description as "Description"
from "Selerim Wiki/z_Selerim Timeline Events"
where contains(tags, "timeline")
sort event-date desc
```
