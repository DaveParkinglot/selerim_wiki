---
Author: Jordan
Type:
  - Town
founded_year: 104
Population: 500
Affiliation:
  - None
Government:
  - Breakwater Family
marker:
  - coordinates: 650, 1090
    icon: game-icons:anchor
    colour: "#cfb53b"
    minZoom: -4
    mapName: Summer_Lands_Map
Appearances:
  - "[[The Hidden Hoard of Winchester Bone]]"
  - "[[Sharky's Revenge]]"
  - "[[Bootknife's Bounty]]"
aliases:
tags:
  - Settlement
---
> [!infobox|right]
> ## Breakwater Cove
> ![[breakwater_cove.png|500]]
> ## Details
> 
>**Type**: `= join(this.Type, ", ")`
>
>**Age:** `= regexreplace(string([[World Overview]].current_year - this.founded_year), "\B(?=(\d{3})+(?!\d))", ",")` years
>
>**Population**: `= regexreplace(string(this.population), "\B(?=(\d{3})+(?!\d))", ",")`
>
>**Affiliation**: `= join(this.Affiliation, ", ")`
>
>**Government:** `= join(this.Government, ", ")`
>
>**Appearances:** `= join(this.Appearances, ", ")`

# Overview
Small port town originally founded by the Breakwater family.

# Attributes
- **Appearance**: (Architecture, landscape, or vibe)
- **Economy/Resources**: (What it produces, trades, or lacks)
- **Dangers/Secrets**: (Rumors, threats, hidden lore)
- **Points of Interest**:
	- Bone Tavern

# Hooks
- Bone Tavern is always on the brink of going out of business, and [[Captain Winchester Bone]] always has odd jobs.