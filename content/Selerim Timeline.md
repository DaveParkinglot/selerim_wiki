```dataview
table title as "Event", event-date as "Date", summary as "Summary"
from "Selerim Timeline Events"
where contains(tags, "timeline")
sort event-date asc
```
