

# ⏱ Productivity Tracker Chrome Extension

A React-based Chrome Extension to help users **set daily goals**, **track time spent on websites**, and **visualize productivity trends**.

## Features

- ✅ Set and view multiple daily goals
- ✅ Track time spent on each visited website
- ✅ Delete goals and tracked websites individually
- ✅ Auto-reset of tracked website times **at midnight**
- ✅ Stylish and minimal UI with progress bars for each website
- ✅ Chrome Extension with React frontend + service worker backend


## Folder Structure

```

productivity-tracker/
├── public/
│   ├── manifest.json
│   └── icon.png
├── src/
│   ├── App.js
│   ├── index.js
│   ├── background.js
│   ├── style.css
│   └── components/
│       ├── GoalSetter.js
│       ├── SiteTracker.js
│       └── Dashboard.js
├── package.json
└── webpack.config.js

````

## 🛠️ Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/khushi8169/productivity-tracker.git
cd productivity-tracker
npm install
````

### 2. Build the Extension

```bash
npm run build
```

This creates a `bundle.js` and copies necessary files to the build output.

### 3. Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer Mode** (toggle in top-right)
3. Click **"Load unpacked"**
4. Select your project folder


## How It Works

* **Daily Goals** are stored using `chrome.storage.sync`
* **Website Time Tracking** is done using `chrome.tabs` + `chrome.windows` API
* **Midnight Reset**:

  * The extension stores the current date
  * If a new day is detected, it resets the tracked time automatically


## Permissions Required

```json
"permissions": ["storage", "tabs", "history"],
"host_permissions": ["<all_urls>"]
```

These allow the extension to monitor tabs and store your goals and stats.


## Reset Behavior

Each day at midnight:

* All websites are refreshed
* Goals are kept unless deleted manually

## 📃 License

MIT License © 2025 \ khushii singhh

