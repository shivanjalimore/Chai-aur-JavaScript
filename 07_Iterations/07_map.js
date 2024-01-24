//************************ map **************************

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr);

const myNumbers = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNumbers.map( (num) => num+10 )
// console.log(newNums);
// console.log(myNumbers);

//******************************** chaining *************************************

const newNums = myNumbers
                        .map( (num) => num*10 )
                        .map( (num) => num+1)
                        .filter( (num) => num >=40 )
console.log(newNums);