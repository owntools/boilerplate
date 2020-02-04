default: run

attach:
	@docker attach $(shell docker-compose ps -q app)

build:
	@docker-compose build app

clean: kill remove

kill:
	@docker-compose kill

logs:
	@docker-compose logs app

debug: kill rund logs attach

nuke:
	@docker kill $(shell docker ps -q)

remove:
	@docker-compose rm -f -v

run:
	@docker-compose up --remove-orphans app

rund:
	@docker-compose up -d app

sh: shell

shell:
	@docker-compose run --rm app bash

test:
	@docker-compose run --rm test

.PHONY: attach build clean kill logs debug remove run rund sh shell test
