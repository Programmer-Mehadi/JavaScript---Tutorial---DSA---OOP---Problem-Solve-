const promise1 = Promise.resolve(`Promise 1 Resolved`);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 Resolved`);
  }, 2000);
});

// promise1.then((result) => {
//   console.log(result);
// })

// promise2.then((result) => {
//   console.log(result);
// })

// Promise.all([promise1, promise2]).then((result) => {
//   console.log(result);
// })


Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
})