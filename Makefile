VERSION := $(shell jq -r .version manifest.json)
PACKAGE_FILE := pdf-direct-$(VERSION).zip
ZIP_FILE := web-ext-artifacts/$(PACKAGE_FILE)

include .env

test: manifest.json
	web-ext run --verbose

lint: manifest.json
	web-ext lint

build: manifest.json background.js
	web-ext build --filename="$(PACKAGE_FILE)" --ignore-files="*.gif" README.md Makefile metadata.json --overwrite-dest

release: lint build
	git tag -f -a "v$(VERSION)" -m "Release v$(VERSION)"
	git push
	git push --force origin "refs/tags/v$(VERSION)"
	-gh release delete "v$(VERSION)" --yes
	gh release create "v$(VERSION)" \
		--title "v$(VERSION)" \
		--notes "Release v$(VERSION)" \
		"$(ZIP_FILE)"

sign: build
	web-ext sign --channel="listed" \
		--api-key="$(API_KEY)" \
		--api-secret="$(API_SECRET)" \
		--amo-metadata="metadata.json"
