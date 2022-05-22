var Stack = function() {
    this.count = 0;
    this.storage = {};
    this.push = function(value) {
        this.storage[this.count] = value;
        // console.log(this.count)
        this.count++;
        return this.storage
    }

    this.pop = function() {
        if (this.count === 0) {
            return undefined
        }
        this.count--;
        console.log('count', this.count)
        var result = this.storage[this.count]
        console.log(this.storage)
        delete this.storage[this.count]
        console.log(this.storage);
        return result
    }
    this.size = function() {
        return this.count;

    }
    this.peek = function() {
        return this.storage[this.count - 1]
    }
    this.isEmpty = function() {
        return this.count === 0
    }
}

var stack = new Stack()
stack.push(-1);
stack.push('neeraj');
// console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek())
console.log(stack.isEmpty())