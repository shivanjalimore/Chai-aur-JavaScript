// const user = {
//     username : "Shivanjali",
//     loginCount : 8,
//     signedIn : `${this.loginCount}`,

//     getSignIn : function(){
//         console.log(`${this.signedIn}`)
//     },

//     getUserDetails : function(){
//         console.log(`Username : ${this.username}`);
//     }
// }

// console.log(user.username);
// console.log(user.getSignIn());
// console.log(user.getUserDetails());

// function User(username,loginCount,isLoggedIn)
// {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;

//     return this;
// }

// const userOne = User("Shivanjali" , 10 , true);
// const userTwo = User("Siddhi",12,false);

// console.log(userOne);
// console.log(userTwo);   //usertwo will override the values of userOne


function User(username,loginCount,isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
}

const userOne = new User("Shivanjali" , 10 , true);   //new keyword creates new Object and call constructor function
const userTwo = new User("Siddhi",12,false);

console.log(userOne);
console.log(userTwo);   //usertwo will override the values of userOne
                        // for this we have to use new keyword which gives new instances for everycall

// the return this; statement is not strictly necessary for your specific use case because 
// the default behavior of JavaScript is to return the newly created object when using
//  the new keyword with a constructor function.