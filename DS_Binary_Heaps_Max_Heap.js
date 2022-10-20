 class MaxBinaryHeap {
     constructor() {
         this.heapArr = [41, 39, 33, 18, 27, 12]
     }

     insertInHeap(val) {

        // Push element at end of array
        this.heapArr.push(val)

        // Buble Up by comparing with parent node 
        this.bubbleUp()
     }
    
     bubbleUp() {
         let idx = this.heapArr.length -1 ;
         const element = this.heapArr[idx]
         while(true) {
             let parentIdx =  Math.max(Math.floor((idx - 1)/2), 0);
             let parent = this.heapArr[parentIdx]
             if(element <= parent) break;
             this.heapArr[parentIdx] = element
             this.heapArr[idx] = parent
             idx = parentIdx
         }
     }

     extractMax() {
         const max = this.heapArr[0];
         const end = this.heapArr.pop()
         if(this.heapArr.length > 0) {
            this.heapArr[0] = end;
            // Bubble down / sinkDown
            this.sinkDown()  
         }
         return max;               
     }

     sinkDown() {
         let idx = 0;
         const length = this.heapArr.length
         const element = this.heapArr[0]
         while(true) {
             let leftChildIdx = 2 * idx + 1;
             let rightChildIdx = 2 * idx + 2;
             let leftChild, rightChild;
             let swap = null;

             if(leftChildIdx < length) {
                 leftChild = this.heapArr[leftChildIdx]
                 if(leftChild > element) {
                     swap = leftChildIdx
                 }
             }

             if(rightChildIdx < length) {
                 rightChild = this.heapArr[rightChildIdx]
                 if(  
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild )
                 ) {
                     swap = rightChildIdx
                 }
             }
                
             if(swap === null) break;
             this.heapArr[idx] = this.heapArr[swap]
             this.heapArr[swap] = element
             idx = swap;
         }
     }
 
 }
    
const heapObj = new MaxBinaryHeap();
             
  // BinaryHeap is a data structure where the root / parent node is always greater than the child 
 // For a node , its children will be at position 2n+1 (left child) 2n + 2 (right child)
 // For any given node , its parent is at floor(n-1/2) position
 // In binary heap we add the elemnt to end of array and then bubble up to find its correct position by comparing the node at its parent position and then swap
 // We keep looping as long as the element at a node's parent index is less than the value of that node 
 // [41, 39, 33, 18, 27, 12, 55]