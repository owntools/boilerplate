default: run

attach:
	@docker attach $(shell docker-compose ps -q app)

build:
	$(MAKE) -C __owntools__ build

clean: kill remove

debug: kill rund logs attach

kill:
	$(MAKE) -C __owntools__ kill

logs:
	@docker-compose logs app

nuke:
	@docker kill $(shell docker ps -q)

remove:
	$(MAKE) -C __owntools__ remove

run:
	@docker-compose up --remove-orphans app

rund:
	@docker-compose up -d app

sh: shell

shell:
	@docker-compose run --rm app bash

test:
	$(MAKE) -C __owntools__ test

.PHONY: attach build clean debug kill logs nuke remove run rund sh shell test
