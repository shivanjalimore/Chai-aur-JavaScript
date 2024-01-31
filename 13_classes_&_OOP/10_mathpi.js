// Why Math libarary element have fixed values we cant override it 

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }