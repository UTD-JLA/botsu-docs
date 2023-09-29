---
outline: deep
---

# Viewing your activity

There are two primary ways to view your activity: the `/history` command and the `/chart` command.

## History

The history command shows a simple list of your recent logs. You can use the buttons to navigate between pages.

![History](/images/viewing-activity/history.png)

To view someone else's history, use the optional user argument `/history {user}` to view their history.

## Chart
To view a basic chart of the time you've logged, use the `/chart` command group.
There are currently two subcommands available: `duration` and `yt-channel`.

The default duration is one week (7 days), but you can select a different duration using the `start` and `end` arguments.

Note that the `end` argument is exclusive, so if you want to include the current day, you should set the `end` argument to the next day.
Furthermore, the dates are parsed based on your timezone, see the [config](/guide/config) page for more information.

### Duration
Duration shows a simple chart of the time you've logged over the selected duration.


![Duration](/images/viewing-activity/duration.png)

### YouTube Channel
The `yt-channel` subcommand shows a chart of the time you've logged for your top watched YouTube channels.

![YouTube Channel](/images/viewing-activity/yt-channel.png)

## Leaderboards
To compare your activity with others, use the `/leaderboard` command. The leaderboard
command is only available in servers, and will show the top 10 users in the server.

Currently, leaderboards have the following alternate timeframes available:
- `all` - All time
- `year` - This year (starting from January 1st)
- `month` - This month (starting from the first of the month)
- `day` - Today (starting from midnight)
- `custom` - Custom timeframe (see chart command for more info on custom timeframes).

By default, the leaderboard will show the last **week** of activity. Note that non-custom timeframes are
based on UTC time, and the start of the week is Sunday.
