// ES6
//Classes in JS are built on prototypes 
//The constructor method is a special method for creating and initializing an object created with a class.
//There can only be one special method with the name "constructor" in a class —
// a SyntaxError is thrown if the class contains more than one occurrence of a constructor method. 

// class User{
//     constructor(username,email,password)
//     {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }
// const chai = new User("chai","chai@gmail.com","123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

