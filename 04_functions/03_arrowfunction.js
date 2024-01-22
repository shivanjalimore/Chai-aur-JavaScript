// const user ={
//     username : "Shivanjali",
//     price : 999,


//     welcomeMsg : function(){
//         console.log(`${user.username} , welcome to website`)
//         // console.log(user);
//     }
// }

// user.welcomeMsg();   // print shivanjali
// console.log(user);
// user.username = "More";

// user.welcomeMsg();   // print More
// console.log(user);

//------------------------------------------  This  -------------------------------

// const user ={
//     username : "Shivanjali",
//     price : 999,


//     welcomeMsg : function(){
//         console.log(`${this.username} , welcome to website`)
//     }
// }

// user.welcomeMsg();   // print shivanjali

// user.username = "More";
// user.welcomeMsg();  // print More bcoz we use this 
// console.log(this);  //{}
//---------------------------------------------------------------------------

// function chai(){           //inside function this 
//     let username = "ABCD"
//     console.log(this.username);  // undefined
// }
// chai()

//---------------------------------------------------------------------------------

// const chai = function () {
//     let username = "Shivanjali"
//     console.log(this.username);  //undefined
// }
// chai()

// const chai = () => {
//     let username = "Shivanjali"
//     console.log(this.username);  //undefined
// }
// chai()

//--------------------------------------------------  Arrow Function-----------------------------------

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(2,3));

//-------------------------------------------- Implicite return ---------------------------------------

const addTwo = (num1,num2) => (num1+num2)   //we dont need to write return
console.log(addTwo(1,2));