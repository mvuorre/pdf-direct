# PDF-Direct

Firefox extension to skip academic journals' "enhanced" PDF viewers to direct PDF downloads.

## Install

Get the add-on at <https://addons.mozilla.org/addon/pdf-direct/>.

## Example

| With Extension | Without Extension |
| --- | --- |
| ![With Extension](with.gif) | ![Without Extension](without.gif) |

## Supported Publishers

The extension works with major academic publishers:

- **ACM** (Association for Computing Machinery)
- **ACS** (American Chemical Society)
- **Cambridge University Press**
- **Elsevier** (ScienceDirect)
- **IEEE**
- **JSTOR**
- **Nature Publishing Group**
- **Oxford University Press**
- **PLOS**
- **PNAS**
- **Royal Society Publishing**
- **Sage Publications**
- **Science**
- **Springer Nature**
- **Taylor & Francis**
- **Wiley**

The extension automatically works with:
- Direct publisher websites (e.g., `journals.sagepub.com`)
- Some OCLC-hosted proxy URLs under `*.oclc.org` (e.g., `journals-sagepub-com.university.idm.oclc.org`)

Institution proxy URLs vary a lot, so support cannot be inferred generically. If your library proxy is not handled, please open an issue with an example URL.

## How It Works

The extension intercepts requests to academic journal "enhanced" PDF viewers and redirects them to direct PDF downloads by converting:

- `/doi/reader/` → `/doi/pdf/`
- `/doi/epdf/` → `/doi/pdf/`
- `/doi/epub/` → `/doi/pdf/`

This works across direct publisher domains and some proxy-hosted URLs.

## License

MIT

## Contributing and development

Submit an issue if you want me to add a publisher / feature / squash a bug.

Development requirements:

- `web-ext` (`npm install -g web-ext`)
- `gh` CLI (`brew install gh`)
- `jq` (`brew install jq`)

Build and publish extension

1. Download/clone <https://github.com/mvuorre/pdf-direct>
2. Test extension manually: `make test`
3. Lint extension: `make lint`
4. Increment version in `manifest.json`
5. Create release: `make release`
6. Sign & submit extension: `make sign` (but note this requires private keys)

## Credits

- Icons: [Pdf icons created by El-Faza Stuff - Flaticon](https://www.flaticon.com/free-icons/pdf)
- A bunch of AI coding tools
