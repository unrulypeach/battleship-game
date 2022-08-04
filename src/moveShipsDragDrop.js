function allowDrop(ev) {
  ev.preventDefault();
}
function dragstart(ev) {
  ev.dataTransfer.setData('text', ev.target.classList);
}
function dragEnd(ev) {

}
function dragEnter(ev) {

}
function dragLeave(ev) {

}
function drop(ev) {
  ev.preventDefault();
  const data = 
}
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
