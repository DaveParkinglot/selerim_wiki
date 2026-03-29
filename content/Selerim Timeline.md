---
Author: Jordan
---
```dataview
TABLE WITHOUT ID display-date as "Date", title as "Event", description as "Description"
from "Selerim Wiki/z_Selerim Timeline Events"
where contains(tags, "timeline")
sort event-date asc
```
