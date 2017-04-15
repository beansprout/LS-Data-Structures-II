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
      if (this.left === null) {
        this.left = child;
      } else {
        this.left.insert(value);
      }
    }
    if (this.value < value) {
      if (this.right === null) {
        this.right = child;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(val) {
    // should return `true` if the tree or its children the given value.
    let found = 0;
    if (this.value === val) {
      found++;
    }
    if (this.right) {
      if (this.right.contains(val)) {
        // note to christine.self because of js and closure we don't need to do any n-1 stuff in the recursion like we do in others like SML
        found++;
      }
    }
    if (this.left) {
      if (this.left.contains(val)) {
        found++;
      }
    }
    return (found > 0);
  }

  depthFirstForEach() {
    return true; // TODO
  }
}

module.exports = BinarySearchTree;
