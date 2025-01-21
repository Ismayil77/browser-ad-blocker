// Unique IDs for rules
const ruleIds = {
  DOUBLECLICK_RULE: 1001,
  SYNDICATION_RULE: 1002,
  YAHOO_RULE: 1003,
};

// Function to add blocking rules dynamically
const updateBlockingRules = () => {
  const blockingRules = [
    {
      id: ruleIds.DOUBLECLICK_RULE,
      priority: 1,
      action: {
        type: "block"
      },
      condition: {
        urlFilter: "*://*.doubleclick.net/*",
        resourceTypes: ["script", "image", "xmlhttprequest"]
      }
    },
    {
      id: ruleIds.SYNDICATION_RULE,
      priority: 1,
      action: {
        type: "block"
      },
      condition: {
        urlFilter: "*://*.googlesyndication.com/*",
        resourceTypes: ["script", "image", "xmlhttprequest"]
      }
    },
    {
      id: ruleIds.YAHOO_RULE,
      priority: 1,
      action: {
        type: "block"
      },
      condition: {
        urlFilter: "*://*.ads.yahoo.com/*",
        resourceTypes: ["script", "image", "xmlhttprequest"]
      }
    }
  ];

  // Remove existing rules before adding new ones
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: Object.values(ruleIds)  // Remove any existing rules with the same IDs
  }).then(() => {
    // Add new rules after removing the old ones
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: blockingRules
    }).then(() => {
      console.log("Rules added successfully");
    }).catch((error) => {
      console.error("Failed to add rules:", error);
    });
  }).catch((error) => {
    console.error("Failed to remove existing rules:", error);
  });
};

// Initialize rules when the background script is ready
updateBlockingRules();
