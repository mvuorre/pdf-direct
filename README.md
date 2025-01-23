# PDF Direct

Firefox extension to redirect academic journal PDF viewers to direct PDF downloads. Currently works with Sage journals.

## Install from source
1. Download/clone <https://github.com/mvuorre/pdf-direct>
2. Open Firefox, go to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select `manifest.json` from downloaded files

The extension will redirect `/reader/` and `/full/` URLs to direct PDF downloads.

I'll add an easier install method later.

## Example
`/doi/reader/10.1177/0956797621989724` → `/doi/pdf/10.1177/0956797621989724?download=true` instead of `/doi/epub/10.1177/0956797621989724`

| With Extension | Without Extension |
| --- | --- |
| ![With Extension](with.gif) | ![Without Extension](without.gif) |

## License
MIT