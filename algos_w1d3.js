// Wednesday
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // console log the data of every node in the current list
    // traversal
    read() {
        var runner = this.head; // runner is a node
        while (runner){ // while runner is not null 
            console.log(runner.data)
            runner = runner.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;
        while (runner){
            if (runner.data === value){ // == comparing memory locations & === explicitly compare
                return true
            }
            runner = runner.next;
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        var runner = this.head;
        this.head = this.head.next;
        runner.next = null;
        return runner;
    }

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
    }
}

var list = new SLL()
list.addToFront(new Node(55));
list.addToFront(new Node(44));
list.addToFront(new Node(33));
list.addToFront(new Node(22));
list.addToFront(new Node(11));
// console.log(list);
list.read();
var found = list.contains(33);
console.log("Value is found:", found);
var removedNode = list.removeFromFront();
console.log("Removed node:", removedNode);
list.read();