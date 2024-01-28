// -------------------- Promise with .then: ---------------------

// In a promise chain with .then, you attach callback
// functions to handle the resolution of promises.

// It's a more traditional way of working with asynchronous code 
// and can lead to what is commonly known as "callback hell"
//  when chaining multiple asynchronous operations.



// --------------------- Async/Await: ---------------------------

// With async/await, you use the async keyword to define a function as asynchronous.
//  The await keyword is used within the function to pause execution until a promise is resolved.

// This approach makes asynchronous code look more like synchronous code,
//  improving readability and maintainability.


// -------------------------------------------------------------

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

// --------------------------------------- Explanation : ------------------------------------------

// async function getAllUsers() {:  
//      This line defines an asynchronous function named getAllUsers. 
//     The async keyword is used to indicate that this function will contain asynchronous operations.
 
// try {: 
//     The try block is used to wrap the code that might throw an exception. 
//     If any errors occur during the execution of the code inside this block, it will be caught by the catch block.
    
// const response = await fetch('https://jsonplaceholder.typicode.com/users'):
//     This line uses the fetch function to make an HTTP request to the specified URL,
//      which is the JSONPlaceholder API endpoint for retrieving user data. 
//      The await keyword is used to wait for the asynchronous operation to complete before moving on to the next line. 
//      The result of the fetch operation is a Response object.
    
// const data = await response.json(): 
//     This line extracts the JSON data from the Response object using the json() method.
//     Again, await is used to wait for the asynchronous operation to finish.
//     The extracted JSON data is stored in the variable data.
    
// console.log(data);:
//      This line prints the retrieved user data to the console. 
//      This is often done for debugging purposes to see the data that was fetched.
    
// } catch (error) {: 
//     If any errors occur during the execution of the code inside the try block, 
//     this catch block will catch and handle the error.
    
// console.log("E: ", error);: 
//     In case of an error, this line logs an error message to the console, including the error object. 
//     It helps in identifying and understanding what went wrong during the execution.
    
// }: 
//      Closes the try and catch blocks.
    
// getAllUsers():
//      Finally, this line calls the getAllUsers function, initiating the execution of the code inside it.

//-------------------------------------------------------- using ( .then )----------------------------------------------------

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))