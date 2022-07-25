import { PropTypes } from 'prop-types';

const Driver = (props) => {
  const {
    name, position, wins, points,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{wins}</td>
      <td>{points}</td>
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
