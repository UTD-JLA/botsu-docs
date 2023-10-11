# Exports
The export feature allows you to export your immersion logs from Botsu.
This is a useful feature if you want to analyze your immersion logs yourself.

## Export File Format
Exported files are GZIP-compressed JSONL (JSON Lines) files.
Each line represents the JSON representation of an [`Activity`](/reference/activity) object.

## Export File Title Format
The title of the export file is formatted as follows:
```
activties-<user_id>-<timestamp>.jsonl.gz
```

This means they can be sorted by user and export date.

## Example Usage
Here is a simple example of how to consume an export file in Python:
```python
import gzip
import json

with gzip.open("activities-<user_id>-<timestamp>.jsonl.gz", "rt") as f:
    for line in f:
        activity = json.loads(line)
        print(activity["name"])
```
or in Bash:
```bash
zcat 'activities-<user_id>-<timestamp>.jsonl.gz' | jq -r ".name"
```

## Using the Go package
The Go library provides a convenient way to consume export files.
Here is an example of how to use it:
```go
package main

import (
    "flag"
    "fmt"
    "log"
    "os"

    "github.com/UTD-JLA/botsu/pkg/activities"
)

var path = flag.String("path", "", "path to export file")

func main() {
    flag.Parse()

    if *path == "" {
        log.Fatal("path is required")
    }

    f, err := os.Open(*path)

    if err != nil {
        log.Fatal(err)
    }

    activities, err := activities.ReadCompressedJSONL(f)

    if err != nil {
        log.Fatal(err)
    }

    for _, activity := range activities {
        fmt.Println(activity.Name)
    }
}
```

