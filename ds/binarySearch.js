class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BinarySearch {
    constructor() {
        this.root = null
    }
    insert(data) {
        var newnode = new Node(data);
        // console.log('root', this.root);
        if (this.root == null) {
            this.root = newnode
        } else {
            this.insertnewnode(this.root, newnode)
        }


    }
    insertnewnode(node, newnode) {
            if (newnode.data < node.data) {
                if (node.left == null) {
                    node.left = newnode
                } else {
                    this.insertnewnode(node.left, newnode)

                }
            } else {
                if (node.right == null) {
                    node.right = newnode
                } else {
                    this.insertnewnode(node.right, newnode)
                }
            }

        }
        // Performs inorder traversal of a tree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    getRootNode() {
        return this.root;
    }
}
var bst = new BinarySearch()
bst.insert(3)
bst.insert(0)
bst.insert(31)
bst.insert(13)
bst.insert(4)

console.log(bst.getRootNode())
var node = bst.getRootNode()
console.log(bst.inorder(node))