### Boilerplate

Each boilerplate has the same `make` targets for running the program in development and running tests. These commands are documented below.

#### Prerequisites

You must install the following on your development machine:

1. `make`
2. `docker`
3. `docker-compose`

#### Develop

```sh
make build run
```

or, if no dependencies changed, just `make` to avoid rebuilding the image.

#### Test

```sh
make build test
```

or, if no dependencies changed, just `make test`.

#### Clean

```sh
make clean
```

#### Add Packages

```sh
# start the container and install using package manager
make shell

# e.g., for js,
(container)> yarn add moment

# or, for python,
(container)> poetry add pytz
```

Note that depending on the package, you may need to install some `apt` package prerequisites by adding them to the `Dockerfile`.

#### Debug

```sh
# add a breakpoint in the code then run
make debug
```

If building an API, you can run `curl http://localhost:8080` or run `make test` to hit the breakpoint.
