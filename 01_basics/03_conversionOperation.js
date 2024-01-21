
//------------ String to number Conversion ----------
let score="33";

console.log(typeof score); // String

let ConvertInt = Number(score)
console.log(typeof ConvertInt); //number

// case-2 
let score2 ="33ABC" 
console.log(typeof score2);

let ConvertInt1 = Number(score2); // It showes number, but we assign characters
//print and check what is the value of ConvertInt1
console.log(ConvertInt1);  // NaN

// "33" => 33
//"33ABC" => NaN
//null  => 0
//undefined => NaN
// true =>1 , false => 0

//------------------ Boolean Conversion -------------

let isLoggedIn = "Shivanajli"
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "String"  => true