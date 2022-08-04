export function randNum() {
  return Math.ceil(Math.random() * 8);
}

export function randBool() {
  return Math.random() < 0.5;
}

export function joinTwoNum(x, y) {
  const ans = `${x}` + `${y}`;
  return parseInt(ans, 10);
}

export function seperateTwoNum(x) {
  const y = `${x}`[0];
  const z = `${x}`[1];
  return [y, z];
}
// ["22", "23", "24", "25"]
export function getPcId(nodeList) {
  return Array.from(nodeList, (item) => item.id[4] + item.id[5]);
}
export function arrStrToArrInt(arrStr) {
  return arrStr.map((el) => parseInt(el, 10));
}
