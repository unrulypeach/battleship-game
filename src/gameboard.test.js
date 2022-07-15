/* eslint-disable no-undef */
import GameboardFactory from './gameboard';

const player = new GameboardFactory();

beforeEach(() => {
  player.placeShip(5, 1, 1);
});

test('ship is placed properly', () => {
  expect(player.board[1][1]).toEqual(player.board[1][2]);
});

test('ship can be hit', () => {
  // player.placeShip('battleship', 1, 1);
  expect(player.receiveAttack(1, 3)).toBeFalsy();
});

test('ship can be sunk', () => {
  // player.placeShip('battleship', 1, 1);
  player.receiveAttack(1, 1);
  player.receiveAttack(1, 2);
  player.receiveAttack(1, 3);
  player.receiveAttack(1, 4);

  expect(player.receiveAttack(1, 5)).toBeTruthy();
});

test('hits empty waters', () => {
  expect(player.receiveAttack(1, 0)).toEqual('FAIL');
});

test('can lose game', () => {
  player.receiveAttack(1, 1);
  player.receiveAttack(1, 2);
  player.receiveAttack(1, 3);
  player.receiveAttack(1, 4);
  player.receiveAttack(1, 5);
  expect(player.loseGameYet()).toBeTruthy();
});
