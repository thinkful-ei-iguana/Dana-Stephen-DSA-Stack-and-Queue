const Stack = require('./stack');
const starTrek = new Stack();

function display(stack) {
  let nextNode = stack.top;
}

function peek(stack) {
  console.log(stack.top.data);
}

function one() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  peek(starTrek);
}

one();
