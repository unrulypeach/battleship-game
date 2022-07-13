/* eslint-disable no-undef */
import ShipFactory from './shipFactory';

const mockShip = new ShipFactory(5);

test('ship length array is initialized', () => {
  expect(mockShip.getLength()).toEqual([false, false, false, false, false]);
});

test('correct hit spot', () => {
  expect(mockShip.isHit(2)).toEqual([false, false, true, false, false]);
});

test('can chain multiple hits', () => {
  mockShip.isHit(0);
  mockShip.isHit(2);
  expect(mockShip.isHit(4)).toEqual([true, false, true, false, true]);
});

test('not-sunken', () => {
  mockShip.isHit(2);
  expect(mockShip.isSunk()).toBeFalsy();
});

test('sunken', () => {
  mockShip.isHit(0);
  mockShip.isHit(1);
  mockShip.isHit(2);
  mockShip.isHit(3);
  mockShip.isHit(4);
  expect(mockShip.isSunk()).toBeTruthy();
});
