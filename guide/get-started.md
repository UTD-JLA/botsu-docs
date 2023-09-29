---
outline: deep
---

# Getting Started

This page explains a basic outline of all of the commands that Botsu has to offer and general usage information.

## Command Groups

Botsu's has a few primary commands, with some falling into subgroups. The primary commands are:

- `/log` - Log time spent.
- `/history` - View your logs.
- `/chart` - View charts of your logs.
- `/leaderboard` - View the server leaderboard.
- `/config` - Configure your user settings.
- `/guild-config` - Configure the server settings.

## Your First Log
To get started, head to a server where Botsu is in, and type `/log`. You'll be prompted to select
a subcommand, with relavent arguments. For example, if you select the `anime` subcommand, you'll be
prompted to select an anime from a list of known anime and the number of episodes you watched.

![Log anime](/images/get-started/log-anime.png)

Note that the title you pick will be used to identify the media information stored in the log. If you
want to refer to this information later, make sure to pick a matching title or provide your own and it
will be ignored.

### Sucessful Logs
If your log is sucessful, you'll see a response like this:

![Log success](/images/get-started/successful-log.png)

### Errors
If you recieve any message in response that does not look like the above, it's likely
that you made a mistake in your log. Consult the message for more information.

### Key Information
In the response, you'll see a few key pieces of information:
- ID - This is the ID of your log. You can use this to manage your logs.
- Timestamp - This is the time that your log is recorded for. (Note: This is not necessarily the time you logged it)
- Duration - For most logs, there will be a Duration field. You should double check this to make sure it's correct.

More details will be provided in the [Logging Section](/guide/logging).

## Viewing Your Logs
Use the `/history` command to view your logs. You will be presented with a paged embed with your recent logs.