let activeTab = null;
let startTime = Date.now();

// Check current active tab every 5 seconds
setInterval(() => {
  chrome.windows.getLastFocused({ populate: true }, window => {
    if (!window.focused) return; // skip if user is not on Chrome

    const active = window.tabs.find(t => t.active && t.url?.startsWith('http'));
    if (!active) return;

    const currentHost = new URL(active.url).hostname;

    if (currentHost === activeTab) {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;
      startTime = now;

      chrome.storage.local.get(['siteTimes'], ({ siteTimes }) => {
        siteTimes = siteTimes || {};
        siteTimes[activeTab] = (siteTimes[activeTab] || 0) + elapsed;
        chrome.storage.local.set({ siteTimes });
      });
    } else {
      activeTab = currentHost;
      startTime = Date.now();
    }
  });
}, 5000); // every 5 seconds


function scheduleMidnightReset() {
  const now = new Date();
  const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) - now;

  setTimeout(() => {
    chrome.storage.local.set({ siteTimes: {} }, () => {
      console.log("⏰ Site times reset at midnight!");
    });
    scheduleMidnightReset(); // reschedule for next day
  }, millisTillMidnight);
}

scheduleMidnightReset(); // run on extension startup
