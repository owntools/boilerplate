default: all

nuke:
	@docker kill $(shell docker ps -q) || true

build:
	@for dir in ./*/; do \
		$(MAKE) -C $$dir build; \
	done

test:
	@for dir in ./*/; do \
		$(MAKE) -C $$dir test clean; \
	done

all: nuke build test
