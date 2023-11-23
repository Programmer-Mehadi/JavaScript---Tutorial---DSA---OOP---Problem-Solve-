const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`)
  callback(customer)
}


const processOrder = (customer, callback) => {
  console.log(`Processing order for ${customer}`)
  setTimeout(() => {
    console.log('cooking completed')
    console.log(`Order processed for ${customer}`)
    callback(customer)
  }, 3000)
}

const completeOrder = (customer) => {
  console.log(`completed Order for ${customer}`)
}

takeOrder('customer 1', (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
    takeOrder('customer 2', (customer) => {
      processOrder(customer, (customer) => {
        completeOrder(customer)
      })
    })
  })
})

console.log('end of application')