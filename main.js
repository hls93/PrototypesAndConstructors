//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry, owner ) {
  this.name = name;
  this.status = status || "normal";
  this.color = color;
  this.hungry = hungry || false;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog ("sadie", "normal", "black");
let moonshine = new Dog ("moonshine", "normal", "brown", "true");
let atticus = new Dog ("atticus");


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.cool = cool || false;
  this.pet = function dog() {
    dog.status = "happy";
  }
  this.feed = function dog() {
    dog.hungry = false;
  }

}

// Instances of Human
// Needed: mason, julia
let julia = new Human("julia", true);
let mason = new Human("mason", false);
