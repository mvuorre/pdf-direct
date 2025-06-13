# PDF Direct

Firefox extension to skip academic journals' "enhanced" PDF viewers to direct PDF downloads. 

## Install 

Get the add-on at <https://addons.mozilla.org/addon/pdf-direct/>.

## Example

| With Extension | Without Extension |
| --- | --- |
| ![With Extension](with.gif) | ![Without Extension](without.gif) |

`/doi/reader/10.1177/0956797621989724` → `/doi/pdf/10.1177/0956797621989724` instead of `/doi/epub/10.1177/0956797621989724`

## Supported Publishers

The extension works with major academic publishers and their university proxy versions:

- **American Chemical Society** (ACS)
- **Cambridge University Press** 
- **Elsevier** (ScienceDirect)
- **IEEE** (Institute of Electrical and Electronics Engineers)
- **JSTOR** (Academic archives)
- **Nature Publishing Group**
- **Oxford University Press**
- **PLOS** (Public Library of Science)
- **Royal Society Publishing**
- **Sage Publications**
- **Springer Nature**
- **Taylor & Francis**
- **Wiley**

The extension automatically works with:
- Direct publisher websites (e.g., `journals.sagepub.com`)
- University proxy services (e.g., `journals-sagepub-com.university.edu`)
- OCLC WorldCat proxies (e.g., `journals-sagepub-com.university.idm.oclc.org`)

## How It Works

The extension intercepts requests to academic journal "enhanced" PDF viewers and redirects them to direct PDF downloads by converting:

- `/doi/reader/` → `/doi/pdf/`
- `/doi/epdf/` → `/doi/pdf/`  
- `/doi/epub/` → `/doi/pdf/`

This works across both direct publisher domains and university proxy services.

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
   1. We currently get permission warning because have to specify proxy URLs as well (e.g. `*://*-acs-org.*/*`)
4. Increment version in `manifest.json`
5. Create release: `make release`
6. Sign extension: `make sign` (but note this requires private keys)

## Credits

- Icons: [Pdf icons created by El-Faza Stuff - Flaticon](https://www.flaticon.com/free-icons/pdf)
- A bunch of AI coding tools