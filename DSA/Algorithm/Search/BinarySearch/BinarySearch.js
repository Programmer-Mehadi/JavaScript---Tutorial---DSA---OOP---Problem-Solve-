const ageList = [15, 23, 29, 29, 35, 36, 38, 39, 45, 48, 56];

function BinarySearch(array, target) {
  let start = 0, end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (target == array[mid]) {
      return true
    }
    else if (target > array[mid]) {
      start = mid + 1
      end = array.length - 1
    }
    else {
      start = 0
      end = mid - 1
    }
  }
  return
}

if (BinarySearch(ageList, 36)) {
  console.log('Find the number: ', 36);
}
else {
  console.log('Not found');
}
