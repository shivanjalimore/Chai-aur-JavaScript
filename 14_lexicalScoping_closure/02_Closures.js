// ***** Closures *****

// Closure is a combination of a function and the lexical environment in which it was defined.
//  In other words, a closure is a function that has access to variables in its outer (enclosing) 
//  function scope, even after the outer function has returned. 
//  Closures are created every time a function is defined in JavaScript, 
//  and they are used to create private variables and methods.

function makeFunc(){
    const name = "Shivanjali";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();