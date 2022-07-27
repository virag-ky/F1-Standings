import React from 'react';
import { useSelector } from 'react-redux';
import Constructor from './Constructor';
import '../styles/constructors.css';

const ConstructorsDetails = () => {
  const constructors = useSelector((state) => state.constructor);

  return (
    <div className="constructorsDetailsContainer">
      <div className="constructorsStandings">
        <div className="constructorImg">
          <div className="mask" />
        </div>
        <div className="constructorsTitleDiv">
          <h2 className="constructorsTitle">CONSTRUCTOR&apos;S STANDINGS</h2>
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
            <tr id="noConstructors">
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
