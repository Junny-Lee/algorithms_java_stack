// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==
    // push to head
    addHead(node) {
        if (!this.length){
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (!this.length){
            return null;
        } else {
            let nodeToRemove = this.tail;
            if (this.length === 1){
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
                nodeToRemove.prev = null;
            }
            this.length --;
            return nodeToRemove;
        }
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (!this.length){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    // pop from head
    removeHead() {
        if (!this.length){
            return null;
        } else {
            let nodeToRemove = this.head;
            if (this.length === 1){
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
                nodeToRemove.next = null;
            }
            this.length --;
            return nodeToRemove;
        }
    }
}


var myDLL = new DLList();

myDLL.addHead(new DLLNode(40));
myDLL.addHead(new DLLNode(30));
myDLL.addHead(new DLLNode(20));
myDLL.addHead(new DLLNode(10));
console.log("removed node: ", myDLL.removeHead());
console.log(myDLL);
