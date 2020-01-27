const Stack = require('./stack');
const starTrek = new Stack();

function peek(stack) {
  console.log(stack.top.data);
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  let arr = [];
  let nextNode = stack.top;
  while (nextNode) {
    arr = [...arr, nextNode.data];
    nextNode = nextNode.next;
  }
  return arr.join(' > ');
}

function one() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // peek(starTrek);
  // console.log(isEmpty(starTrek));
  console.log(display(starTrek));
}

one();
