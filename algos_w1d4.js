// Thursday 
// Garbage collection (GC) deletes node if the node is not referenced when code is run

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.nodeCount = 0;
    }

    // if data is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the data at all
    delete(data) {
        var runner = this.head;

        if(this.isEmpty()) {
            console.log("List is empty")
            return;
        }
        if(this.head.data == data) {
            this.removeFromFront();
            return;
        }

        while(runner) {
            if(runner.next.data == data) {
                runner.next = runner.next.next
                this.nodeCount--;
                return;
            }
            runner = runner.next
        }
        console.log("Data not found")
        return;
    }

    //another way to do delete method from Brendan
    delete2(val) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == val){
            prev = runner;
            runner = runner.next;
            this.nodeCount--;
        }

        while (runner && runner.data !== val) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        // runner is now our node to be deleted
        prev.next = runner.next;
    }

    // return the size of the current linked list
    // BONUS: how might you do this without linearly traversing the list?
    // you may have change other methods within this class...
    size() {
        console.log(this.nodeCount);
    }

    // console log (print) the data of every node in the current list
    // traversal
    read() {
        var current = this.head; // set current as the head, if it exists or not
        while(current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next // move current to the next node
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;
        // while we have a runner
        while(runner) {
            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise move to the next node
            runner = runner.next;
        }
        // if the while loop completes, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var nodeToRemove = this.head; // save the head in a temp var
        this.head = this.head.next; // move the head
        nodeToRemove.next = null // make the removed node to no longer reference the list
        this.nodeCount--;
        return nodeToRemove;
    }

    // -------------------------------------------
    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
        this.nodeCount++;
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

// ⚠ don't forget to instantiate the Singly Linked List

var list = new SLL()
list.addToFront(new Node(55));
list.addToFront(new Node(44));
list.addToFront(new Node(33));
list.addToFront(new Node(22));
list.addToFront(new Node(11));
// console.log(list);
console.log("Original SLL");
list.read();
console.log("Size");
list.size();
// var found = list.contains(33);
// console.log("Value is found:", found);
// var removedNode = list.removeFromFront();
// console.log("Removed node:", removedNode);
// list.read();
console.log("Check if deleted");
list.delete(11);
list.delete(44);
list.read();
list.size();