default: test

nuke:
	@docker kill $(shell docker ps -q)

test: nuke
	@for dir in ./*/; do \
		$(MAKE) -C $$dir test; \
		$(MAKE) -C $$dir clean; \
	done
