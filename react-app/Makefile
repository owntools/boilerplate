# to cache docker builds in CI
FE_IMAGE_NAME := owntools/react-app
FE_IMAGE_FILE := owntools-react-app.tar
FE_SPLIT_FOLDER := docker-cache/react-app
BE_IMAGE_NAME := owntools/json-server
BE_IMAGE_FILE := owntools-json-server.tar
BE_SPLIT_FOLDER := docker-cache/json-server

load:
	cat $(FE_SPLIT_FOLDER)/x* > $(FE_IMAGE_FILE)
	docker load < $(FE_IMAGE_FILE)
	cat $(BE_SPLIT_FOLDER)/x* > $(BE_IMAGE_FILE)
	docker load < $(BE_IMAGE_FILE)

save:
	docker save $(FE_IMAGE_NAME) > $(FE_IMAGE_FILE)
	mkdir -p $(FE_SPLIT_FOLDER)
	split -b 2G $(FE_IMAGE_FILE) $(FE_SPLIT_FOLDER)/x
	docker save $(BE_IMAGE_NAME) > $(BE_IMAGE_FILE)
	mkdir -p $(BE_SPLIT_FOLDER)
	split -b 2G $(BE_IMAGE_FILE) $(BE_SPLIT_FOLDER)/x

default: run

attach:
	@docker attach $(shell docker-compose ps -q app)

build:
	@docker-compose build server app

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
	@docker-compose up --remove-orphans app server

rund:
	@docker-compose up -d app

sh: shell

shell:
	@docker-compose run --rm app bash

test:
	@docker-compose run --rm test

.PHONY: attach build clean debug kill logs nuke remove run rund sh shell test
