class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    //returns null for empty stack
    let topNode = this.top;
    if (topNode) {
      this.top = topNode.next;
    }
    return topNode;
  }

  push(data) {
    let newNode = new _Node(
      data,
      this.top
    );
    this.top = newNode;
  }
}

module.exports = Stack;
