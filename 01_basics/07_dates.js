let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23,5,12)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);  
//Date.now() is a method in JavaScript that returns the current timestamp in milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC) 

console.log(myCreatedDate.getTime());
//.getTime() to retrieve the timestamp in milliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)  //in javascript month start from 0 
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
    
})




