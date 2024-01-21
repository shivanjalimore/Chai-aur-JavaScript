let myArr1 = [1,2,3,4,5];
let newArr = ["A","B","C","D"];

// newArr.push(myArr1);
// console.log(newArr);   //[ 'A', 'B', 'C', 'D', [ 1, 2, 3, 4, 5 ] ]

// const newArr1 = myArr1.concat(newArr);
// console.log(newArr1);


//------------------ spread Operator ----------------

const myNewArr = [...myArr1,...newArr];  //combine two arrays
console.log(myNewArr);

// ---------------- flat --------------------
//The flat() method creates a new array that is flattened to a certain depth.

const another_array = [1,2,3,[4,5,6],7,8,[9,7,6,[3,4,5]]];
const real_array = another_array.flat(Infinity);
console.log(real_array);

//check if given input is an array or not 
console.log(Array.isArray("Shivanjali"));  //false

//convert given input in an array 
console.log(Array.from("Shivanjali"));

//Array.of  => Create new array from given elements
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
