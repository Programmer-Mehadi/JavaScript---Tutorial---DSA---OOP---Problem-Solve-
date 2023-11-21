// array 
// The binary search => the array must be sorted before searching 
const numList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function findNumber(num, array) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (array[mid] === num) {
      return mid;
    }
    else if (num < array[mid]) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return -1;
}

const findStateMent = findNumber(45, numList);
console.log(findStateMent);

const findStateMent2 = findNumber(40, numList);
console.log(findStateMent2);
