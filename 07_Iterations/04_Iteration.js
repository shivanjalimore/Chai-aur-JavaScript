
// ********************* for in ***********************

// const myObject = {
//     js: 'Javascript',
//     rg: 'ruby',
//     cpp: 'C++',
//     java: 'Java'
// }

// for(const key in myObject){
//     console.log(key);
// }

// for(const key in myObject)
// {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// Implement in Array

const random = ["ABC","DEF","GHI","JKL"];
for (const key in random) {
   console.log(key);
}


const random1 = ["ABC","DEF","GHI","JKL"];
for (const key in random) {
   console.log(random1[key]);
}