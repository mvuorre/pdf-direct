browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("/reader/") || details.url.includes("/doi/full/")) {
      return {
        redirectUrl: details.url.replace(/(\/reader\/|\/full\/)/, "/pdf/") + "?download=true"
      };
    } else if (details.url.includes("/doi/epdf/")) {
      return {
        redirectUrl: details.url.replace("/doi/epdf/", "/doi/pdfdirect/") + "?download=true"
      };
    }
  },
  {
    urls: [
      "*://*.sagepub.com/doi/reader/*",
      "*://*.sagepub.com/doi/full/*",
      "*://*.wiley.com/doi/epdf/*"
    ]
  },
  ["blocking"]
);