import * as Helper from './helpers';

// allow user to place ships
export default function moveShips() {
  // allow user to move ships
  const ships = document.querySelectorAll('.ship');
  ships.forEach((ship) => {
    ship.onmousedown = function (event) {
      const name = ship.classList[ship.classList.length - 1];
      const getName = document.querySelectorAll(name);

      // const posX = event.clientX;
      // const posY = event.clientY;

      // function getPcId(nodeList) {
      //   Array.from(nodeList, (item) => item.id[4] + item.id[5]); // ["22", "23"...]
      // }

      // function setPcId(nodeList) {

      // }
      function onMouseMove(event) {

      }
      ship.onmouseup = function (ev) {
        ship.classList.remove(name);
        ev.target.classList.add(name);
      };
    };
  });
  // ship must be moved in pBoard.gb()

  // ship must be moved in DOM (move below to dom.js?)

  // allow user to rotate ship
}
