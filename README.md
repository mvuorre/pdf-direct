# PDF Direct

Firefox extension to skip journals' "enhanced" PDF viewers to direct PDF downloads. Currently works with Sage journals. Submit an issue if you want me to add a provider / feature / squash a bug.

## Example

| With Extension | Without Extension |
| --- | --- |
| ![With Extension](with.gif) | ![Without Extension](without.gif) |

`/doi/reader/10.1177/0956797621989724` → `/doi/pdf/10.1177/0956797621989724?download=true` instead of `/doi/epub/10.1177/0956797621989724`

## Install from source

1. Download/clone <https://github.com/mvuorre/pdf-direct>
2. Open Firefox, go to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select `manifest.json` from downloaded files

I'll add an easier install method later.

## License

MIT