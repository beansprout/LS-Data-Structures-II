
class Graph {
  constructor() {
    this.graph = {};
  }


// methods:
// `contains`, `removeNode`, `addEdge`, `getEdge`, and `removeEdge`
// toNode optional
// each node has {val:newNode, edgeList:[toNode]}
// example {3:{val:3, e:[0]}, 0:{val:0, e:[3, 1]}, 1:{val:1, e:[0, 2]}, 2:{val:2, e:[1]} }
// graph = {
//          nodevalue: {
//                      val: nodevalue, el[]
//                      }
//       }

  addNode(newNode, toNode) {
    // add item to graph
    const newObj = { val: newNode, edgeList: [] };
    this.graph[newNode] = newObj;
    if (toNode) {
      this.graph[newNode].edgeList.push(toNode);
      this.graph[toNode].edgeList.push(newNode);
    }
    if (Object.keys(this.graph).length === 2) {
      const arr = Object.getOwnPropertyNames(this.graph);
      this.addEdge(arr[0], arr[1]);
    }
  }

  contains(value) {
    const key = Object.keys(this.graph);
    for (let i = 0; i < key.length; i++) {
      if (key[i] === value.toString()) {
        return true;
      }
    } return false;
  }

  removeNode(value) {
    this.graph[value].edgeList.forEach((key) => {
      const index = this.graph[key].edgeList.indexOf(value);
      if (index === -1) {
        return;
      }
      this.graph[key].edgeList.splice(index, 1);
    });
    delete this.graph[value.toString()];
  }

  addEdge(fromNode, toNode) {
    if (this.graph[fromNode].edgeList.indexOf(toNode) === -1) {
      this.graph[fromNode].edgeList.push(toNode);
      this.graph[toNode].edgeList.push(fromNode);
    }
  }

  getEdge(fromNode, toNode) {
    return (this.graph[fromNode].edgeList.indexOf(toNode) !== -1);
  }

  removeEdge(fromNode, toNode) {
    if (this.graph[fromNode].edgeList.indexOf(toNode) !== -1) {
      const back = this.graph[fromNode].edgeList.indexOf(toNode);
      const forw = this.graph[toNode].edgeList.indexOf(fromNode);
      this.graph[fromNode].edgeList.splice(back, 1);
      this.graph[toNode].edgeList.splice(forw, 1);
    }
    if (this.graph[fromNode].edgeList.length === 0) this.removeNode(fromNode);
    if (this.graph[toNode].edgeList.length === 0) this.removeNode(toNode);
  }

}


module.exports = Graph;

/*
jsbin
  addNode(newNode, toNode = undefined) {
    // add item to graph
    const newObj = { val: newNode, edgeList: [] };
    this.graph[newNode] = newObj;
    if (toNode) {
      this.graph[newNode].edgeList.push(toNode);
      this.graph[toNode].edgeList.push(newNode);
    }
  }

  contains(value) {
    const key = Object.keys(this.graph);
    console.log(key);
    for (let i = 0; i < key.length; i++) {
      console.log(key[i], (key[i] === value.toString()));
      if (key[i] === value.toString()) {
        return true;
      }
    } return false;
  }

  removeNode(value) {
     delete this.graph[value.toString()];
  }

  addEdge() {
  }

  getEdge() {
  }

  removeEdge() {
  }

}
const graph = new Graph();
graph.addNode(7);
graph.addNode(8, 7);
graph.addNode(9, 8);
graph.removeNode(8);
console.log(graph);

contains(value) {
//     const key = Object.keys(this.graph);
      console.log(key)
    for (let i = 0; i < key.length; i++) {
      console.log(key[i], (key[i] === value.toString()));
      if (key[i] === value.toString() && this.graph[i] === undefined) {
        return true;
      }
    } return false;
  }
  */
