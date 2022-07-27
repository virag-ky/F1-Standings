import { PropTypes } from 'prop-types';

const Driver = (props) => {
  const {
    name, position, wins, points,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td className="data">{position}</td>
      <td className="data">{wins}</td>
      <td className="data">{points}</td>
    </tr>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  wins: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
};

export default Driver;
