// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    insert(node, current) {
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // root is null then node will
        // be added to the tree and made root.
        if (this.root === null)
            this.root = node;
        else {
            // if the data is less than the node
            // data moves left of the tree
            if(node.val < current.val)
            {
                // if left is null, insert node here
                if(current.left === null)
                    current.left = node;
                else
                    // if left is not null, recur until
                    // null is found
                    this.insert(node, current.left);
            }
            // if the data is more than the node
            // data moves right of the tree
            else
            {
                // if right is null, insert node here
                if(current.right === null)
                    current.right = node;
                else
                    // if right is not null, recur until
                    // null is found
                    this.insertNode(node, current.right);
            }
        }
    };

    // iterative
    getSmallestFromSubtree() {
        let current = this.root;
        while (current.left !== null)  {
            current = current.left;
        }
        return current;
    }

    // recursive
    getLargestFromSubtree(current) {
        if (current.right === null) {
            return current;
        } else {
            return this.getLargestFromSubtree(current.right);
        }
    }

};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(20));
console.log(myBST.getSmallestFromSubtree()); // 5
console.log(myBST.getLargestFromSubtree()); // 20
