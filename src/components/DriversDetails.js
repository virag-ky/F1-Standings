import React from 'react';
import { useSelector } from 'react-redux';
import Driver from './Driver';

const DriversDetails = () => {
  const drivers = useSelector((state) => state.driver);

  return (
    <div className="driversDetailsContainer">
      <div className="driversStandings">
        <h2>Driver&apos;s Standings</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Wins</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <Driver
              key={`number${driver.position}`}
              name={driver.driverName}
              position={driver.position}
              wins={driver.wins}
              points={driver.points}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriversDetails;
