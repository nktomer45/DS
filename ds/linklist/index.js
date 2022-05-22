// Implement classes Node and Linked List

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	unshift(data) {
		this.head = new Node(data, this.head);
		this.length++;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		let node = this.head;
		while (node && node.next) {
			node = node.next;
		}
		return node;
	}
	clear() {
		this.head = null;
		this.length = 0;
	}
	shift() {
		if(this.head===null){
			return
		}
		if (this.head) {
			this.length--;
		}
		const originalHead = this.head;
		this.head = this.head ? this.head.next : null;
		return originalHead;
	}
	pop() {
		if (!this.head) {
			return null;
		}
		if (this.length === 1) {
			return this.shift();
		}
		let node = this.head;
		const last = this.getLast();
		while (node.next !== last) {
			node = node.next;
		}
		node.next = null;
		this.length--;
		return last;
	}
	push(data) {
		if (!this.head) {
			return this.unshift(data);
		}
		this.getLast().next = new Node(data);
		this.length++;
	}
	get(index) {
		if (index >= this.length || index < 0) {
			return null;
		}
		let node = this.head;
		let counter = 0;
		while (index !== counter) {
			node = node.next;
			counter++;
		}
		return node;
	}
	set(index, data) {
		if (!this.get(index)) {
			return false;
		}
		this.get(index).data = data;
		return true;
	}
	remove(index) {
		if (!this.get(index)) {
			return false
		}
		if (index === 0) {
			return this.shift()
		}
		const prenode = this.get(index - 1)
		const nodetoremove = this.get(index)
		prenode.next = prenode.next.next
		this.length--
		return nodetoremove
	}
	insert(index, data) {
		if (index < 0 || index > this.length) {
			return false
		}
		if (index === 0) {
			this.unshift(data)
			return true
		}
		let prenode = this.get(index - 1)
		let curnode = this.get(index)
		let node = new Node(data)
		node.next = curnode;
		prenode.next = node;
		this.length++;
		return true
	}
	reverse() {   // {data:1,next:{data:2,next:{data:3:next:null}}}
	let currentnode=this.head;
	let prevoius=null;
		while(currentnode){
			let save=currentnode.next
			  currentnode.next=prevoius;
			  prevoius=currentnode
			  if(!save){
				  break
			  }
			  currentnode=save
		}
		return this.head=currentnode
	}

	forEach(node,index){
		console.log(node)
		let currentnode=node;
		let counter=0;
		while(counter!=index){
			currentnode= currentnode.next;
			counter++;
		}
		if(index%2===0){
			currentnode.data=currentnode.data+1;
		}
		// console.log(node)
	}
   
}

mocha.setup("bdd");
const { assert } = chai;

describe("A Node", () => {
	it("has properties 'data' and 'next'", () => {
		const node = new Node(1, 2);
		assert.equal(node.data, 1);
		assert.equal(node.next, 2);
	});
});

describe("unshift()", () => {
	it("adds node to start of list AND correctly sets 'next' property. Increases length of list.", () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.head.data, 1);
		assert.equal(l.length, 1);
		l.unshift(2);
		assert.equal(l.head.data, 2);
		assert.equal(l.length, 2);

		assert.equal(l.head.next.data, 1);
	});
});

describe("getFirst()", () => {
	it("returns the first node in linked list.", () => {
		const l = new LinkedList();
		assert.equal(l.getFirst(), null);
		l.unshift(1);
		assert.equal(l.getFirst().data, 1);
		l.unshift(2);
		assert.equal(l.getFirst().data, 2);
	});
});

describe("getLast()", () => {
	it("returns the last node in linked list.", () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.getLast().data, 1);
		l.unshift(2);
		assert.equal(l.getLast().data, 1);
	});
	it("does not crash AND returns null on empty list.", () => {
		const l = new LinkedList();
		assert.equal(l.getLast(), null);
	});
});


describe("clear()", () => {
	it("clears out the linked list and resets length to 0.", () => {
		const l = new LinkedList();
		assert.equal(l.length, 0);
		l.unshift(1);
		l.unshift(1);
		l.unshift(1);
		assert.equal(l.length, 3);
		l.clear();
		assert.equal(l.length, 0);
		assert.equal(l.head, null);
	});
});

describe("shift()", () => {
	it("removes AND returns first node, updates length for linked list w/ one node.", () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.shift().data, 1);
		assert.equal(l.length, 0);
		assert.equal(l.getFirst(), null);
	});
	it("removes the first node and returns it, decreases length of list.", () => {
		const l = new LinkedList();
		l.unshift(3);
		l.unshift(2);
		l.unshift(1);
		assert.equal(l.shift().data, 1);
		assert.equal(l.length, 2);
		assert.equal(l.getFirst().data, 2);
		assert.equal(l.shift().data, 2);
		assert.equal(l.length, 1);
		assert.equal(l.getFirst().data, 3);
	});
	it("does not crash AND returns null on empty list. Does not decrease length.", () => {
		const l = new LinkedList();
		assert.equal(l.shift(), null);
		assert.equal(l.length, 0);
	});
});

