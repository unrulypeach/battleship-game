/* eslint-disable no-undef */
import GameboardFactory from './gameboard';
import player from './player';

test.skip('can place one ship', () => {
  const person = Object.create(player());
  person.placeBotShipRandom(3, 'botBoard');
  expect(person.botGb()).toEqual(
    expect.arrayContaining([
      expect.arrayContaining([{}, {}, {}]),
    ]),
  );
});

test.skip('can place all ships randomly', () => {
  const person = Object.create(player());
  person.placeAllShipsRandomly();
  expect(person.botGb()).toEqual(
    expect.arrayContaining([
      expect.arrayContaining([{}, {}, {}, {}, {}]),
      expect.arrayContaining([{}, {}, {}, {}]),
      expect.arrayContaining([{}, {}, {}]),
      expect.arrayContaining([{}, {}]),
      expect.arrayContaining([{}, {}]),
    ]),
  );
});

test('can attack', () => {
  const board = Object.create(GameboardFactory());
  const bott = Object.create(player());
  expect(bott.botPlay(board)).toEqual('fired and missed');
});
