---
outline: deep
---

# Data Sources
Some data used by the bot is not stored in the database, but rather in external files. This section explains how to
appropriately manage these files.

## Sources
The bot makes use of data from the following sources:
- [Anime Offline Database](https://github.com/manami-project/anime-offline-database)
- [AniDB](https://anidb.net)
- [VNDB](https://vndb.org)

You should be aware of the licenses of these sources before using them. AniDB in particular
requests that you do not download their dump more than once every 24 hours.

## Default Path
By default, all data will be stored in the `data` directory in the current working directory.
These can be safely deleted and will be re-downloaded on startup. 

This is important to note, as **the bot will not automatically update the data files.**

## Index Files
The bot uses bluge indexes to search for anime and visual novels. 
You will find these in your working directory under as `*-index.bluge`. These
directories can be safely deleted and will be re-created on startup, however,
they **should not be deleted while the bot is running**.