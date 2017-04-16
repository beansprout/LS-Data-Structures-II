
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
    for (let i = 0; i < key.length; i++) {
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
