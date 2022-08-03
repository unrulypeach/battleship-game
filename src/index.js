/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import ShipFactory from './shipFactory';
import GameboardFactory from './gameboard';
import player from './player';
import game from './gameplayFn';
import * as Helper from './helpers';
import dragndrop from './dragndrop';
import './styles.css';
import { updateBoard } from './dom';
import moveShips from './moveShips';

// const playee = Object.create(player());
// const botter = Object.create(player());
const pBoard = Object.create(GameboardFactory());
const botBoard = Object.create(GameboardFactory());
const newGame = Object.create(game());

// connect dom with board
// updateBoard(pBoard);

// when boat in spot classname = "ship"
game().placeAllShipsRandomly(pBoard);
updateBoard(pBoard, 0);
// ".ship" should be differently colored
moveShips();
// './ship' should be able to be moved by player
