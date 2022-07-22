import GameboardFactory from './gameboard';

export default function player() {
  // Players can take turns playing the game
  // by attacking the enemy Gameboard.
  const pBoard = Object.create(GameboardFactory());
  const botBoard = Object.create(GameboardFactory());

  const fleet = [
    {
      spaces: 5,
      gamePiece: 'car',
    },
    {
      spaces: 4,
      gamePiece: 'bat',
    },
    {
      spaces: 3,
      gamePiece: 'cru',
    },
    {
      spaces: 2,
      gamePiece: 'des1',
    },
    {
      spaces: 2,
      gamePiece: 'des2',
    },
  ];
  // player placeShip setup

  // bot placeShip setup
  function placeAShipRandomly(size) {
    const random1 = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10);
    if (botBoard.placeShip(size, random1, random2) !== false) {
      botBoard.placeShip(size, random1, random2);
    } else {
      placeAShipRandomly(size);
    }
  }

  function placeAllShipsRandomly() {
    fleet.forEach((ele) => {
      // placeShip returns false if overlapping
      placeAShipRandomly(ele.spaces);
    });
  }

  // The game is played against the computer,
  // so make ‘computer’ players capable of making random plays.
  // The AI does not have to be smart,
  // but it should know whether or not a given move is legal.
  // (i.e. it shouldn’t shoot the same coordinate twice).

  return {
    pGb: () => pBoard.gb(),
    botGb: () => botBoard.gb(),
    placeAShipRandomly,
    placeAllShipsRandomly,
  };
}
const x = Object.create(player());
x.placeAllShipsRandomly();
x.botGb();
