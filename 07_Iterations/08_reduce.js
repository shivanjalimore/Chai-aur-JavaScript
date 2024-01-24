//****************************** reduce *****************************

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// const array1 = [1,2,3,4,5];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator , currentvalue) => 
//               accumulator + currentvalue, initialValue 
// )
// console.log(sumWithInitial);    //15

// ******************************* Use case - shopping Cart *****************************

const shoppingCart = [
    {
        itemName : "A",
        price : 1000
    },
    {
        itemName : "B",
        price : 2000
    },
    {
        itemName : "C",
        price : 3000
    },
    {
        itemName : "D",
        price : 4000
    },
    {
        itemName : "E",
        price : 5000
    },
    {
        itemName : "F",
        price : 6000
    }
]

// const bill = shoppingCart.reduce(

//     (acc,item)  =>    acc+ item.price , 0
// )
// console.log(bill);


//------------------------- Using return ---------------------
const bill = shoppingCart.reduce((acc, item) => 
{
    return acc + item.price;
}, 0);

console.log(bill);