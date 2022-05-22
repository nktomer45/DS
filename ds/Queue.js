function Queue() {
    collection = []
    this.print = function() {
        console.log(collection);
    }
    this.enqueue = function(element) {
        collection.push(element)
        return collection;
    }
    this.dequeue = function() {
        return collection.shift()
    }
    this.front = function() {
        return collection[0]
    }
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return (collection.length === 0)
    }
    this.peek = function() {
        return collection[0]
    }
}

var q = new Queue();

console.log(q.enqueue(9))
console.log(q.enqueue(19))
console.log(q.enqueue(29))
console.log(q.enqueue(39))


console.log(q.front())
console.log(q.isEmpty())
console.log(q.size())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.peek())