//     ** Immediate Invoked Function Expression (IIFE)
//   => creating and executing a function immediately after its definition
//   => used to create a private scope for variables to avoid polluting the global namespace



(function chai(){                   // Called as named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected to ${name}`)
})("Shivanjali");