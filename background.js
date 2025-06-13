// PDF Direct Extension
// Redirects academic journal "enhanced" PDF viewers to direct PDF downloads
// 
// URL Pattern Strategy:
// - Direct publisher domains: *.publisher.com
// - Known proxy services: *.oclc.org

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    
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
      "*://*.acs.org/*",
      "*://*.cambridge.org/*",
      "*://*.ieee.org/*",
      "*://*.jstor.org/*",
      "*://*.nature.com/*",
      "*://*.oup.com/*",
      "*://*.plos.org/*",
      "*://*.royalsocietypublishing.org/*",
      "*://*.sagepub.com/*",
      "*://*.sciencedirect.com/*",
      "*://*.springer.com/*",
      "*://*.tandfonline.com/*",
      "*://*.wiley.com/*",
      "*://*.oclc.org/*"
    ]
  },
  ["blocking"]
);