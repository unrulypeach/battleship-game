export default function ShipFactory(len) {
  let hp = len;

  // returns isSunk()
  function isHit() {
    if (hp > 0) {
      hp -= 1;
      return hp === 0;
    }
    return true;
  }

  function isSunk() {
    return hp <= 0;
  }

  return {
    hp: () => hp,
    isHit,
    isSunk,
  };
}
