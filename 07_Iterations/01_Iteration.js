// for loop 

// for(let i = 0;i <= 10; i++)
// {
//     const element = i;
//     console.log(element);
// }

// for(let i=0; i<= 10; i++)
// {
//     console.log(`Outerr loop value: ${i}`);
//     for(let j=0; j<= 10; j++)
//     {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
//     }
// }

// ************** Break and Continue ****************

// for(let i=1 ;i <= 20 ;i++)
// {
//     if(i == 5)
//     {
//         console.log("Detetcted 5");
//         break;
//     }
//     console.log(`Value of i is ${i}`);  //After 5 loop stops
// }
for(let i=1 ;i <= 20 ;i++)
{
    if(i == 5)
    {
        console.log("Detetcted 5");     
        continue;
    }
    console.log(`Value of i is ${i}`);    // 5 will not print
}


