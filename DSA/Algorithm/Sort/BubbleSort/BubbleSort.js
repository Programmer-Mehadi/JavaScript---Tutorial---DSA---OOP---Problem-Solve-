const ageList = [55, 20, 30, 40, 27, 50, 43, 60, 12]


function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  console.log(array)
}


BubbleSort(ageList)