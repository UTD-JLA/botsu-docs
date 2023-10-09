---
outline: disabled
---

# Introduction

This section provides info on how to host Botsu yourself.
This guide assumes you have some basic knowledge of command line tools, environment variables,
Docker, databases, and Discord bots.

## Prerequisites
- PostgreSQL 15
- Go 1.21 (for building)
- Docker (for running from image)

## Building with Go
To build the main `botsu` binary, run `go build -o botsu ./cmd/botsu`.
The same applies to other binaries in the `cmd` directory.

This guide will not assume you have knowledge of Go, but you should keep
this information in mind when reading the rest of the guide, in the case that
you are asked to run one of the binaries.

## Docker Image

If you do not have Go installed, you can use the provided Dockerfile to build
the bot. 

### Building
To build a Docker image, run `docker build . -t botsu:latest`. Note that
when running as a container, you will need to make appropriate configuration
to ensure that the container can connect to the database.

### Pulling
You can also pull the image from the GitHub Container Registry. View the container registry
[here](https://github.com/UTD-JLA/botsu/pkgs/container/botsu). **(CURRENTLY PRIVATE)**