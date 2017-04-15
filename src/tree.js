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
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === val) return true;
      if (this.children[i]) return this.children[i].contains(val);
    }
//     });
    return false;
  }
}

// tree = {value:val, children:[{value:val, children:[]}, {value:val, children:[]}]}
module.exports = Tree;
