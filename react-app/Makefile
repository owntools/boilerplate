default: run

attach:
	@docker attach $(shell docker-compose ps -q app)

build:
	@docker-compose build server app test

clean: kill remove

dbg:
	@docker-compose run --rm app yarn dbg

kill:
	@docker-compose kill

logs:
	@docker-compose logs app

debug: kill dbg

remove:
	@docker-compose rm -f -v

run:
	@docker-compose up --remove-orphans app server

rund:
	@docker-compose up -d app

sh: shell

shell:
	@docker-compose run --rm app bash

test:
	@docker-compose run --rm test

.PHONY: attach build clean kill logs debug remove run rund sh shell test