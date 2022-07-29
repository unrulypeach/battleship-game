/* eslint-disable max-len */
import ShipFactory from './shipFactory';

export default function GameboardFactory() {
  const board = [
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 0
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 1
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 2
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 3
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 4
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 5
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 6
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 7
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 8
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], // 9
  ];
  // Gameboards should be able to place ships at
  // specific coordinates by calling the ship factory function.
  function canPlaceShip(yStart, xStart) {
    // check that neighbor squares are not ships/objs otherwise return;
    const y = yStart - 1 >= 0 ? yStart - 1 : 0;
    const x = xStart - 1 >= 0 ? xStart - 1 : 0;
    const yEnd = yStart + 1 <= 9 ? yStart + 1 : 9;
    const xEnd = xStart + 1 <= 9 ? xStart + 1 : 9;

    for (let i = y; i <= yEnd; i += 1) {
      for (let j = x; j <= xEnd; j += 1) {
        if (typeof board[i][j] === 'object') {
          return;
        }
      }
    }
  }

  function placeShip(shipNum, yStart, xStart, isVertical) {
    const ship = Object.create(ShipFactory(shipNum));

    // horizontal
    if (isVertical === false || typeof isVertical === 'undefined') {
      if (shipNum + xStart > 9) {
        return;
      }
      canPlaceShip(yStart, xStart);
      for (let i = 0; i < shipNum; i += 1) {
        board[yStart][xStart + i] = ship;
      }
      return `${yStart} & ${xStart + shipNum - 1}`;

    // vertical
    } if (isVertical === true) {
      if (shipNum + yStart > 9) {
        return;
      }
      canPlaceShip(yStart, xStart);
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
      return 'fired and missed';
    } if (typeof square === 'object') {
      return square.isHit();
    } if (square === true) {
      return 'fail';
    }
  }

  function gameOver() {
    const allBoats = [];
    for (let i = 1; i < 10; i += 1) {
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
