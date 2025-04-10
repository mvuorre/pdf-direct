browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Processing URL:", details.url);
    
    // Handle direct reader URLs
    if (details.url.includes("/doi/reader/")) {
      const redirectUrl = details.url.replace("/doi/reader/", "/doi/pdf/") + "?download=true";
      console.log("Redirecting reader URL to:", redirectUrl);
      return { redirectUrl };
    }
    
    // Handle epdf URLs
    if (details.url.includes("/doi/epdf/")) {
      const redirectUrl = details.url.replace("/doi/epdf/", "/doi/pdf/") + "?download=true";
      console.log("Redirecting epdf URL to:", redirectUrl);
      return { redirectUrl };
    }
  },
  {
    urls: [
      "*://*.royalsocietypublishing.org/*",
      "*://*.sagepub.com/*",
      "*://*.tandfonline.com/*",
      "*://*.wiley.com/*"
    ]
  },
  ["blocking"]
);