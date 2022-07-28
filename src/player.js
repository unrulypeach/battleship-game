import GameboardFactory from './gameboard';
import * as Helper from './helpers';

export default function player() {
  // Players can take turns playing the game
  // by attacking the enemy Gameboard.
  function play(opponentsBoard) {

  }
  // ‘computer’ players capable of making random plays.
  // it should know whether or not a given move is legal.
  const prevHits = [];

  function botPlay(gbObj) {
    const rand1 = Helper.randNum();
    const rand2 = Helper.randNum();
    const randComb = `${rand1} ${rand2}`;
    const randHit = gbObj.receiveAttack(rand1, rand2);

    if (randHit === 'fired and missed') {
      prevHits.push(randComb);
      return randHit;
    } if (randHit === true) {
      if (prevHits.includes(randComb)) {
        botPlay(gbObj);
      } else {
        return randHit;
      }
    } if (randHit === 'fail' || randHit === false) {
      botPlay(gbObj);
    }
  }
  return {
    botPlay,
    history: () => prevHits,
  };
}
const board = Object.create(GameboardFactory());
const playe = Object.create(player());
playe.botPlay(board);
playe.history();
