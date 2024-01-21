// String interpolation
const name ="Shivanjali";
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const random = new String("Shivanjali");
console.log(random[0]);
console.log(random.__proto__);

console.log(random.length);
console.log(random.toUpperCase());
console.log(random.charAt(3));
console.log(random.indexOf('v'));

const newString = random.substring(0,4)
console.log(newString);

const anotherString = random.slice(0,4);
console.log(anotherString);

// avaScript substring() different results of substring()

// If start > stop, then the function swaps both arguments.
// If any argument is negative or is NaN, it is treated as 0.
// JavaScript slice() different results of slice()

// If start > stop, This function will return an empty string. (“”)
// If the start is negative, It sets char from the end of the string, like substr().
// If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)

const extrim = "    Shivanjali     ";
console.log(extrim.trim());

const url = "https://github.com/shivanjalimore";
console.log(url.replace("github","ABCD"));
console.log(url.includes("POIUY"));

const newString1 = "Welcome to Chai aur Code series";
console.log(newString1.split(" "));

