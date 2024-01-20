# Goals

- View your goals using `/goal list`
- Create goals using `/goal create`
- Delete goals using `/goal delete`

## Creating Goals
Goals are a target amount of minutes you want to reach in a given interval.
**Imports do not count towards goals.**

To create a goal, you must specify a:
- Name
- Target (minutes)
- Cron (pre-provided, or a [cron expression](https://crontab.guru/))

You can optionally provide filters:
- Primary Type
- Media Type
- Video Channels (comma separated uploader IDs, i.e. @HakuiKoyori,@MinatoAqua)
    - May or may not work well with platforms other than YouTube

For a log to count towards your goal, it must satisfy **all** filters, not a single filter.
