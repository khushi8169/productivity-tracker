// import React, { useEffect, useState } from 'react';

// export default function Dashboard() {
//   const [goals, setGoals] = useState([]);

//   useEffect(() => {
//     chrome.storage.sync.get(['dailyGoals'], ({ dailyGoals }) => {
//       setGoals(dailyGoals || []);
//     });
//   }, []);

//   return (
//     <div className="mt-4">
//       <h2 className="text-lg font-semibold">Today's Goals</h2>
//       <ul style={{ paddingLeft: '18px' }}>
//         {goals.length > 0 ? (
//           goals.map((g, i) => <li key={i}>{g}</li>)
//         ) : (
//           <li>No goals yet</li>
//         )}
//       </ul>
//     </div>
//   );
// }

