var n1 = {
    value : 11,
    next: null
}

var n2 = {
    value : 22,
    next: null
}

var n3 = {
    value : 33,
    next: null
}

n1.next = n2; // makes a reference (does not make a copy) 
console.log(n1); // { value: 11, next: { value: 22, next: null } }
console.log({n1}); // { n1: { value: 11, next: { value: 22, next: null } } }

n2.value = 100; // when n2 changes, n1 will change because of the reference 
console.log(n1); // { value: 11, next: { value: 100, next: null } }

// ----------------------------------------

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

var n1 = new Node(11);
var n1 = new Node(22);
var n1 = new Node(33);

// undefined: absence of a value ("you might put something in there later")
// null: nothing there (most nothingness in js)

n1.next = n2; // points to the entire node, not a particular value in n2
n1.next.next = n3; // same as: n2.next = n3;

// SLL: Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    // methods:
    isEmpty(){
        if (this.head){ // if the head exists, if it is not null
            return true;
        } else {
            return false;
        }
    }

    addToFront(node) {}
    // new node has to first point to whatever the SLL is pointing to 
    // then, SLL points to the new head

    addDataToFront(value) {}
}

var mySLL = new SLL(); // instantiated SLL (starts out by not pointing to anything)
mySLL.head = n1;

// if the Nodes were not instantiated earlier, we can do it like this:
var mySecondSLL = new SLL();
mySecondSLL.head = new Node(44);
mySecondSLL.head.next = new Node(55); 
mySecondSLL.head.next.next = new Node(66); // repetitive