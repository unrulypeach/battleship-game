export function randNum() {
  return Math.ceil(Math.random() * 8);
}

export function randBool() {
  return Math.random() < 0.5;
}

export function joinTwoNum(x, y) {
  const ans = `${x}` + `${y}`;
  return parseInt(ans);
}

export function seperateTwoNum(x) {
  const y = `${x}`[0];
  const z = `${x}`[1];
  return [y, z];
}
