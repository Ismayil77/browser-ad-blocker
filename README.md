# browser-ad-blocker

A lightweight and efficient Chrome extension designed to enhance web browsing by blocking ads and neutralizing anti-adblock scripts. This extension identifies and removes common ad elements such as banners, iframes, and pop-ups, while preventing websites from detecting ad-blocking tools.

## Features

- **Ad Blocker**: Automatically detects and blocks ad-related resources, such as images, iframes, scripts, and videos.
- **Dynamic Blocklist**: Utilizes a rule-based system to block domains known for serving ads.
- **Anti-Adblock Protection**: Neutralizes scripts designed to detect and counter ad blockers.
- **Customizable Rules**: Allows customization of ad-blocking rules through a JSON file (`rules.json`).
- **Cross-Platform Support**: Works seamlessly on any website within the Chrome browser.

## How It Works

This extension uses a combination of content scripts and background scripts to detect and block ads effectively:

1. **Blocking Ad Elements**:  
   The extension utilizes CSS selectors to identify common ad-related HTML elements such as iframes, images, and divs with ad-related class names or IDs. These elements are then hidden or removed from the DOM.

2. **Declarative Net Request API**:  
   By using Chrome's `declarativeNetRequest` API, the extension dynamically applies blocking rules to block ad domains and prevent ad scripts from being loaded.

3. **Anti-Adblock Scripts Neutralization**:  
   The extension identifies and removes scripts from the page that are specifically designed to detect and block ad blockers.

4. **Custom Ad Blocking Rules**:  
   The extension allows users to define custom rules in the `rules.json` file to block specific domains, resources, or ads based on patterns such as URL filtering.

## Installation

### 1. Download/Clone the repository:
```bash
git clone https://github.com/Ismayil77/browser-ad-blocker.git
