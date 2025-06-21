import React, { useState, useEffect } from 'react';

export default function GoalSetter() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    chrome.storage.sync.get(['dailyGoals'], ({ dailyGoals }) => {
      if (dailyGoals) setGoals(dailyGoals);
    });
  }, []);

  const addGoal = () => {
    if (!goalInput.trim()) return;
    const updated = [...goals, goalInput];
    setGoals(updated);
    chrome.storage.sync.set({ dailyGoals: updated });
    setGoalInput('');
  };

  const deleteGoal = index => {
    const updated = goals.filter((_, i) => i !== index);
    setGoals(updated);
    chrome.storage.sync.set({ dailyGoals: updated });
  };

  return (
    <div>
      <input
        type="text"
        className="border p-1 mb-2 w-full"
        value={goalInput}
        onChange={e => setGoalInput(e.target.value)}
        placeholder="Add a daily goal"
      />
      <button onClick={addGoal} className="bg-pink-500 text-white px-2 py-1 rounded w-full mb-3">
        ➕ Add Goal
      </button>

      <h2 className="text-lg font-semibold">Today's Goals</h2>
      <ul style={{ paddingLeft: '18px' }}>
        {goals.map((goal, index) => (
          <li key={index} style={{ marginBottom: '4px' }}>
            {goal}
            <button
              onClick={() => deleteGoal(index)}
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
          </li>
        ))}
      </ul>
    </div>
  );
}

