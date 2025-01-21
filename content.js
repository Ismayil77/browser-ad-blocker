// Define common ad selectors
const adSelectors = [
  "iframe[src*='ads']",
  "img[src*='ads']",
  "div[class*='ad']",
  "video[src*='ads']",
  "[id*='ad']",
  "[class*='ad']",
  "aside"
];

const hideAds = () => {
  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.style.display = "none";  // Hide the element instead of removing it
    });
  });
};

// Neutralize anti-adblock scripts (same as before)
const neutralizeAntiAdBlock = () => {
  const scriptKeywords = ["adblock", "antiadblock", "blockad"];
  document.querySelectorAll("script").forEach((script) => {
    const src = script.src.toLowerCase();
    if (scriptKeywords.some((keyword) => src.includes(keyword))) {
      script.remove();  // Neutralize anti-adblock scripts
    }
  });
};

// Recursive ad removal for nested iframes (hiding ads inside iframes)
const cleanIframes = () => {
  document.querySelectorAll("iframe").forEach((iframe) => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      adSelectors.forEach((selector) => {
        iframeDoc.querySelectorAll(selector).forEach((ad) => {
          ad.style.display = "none";  // Hide the ad inside the iframe
        });
      });
    } catch (e) {
      // Ignore errors if the iframe is cross-origin or not accessible
    }
  });
};

// Initialize MutationObservers to dynamically hide ads and neutralize scripts
const observer = new MutationObserver(() => {
  hideAds();
  neutralizeAntiAdBlock();
  cleanIframes();
});

observer.observe(document.body, { childList: true, subtree: true });

hideAds();
neutralizeAntiAdBlock();
cleanIframes();
