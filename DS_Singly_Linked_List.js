// What is a Node in Linked List 
// Piece of Data (some value , string, number , etc) 
// Reference to the next node 


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add new node to linkedList
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Remove last element from linkedlist
    pop() {
        // In linked list we have to start traversering from the beginning unlike arrays. So in Pop function we keep first element as current and new tail and move current tail only if next element is present.
        if(!this.head) return undefined;
        var currentTail = this.head;
        var newTail = this.head
        while(currentTail.next) {
            newTail = currentTail
            currentTail = currentTail.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentTail; 

    }
    
    // shift the linkedlist by 1
    shift() {
        if(this.length === 0) return undefined;
        let currentHead = this.head;
        this.head = this.head.next;
        this.length--
        if(this.length === 0) this.tail = null
        return currentHead; 
    }

    // Add a new node to the beginning of the linked list
    unshift(val) {
        var newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode
        } else {
            let currentHead = this.head 
            this.head = newNode; 
            this.head.next = currentHead;
        }
        this.length++;
        return this.head
    }

    // Get Node at given index
    get(index) {
        if(index < 0 || index >= this.length) return null   
        let counter = 0;
        let current = this.head;
        while(counter !== index ) {
            current = current.next
            counter++
        }
        return current;
    }

    // Set value of node at given index 
    set(index, val) {
        var foundNode = this.get(index)
        if(foundNode) {
            foundNode.val = val
            return true;
        } 
        return false;
    }

    // Insert node 
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val)
        if(index === 0) return this.unshift(val); 
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next
        prev.next = newNode;
        newNode.next = temp;
        this.length++
        return true
    }

    // remove node from linkedlist
    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1)
        let removed = previousNode.next;
        previousNode.next = removed.next
        this.length--;
        return removed;
    }

    // Reverse linkedlist
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }


}

var list1 = new SinglyLinkedList()
// list1.push("HELLO")
// lislist1.push("GOODBYE")