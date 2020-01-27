const Stack = require('./stack');
const Queue = require('./Queue');
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

function palindrome(s) {
  s = s
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();
  let odd = Boolean(s.length % 2);
  let i = 0;
  for (
    i;
    i < Math.floor(s.length / 2);
    i++
  ) {
    stack.push(s[i]);
  }

  if (odd) {
    i++;
  }

  for (i; i < s.length; i++) {
    let letter = stack.pop().data;
    if (letter !== s[i]) {
      return false;
    }
  }
  return true;
}
function sortStack2(stack) {
  let tempStack = new Stack();

  let temp = stack.pop().data;

  while (stack.top) {
    if (
      tempStack.top === null ||
      temp < tempStack.top.data
    ) {
      tempStack.push(temp);
      temp = stack.pop().data;
    }
    if (temp > tempStack.top.data) {
      stack.push(tempStack.pop().data);
    }
  }
  tempStack.push(temp);
  return tempStack;
}

function sortStack(stack) {
  let tempStack = new Stack();

  let temp = stack.pop().data;

  while (stack.top) {
    if (
      tempStack.top === null ||
      temp > tempStack.top.data
    ) {
      tempStack.push(temp);
      temp = stack.pop().data;
    }
    if (temp < tempStack.top.data) {
      stack.push(tempStack.pop().data);
    }
  }
  tempStack.push(temp);
  while (tempStack.top) {
    stack.push(tempStack.pop().data);
  }
}

// function one() {
//   starTrek.push('Kirk');
//   starTrek.push('Spock');
//   starTrek.push('McCoy');
//   starTrek.push('Scotty');
//   // peek(starTrek);
//   // console.log(isEmpty(starTrek));
//   console.log(display(starTrek));
//   console.log(palindrome('Kirk'));
//   console.log(palindrome('taco cat'));
//   console.log(
//     palindrome(
//       'A man, a plan, a canal: Panama'
//     )
//   );
// }

// one();

// function five() {
//   const stack = new Stack();
//   stack.push(4);
//   stack.push(8);
//   stack.push(3);
//   stack.push(5);
//   sortStack(stack);
//   console.log(display(stack));
//   console.log(
//     display(sortStack2(stack))
//   );
// }
// five();

function queuePeek(queue) {
  return queue.first.value;
}

function queueIsEmpty(queue) {
  if (queue.first === null) {
    return true;
  }
  return false;
}

function queueDisplay(queue) {
  const arr = [];
  if (queue.first === null) {
    return;
  } else {
    let node = queue.first;
    while (node !== null) {
      arr.push(node.value);
      node = node.next;
    }
  }
  return arr.join(' < ');
}

function six() {
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  console.log(queueDisplay(starTrekQ));
}

six();