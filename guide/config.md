---
outline: deep
---

# Configuration
This page covers the configuration options available bot users and server administrators.

## User Configuration
User configuration is done through the `/config` command.

### Timezone
The timezone is used to parse dates and times for logs, as well as for displaying times (such as on charts).
Select the `/config timezone` option to view a list of available timezones.

### Speeds
Use the config command to set your default speeds for logging. Speeds
are real numbers, and are interpreted as units per minute. For example,
if you read 10 pages in 5 minutes, your speed would be 2 pages per minute.

When accessing this command, you will be prompted with a recommended speed.
The more logs you have, the more accurate this recommendation will be.

## Guild Configuration

### Timezone
The guild timezone will apply to all users in the guild who have not set their own timezone.
This is great for guilds that are in the same timezone, but may not be ideal for guilds with members in different timezones.