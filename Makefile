# tapis-typescript Makefile
# All builds run inside Docker — no local npm/npx needed.
# Build the image once with: make image

DOCKER_IMAGE := tapis/tapis-typescript:latest

.PHONY: image pods all help

#: Build the Docker image (required once before generating)
image:
	docker build -f Dockerfile -t $(DOCKER_IMAGE) .

#: Generate TypeScript bindings for pods from services/pods/spec.yml
pods:
	docker run --rm -v "$(CURDIR)":/src -w /src $(DOCKER_IMAGE) ./generate.sh pods

#: Generate TypeScript bindings for all services
all:
	docker run --rm -v "$(CURDIR)":/src -w /src $(DOCKER_IMAGE) ./generate_all.sh

help:
	@grep -E '^#:' Makefile | sed 's/#: //' | \
		awk 'NR%1==0{ desc=$$0; getline; split($$0,a,":"); printf "  %-12s %s\n", a[1], desc }'
