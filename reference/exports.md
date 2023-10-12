---
outline: deep
---

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
Here are some examples of how to use the export files. These examples will show
you how to print the name of each activity in the export file, but you can
modify them to do whatever you want.

### Python
```python
import gzip
import json

with gzip.open("activities-<user_id>-<timestamp>.jsonl.gz", "rt") as f:
    for line in f:
        activity = json.loads(line)
        print(activity["name"])
```

### Bash
```bash
zcat 'activities-<user_id>-<timestamp>.jsonl.gz' | jq -r ".name"
```

### Go Package
The Go package provides a convenient way to consume export files.
Here is an example of how to use it:
```go
package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/UTD-JLA/botsu/pkg/activities"
)

var path = flag.String("path", "", "path to export file")

func main() {
	flag.Parse()

	if *path == "" {
		fmt.Fprintln(os.Stderr, "path is required")
		os.Exit(1)
	}

	f, err := os.Open(*path)

	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to open file: %v\n", err)
		os.Exit(1)
	}

	defer f.Close()

	activities, err := activities.ReadCompressedJSONL(f)

	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to read activities: %v\n", err)
		os.Exit(1)
	}

	for _, activity := range activities {
		fmt.Println(activity.Name)
	}
}
```

