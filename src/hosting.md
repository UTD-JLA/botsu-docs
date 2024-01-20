# Hosting

This section will cover how to host your own instance of the bot.

## Prerequisites
- Go 1.21+
- PostgreSQL

## Installation
Use `go install github.com/xoltia/UTD-JLA/cmd/botsu@latest` to install the bot.
Alternatively, view the [releases](https://github.com/UTD-JLA/botsu/releases) page for pre-built binaries.

## Database Setup
You will need to create a database and user for Botsu. The user should have full access to the database.

## Configuration
By default, Botsu will look for a `config.toml` file in the current working directory. You can specify a different
path with the `--config` flag. 

The following is an example configuration file:
```toml
token = "XXXXXXXXX"
use_members_intent = true

[database]
user = "user"
password = "password"
host = "localhost"
port = 5432
database = "botsu"
```

You may also use environment variables for some configuration options. For example:
- `BOTSU_TOKEN`
- `BOTSU_USE_MEMBERS_INTENT`
- `BOTSU_CONNECTION_STRING`

For all options, use `botsu --help`.

## Data Sources
Botsu makes use of the following data sources:
- [Anime Offline Database](https://github.com/manami-project/anime-offline-database)
- [AniDB](https://anidb.net/)
- [VNDB](https://vndb.org/)

They will be downloaded automatically when the bot starts, and will be updated periodically.
This can be customized with the `data_update_interval` (nanoseconds) option in the configuration file.
You can also skip the first update with the `--skip-data-update` flag (useful when you are frequently restarting the bot).

## Running the Bot
Simply run `botsu` to start the bot. You can use `botsu --help` for more options.
Note that the bot will automatically migrate the database on startup, and will also download
data into the working directory.
