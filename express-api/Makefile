# to cache docker builds in CI
IMAGE_NAME := owntools/express-api
IMAGE_FILE := owntools-express-api.tar
SPLIT_FOLDER := docker-cache/express-api

load:
	cat $(SPLIT_FOLDER)/x* > $(IMAGE_FILE)
	docker load < $(IMAGE_FILE)

save:
	docker save $(IMAGE_NAME) > $(IMAGE_FILE)
	mkdir -p $(SPLIT_FOLDER)
	split -b 2G $(IMAGE_FILE) $(SPLIT_FOLDER)/x

default: run

attach:
	@docker attach $(shell docker-compose ps -q app)

build:
	@docker-compose build app

clean: kill remove

dbg:
	@docker-compose run --rm app yarn dbg

debug: kill dbg

kill:
	@docker-compose kill

logs:
	@docker-compose logs app

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

unit:
	@docker-compose run --rm app yarn test

.PHONY: attach build clean debug kill logs nuke remove run rund sh shell test
