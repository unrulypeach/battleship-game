/* eslint-disable no-undef */
import GameboardFactory from './gameboard';

const player = Object.create(GameboardFactory());

beforeAll(() => {
  player.placeShip(5, 1, 1);
});

test('cant place ship on square with exisiting ship', () => {
  expect(player.placeShip(4, 1, 2)).toBeFalsy();
});

test('placeShip returns end coords', () => {
  expect(player.placeShip(4, 2, 1)).toEqual('2 & 4');
});

test('can place vertical', () => {
  player.gb();
  expect(player.placeShip(4, 2, 1, true)).toEqual('5 & 1');
});

test('ship is placed properly', () => {
  expect(player.gb()[1][1]).toEqual(player.gb()[1][2]);
});

test('ship can be hit', () => {
  expect(player.receiveAttack(1, 3)).toBeTruthy();
});

test('havent lost game ORG', () => {
  player.receiveAttack(1, 1);
  player.receiveAttack(1, 2);
  expect(player.gameOver()).toBeFalsy();
});

test('ship can be sunk', () => {
  player.receiveAttack(1, 1);
  player.receiveAttack(1, 2);
  player.receiveAttack(1, 3);
  player.receiveAttack(1, 4);

  expect(player.receiveAttack(1, 5)).toEqual('dead');
});

test('hits empty waters', () => {
  expect(player.receiveAttack(1, 0)).toEqual('FAIL');
});

test.skip('can lose game', () => {
  player.receiveAttack(1, 1);
  player.receiveAttack(1, 2);
  player.receiveAttack(1, 3);
  player.receiveAttack(1, 4);
  player.receiveAttack(1, 5);
  expect(player.gameOver()).toBeTruthy();
});

test('havent lost game', () => {
  const poop = Object.create(GameboardFactory());
  poop.placeShip(3, 1, 1);
  poop.receiveAttack(1, 1);
  poop.receiveAttack(1, 2);
  expect(poop.gameOver()).toBeFalsy();
});
