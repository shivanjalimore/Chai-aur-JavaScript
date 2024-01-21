// function loginUsermsg(username)
// {
//     return `${username} just logged in`
// }
// console.log(loginUsermsg("Shivanjali"));


// function loginUsermsg(username)
// {
//     return `${username} just logged in`
// }
// console.log(loginUsermsg());  // undefined


// function loginUsermsg(username)
// {
//     if(username === undefined)
//     {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// loginUsermsg();
// -----------------------------------------------------------------------

// If we didnt pass any parameter then by default it will print the argument

// function loginUsermsg(username = "shiva")
// {
//     if(username === undefined)
//     {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUsermsg());


// ----------------------- Shopping Cart---------------------

// ---------- Rest Operator -------------
// Passing multiple values in a function

// function calculateCartPrice(...num1)   //(...num1 => Rest operator take all parameters convert it in array)
// {
//     return num1;
// }
// console.log(calculateCartPrice(200,300,400,500,600,700));

function calculateCartPrice(val1 , val2 , ...num1)
{
    return num1;
}
// console.log(calculateCartPrice(200,300,400,500,600,700));

// -------------------- How to pass Object in a Function --------------------------

const user = {
    username : "Shivanjali",
    price : 199
}

function handleObject(abc){
    console.log(`Username is ${abc.username} and price is ${abc.price}`)

}
handleObject(user);

const myNewArray = [200,400,100,600]

function returnSecondvalue(getArray)
{
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray))