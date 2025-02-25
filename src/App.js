// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;

import React, { useState } from 'react';
import './App.css';

const mockData = [
  { name: 'Distributor A', shippedLastMonth: 1000, forecastedNextMonth: 1200, ytdAverage: 1100 },
  { name: 'Distributor B', shippedLastMonth: 800, forecastedNextMonth: 950, ytdAverage: 900 },
  { name: 'Distributor C', shippedLastMonth: 1200, forecastedNextMonth: 1300, ytdAverage: 1250 }
];

export default function App() {
  const [data, setData] = useState(mockData);

  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1));
    setData(sortedData);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Augur Supply Chain Dashboard</h1>
      <div className="controls">
        <button onClick={() => handleSort('name')}>Sort by Name</button>
        <button onClick={() => handleSort('shippedLastMonth')}>Sort by Last Month</button>
        <button onClick={() => handleSort('forecastedNextMonth')}>Sort by Forecast</button>
      </div>
      <div className="cards">
        {data.map((dist, index) => (
          <div key={index} className="card">
            <h2>{dist.name}</h2>
            <p>Shipped Last Month: <span>{dist.shippedLastMonth}</span></p>
            <p>Forecasted Next Month: <span>{dist.forecastedNextMonth}</span></p>
            <p>Year-to-Date Average: <span>{dist.ytdAverage}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

