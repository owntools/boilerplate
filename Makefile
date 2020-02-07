default: all

nuke:
	@docker kill $(shell docker ps -q) || true

load:
	@for dir in ./*/; do \
		$(MAKE) -C $$dir load; \
	done

build:
	@for dir in ./*/; do \
		$(MAKE) -C $$dir build; \
	done

caching-build:
	@for dir in ./*/; do \
		$(MAKE) -C $$dir build save; \
	done

test:
	@for dir in ./*/; do \
		$(MAKE) -C $$dir test clean; \
	done

all: nuke build test
