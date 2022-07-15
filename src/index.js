import ShipFactory from './shipFactory';
import GameboardFactory from './gameboard';

const x = Object.create(GameboardFactory());
x.placeShip(5, 1, 1);

x.receiveAttack(1, 1);
x.receiveAttack(1, 2);
x.receiveAttack(1, 3);
x.receiveAttack(1, 4);
x.receiveAttack(1, 5);
x.loseGameYet();
