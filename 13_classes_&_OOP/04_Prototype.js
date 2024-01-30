// let myName = "Shivanjali";
// console.log(myName.length);

let myHeros = ["thor","spiderman"]

let heroPower = {
   thor : "hammer",
   spiderman : "sling",

   getSpiderPower: function(){
     console.log(`Spidy power is ${this.spiderman}`);
   }
}

Object.prototype.Shivanjali = function()
{
    console.log(`Shivanjali is present in all Objects`);
}

Array.prototype.heyShiva = function()
{
    console.log(`Shivanjali says hello`);
}

// heroPower.Shivanjali();
// myHeros.Shivanjali();
//Object can be accessed through both arrays and String 

myHeros.heyShiva();   //will have access we assign prototype to a Array
// heroPower.heyShiva(); //will not have an access