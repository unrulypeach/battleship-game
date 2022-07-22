import ShipFactory from './shipFactory';
import GameboardFactory from './gameboard';

const x = Object.create(GameboardFactory());
x.placeShip(5, 1, 1);
