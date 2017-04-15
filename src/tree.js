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
    let found = 0;
    if (this.value === val) found++;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === val) found++;
      if (this.children[i]) found += this.children[i].contains(val);
    }
//     });
    return (found > 0);
  }
}

module.exports = Tree;
