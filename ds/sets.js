function mySet() {
    var collection = [];
    this.has = function(element) {
        return (collection.indexOf(element) !== -1) // its check the element exist in array.
    };
    this.values = function() {
        return collection
    }
    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element)
            return true
        }
        return false;
    }
    this.remove = function(element) {
        if (this.has(element)) {
            index = collection.indexOf(element)
            collection.splice(index, 1);
            return true
        }
        return false;
    }

    this.size = function() {
        return collection.length;
    }
    this.union = function() {
        var unionSet = new mySet();
        var firstSet = this.values()
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e)
        })
        secondSet.forEach(function(e) {
            unionSet.add(e)
        })
        return unionSet;

    }
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value)
        })
    }
}
var A = new mySet()
var B = new mySet()
console.log(A.add("a"));
console.log(A.add("b"));
console.log(A.add("c"));
console.log(B.add("a"));
console.log(B.add("b"));

console.log(A.add("d"));
console.log(A.subset(B))


// console.log(myset.union)