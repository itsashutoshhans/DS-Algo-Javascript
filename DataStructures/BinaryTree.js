class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(8);