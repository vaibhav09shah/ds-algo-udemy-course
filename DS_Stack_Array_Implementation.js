class Stack{

    constructor() {
        this.top = -1
        this.max = 5
        this.stackArray = new Array(this.max)
    }

    push(val) {
        if( this.top >= (this.max -1 )) {
            return "Stack Overflow"
        } else {
            ++this.top
           this.stackArray[this.top] = val
        }
        return this.top
    }

    pop() {
        if(this.top < 0) {
            return "Stack is Empty"
        } else {
           var x = this.stackArray[this.top]
           this.top -= 1
           return x
        }
    }

    print() {
        for(i = this.top; i >=0 ; i-- ){
            console.log(this.stackArray[i])
        }
    }
}

var stack = new Stack()
