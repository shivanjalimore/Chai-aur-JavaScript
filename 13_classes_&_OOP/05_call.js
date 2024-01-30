// function setUserName(username)
// {
//     //complex DB calls
//     this.username = username;
//     // console.log(`username : ${username}`);
    
// }
// function createUser(username,email,password)
// {
//     this.username = setUserName(username);    //we created reference only it will not call the function
//     this.email = email;
//     this.password = password;
//     // console.log(`email : ${email}`);
//     // console.log(`password : ${password}`);
    
// }

// const chai = new createUser("Shivanjli","shiva@gmail.com","123");
// console.log(chai);    // not print username 

//------------------------------------------------ new Keyword ----------------------------------
// 1) It creates a new object.
// 2) It sets the this keyword to point to the newly created object.
// 3) It implicitly returns the newly created object.

//---------- If we dont use new keyword and try to print this it will print all parameters 
//  username property because it is added to the global object.

//---------------------------------------------------------------------------------------------------------------------------------------------------
//------------------ To hold the Reference we can use (call) method ---------------------------------------------------------------------------------
function setUserName(username)
{
    //complex DB calls
    this.username = username;
    // console.log(`username : ${username}`);
    
}
function createUser(username,email,password)
{
    setUserName.call(this,username);
    // we explicity call setUserName function and our this to save the username
    // username property will get added in same object
    this.email = email;
    this.password = password;
    // console.log(`email : ${email}`);
    // console.log(`password : ${password}`);
    
}

const chai = new createUser("Shivanjli","shiva@gmail.com","123");
console.log(chai);    