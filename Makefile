default: test

nuke:
	@docker kill $(shell docker ps -q) || true

test: nuke
	@for dir in ./*/; do \
		$(MAKE) -C $$dir test; \
		$(MAKE) -C $$dir clean; \
	done
