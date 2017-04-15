class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
  }

  contains(val) {
    // should return `true` if the tree or its children the given value.
    if (this.value === val) return true;
    this.children.forEach((child) => {
      if (child.value === val) return true;
      if (child.children[0]) {
        return child.contains(val);
      }
    });
    return false;
  }
}

// tree = {value:val, children:[{value:val, children:[]}, {value:val, children:[]}]}
module.exports = Tree;
