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

function one() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // peek(starTrek);
  // console.log(isEmpty(starTrek));
  console.log(display(starTrek));
  console.log(palindrome('Kirk'));
  console.log(palindrome('taco cat'));
  console.log(
    palindrome(
      'A man, a plan, a canal: Panama'
    )
  );
}

one();
