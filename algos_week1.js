// Monday
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    isEmpty(){
        if (this.head) {
            return true;
        } else {
            return false;
        }
    }
    
    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(value) {
        var newNode = new Node(value); // creates a new node with the value
        newNode.next = this.head; // set the new node to the head
        this.head = newNode; // move the head to the new node
    }
}

// way we tested:
// var testingSLL = new SLL();
// testingSLL.addToFront(new Node(10));
// console.log(testingSLL);
// testingSLL.addToFront(new Node(20));
// console.log(testingSLL);
// testingSLL.addDataToFront(100);
// console.log(testingSLL);

// 1
var n1 = new Node(11);
var n2 = new Node(22);
var n3 = new Node(33);

n1.next = n2;
n2.next = n3;
// n1.next.next = n3;
console.log({n1});
console.log({n2}); // prints it as a dictionary
console.log(n2); // prints just the values 
// console.log({n3});

// 2
var mySLL = new SLL();
mySLL.head = new Node(111);
mySLL.head.next = new Node(222);
mySLL.head.next.next = new Node(333);
console.log(mySLL);

// 3
var myReadSLL = new SLL();
myReadSLL.addToFront(new Node(100));
myReadSLL.addToFront(new Node(200));
myReadSLL.addDataToFront(500);
console.log(myReadSLL);