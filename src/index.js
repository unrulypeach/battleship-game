/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
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

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  const ship = document.getElementById(data);
  ship.children.forEach((shipPc) => {
    shipPc.target.append(shipPc);
  });
  for (const [key] of Object.entries(ship.children)) {

  }
}

(() => {
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
      gridCell.addEventListener('dragover', allowDrop);
      gridCell.addEventListener('drop', drop);
      div.append(gridCell);
    }
    x.appendChild(div);
  });
})();

(() => {
  const pieces = document.querySelectorAll('.ship');
  pieces.forEach((x) => {
    // x.draggable = 'true';
    x.addEventListener('dragstart', drag);
  });
})();
