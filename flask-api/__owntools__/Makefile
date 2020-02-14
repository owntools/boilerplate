COMPOSE_FILES=-f docker-compose.yml -f __owntools__/docker-compose.test.yml

default: build

build:
	@cd ..; docker-compose $(COMPOSE_FILES) build app test

test:
	@cd ..; docker-compose $(COMPOSE_FILES) run --rm test

.PHONY: build test
