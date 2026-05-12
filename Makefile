# tapis-typescript Makefile
# All builds run inside Docker — no local npm/npx needed.
# Build the image once with: make image

DOCKER_IMAGE    := tapis/tapis-typescript:latest
.DEFAULT_GOAL   := help
SERVICES     := actors apps authenticator datasets files jobs meta models \
                notifications pgrest pods sk streams systems tenants tokens workflows

GREEN  := \033[0;32m
YELLOW := \033[0;33m
CYAN   := \033[0;36m
RESET  := \033[0m

.PHONY: image all help $(SERVICES)

#: Build the Docker image (required once before generating)
image:
	docker build -f Dockerfile -t $(DOCKER_IMAGE) .

#: Generate TypeScript bindings for all services (with per-service progress)
all:
	@total=$(words $(SERVICES)); \
	i=0; \
	for svc in $(SERVICES); do \
		i=$$((i + 1)); \
		printf "$(CYAN)[$$i/$$total]$(RESET) $(YELLOW)Generating $$svc...$(RESET)\n"; \
		if docker run --rm -v "$(CURDIR)":/src -w /src $(DOCKER_IMAGE) ./generate.sh $$svc; then \
			printf "$(GREEN)[$$i/$$total] $$svc done$(RESET)\n"; \
		else \
			printf "\033[0;31m[$$i/$$total] $$svc FAILED — aborting$(RESET)\n"; \
			exit 1; \
		fi; \
	done; \
	printf "$(GREEN)All $$total services generated successfully.$(RESET)\n"

#: Generate a single service: make <service-name>
$(SERVICES):
	@printf "$(CYAN)Generating $@...$(RESET)\n"
	@docker run --rm -v "$(CURDIR)":/src -w /src $(DOCKER_IMAGE) ./generate.sh $@ && \
		printf "$(GREEN)$@ generated successfully.$(RESET)\n" || \
		{ printf "\033[0;31m$@ generation FAILED.$(RESET)\n"; exit 1; }

help:
	@printf "$(CYAN)tapis-typescript code generator$(RESET)\n\n"
	@printf "$(YELLOW)Usage:$(RESET)\n"
	@printf "  make image          Build the Docker image (run once)\n"
	@printf "  make all            Generate all services with progress output\n"
	@printf "  make <service>      Generate a single service\n\n"
	@printf "$(YELLOW)Available services:$(RESET)\n"
	@for svc in $(SERVICES); do printf "  $$svc\n"; done
