import ShipFactory from './shipFactory';
import GameboardFactory from './gameboard';
import player from './player';
import * as Helper from './helpers';
import './styles.css';

const game = () => {
  const playee = Object.create(player());
  const botter = Object.create(player());
  const pBoard = Object.create(GameboardFactory());
  const botBoard = Object.create(GameboardFactory());
  const fleet = [
    {
      spaces: 5,
      name: 'car',
    },
    {
      spaces: 4,
      name: 'bat',
    },
    {
      spaces: 3,
      name: 'cru',
    },
    {
      spaces: 2,
      name: 'des1',
    },
    {
      spaces: 2,
      name: 'des2',
    },
  ];
  // bot placeShip setup

  function placeBotShipRandom(size, gbObj) {
    const move = gbObj.placeShip(size, Helper.randNum(), Helper.randNum(), Helper.randBool());

    if (move !== undefined) {
      return move;
    }
    placeBotShipRandom(size);
  }

  function placeAllShipsRandomly() {
    fleet.forEach((ele) => {
      placeBotShipRandom(ele.spaces);
    });
  }

  return {
    pGb: () => pBoard.gb(),
    botGb: () => botBoard.gb(),
    placeBotShipRandom,
    placeAllShipsRandomly,
  };
};

(() => {
  const boardContainerList = document.querySelectorAll('.boardCont');
  boardContainerList.forEach((x) => {
    const div = document.createElement('div');
    div.classList.add('boardCells');
    for (let i = 0; i < 100; i += 1) {
      const gridCell = document.createElement('span');
      gridCell.id = i;
      gridCell.classList.add('cell');
      gridCell.style.height = '20px';
      div.append(gridCell);
    }
    x.appendChild(div);
  });
})();
