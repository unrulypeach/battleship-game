export default function dragndrop() {
  const pieces = document.querySelectorAll('.ship');

  pieces.forEach(((shippc) => {
    const ship = shippc;
    ship.onmousedown = function (event) {
      ship.style.position = 'absolute';
      ship.style.zIndex = 1000;

      const shiftX = event.clientX - ship.getBoundingClientRect().left;
      const shiftY = event.clientY - ship.getBoundingClientRect().top;

      document.body.append(ship);

      // centers ship at (pageX, pageY) coords
      function moveAt(pageX, pageY) {
        ship.style.left = `${pageX - shiftX}px`;
        ship.style.top = `${pageY - shiftY}px`;
      }

      // move our absolutely positioned ball under the pointer
      moveAt(event.pageX, event.pageY);

      // use document.elementsFromPoint(x,y) to get cell info
      function findCell(x, y) {
        document.elementsFromPoint(x, y);
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      // move the ball on mousemove
      document.addEventListener('mousemove', onMouseMove);

      // drop the ball, remove uneeded handlers
      ship.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ship.onmouseup = null;
      };
    };
    ship.ondragstart = function () {
      return false;
    };
  }));
}
// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData('text', ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   const data = ev.dataTransfer.getData('text');
//   const ship = document.getElementById(data);
//   ev.target.append(ship);
// }

// (() => {
//   const pieces = document.querySelectorAll('.ship');
//   pieces.forEach((x) => {
//     // x.draggable = 'true';
//     x.addEventListener('dragstart', drag);
//   });
// })();
