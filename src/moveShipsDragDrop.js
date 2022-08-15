import * as Helper from './helpers';

// given to all cells
export function dragstart(ev) {
  // check if classlist contains .ship
  // ev.preventDefault();
  const shipName = Helper.getShipName(ev);
  if (shipName !== 'undefined') {
    // if yes => setData an array of relevant ship cells
    const shipNums = Helper.getShipNums(ev);
    const data = {
      0: shipNums,
      1: Helper.getTargetInd(ev, shipNums),
      2: shipName,
    };
    ev.dataTransfer.setData('text/plain', JSON.stringify(data));
    // shipNums.forEach((el) => {
    //   const item = document.querySelector(`#cell${el}`);
    //   Helper.toggleShip(item, shipName);
    // });
  }
}
export function dragEnter(ev) {
  ev.preventDefault();
  // check if you can place content
  // if not, display warning
  // how to get targetpos??
  const currId = ev.target.id[4] + ev.target.id[5];
  const data = ev.dataTransfer.getData('text/plain');
  const prevId = data[1];
  const idDiff = Math.abs(prevId - currId);
  const pcList = data[0];
  const name = data[2];
  const targPos = pcList.map((el) => el - idDiff);
  Helper.setDestination(pcList, targPos, name);
  // otherwise preview content
}
export function dragLeave(ev) {
  // remove preview content
}
export function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text/plain');
  const parseData = JSON.parse(data);
  // setDestination(parseData, CURRENTPOSITION);
}

// function drop(ev) {
//   ev.preventDefault();
//   const data = ev.dataTransfer.getData('text');
//   const ship = document.getElementById(data);
//   ev.target.append(ship);
// }
