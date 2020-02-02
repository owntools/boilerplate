default: start

attach:
	@docker attach $(shell docker-compose ps -q app)

build:
	@docker-compose build app

clean: kill remove

kill:
	@docker-compose kill

logs:
	@docker-compose logs app

debugger: kill rund logs attach

remove:
	@docker-compose rm -f -v

run:
	@docker-compose up --remove-orphans app

rund:
	@docker-compose up -d app

sh: shell

shell:
	@docker-compose run --rm app bash

start: build run

test:
	@docker-compose run --rm test

.PHONY: attach build clean kill logs debugger remove run rund sh shell start test
