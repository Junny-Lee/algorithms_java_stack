// passing by copy (primitives) vs passing by reference for more complex types
var x = 10;
var y = x; // we are making a copy of x to equal y
// primitive types (copy themselves)

y += 10;
x += 30;

console.log(x); // 40 // pass by copy because primitives
console.log(y); // 20

var a = [1,2,3,4];
var b = a; // making a reference to a (not copying the value, we are pointing to a)

a.push(10); // pass by reference because objects and arrays are not primitives 
b.push(10); 

console.log(a); // [1,2,3,4,10,10]
console.log(b); // [1,2,3,4,10,10]


// classes (Car) - blueprints
//      - attributes:
        // color
        // size
        // milage
        // door
        // make
        // model 

//      - methods
        // honk
        // accelerate
        // turn
        // break

// objects - instance of a class 
// new
var tesla = new Car();

