// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    const child = new BinarySearchTree(value);
    if (this.value > value) {
      if (this.left === null) this.left = child;
      this.left.insert(value);
    }
    if (this.value < value) {
      if (this.right === null) this.right = child;
      this.right.insert(value);
    }
  }
  contains() {
    return true; // TODO
  }
  depthFirstForEach() {
    return true; // TODO
  }
}

module.exports = BinarySearchTree;