describe("pop()", () => {
	it("removes AND returns last node, decreases length.", () => {
		const l = new LinkedList();
		l.unshift("b");
		l.unshift("a");
		assert.equal(l.pop().data, "b");
		assert.equal(l.length, 1);
		assert.equal(l.head.data, "a");
	});
	it("removes AND returns last node, decreases length on linked-list w/ one node.", () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.pop().data, 1);
		assert.equal(l.head, null);
		assert.equal(l.length, 0);
	});
	it("Returns null on empty list AND does not decrease length.", () => {
		const l = new LinkedList();
		assert.equal(l.pop(), null);
		assert.equal(l.length, 0);
	});
});

describe("push()", () => {
	it("adds to the end of the list and increases length.", () => {
		const l = new LinkedList();
		l.unshift(1);
		l.push(2);
		assert.equal(l.length, 2);
		assert.equal(l.getLast().data, 2);
	});
	it("adds to end of empty list and increases length without crashing.", () => {
		const l = new LinkedList();
		l.push(1);
		assert.equal(l.length, 1);
		assert.equal(l.getLast().data, 1);
		assert.equal(l.getFirst().data, 1);
	});
});

describe("get()", () => {
	it("returns null on negative or out of bounds index.", () => {
		const l = new LinkedList();
		l.push("Kevin");
		assert.equal(l.get(-1), null);
		assert.equal(l.get(100), null);
	});
	it("returns the node at given index.", () => {
		const l = new LinkedList();
		l.push("Kevin");
		l.push("is");
		l.push("kewl");

		assert.equal(l.get(0).data, "Kevin");
		assert.equal(l.get(1).data, "is");
		assert.equal(l.get(2).data, "kewl");
	});
});

describe("set()", () => {
	it("returns falsy value on out of bounds or negative index.", () => {
		const l = new LinkedList();
		l.push(2);
		assert.isNotOk(l.set(-1, "meow"));
		assert.isNotOk(l.set(100, "meow"));
	});
	it("Updates node and returns true.", () => {
		const l = new LinkedList();
		l.push(2);
		l.push(4);
		assert.equal(l.set(1, "meow"), true);
		assert.equal(l.getLast().data, "meow");
	});
});

describe("remove()", () => {
	it("returns falsy value on out of bounds OR negative index.", () => {
		const l = new LinkedList();
		l.push(2);
		assert.isNotOk(l.remove(-1));
		assert.isNotOk(l.remove(100));
	});
	it("removes and returns node at given index. Decreases length.", () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);

		assert.equal(l.get(3).data, 4);
		assert.equal(l.remove(3).data, 4);
		assert.isNotOk(l.get(3));
		assert.equal(l.length, 3);
	});
	it("removes node at index 0, decreases length, and returns removed node.", () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);

		assert.equal(l.get(0).data, 1);
		assert.equal(l.remove(0).data, 1);
		assert.equal(l.get(0).data, 2);
		assert.equal(l.length, 3);
	});
});

describe("insert()", () => {
	it("returns false on index greater than length or negative index.", () => {
		const l = new LinkedList();
		assert.equal(l.insert(1, "meow"), false);
		assert.equal(l.insert(-10, "meow"), false);
		assert.equal(l.length, 0);
	});
	it("inserts new node at given index, increases length, and returns true.", () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);
		assert.equal(l.insert(2, "kevin"), true);
		assert.equal(l.get(0).data, 1);
		assert.equal(l.get(1).data, 2);
		assert.equal(l.get(2).data, "kevin");
		assert.equal(l.get(3).data, 3);
		assert.equal(l.get(4).data, 4);
		assert.equal(l.length, 5);
	});
	it("inserts node at 0 index correctly, increases length, returns true.", () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		assert.equal(l.insert(0, "kevin"), true);
		assert.equal(l.get(0).data, "kevin");
		assert.equal(l.get(1).data, 1);
		assert.equal(l.get(2).data, 2);
		assert.equal(l.get(3).data, 3);
		assert.equal(l.length, 4);
	});
});

describe("reverse()", () => {
	it("reverses the data in the list and keeps the same nodes.", () => {
		const l = new LinkedList();

		l.push("A");
		l.push("B");
		l.push("C");
		const node = l.get(1);
		l.reverse();

		assert.equal(l.get(0).data, "C");
		assert.equal(l.get(1).data, "B");
		assert.equal(l.get(2).data, "A");
		// console.log("sdjnjd",l.get(1))
		assert.equal(l.get(1), node);
	});
});

describe("forEach()", () => {
	it("calls function provided to it on each node.", () => {
		const l = new LinkedList();

		l.push(10);
		l.push(20);
		l.push(30);

		l.forEach((node, index) => {
			if (index % 2 === 0) {
				node.data += 1;
			}
		});

		assert.equal(l.get(0).data, 11);
		assert.equal(l.get(1).data, 20);
		assert.equal(l.get(2).data, 31);
	});
});

mocha.run();
