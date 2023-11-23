
const ageList = [55, 20, 30, 40, 27, 50, 43, 60, 12]

function SelectionSort(array) {
  if (array.length > 0) {
    for (let i = 0; i < array.length - 1; i++) {
      let element = array[i];
      let swapIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (element > array[j]) {
          swapIndex = j;
        }
      }
      if (swapIndex !== i) {
        let temp = array[swapIndex];
        array[swapIndex] = array[i];
        array[i] = temp;
      }
    }
    console.log(array)
  }
  else {
    console.log("Array is empty")
  }
}

SelectionSort(ageList);

