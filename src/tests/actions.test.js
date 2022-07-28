import driversReducer, { GET_DRIVERS } from '../redux/drivers/drivers';
import constructorReducer, {
  GET_CONSTRUCTORS,
} from '../redux/constructors/constructors';

describe('Reducers', () => {
  test('Should return the list of the drivers when receiving the type GET_DRIVERS', () => {
    const drivers = [
      {
        0: {
          position: '1',
          points: '233',
          wins: '7',
          driverName: 'Max Verstappen',
        },
      },
      {
        1: {
          position: '2',
          points: '170',
          wins: '3',
          driverName: 'Charles Leclerc',
        },
      },
      {
        2: {
          position: '3',
          points: '163',
          wins: '1',
          driverName: 'Sergio Pérez',
        },
      },
      {
        3: {
          position: '4',
          points: '144',
          wins: '1',
          driverName: 'Carlos Sainz',
        },
      },
      {
        4: {
          position: '5',
          points: '143',
          wins: '0',
          driverName: 'George Russell',
        },
      },
      {
        5: {
          position: '6',
          points: '127',
          wins: '0',
          driverName: 'Lewis Hamilton',
        },
      },
      {
        6: {
          position: '7',
          points: '70',
          wins: '0',
          driverName: 'Lando Norris',
        },
      },
      {
        7: {
          position: '8',
          points: '56',
          wins: '0',
          driverName: 'Esteban Ocon',
        },
      },
      {
        8: {
          position: '9',
          points: '46',
          wins: '0',
          driverName: 'Valtteri Bottas',
        },
      },
      {
        9: {
          position: '10',
          points: '37',
          wins: '0',
          driverName: 'Fernando Alonso',
        },
      },
      {
        10: {
          position: '11',
          points: '22',
          wins: '0',
          driverName: 'Kevin Magnussen',
        },
      },
      {
        11: {
          position: '12',
          points: '19',
          wins: '0',
          driverName: 'Daniel Ricciardo',
        },
      },
      {
        12: {
          position: '13',
          points: '16',
          wins: '0',
          driverName: 'Pierre Gasly',
        },
      },
      {
        13: {
          position: '14',
          points: '15',
          wins: '0',
          driverName: 'Sebastian Vettel',
        },
      },
      {
        14: {
          position: '15',
          points: '12',
          wins: '0',
          driverName: 'Mick Schumacher',
        },
      },
      {
        15: {
          position: '16',
          points: '11',
          wins: '0',
          driverName: 'Yuki Tsunoda',
        },
      },
      {
        16: {
          position: '17',
          points: '5',
          wins: '0',
          driverName: 'Guanyu Zhou',
        },
      },
      {
        17: {
          position: '18',
          points: '4',
          wins: '0',
          driverName: 'Lance Stroll',
        },
      },
      {
        18: {
          position: '19',
          points: '3',
          wins: '0',
          driverName: 'Alexander Albon',
        },
      },
      {
        19: {
          position: '20',
          points: '0',
          wins: '0',
          driverName: 'Nicholas Latifi',
        },
      },
      {
        20: {
          position: '21',
          points: '0',
          wins: '0',
          driverName: 'Nico Hülkenberg',
        },
      },
    ];
    const newState = driversReducer([], {
      type: GET_DRIVERS,
      drivers,
    });
    expect(newState).toEqual(drivers);
  });

  test('Should return the list of the constructors when receiving the type GET_CONSTRUCTORS', () => {
    const constructors = [
      {
        0: {
          position: '1', points: '396', wins: '8', name: 'Red Bull',
        },
      },
      {
        1: {
          position: '2', points: '314', wins: '4', name: 'Ferrari',
        },
      },
      {
        2: {
          position: '3', points: '270', wins: '0', name: 'Mercedes',
        },
      },
      {
        3: {
          position: '4', points: '93', wins: '0', name: 'Alpine F1 Team',
        },
      },
      {
        4: {
          position: '5', points: '89', wins: '0', name: 'McLaren',
        },
      },
      {
        5: {
          position: '6', points: '51', wins: '0', name: 'Alfa Romeo',
        },
      },
      {
        6: {
          position: '7', points: '34', wins: '0', name: 'Haas F1 Team',
        },
      },
      {
        7: {
          position: '8', points: '27', wins: '0', name: 'AlphaTauri',
        },
      },
      {
        8: {
          position: '9', points: '19', wins: '0', name: 'Aston {Martin',
        },
      },
      {
        9: {
          position: '10', points: '3', wins: '0', name: 'Williams',
        },
      },
    ];
    const newState = constructorReducer([], {
      type: GET_CONSTRUCTORS,
      constructors,
    });
    expect(newState).toEqual(constructors);
  });
});
