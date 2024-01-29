// The Promise.all() :
// method is actually a method of the Promise object 
// (which is also an object under JavaScript used to handle all the asynchronous operations), 
// that takes an array of promises(an iterable) as input. It returns a single Promise that 
// resolves when all of the promises passed as an iterable, which have resolved, or when the iterable contains no promises.
// In a simple way, if any of the passed-in promises reject,
// the Promise.all() method asynchronously rejects the value of the promise that has already been rejected,
// whether or not the other promises have been resolved.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 3000);
  });
  
  const allPromises = Promise.all([promise1, promise2, promise3]);
  
  allPromises.then((values) => {
    console.log(values);
    // Output: ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
  }).catch((error) => {
    console.log("Error:", error);
  });