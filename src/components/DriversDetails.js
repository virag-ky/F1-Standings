import React from 'react';
import { useSelector } from 'react-redux';
import Driver from './Driver';
import '../styles/drivers.css';

const DriversDetails = () => {
  const drivers = useSelector((state) => state.driver);

  return (
    <div className="driversDetailsContainer">
      <div className="driversStandings">
        <div className="driverImg">
          <div className="mask" />
        </div>
        <div className="driversTitleDiv">
          <h2 className="driversTitle">DRIVER&apos;S STANDINGS</h2>
        </div>
      </div>
      <table>
        <thead>
          <tr id="head">
            <th>NAME</th>
            <th>POSITION</th>
            <th>WINS</th>
            <th>POINTS</th>
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
