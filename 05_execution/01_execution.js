// ---------------------------------- JavaScript Execution Context --------------------------------------

//*********** Types **********
// { }  => Global Execution Context
//      => functional execution context
//      => Eval Execution Context 

//  ************ JavaScript is a Single threaded language 
// => has one call stack and one memory heap
// => execute one thing at a time

// ------------------- Execution steps ------------------------
// 1) Global Execution => this
// 2) Memory Phase(Creation Phase)
// 3) Execution Phase

// Phases of the JavaScript Execution Context
// There are two phases of JavaScript execution context:

// Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.
// Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.