const arrayList = [10, 20, 30, 6, 8, 2, 0, 234, 23, 45];


function linearSearch(array, target) {
  const result = array.find((value, i) => value === target)
  return result;
}


console.log(linearSearch(arrayList, 2))


