
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
     constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push TO DoublyLinkedList
    push(val) {
        var newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this;
    }

    // Pop element from DoublyLinkedList
    pop() {
        if(!this.head) return undefined;
        var poppedNode = this.tail 
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev 
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    // Shift DoublyLinkedList (remove first element from doubly linked list)
    shift() {
        if(this.length === 0) return undefined
        var shiftedNode = this.head
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next
            this.head.prev = null
            shiftedNode.next = null
        }
        this.length--
        return this;
    }

    // Add element to start of DoublyLinkedList
    unshift(val) {
        var newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev  =  newNode
            newNode.next = this.head
            this.head = newNode 
        }
        this.length++;
        return this;
    }

    // Get Element at index x from DoublyLinkedList
    get(index) {
        if(index < 0 || index >= this.length) return null
        if(index <=  this.length/2) {
            var count = 0;
            var current = this.head
            while(count != index) {
                current = current.next;
                count++
            }
            return current;    
        } else {
            var count = this.length - 1
            var current = this.tail
            while(count !== index) {
                current = current.prev
                count--;
            }
            return current
        }
    }

    // Set at idex x in DoublyLinkedList
    set(index, val) {
        var nodeFound = this.get(index)
        if(!nodeFound) return false
        nodeFound.val = val
        return this
    }

    // Insert a new Node at index x 
    insert(index, val) {
        if(index < 0 || index > this.length) return false
        if(index === 0) return this.unshift(val)
        if(index === this.length) return this.push(val);
        var newNode = new Node(val)
        var beforeNode = this.get(index -1)
        var afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        this.length++
        return true; 
    }

    // Remove item from index x in DoublyLinkedList
    remove(index) {
        if(index < 0 || index > this.length) return false
        if(index === 0 ) return this.shift();
        if(index === this.length) return this.pop()
        var foundNode = this.get(3)
        //console.log(foundNode)
        if(foundNode) {
            let prevNode = foundNode.prev
            let nextNode = foundNode.next
            prevNode.next = nextNode
            nextNode.prev = prevNode
            foundNode.next = null
            foundNode.prev = null
            this.length--;
            return foundNode
        }
    }
}


var list = new DoublyLinkedList();
for(i= 0; i< 8; i++) {
    list.push( (i+1) * 10 )
}
