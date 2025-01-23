browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("/reader/") || details.url.includes("/doi/full/")) {
      return {
        redirectUrl: details.url.replace(/(\/reader\/|\/full\/)/, "/pdf/") + "?download=true"
      };
    }
  },
  {
    urls: [
      "*://*.sagepub.com/doi/reader/*",
      "*://*.sagepub.com/doi/full/*"
    ]
  },
  ["blocking"]
);