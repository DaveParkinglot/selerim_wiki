---
Author: Jordan
---
```dataview
TABLE WITHOUT ID file.link AS "Name", join(Location, ", ") AS "Location", join(Role, ", ") AS "Role"
FROM ""
WHERE startswith(file.path, "Selerim Wiki/NPCs/")
SORT file.name ASC
```
