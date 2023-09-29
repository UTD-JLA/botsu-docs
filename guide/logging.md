---
outline: deep
---

# Logging
This section covers everything you need to know to get started with logging. The most basic
way of logging is with the `/log manual` command, which will prompt you for all of the information.

## Arguments
Here is an explanation of some of the arguments that you may be asked to provide when logging.

### Date
The date argument is used to specify the date that the log is recorded for. This argument works for various date formats,
however, the following format is recommended: `YYYY-MM-DD HH:MM` or `YYYY-MM-DD`.

If no date is provided, the current date will be used.

The date will parse based on either the server's timezone or your user's timezone, if either is set (see [config](/guide/config) for more info).

### Duration
Any argument which asks for an explicit duration expects a number in **minutes**.

### Speeds
Unless stated otherwise, any argument which asks for a speed expects a number in units per minute (e.g. pages per minute).

## Log Shortcuts
The log subcommands are broken down into media types, as well as a `custom` subcommand for logging custom media.
Selecting the appropriate media type will allow you to log appropriate information for that media type.

Shortcuts will do time calculations for you, as well as setting the appropriate media type.

Here are the available shortcuts:

- `/log anime` - Log anime episodes.
- `/log manga` - Log manga pages.
- `/log book` - Log book pages.
- `/log video` - Log video time.


### Duration Conversions

It is important to know what the base unit of each media type is, as this will affect how the time is calculated.

Shortcut | Unit     | Base Conversion (to minutes)
-------- | -------- | -----------------------------
`anime`  | Episodes | 24
`manga`  | Pages    | 1/2
`book`   | Pages    | 1/2
`visual novel` | Characters | 1/200

These conversions are subject to change, but will be updated here if they do.

### Custom Conversions
You can change the default behavior by setting your reading speed for each media type. See more info on the [config](/guide/config) page.

### Video URLs

The `video` shortcut will accept any **URL** (does not work with video IDs) that is supported by the [yt-dlp](https://github.com/yt-dlp/yt-dlp) library.
It is important to note that there is no guarantee that a given URL will produce output consistent with what you would expect
from yt-dlp. 

## Deleting Logs
To undo the last logged activity, use the `/undo` command. This will delete the last log that you made.
Alternatively, you can use the `/undo {id}` command to delete a specific log.

Please not that undoing a log **does not guarantee that the log will be deleted from the database**. 

## Log Components
There are a few key components to every log entry, if these are not explicitly provided,
you may assume that the information is being provided on your behalf.
- **ID** - Every log entry has an ID. This is used to identify the log entry.
- **Title** - Every log entry has a title. This is typically the name of the media you are logging.
- **Timestamp** - Every log entry has a timestamp. This is the time that the log is recorded for.
- **Duration** - Every log entry has a duration. This is the amount of time that you spent on the media.

### Metadata
Depending on how you log, you may also have metadata associated with your log entry. This metadata is used to
provide additional information about the media you are logging. 

One example of rich media is a YouTube video. When you log a YouTube video, the video's title, thumbnail, and URL will be embedded into
your log entry. This allows you to easily share the media you've consumed with others.

For more info, see the [Activity](/reference/activity) reference page.
