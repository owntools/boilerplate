COMPOSE_FILES=-f docker-compose.yml -f __owntools__/docker-compose.test.yml

default: build

build:
	@cd ..; docker-compose $(COMPOSE_FILES) build app test

kill:
	@cd ..; docker-compose $(COMPOSE_FILES) kill

remove:
	@cd ..; docker-compose $(COMPOSE_FILES) rm -f -v

test:
	@cd ..; docker-compose $(COMPOSE_FILES) run --rm test

.PHONY: build kill remove test
