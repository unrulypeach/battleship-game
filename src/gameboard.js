import ShipFactory from './shipFactory';

export default function GameboardFactory() {
  const board = [
    // eslint-disable-next-line no-multi-spaces, array-bracket-spacing
    [ 'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j'], // 0
    [null, null, null, null, null, null, null, null, null, null], // 1
    [null, null, null, null, null, null, null, null, null, null], // 2
    [null, null, null, null, null, null, null, null, null, null], // 3
    [null, null, null, null, null, null, null, null, null, null], // 4
    [null, null, null, null, null, null, null, null, null, null], // 5
    [null, null, null, null, null, null, null, null, null, null], // 6
    [null, null, null, null, null, null, null, null, null, null], // 7
    [null, null, null, null, null, null, null, null, null, null], // 8
    [null, null, null, null, null, null, null, null, null, null], // 9
    [null, null, null, null, null, null, null, null, null, null], // 10
  ];
  // const fleet = {
  //   carrier: {
  //     pieces: 1,
  //     spaces: 5,
  //     gamePiece: 'car',
  //   },
  //   battleship: {
  //     pieces: 1,
  //     spaces: 4,
  //     gamePiece: 'bat',
  //   },
  //   cruiser: {
  //     pieces: 1,
  //     spaces: 3,
  //     gamePiece: 'cru',
  //   },
  //   destroyer: {
  //     pieces: 2,
  //     spaces: 2,
  //     gamePiece: ['des1', 'des2'],
  //   },
  //   submarine: {
  //     pieces: 2,
  //     spaces: 1,
  //     gamePiece: ['sub1', 'sub2'],
  //   },
  // };
  // Gameboards should be able to place ships at
  // specific coordinates by calling the ship factory function.
  function placeShip(shipNum, yStart, xStart) {
    const ship = Object.create(ShipFactory(shipNum));
    for (let i = 0; i < shipNum; i += 1) {
      if (board[yStart][xStart + i] != null) {
        return;
      }
    }
    for (let i = 0; i < shipNum; i += 1) {
      board[yStart][xStart + i] = ship;
    }
    return board;
  }

  function receiveAttack(y, x) {
    const square = board[y][x];
    if (square === null) {
      board[y][x] = true;
      return 'FAIL';
    } if (square !== true) {
      return square.isHit();
    }
  }

  // Gameboards should be able to report whether or not
  // all of their ships have been sunk.
  function loseGameYet() {
    const allBoats = [];
    for (let i = 1; i < 11; i += 1) {
      if (board[i].some((ele) => typeof ele === 'object')) {
        for (let j = 1; j < 11; j += 1) {
          if (typeof board[i][j] === 'object') {
            const ans = board[i][j].isSunk();
            allBoats.push(ans);
          }
        }
      }
    }
    return allBoats.every((ele) => ele === true);
  }

  return {
    board,
    placeShip,
    receiveAttack,
    loseGameYet,
  };
}
