### Flask API boilerplate, using Docker

#### Prerequisites

1. `make`
2. `docker`
3. `docker-compose`

#### Develop

    make build run

or, if no dependencies changed, just `make` to avoid rebuilding the image

#### Test

    make build test

or, if no dependencies changed, just `make test`

#### Clean

    make clean

#### Install New Dependencies

    make shell
    (container)# poetry add pytz

Note that depending on the package, you may need to install some `apt` package prerequisites by adding them to the [`Dockerfile`](./Dockerfile)

#### Debug

1. add `import pdb; pdb.set_trace()` breakpoint
2. in one terminal, run `make debugger` to start the program and attach to it
3. in another terminal, run `make test` to trigger the breakpoint (if not already triggered in step 2)
4. the first terminal should pause at the breakpoint
