// --------- Declaration ---------

// const user1 = new Object()
// const user2 = {}

// user2.id = 123
// user2.name = "Shivanjali"
// user2.isLoggedIn = false

// console.log(user2);

//----------------------- Nested Object
// const user1 = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Shivanjali",
//             lastname: "More",
//         }
//     },
//     password: "Random123",
// }

// console.log(user1.fullname.userfullname.lastname);

// // ------- Merge Objects into a new one

// const obj1 = {
//     1: "A",
//     2: "B",
// }

// const obj2 = {
//     3: "C",
//     4: "D",
// }

// const obj3 = {obj1,obj2};
// console.log(obj3);   // { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

// ------ Use Spread operator 
// const obj3 = {...obj1,...obj2};
// console.log(obj3);

// // ------------------------ Array Of Objects

// const user = [
//     {
//         id:1,
//         email: "some@gmail.com",

//     },
//     {
//         id: 2,
//         email:"abc@gmail.com",
//     }
// ]
// console.log(user[0].email);
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));

// ------------------------- Destructuring
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
const course = {
    cousrename:"js in hindhi",
    price: "999"

}

// console.log(course.cousrename);

// instead of using couse.coursename by destructuring you can directly get value from arrays / objects
//we can also change the name name of variables

// const  { cousrename} = course
// console.log(cousrename);

const {cousrename : name } = course;
console.log(name);

