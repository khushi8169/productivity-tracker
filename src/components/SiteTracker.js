import React, { useEffect, useState } from 'react';

export default function SiteTracker() {
  const [sites, setSites] = useState({});

  useEffect(() => {
    chrome.storage.local.get(['siteTimes'], ({ siteTimes }) => {
      if (siteTimes) setSites(siteTimes);
    });
  }, []);

  const deleteSite = (siteToDelete) => {
  const updatedSites = { ...sites };
  delete updatedSites[siteToDelete];
  setSites(updatedSites);
  chrome.storage.local.set({ siteTimes: updatedSites });
};


  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Tracked Sites</h2>
      <ul>
    {Object.entries(sites).map(([site, time]) => {
        const minutes = Math.round(time / 60);
        const percent = Math.min((time / 3600) * 100, 100); // cap at 100%
        return (
        <li key={site} style={{ marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ color: '#ba2d65' }}>{site}</strong>
            <button
            onClick={() => deleteSite(site)} // or deleteGoal(index)
            style={{
                all: 'unset',
                cursor: 'pointer',
                fontSize: '12px',
                marginLeft: '4px',
                lineHeight: '1',
                display: 'inline-block',
                verticalAlign: 'middle'
            }}
            title="Delete"
            >
            ✖
            </button>
        </div>
        <div style={{
            background: '#fce4ec',
            height: '10px',
            borderRadius: '6px',
            overflow: 'hidden',
            marginTop: '6px'
        }}>
            <div style={{
            width: `${Math.min((time / 3600) * 100, 100)}%`,
            background: '#e91e63',
            height: '100%'
            }}></div>
        </div>
        <small>{Math.round(time / 60)} min</small>
        </li>
        );
    })}
    </ul>

    </div>
  );
}