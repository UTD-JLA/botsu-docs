---
outline: deep
---

# Database Setup
Botsu makes use of Postgres for storing data. This section will explain how to set up a database for Botsu.

This assumes you already have a Postgres instance running. You can view steps for installing from [here](https://www.postgresql.org/download/).

## Creating the Database
First, you'll need to create a database for Botsu to use. You can do this with the following command:

```sql
CREATE DATABASE botsu;
```

or if you are using pgAdmin, you can use the GUI to create a database by right clicking on the `Databases` node and selecting `Create > Database...`.

## Initializing the Database
There are a couple of ways to initialize the database. You can either use the bot program to initialize the database on first run, or you can use the provided SQL script to initialize the database manually.

### Manually
To initialize the database manually, you can use the provided scripts in the `migrations` directory. In order to
run the scripts manually, it is recommended to use [golang-migrate/migrate](https://github.com/golang-migrate/migrate).
This will ensure that the bot will be able to run migrations automatically in the future.

Basic usage of the tool is as follows:

```bash
migrate -database "postgres://user:password@host:port/database?sslmode=disable" -path migrations up
```

For more information, see the [golang-migrate/migrate documentation](https://github.com/golang-migrate/migrate/blob/master/GETTING_STARTED.md).

### At Runtime
If you wish for the bot to initialize the database at runtime, you can use the `-migrations` flag to specify the path to the migrations directory. The bot will then run the migrations on startup. For example: `botsu -migrations=file://migrations`. Note that this requires you to have configured the database connection string, which is explained in the [Configuration Section](/self-hosting/configuration).
