```dataview
TABLE WITHOUT ID display-date as "Date", title as "Event", description as "Description"
from "Selerim Wiki/Selerim Timeline Events"
where contains(tags, "timeline")
sort event-date asc
```
