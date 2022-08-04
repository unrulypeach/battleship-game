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
      // const name = ship.classList[ship.classList.length - 1];
      const name = event.currentTarget.classList[event.currentTarget.classList.length - 1];
      const getName = document.querySelectorAll(`.${name}`);

      // mouse position
      // const posX = event.clientX;
      // const posY = event.clientY;

      const getNameIds = Helper.getPcId(getName);
      const nameIdsNum = Helper.arrStrToArrInt(getNameIds);

      // move fns
      function moveUp(indArr) {
        const ans = indArr.map((el) => el - 10);
        return indArr.some((el) => el < 10) ? indArr : ans;
      }
      function moveDown(indArr) {
        const ans = indArr.map((el) => el + 10);
        return indArr.some((el) => el > 99) ? indArr : ans;
      }
      function moveLeft(indArr) {
        // if some number is divisble by ten then move left = to ship length
        let ans = indArr.map((el) => el - 1);
        if (indArr.some((el) => el % 10 === 0)) {
          ans = indArr.map((el) => el - indArr.length);
        }

        return indArr.some((el) => el <= 0) ? indArr : ans;
      }
      function moveRight(indArr) {
        const ans = indArr.map((el) => el + 1);
        return indArr.some((el) => el > 99) ? indArr : ans;
      }
      function checkMove(movedArr) {
        return movedArr.every((el) => el >= 0 && el <= 99);
      }
      // currPos is nodeList
      // targPos is array of index?
      function setDestination(currPos, targPos) {
        if (targPos !== undefined) {
          currPos.forEach((el) => {
            el.classList.toggle('ship');
            el.classList.toggle(name);
            el.classList.toggle('undefined');
          });
          targPos.forEach((el) => {
            const item = document.querySelector(`#cell${el}`);
            item.classList.toggle('undefined');
            item.classList.toggle('ship');
            item.classList.toggle(name);
          });
        }
      }
      setDestination(getName, moveLeft(nameIdsNum));

      // must change pBoard.gb()
      // function changeInternalBoard(){}

      // ship.onmouseup = function (ev) {};
    };
  });
  // ship must be moved in pBoard.gb()

  // ship must be moved in DOM (move below to dom.js?)

  // allow user to rotate ship
}
