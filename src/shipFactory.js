export default function ShipFactory(len, isVertical) {
  let hp = len;
  const isVert = isVertical;
  // returns isSunk()
  function isHit() {
    if (hp > 0) {
      hp -= 1;
      return true;
    }
    return false;
  }

  function isSunk() {
    return hp <= 0;
  }

  return {
    hp: () => hp,
    isVert: () => isVert,
    isHit,
    isSunk,
  };
}
