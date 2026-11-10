// PDF Direct Extension
// Redirects academic journal "enhanced" PDF viewers to direct PDF downloads
//
// URL Pattern Strategy:
// - Direct publisher domains: *.publisher.com
// - Known proxy services: *.oclc.org
// - Regex for Ebscohost

browser.webRequest.onBeforeRequest.addListener(
  function(details) {

    // Handle EBSCOhost viewer URLs
    const ebscoMatch = details.url.match(
      /^(https?:\/\/[^/]+)\/c\/([^/]+)\/viewer\/pdf\/([^/?]+)/
    );

    if (ebscoMatch) {
      const [, origin, opid, sourceRecordId] = ebscoMatch;

      const redirectUrl =
        `${origin}/api/search/v1/record/${sourceRecordId}/fulltext/pdf` +
        `?sourceRecordId=${sourceRecordId}&opid=${opid}&intent=download`;

      return { redirectUrl };
    }

    // Handle direct reader URLs
    if (details.url.includes("/doi/reader/")) {
      const redirectUrl = details.url.replace("/doi/reader/", "/doi/pdf/");
      return { redirectUrl };
    }

    // Handle epdf URLs
    if (details.url.includes("/doi/epdf/")) {
      const redirectUrl = details.url.replace("/doi/epdf/", "/doi/pdf/");
      return { redirectUrl };
    }

    // Handle epub URLs (webapp reader)
    if (details.url.includes("/doi/epub/")) {
      const redirectUrl = details.url.replace("/doi/epub/", "/doi/pdf/");
      return { redirectUrl };
    }
  },
  {
    urls: [
      "*://*.acm.org/*",
      "*://*.acs.org/*",
      "*://*.cambridge.org/*",
      "*://*.ieee.org/*",
      "*://*.jstor.org/*",
      "*://*.nature.com/*",
      "*://*.oup.com/*",
      "*://*.plos.org/*",
      "*://*.pnas.org/*",
      "*://*.royalsocietypublishing.org/*",
      "*://*.sagepub.com/*",
      "*://*.science.org/*",
      "*://*.sciencedirect.com/*",
      "*://*.springer.com/*",
      "*://*.tandfonline.com/*",
      "*://*.wiley.com/*",
      "*://*.ebsco.com/*",
      "*://*.oclc.org/*"
    ]
  },
  ["blocking"]
);
