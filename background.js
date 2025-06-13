// PDF Direct Extension
// Redirects academic journal "enhanced" PDF viewers to direct PDF downloads
// 
// URL Pattern Strategy:
// - Direct domains: *.publisher.com (e.g., journals.sagepub.com)
// - Proxy domains: *-publisher-com.* (e.g., journals-sagepub-com.university.edu)
// This approach catches university proxies while avoiding overly broad patterns

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
      // American Chemical Society
      "*://*.acs.org/*",
      "*://*-acs-org.*/*",
      
      // Cambridge University Press  
      "*://*.cambridge.org/*",
      "*://*-cambridge-org.*/*",
      
      // IEEE (Institute of Electrical and Electronics Engineers)
      "*://*.ieee.org/*", 
      "*://*-ieee-org.*/*",
      
      // JSTOR (Academic archives)
      "*://*.jstor.org/*",
      "*://*-jstor-org.*/*",
      
      // Nature Publishing Group
      "*://*.nature.com/*",
      "*://*-nature-com.*/*",
      
      // Oxford University Press
      "*://*.oup.com/*",
      "*://*-oup-com.*/*",
      
      // PLOS (Public Library of Science)
      "*://*.plos.org/*",
      "*://*-plos-org.*/*",
      
      // Royal Society Publishing
      "*://*.royalsocietypublishing.org/*",
      "*://*-royalsocietypublishing-org.*/*",
      
      // Sage Publications
      "*://*.sagepub.com/*",
      "*://*-sagepub-com.*/*",
      
      // Elsevier (ScienceDirect)
      "*://*.sciencedirect.com/*",
      "*://*-sciencedirect-com.*/*",
      
      // Springer Nature
      "*://*.springer.com/*",
      "*://*-springer-com.*/*",
      
      // Taylor & Francis
      "*://*.tandfonline.com/*",
      "*://*-tandfonline-com.*/*",
      
      // Wiley
      "*://*.wiley.com/*",
      "*://*-wiley-com.*/*"
    ]
  },
  ["blocking"]
);