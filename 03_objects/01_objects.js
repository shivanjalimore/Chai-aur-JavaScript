//Object
// const JsUser = {
//     name: "Shivanjali"
// }

// const JsUser = {
//    name: "Shivanjali",
//    age: 21,
//    "Last Name": "More",
//    location: "Pune",
//    email: "shivanjalimore035@gmail.com",
//    isLoggedIn: false,
// }

// console.log(JsUser.name);      
// console.log(JsUser["name"]);
// console.log(typeof JsUser.name);
// // console.log(JsUser.Last Name);   //If key has spaces then we can't access it by dot(.)
// console.log(JsUser["Last Name"]);

// -------------------- Use symbol as a key ---------

const mySym = Symbol("Key1");

const JsUser = {
   name: "Shivanjali",
   age: 21,
   [mySym]: "myKey1",
   "Last Name": "More",
   location: "Pune",
   email: "shivanjalimore035@gmail.com",
   isLoggedIn: false,
}

console.log(JsUser[mySym]);
console.log(JsUser);