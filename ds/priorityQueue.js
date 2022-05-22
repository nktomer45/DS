function Priority() {
    var collection = []
    this.printcollection = function() {
        return (collection);
    }
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    console.log(collection[i][1], 'hsdhdhhsdj', collection[i])
                    collection.splice(i, 0, element)
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element)
            }
        }
    }
    this.dequeue = function() {
        var value = collection.shift()
        return value[0]
    }
    this.front = function() {
        return collection[0]
    }
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}
var p = new Priority();
p.enqueue(["neeraj", 1])
p.enqueue(["lalit", 3])
p.enqueue(['kamna', 2])
console.log(p.dequeue())
console.log(p.printcollection())

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "neerJ"];

// // At position 2, remove 2 items: 
// console.log(fruits.splice(2, 2, "kamna"));

// console.log(fruits)