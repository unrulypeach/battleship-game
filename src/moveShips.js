import * as Helper from './helpers';

// allow user to place ships
export default function moveShips() {
  // allow user to move ships
  const ships = document.querySelectorAll('.cell');
  ships.forEach((ship) => {
    ship.onclick = function (event) {
      if (event.target.classList.contains('undefined')) {
        return;
      }
      const name = Helper.getShipName(event);
      const getName = document.querySelectorAll(`.${name}`);

      // mouse position
      // const posX = event.clientX;
      // const posY = event.clientY;
      const getNameIds = Helper.getPcId(getName);
      const nameIdsNum = Helper.arrStrToArrInt(getNameIds);

      // currPos is nodeList
      // targPos is array of index?
      function setDestination(currPos, targPos) {
        if (Helper.checkContainShip(targPos)) {
          // eslint-disable-next-line no-useless-return
          return;
        } if (targPos !== undefined) {
          currPos.forEach((el) => {
            el.classList.toggle('undefined');
            el.classList.toggle('ship');
            el.classList.toggle(name);
          });
          targPos.forEach((el) => {
            const item = document.querySelector(`#cell${el}`);
            item.classList.toggle('undefined');
            item.classList.toggle('ship');
            item.classList.toggle(name);
          });
        }
      }

      setDestination(getName, Helper.moveLeft(nameIdsNum));

      // ability to rotate ship

      // must change pBoard.gb()
      // function changeInternalBoard(){}

      // ship.onmouseup = function (ev) {};
    };
  });
}
