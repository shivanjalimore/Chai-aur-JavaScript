// ********************** for of loop *************************

// for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// const arr = [1,2,3,4,5]
// for(const num of arr)
// {
//     console.log(num);
// }


// ************************** map ****************************

// Key and value pair
// map() method loops through each object in the given array
// returns an array containing key-value pairs as its data

const map = new Map()
map.set('IN',"India");
map.set("USA","United states of America");
map.set("Fr","France");
map.set("IN","India");
console.log(map);

// for (const key of map)
// {
//     console.log(key);
// }
for (const [key,value] of map)
{
    console.log(key,": ",value);
}