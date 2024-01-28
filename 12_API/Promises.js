// a promise in JavaScript is a special object that represents the eventual completion or failure of an asynchronous operation, like fetching data from a server or reading a file.

// Imagine you make a promise to a friend that you'll bring them a gift tomorrow. A promise in JavaScript is similar - it's a commitment that something will happen in the future. This commitment can either be fulfilled (you bring the gift and the promise is resolved) or broken (you can't bring the gift and the promise is rejected).

// --- A promise has three states: ----

// ** Pending: The initial state; the promise is neither fulfilled nor rejected.

// ** Fulfilled: The operation completed successfully, and the promise now has a resulting value.

// ** Rejected: The operation failed, and the promise has a reason for the failure.

// ** Promises are useful for handling asynchronous code in a more organized and readable way. They allow you to chain actions that should be taken after the asynchronous operation completes, making your code more manageable and avoiding the "callback hell" problem.

// 1st Method
// const promiseone = new Promise(function(resolve,reject)
// {
//     //Do an Asnyc task
//     //=> DS calls
//     //=> cryptography
//     //=> network call
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// })

// promiseone.then(function(){
//     console.log("Promise Consumed");
// })

// // second method 
// new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },3000)

//     }).then(function(){
//         console.log("Async 2 resolved");
// })

// // 3rd Method with parameters
// const promisethree = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log("Async Task 3 completed");
//         resolve({
//             username: "chai",
//             email : "chai@example.com"
//         })
//     },5000)
// })

// promisethree.then(function(user)
// {
//     console.log(user);
// })

// // 4th Method
// const promiseFour = new Promise(function(resolve,reject)
// {
//     setTimeout( function(){
//         let error = false;
//         if(!error)
//         {
//             console.log("Async Task 4 Completed");
//             resolve(
//                 {
//                     username: "chai",
//                     password : "chai123"
//                 }
//             )
//         }
//         else{
//             reject("Error : Something went wrong")
//         }
//     },8000)
// })

// // const username = promiseFour.then( (user) =>
// // {
// //     console.log(user);
// //     return user.username;
// // })
// // console.log(username);       //this will not work when we want to access return value in then we have to creat another .then 

// promiseFour.then( (user) =>
// {
//    console.log(user);
//    return user.username
// })
// .then( (username) =>
// {
//    console.log(username);
// })
// .catch(function(error)
// {
//     console.log(error);
// })
// .finally( () =>
// {
//     console.log("Promise is either resolved or rejected");
// })

// //5th method - using Async Await 

// const promiseFive = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         let error = true;
//         if(!error)
//         {
//             resolve(
//                 {
//                     username : "Shivanjali",
//                     password : "123"
//                 }
//         )}
//         else{
//             reject("Error : JS Went Wrong");
//         }
//     },9000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }
// consumePromiseFive();


// ----------------------------------------------------------------------------------------------------
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()