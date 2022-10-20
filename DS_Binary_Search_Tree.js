class Node {
    constructor(val) {
        this.value = val;
        this.left = null
        this.right = null
    }

}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // Add a new Node to BinarySearchTree
    insert(val) {
        // Create new node 
        var newNode = new Node(val)

        // Check if there is root , if not create it as the root element and return the node 
        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            // if there is a root already, check value if less then or greater than root node 
            let current = this.root
            while(true) {
                // If value is less , check if there exists a left node to the current root ,
                // if not make it the left node of current root. If left exists , make left the current root and repeat the process
                if(val === current.value) return undefined
                if(val < current.value) {
                    if(current.left === null) {
                        current.left = newNode
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.value) {
                    if(current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }    
        }
    }

    // Find Node in BinarySearchTree
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    insertRecursive(val) {
        // Create New Node
        var newNode = new Node(val)
        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            this.insertRecursiveNode(current, val)
        }
    }

    insertRecursiveNode(node, val) {
        console.log(node, val)
        var newNode = new Node(val)
        if(val < node.value) {
           if(node.left === null) {
               node.left = newNode
               return this
           } else {
               node = node.left
               this.insertRecursiveNode(node,val)
           }
        } else if(val > node.value) {
            if(node.right === null) {
                node.right = newNode
                return this;
            } else {
                node = node.right
                this.insertRecursiveNode(node, val)
            }

        } else {
            return "Element Already Present"
        }
    }

    // Implementing Breath First Search
    BFS() {
        var node = this.root
        var data = []
        var queue = []
        queue.push(node)
        while(queue.length) {
             node = queue.shift();
             data.push(node.value);
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }
        
        return data
    }

    // Implement DFS PreOrder
    DFSPreOrder() {
        var data = []
        var current = this.root
        function traverse(node) {
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

    // Implement DFS PostOrder
    DFSPostOrder() {
        var data = []
        var current = this.root
        function traverse(node) {
            if(node.left)  traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data
    }

    // Implement DFS Inorder
    DFSInorder() {
        var data = []
        var current = this.root
        function traverse(node) {
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(20)
tree.insert(27)

// tree.root = new Node(10)
// tree.root.left = new Node(5)
// tree.root.right = new Node(15)
//Ex 
//            10
//      5            13
//  2      7      11    16

// BinarySearchTree Traversal Methods
//1. Breath First Search (BFS)
//2. Depth First Search (DFS) , Within DFS below three methods
// 1. Inorder 2. PreOrder 3. PostOrder

// In a BST , Left child is always less than then its parent and right child is greater than parent 