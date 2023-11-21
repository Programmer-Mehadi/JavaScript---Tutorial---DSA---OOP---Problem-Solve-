// array 
const numList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function findNumber(num) {
  for (let i = 0; i < numList.length; i++) {
    if (num === numList[i]) {
      return "Find the number " + num
    }
  }
  return "Can't find the number " + num
}

const findStateMent = findNumber(45);
console.log(findStateMent);

const findStateMent2 = findNumber(40);
console.log(findStateMent2);


