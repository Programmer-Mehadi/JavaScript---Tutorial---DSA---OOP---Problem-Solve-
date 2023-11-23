
function startTask() {
  console.log('Task 1 procssing')
  setTimeout(function () {
    console.log('Task 1 end')
  }, 3000)

  console.log('Take Task 2 start ')
}


console.log('Take Task 1 start')
startTask()
console.log('Task 2 processing')
console.log('Task 2 end')