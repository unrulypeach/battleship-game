export default function ShipFactory(len) {
  // Your ‘ships’ will be objects that include their length,
  // where they’ve been isHit and whether or not they’ve been sunk.
  const length = [];
  (() => {
    for (let i = 0; i < len; i += 1) {
      length.push(false);
    }
  })();

  // a isHit() function that takes a number and then marks that position as ‘hit’.
  function isHit(indx) {
    length[indx] = true;
    return length;
  }
  // isSunk() should be a function that calculates it based on their length
  // and whether all of their positions are ‘hit’.
  function isSunk() {
    return length.every((element) => element === true);
  }
  return {
    getLength: () => length,
    isHit,
    isSunk,
  };
}
