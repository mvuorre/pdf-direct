# PDF Direct

Firefox extension to skip journals' "enhanced" PDF viewers to direct PDF downloads. Currently works with 

- Royal Society
- Sage 
- Taylor and Francis
- Wiley

## Install 

Get the add-on at <https://addons.mozilla.org/addon/pdf-direct/>

## Example

| With Extension | Without Extension |
| --- | --- |
| ![With Extension](with.gif) | ![Without Extension](without.gif) |

`/doi/reader/10.1177/0956797621989724` → `/doi/pdf/10.1177/0956797621989724?download=true` instead of `/doi/epub/10.1177/0956797621989724`

## Suggestions

Submit an issue if you want me to add a provider / feature / squash a bug.

## License

MIT

## Development

Requirements

- `web-ext` (`npm install -g web-ext`)
- `gh` CLI (`brew install gh`)
- `jq` (`brew install jq`)

Build and publish extension

1. Download/clone <https://github.com/mvuorre/pdf-direct>
2. Test extension manually: `make test`
3. Lint extension: `make lint`
4. Increment version in `manifest.json`
5. Create release: `make release`

## Credits

Icons: [Pdf icons created by El-Faza Stuff - Flaticon](https://www.flaticon.com/free-icons/pdf)