VERSION := $(shell jq -r .version manifest.json)
ZIP_FILE := web-ext-artifacts/direct_pdf_download-$(VERSION).zip

include .env

test: manifest.json
	web-ext run --verbose

lint: manifest.json
	web-ext lint

build: manifest.json background.js
	web-ext build --ignore-files="*.gif" README.md Makefile metadata.json --overwrite-dest

release: lint build
	git tag -a "v$(VERSION)" -m "Release v$(VERSION)"
	git push && git push --tags
	gh release create "v$(VERSION)" \
		--title "v$(VERSION)" \
		--notes "Release v$(VERSION)" \
		"$(ZIP_FILE)"

sign: build
	web-ext sign --channel="listed" \
		--api-key="$(API_KEY)" \
		--api-secret="$(API_SECRET)" \
		--amo-metadata="metadata.json"