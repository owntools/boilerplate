### Boilerplates

Each of these boilerplates have the same `make` targets for running the program in dev, and running tests. These commands are documented below.

#### Prerequisites

You must install the following:

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

    # for python
    (py-container)# poetry add pytz

    # for nodejs
    (js-container)# yarn add moment

Note that depending on the package, you may need to install some `apt` package prerequisites by adding them to the `Dockerfile`

#### Debug

1. add a breakpoint in the code
2. in one terminal, run `make debugger` to start the program and attach to it
3. in another terminal, run `make test`, or hit the API URL in your browser
4. the first terminal should pause at the breakpoint
