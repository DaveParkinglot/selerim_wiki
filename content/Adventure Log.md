---
Author: Jordan
---
# Selerim Adventures
```dataview
TABLE WITHOUT ID file.link AS "Name", choice(in-world-end-date, in-world-start-date + " - " + in-world-end-date, in-world-start-date) AS "In-World Dates", choice(end-date, start-date + " - " + end-date, start-date) as "Session Dates", join(DM, ", ") AS "DM", join(Players, ", ") AS "Players", join(Platform, ", ") AS "Platform", join(Setting, ", ") as "Setting"
FROM ""
WHERE startswith(file.path, "Selerim Wiki/Adventures/") and startswith(Setting, "Selerim")
SORT start-date DESC

```
