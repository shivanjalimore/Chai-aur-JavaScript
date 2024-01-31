// ***** Lexical Scope: *****
// Lexical scope is a fundamental concept in JavaScript that defines the accessibility and visibility
//  of variables in a particular context, based on where they are defined in the code. 
//  In JavaScript, the scope of a variable is determined by its location within the code's nested functions.


// function outerFunction() {
//     const outerVar = 'I am from the outer function';
  
//     function innerFunction() {
//       const innerVar = 'I am from the inner function';
//       console.log(outerVar); // Output: I am from the outer function
//     }
  
//     innerFunction();
//   }
  
//   outerFunction();

//----------------------------------------------------------------------------------------------------------------------

function outerFunction() {
    const outerVar = 'I am from the outer function';
  
    function innerFunction() {
      const innerVar = 'I am from the inner function';
      console.log(outerVar); // Output: I am from the outer function

      function inner2Function(){
        const inner2Var = "Iam inner 2 function";
        console.log(outerVar);
        console.log(innerVar);
      }
      inner2Function();
    }
  
    innerFunction();
  }
  
  outerFunction();

//----------------------------------------------------------------------------------------------------------------------

function outerFunction() {
    const outerVar = 'I am from the outer function';
  
    function innerFunction() {
      const innerVar = 'I am from the inner function';
      console.log(outerVar); // Output: I am from the outer function
    }
  
    function inner2Function(){
        const inner2Var = "Iam inner 2 function";
        console.log(outerVar);
        console.log(innerVar);  //not accessible
      }

    innerFunction();
    inner2Function();
  }
  
  outerFunction();