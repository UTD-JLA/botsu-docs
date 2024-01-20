# Configuration

Use `/config` to configure Botsu for your user account. 

## Time Zone
Use `/config timezone` to set your timezone. Try typing the name of a
major city in your timezone, such as `New York`, `London`, or `Chicago`.

Your timezone is used to parse times when provided manually. It will
also be used to display dates in contexts where native Discord timestamps
are not available, such as in embed titles or images.

## Speed
Your speed for various media types can be configured with `/config x-speed`.
For example, to set your speed for visual novels, use `/config vn-speed`.

These speeds use the following units:
- `vn-speed` - Characters per minute.
- `book-speed` - Pages per minute.
- `manga-speed` - Pages per minute.

## Daily Goal
**Deprecated:** Use `/goal` instead.

Set your daily goal in minutes. This will be used in duration charts
to show your progress towards your goal over time.