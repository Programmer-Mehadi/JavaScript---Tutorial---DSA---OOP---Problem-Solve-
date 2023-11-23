const ageList = [55, 20, 30, 40, 27, 50, 43, 60, 12]

function InsertionSort(array) {

  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
          let temp = array[j];
          array[j] = array[i];
          array[i] = temp;
          for (let k = i - 1; k > 1; k--) {
            if (array[k] < array[k - 1]) {
              let temp = array[k];
              array[k] = array[k - 1];
              array[k - 1] = temp;
            }
            else {
              break;
            }
          }
        }
      }
    }
    console.log(array)
  }
  else {
    console.log("Array is empty")
  }
}

InsertionSort(ageList)