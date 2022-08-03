import * as Helper from './helpers';
import GameboardFactory from './gameboard';

export default function game() {
  const fleet = [
    {
      spaces: 5,
      name: 'car',
    },
    {
      spaces: 4,
      name: 'bat',
    },
    {
      spaces: 3,
      name: 'cru',
    },
    {
      spaces: 2,
      name: 'des',
    },
    {
      spaces: 1,
      name: 'cry',
    },
  ];
  // bot placeShip setup
  // place one ship randomly
  function placeShipRandom(size, gbObj) {
    const move = gbObj.placeShip(size, Helper.randNum(), Helper.randNum(), Helper.randBool());

    if (move === true) {
      return move;
    }
    if (move === false) {
      placeShipRandom(size, gbObj);
    }
  }

  // randomly place all ships
  function placeAllShipsRandomly(gbObj) {
    fleet.forEach((ele) => {
      placeShipRandom(ele.spaces, gbObj);
    });
  }
  return {
    fleet: () => fleet,
    placeShipRandom,
    placeAllShipsRandomly,
  };
}
