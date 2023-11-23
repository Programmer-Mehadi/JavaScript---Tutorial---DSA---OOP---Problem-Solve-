const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var numberArray = [4, 6, 9, 2, 15, 8, 3, 11, 7, 1, 20, 13, 18, 5, 16, 10, 12, 14, 19, 17];

function pickRandom(array) {

  const totalLength = array.length;
  let pickIndex = [];

  while (pickIndex.length < totalLength) {

    const index = Math.floor(totalLength * Math.random());
    if (!pickIndex.includes(index)) {
      pickIndex.push(index);
    }

  }

  console.log(pickIndex);

}

pickRandom(numList)
pickRandom(numberArray)




