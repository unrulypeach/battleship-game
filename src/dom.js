import { joinTwoNum } from './helpers';

export default (() => {
  const boardContainerList = document.querySelectorAll('.boardCont');
  boardContainerList.forEach((x) => {
    const div = document.createElement('div');
    div.classList.add('boardCells');
    div.id = 'bc';
    for (let i = 0; i < 100; i += 1) {
      const gridCell = document.createElement('span');
      gridCell.id = `cell${i}`;
      gridCell.classList.add('cell');
      gridCell.style.height = '20px';
      div.append(gridCell);
    }
    x.appendChild(div);
  });
})();

export function updateBoard(gbObj, player) {
  const board = gbObj.gb();
  const domBoard = document.querySelectorAll('.boardCells')[player].children;
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const joined = joinTwoNum(i, j);
      const cell = board[i][j];
      if (typeof cell === 'object') {
        domBoard[joined].classList.remove('undefined');
        domBoard[joined].classList.add('ship');
        domBoard[joined].classList.add(`n${cell.hp()}`);
      } else {
        domBoard[joined].classList.add(`${cell}`);
      }
    }
  }
}
