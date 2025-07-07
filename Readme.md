

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

```

### 🧪 Technologies & Tools Used

| Category                       | Tools / Technologies                                                      |
| ------------------------------ | ------------------------------------------------------------------------- |
| **Frontend**                   | [React](https://reactjs.org) (JSX, Components, Hooks)                     |
| **Build Tools**                | [Webpack](https://webpack.js.org), Babel                                  |
| **Styling**                    | Custom CSS (Optional: Tailwind CSS)                                       |
| **Chrome Extension APIs**      | `chrome.storage`, `chrome.tabs`, `chrome.windows`                         |
| **JavaScript Features**        | ES6+, Promises, `useEffect`, `useState`                                   |
| **Data Persistence**           | `chrome.storage.sync` (for goals), `chrome.storage.local` (for site time) |
| **Background Logic**           | `background.js` with Chrome Event Listeners                               |
| **Icons/Assets**               | Custom PNG icon (or [React Icon](https://react-icons.github.io))          |
| **Time Tracking**              | Time per hostname using tab focus + timestamps                            |
| **Productivity Visualization** | Progress bars for time spent per site                                     |
| **Automation Feature**         | Daily reset of tracked sites at midnight                                  |

## 🛠️ Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- Google Chrome (to load the extension)

---

### Initial Setup

```bash
npm init -y
````

This creates your `package.json`.

---

### Install Core Dependencies

```bash
npm install react react-dom
```

---

### Install Dev Dependencies

```bash
npm install -D \
webpack webpack-cli \
babel-loader @babel/core @babel/preset-env @babel/preset-react \
html-webpack-plugin copy-webpack-plugin \
style-loader css-loader
```

> These are required to bundle React, support JSX, compile ES6+, and copy necessary files into the Chrome extension build.


### 🔧 Configure Webpack & Babel

Make sure your project includes:

* `webpack.config.js`
* `.babelrc`

**.babelrc**

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```


### ⚙️ Build the Extension

```bash
npm run build
```


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
4. Select the `dist/` folder

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


