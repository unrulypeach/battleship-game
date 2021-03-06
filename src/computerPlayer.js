import GameboardFactory from './gameboard';

export default function computer() {
  // Players can take turns playing the game
  // by attacking the enemy Gameboard.
  const board = Object.create(GameboardFactory());

  // The game is played against the computer,
  // so make ‘computer’ players capable of making random plays.
  // The AI does not have to be smart,
  // but it should know whether or not a given move is legal.
  // (i.e. it shouldn’t shoot the same coordinate twice).

  return {
    gb: () => board.gb(),
  };
}
