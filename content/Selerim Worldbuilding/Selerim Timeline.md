```dataview
table event-date as "Date", title as "Event", summary as "Summary"
from "Selerim Timeline Events"
where contains(tags, "timeline")
sort event-date asc
```
