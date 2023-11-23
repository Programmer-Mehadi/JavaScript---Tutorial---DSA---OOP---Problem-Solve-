
function startTask() {
  console.log('Task 1 procssing')
  let currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  console.log('Task 1 end')
  console.log('Take Task 2 start ')
}


console.log('Take Task 1 start')
startTask()
console.log('Task 2 processing')
console.log('Task 2 end')