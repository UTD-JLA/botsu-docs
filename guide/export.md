---
outline: deep
---

# Exporting
Exporting allows you to use your logs outside of Discord. You can export your logs to a JSONL file,
which you can then use to do whatever you want with.

Using the `/export` command, you will recieve a `jsonl.gz` file containing your logs. This file
is a gzipped JSONL file, which means that you will need to unzip it before you can use it.

The file will have the following format: `activities-{user_id}-{iso_date}.jsonl.gz`. 

For more information on the format of the JSONL file, see the [Reference Guide](/reference/).

This command is rate limited so you should wait a while before trying again if you get an error.
