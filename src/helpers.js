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
export function getShipName(ev) {
  return ev.currentTarget.classList[ev.currentTarget.classList.length - 1];
}
export function toggleShip(el, name) {
  el.classList.toggle('undefined');
  el.classList.toggle('ship');
  el.classList.toggle(name);
}
export function getShipNums(ev) {
  const name = getShipName(ev);
  const getName = document.querySelectorAll(`.${name}`);
  const getNameIds = getPcId(getName);
  const nameIdsNum = arrStrToArrInt(getNameIds);
  return nameIdsNum;
}
// move fns
export function moveUp(indArr) {
  const ans = indArr.map((el) => el - 10);
  return indArr.some((el) => el < 10) ? indArr : ans;
}
export function moveDown(indArr) {
  const ans = indArr.map((el) => el + 10);
  return indArr.some((el) => el > 99) ? indArr : ans;
}
export function moveLeft(indArr) {
  // if some number is divisble by ten then move left = to ship length
  let ans = indArr.map((el) => el - 1);
  if (indArr.some((el) => el % 10 === 0)) {
    ans = indArr.map((el) => el - indArr.length);
  }

  return indArr.some((el) => el <= 0) ? indArr : ans;
}
export function moveRight(indArr) {
  let ans = indArr.map((el) => el + 1);
  if (indArr.some((el) => el % 10 === 0)) {
    ans = indArr.map((el) => el - indArr.length);
  }
  return indArr.some((el) => el > 99) ? indArr : ans;
}
export function checkMove(movedArr) {
  return movedArr.every((el) => el >= 0 && el <= 99);
}
export function checkContainShip(targPos) {
  return targPos.some((el) => {
    const target = document.querySelector(`#cell${el}`);
    // NEED TO CHECK THAT IT ISNT ITSELF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // currently cannot move horizontal ships T_T
    return (target.classList.contains('ship'));
  });
}
export function getTargetInd(ev, getPcIdItem) {
  const evId = ev.target.id[4] + ev.target.id[5];
  return getPcIdItem.findIndex((el) => el === `${evId}`);
}
// targPos is array of index?
export function setDestination(currPos, targPos, name) {
  if (checkContainShip(targPos)) {
    // eslint-disable-next-line no-useless-return
    return;
  } if (targPos !== undefined) {
    currPos.forEach((el) => {
      const item = document.querySelector(`#cell${el}`);
      toggleShip(item, name);
    });
    targPos.forEach((el) => {
      const item = document.querySelector(`#cell${el}`);
      toggleShip(item, name);
    });
  }
}
export function unsetDestination(pos) {

}

export function collatz(num) {
  if (num === 1) {
    return 0;
  }
  if (num % 2 === 0) {
    return 1 + collatz((num / 2));
  }
  if (num % 2 !== 0) {
    return 1 + collatz(((3 * num) + 1));
  }
}

export function powers(base, power) {
  if (power === 0) {
    return 1;
  }
  return base * powers(base, power - 1);
}
export function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}
export function all(arr, fn) {
  // eslint-disable-next-line no-var, no-use-before-define
  var copy = arr.slice();
  if (copy.length === 0) {
    return true;
  } if (fn(copy[0])) {
    copy.shift();
    return all(copy, fn);
  }
  return false;
}
export function allBet(arr, fn) {
  return arr.every((x) => fn(x));
}
export function reduce(arr) {
  return arr.reduce((p, c) => p * c);
}
export function reduceRecursive(arr) {
  // eslint-disable-next-line no-var, no-use-before-define
  if (arr.length === 0) {
    return 1;
  }
  return arr.shift() * reduceRecursive(arr);
}
export function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  const first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
}
export function sumSquares(array) {
  if (array.length === 0) return 0;

  let total = 0;
  const first = array.shift();

  if (Array.isArray(first)) {
    total += sumSquares(first);
  } if (Number.isInteger(first)) {
    total += (first * first);
  }
  return total + sumSquares(array);
}
export function replicate(times, num) {
  if (times <= 0) return [];

  return [num].concat(replicate(times - 1, num));
}
export function fibs(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibs(n - 1) + fibs(n - 2);
}
