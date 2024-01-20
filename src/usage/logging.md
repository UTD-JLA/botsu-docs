# Logging

For basic logging, use `/log manual`. This will prompt you for the required
information. You can also use the `/log` command with a subcommand for your
media type. For example, `/log video` will prompt you for a video URL.

## Logs
A log is simply a record of immersion **time** and associated information,
such as a name, date, media type, media metadata, etc.

Although not all subcommands explicitly require a time as input,
all other forms of logging will be converted to an estimated time
internally. Thus, it is recommended to always provide a time when you
know it, and to configure your [speeds](./configuration.md#speed) for more accurate
estimates.

See the [export](./import-and-export.md#export) section for more details on
working with logs.

## Default Speeds
Although it is recommended to configure your speeds,
here are the default speeds used for each media type:

| Media Type | Conversion Factor | Speed |
| --- | --- | --- |
| `anime` | 24 | - |
| `book` | 1/2 | 2 pages per minute |
| `manga` | 1/2 | 2 pages per minute |
| `vn` | 1/200 | 200 characters per minute |

For anime, you should use the `episode-length` field to specify the length of
the episode in minutes.

## Duration Overrides
All commands provide alternative ways to specify the duration of a log.

### Duration
You can explicitly specify the duration of a log with the `duration` field (`book`, `manga`, `vn`, and `video`).
When using the `duration` field, you may use `0` for `book`, `manga`, and `vn` pages/characters to indicate that you
did not record these values.

### Episode Length
For anime, you should use the `episode-length` field to specify the length of each episode in minutes.

### Reading Speed (One Time)
For VNs, you can also use the `reading-speed` or `reading-speed-hourly` fields to specify the reading speed.
This will not affect your configured speed for VNs, however it will be used to suggest a speed
when you do configure your speed.

### Complex Durations
For videos, you have an additional option, `duration-complex`. This field allows you to specify the
duration of the video in a more complex format. For example, you can specify the duration as `1m30s`
or as a slice of the video, such as `2m30s:` (2 minutes and 30 seconds into the video until the end).

You can also use `_` and `t` as special values to specify the sum of your previous logs on this
video and the timestamp provided in the video URL (YouTube only).
For example, if you have logged 1 minute and 30 seconds on a video,
you can specify the duration as `_:` to log the remaining time on the video, or `_:t` to log the
time from where you left off, until the time specified in the video URL.

## Date and Time
By default, the current date and time will be used for your log. You can
override this with the `date` field. Although multiple formats are supported,
it is recommended to use the `YYYY-MM-DD` or `YYYY-MM-DD HH:MM` formats. To ensure
the correct time is used, you should configure your [timezone](./configuration.md#time-zone).
