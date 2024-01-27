//JavaScript is Synchronous in nature 
//           => Single threaded

//*** Blocking Code (Sync)=> code that block the execution of other code until they are completed.

//*** Non-Blocking Code (Async) => allow further pieces of code to execute without making them wait and use callbacks when they are completed.

// **** setTimeout() =>  sets a timer which executes a function or specified piece of code once the timer expires

//JavaScript engine typically contains a call stack and a heap. The call stack is where the code is executed. The heap is an unstructured memory pool that stores all the objects needed for the application.

//****************    JavaScript Runtime  **************** 

// The callback queue includes callback functions that are ready to be executed. The callback queue ensures that callbacks are executed in the First-In-First-Out (FIFO) method and they get passed into the stack when it’s empty.
