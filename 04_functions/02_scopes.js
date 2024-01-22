

// function one()
// {
//     const username = "Shivanjali";

//     function two()            //------ scope start
//     {
//         const website = "Youtube";
//         console.log(username);   //------ scope end
//     }
//     console.log(website);    // Error  - execution will get stop 
//     two();                  
// } 
// one();

//-------------------------------------------------------------------------------

// - ---------------- Two types of function declaration -------------------------

// function addone(num)   //basic function
// {
//     return num + 1;
// }

// addone(5);


// const addTwo = function(num)  // function  (expression)
// {
//     return num+2;
// }
// addTwo(10);

//--------------------------------------- Access ---------------------

addone(5);                                 // Here we can call a function before declaration
function addone(num)   //basic function
{
    return num + 1;
}



addTwo(10);                             // Here we cant call a function before declaration bcoz we are also holding a value in function
const addTwo = function(num)  // function  (expression)
{
    return num+2;
}


