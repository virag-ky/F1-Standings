import React from 'react';
import { useSelector } from 'react-redux';
import Constructor from './Constructor';

const ConstructorsDetails = () => {
  const constructors = useSelector((state) => state.constructor);

  return (
    <div className="constructorsDetailsContainer">
      <div className="constructorsStandings">
        <h2>Constructor&apos;s Standings</h2>
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
          {constructors.length > 0 ? (
            Object.values(constructors).map((constructor) => (
              <Constructor
                key={`number${constructor.position}`}
                name={constructor.name}
                position={constructor.position}
                wins={constructor.wins}
                points={constructor.points}
              />
            ))
          ) : (
            <tr>
              <td>
                <h3>No constructors</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConstructorsDetails;
