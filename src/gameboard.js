import ShipFactory from './shipFactory';

export default function GameboardFactory() {
  const board = [
    // eslint-disable-next-line no-multi-spaces, array-bracket-spacing
    [ 'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j'], // 0
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 1
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 2
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 3
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 4
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 5
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 6
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 7
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 8
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 9
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 10
  ];
  // Gameboards should be able to place ships at
  // specific coordinates by calling the ship factory function.
  function placeShip(shipNum, yStart, xStart, isVertical) {
    const ship = Object.create(ShipFactory(shipNum));
    if (isVertical === false || typeof isVertical === 'undefined') {
      for (let i = 0; i < shipNum; i += 1) {
        if (board[yStart][xStart + i] !== undefined) {
          return false;
        }
      }
      for (let i = 0; i < shipNum; i += 1) {
        board[yStart][xStart + i] = ship;
      }
      return `${yStart} & ${xStart + shipNum - 1}`;
    } if (isVertical === true) {
      for (let i = 0; i < shipNum; i += 1) {
        if (board[yStart + i][xStart] !== undefined) {
          return false;
        }
      }
      for (let i = 0; i < shipNum; i += 1) {
        board[yStart + i][xStart] = ship;
      }
      return `${yStart + shipNum - 1} & ${xStart}`;
    }
  }

  function receiveAttack(y, x) {
    const square = board[y][x];
    if (square === undefined) {
      board[y][x] = true;
      return 'FAIL';
    } if (typeof square === 'object') {
      return square.isHit();
    }
  }

  // Gameboards should be able to report whether or not all of their ships have been sunk.
  // DOES NOT WORK!!!!!!!!!!!!!!!!
  function gameOver() {
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
    gb: () => board,
    placeShip,
    receiveAttack,
    gameOver,
  };
}

const x = Object.create(GameboardFactory());
