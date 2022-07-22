/* eslint-disable no-undef */
import ShipFactory from './shipFactory';

const mockShip = Object.create(ShipFactory(5));

test('ship has hp', () => {
  expect(mockShip.hp()).toBe(5);
});

test('ship can be hit', () => {
  mockShip.isHit();
  mockShip.isHit();
  mockShip.isHit();
  expect(mockShip.isHit()).toBeTruthy();
});

test('ship can be hit until sunk', () => {
  mockShip.isHit();
  mockShip.isHit();
  mockShip.isHit();
  mockShip.isHit();
  expect(mockShip.isHit()).toEqual('dead');
});

test.skip('ship length array is initialized', () => {
  expect(mockShip.hitSpots()).toEqual([false, false, false, false, false]);
});

test.skip('correct hit spot', () => {
  expect(mockShip.isHit(2)).toEqual([false, false, true, false, false]);
});

test.skip('can chain multiple hits', () => {
  mockShip.isHit(0);
  mockShip.isHit(2);
  expect(mockShip.isHit(4)).toEqual([true, false, true, false, true]);
});

test.skip('not-sunken', () => {
  mockShip.isHit(2);
  expect(mockShip.isSunk()).toBeFalsy();
});

test.skip('sunken', () => {
  mockShip.isHit(0);
  mockShip.isHit(1);
  mockShip.isHit(2);
  mockShip.isHit(3);
  mockShip.isHit(4);
  expect(mockShip.isSunk()).toBeTruthy();
});
