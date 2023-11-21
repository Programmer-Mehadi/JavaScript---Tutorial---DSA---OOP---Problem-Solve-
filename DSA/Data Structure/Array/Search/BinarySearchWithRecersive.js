// array 
// The binary search => the array must be sorted before searching 
const numList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function findNumber(num, array) {
  let start = 0;
  let end = array.length - 1;
  let mid = start + Math.floor((end - start) / 2);
  // check condition
  if (array[mid] === num) {
    return mid;
  }
  else if (num < array[mid]) {
    return findNumber(num, array.slice(0, mid));
  }
  else if (num > array[mid]) {
    return findNumber(num, array.slice(mid + 1, array.length));
  }
  return -1;
}

const findStateMent = findNumber(45, numList);
console.log(findStateMent);

const findStateMent2 = findNumber(40, numList);
console.log(findStateMent2);
