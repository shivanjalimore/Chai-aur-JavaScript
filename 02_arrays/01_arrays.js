const myArr=[1,2,3,4,5];

const random =["ABC","DEF","GHI"];
console.log(myArr[0]);

console.log(myArr.push(6));   //push 6 at end 
console.log(myArr.pop());   //remove last value

console.log(myArr.unshift(9));  // Add element at start
console.log(myArr.shift());

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join();  // Array convert into string

console.log(myArr);
console.log(newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("After slice : ",myArr);

//splice

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("After splice : ",myArr);
