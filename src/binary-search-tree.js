// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  addChild(value) {

  }

  contains() {

  }
}


// function binary_search(list, item) {
// 		// based on translating from python code in book
//   let low = 0;
//   let high = (list.length - 1);
//   let mid;
//   let guess;
//   let n = 0;

//   while (low <= high) {
//   mid = Math.floor((low + high) / 2);
//   guess = list[mid];
//   n +=1;
//   console.log('n is ' + n);
//   if (guess == item) {
//   return mid;
// } else if (guess > item) {
//   high = mid - 1;
// } else if (guess < item) {
//   low = mid + 1;
// } else {
//   return null;
// }
// }
// }

// let my_list = [1, 2, 8, 9, 10, 12, 15, 34, 56, 73, 91, 189, 400, 560, 674];
// console.log(binary_search(my_list, 3));


module.exports = BinarySearchTree;
