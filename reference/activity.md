---
outline: deep
---

# Activity
The `Activity` object is used to represent a single immersion log.
The fields of `Activity` describe the the time, date, and media that was logged.

## Fields
| Field | Type | Description |
| ----- | ---- | ----------- |
| `id` | `uint64` | The ID of the activity. |
| `user_id` | `string` | The ID of the user who logged the activity. |
| `guild_id?` | `string` | The ID of the guild where the activity was logged. |
| `name` | `string` | The name of the activity. |
| `primary_type` | `string`[*](#primary-type) | The primary type of the activity. |
| `media_type?` | `string`[*](#media-type) | The type of media that the activity is. |
| `duration` | `int64` | The duration of the activity, in **nanoseconds**. |
| `date` | `string` | The date that the activity was logged, in RFC3339 format. |
| `meta` | `any` | The metadata of the activity, used to store additional information and media information. |
| `created_at` | `string` | The date that the activity was created, in RFC3339 format. |
| `deleted_at?` | `string` | The date that the activity was deleted, in RFC3339 format. |

### Primary Type
The `primary_type` field is a string that represents the primary type of the activity.
Valid values are:
- `listening`
- `reading`

### Media Type
The `media_type` field is a string that represents the type of media that the activity is.
Valid values are:
- `anime`
- `manga`
- `visual_novel`
- `video`
- `book`

## Special Metadata
The `meta` field is used to store additional information about the activity.
There are some special keys that are used by Botsu. Here is a list of them:

### `meta.platform`
This value is used to store the platform of a video that was logged.
For example, if you logged a YouTube video, this value would be `youtube`.

### `meta.channel_handle`
This value is used to store the YouTube channel handle of the video that was logged.
Note that this is not the same as the channel ID. (e.g. `UC6eWCld0KwmyHFbAqK3V-Rw` vs `@HakuiKoyori`)

This currently only applies to YouTube videos, when the following conditions are met:
- `activity.media_type` is `video`
- `activity.meta.platform` is `youtube`
- `activity.meta.channel_handle` is not empty.

### `meta.speed`
This value is used to store the speed at which the activity was consumed.
For example, if you read a manga at 2 pages per minute, this value would be `2`.

Currently applies to the following media types:
| Media Type | Unit |
| ---------- | ---- |
| `manga` | Pages per minute |
| `visual_novel` | Characters per minute |
| `book` | Pages per minute |

