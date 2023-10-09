---
outline: deep
---

# Configuration
This section explains how to configure Botsu.

## Configuration File
Botsu loads configuration from a file named `config.toml` in the current working directory. The file should be in [TOML](https://toml.io/en/) format. The following is an example configuration file:

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

Top level keys control the bot's behavior, while nested keys control the behavior of specific components.


## Environment Variables
Botsu also supports configuration via environment variables. Environment variables are prefixed with `BOTSU_`, and with
the exception of `BOTSU_CONNECTION_STRING`, are only applied if the corresponding configuration value is not set in the
configuration file.

## Basic Configuration
The following is a list of all configuration variables and their descriptions.
The name in parentheses is the environment variable name.

Name | Type | Description | Required
-----|------|-------------|----------
token (BOTSU_TOKEN) | String | The bot token to use. | Yes
use_members_intent (BOTSU_USE_MEMBERS_INTENT*) | Boolean | Whether to use the members intent. | No
aodb_path (BOTSU_AODB_PATH) | String | The path to the anime-offline-database file if manually downloaded, or the location to download it to. | No
anidb_dump_path (BOTSU_ANIDB_PATH) | String | The path to the anidb dumps directory if manually downloaded, or the location to download it to. | No
vndb_dump_path (BOTSU_VNDB_PATH) | String | The path to the vndb dumps directory if manually downloaded, or the location to download it to. | No

BOTSU_USE_MEMBERS_INTENT\* - When setting with the environment variable, the following are valid truthy values: `1`, `true`, `t`.

## Database Configuration
The following is a list of all database configuration variables and their descriptions.

Name | Type | Description | Required
-----|------|-------------|----------
database.user | String | The database user to use. | Yes
database.password | String | The database password to use. | Yes
database.host | String | The database host to use. | Yes
database.port | Integer | The database port to use. | Yes
database.database | String | The database to use. | Yes

There is a special `BOTSU_CONNECTION_STRING` environment variable that can be used to set the database connection string. This will override all other database configuration variables.
