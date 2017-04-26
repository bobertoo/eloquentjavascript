// Minimum
function min(num1, num2) {
  if (num1 < num2) return num1;
  else if (num1 > num2) return num2;
  else return 'numbers are the same';
}

console.log(min(1, 1));
console.log(min(2, 1));
console.log(min(-10, 1));

// Recursion
function isEven(num) {
  if (num == 0) return true;
  else if (num == 1) return false;
  else if (num < 0) return isEven(num + 2);
  else return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean Counting
function countSomething(character) {
  return function(string) {
    return countChar(string, character);
  };
}

var countBs = countSomething('B');

console.log(countBs('ABBY'));
console.log(countBs('VINNY'));

function countChar(string, char) {
  var charCount = 0;
  for (var i = 0; i < string.length; i++) if (string.charAt(i) == char) charCount++;
  return charCount
}

console.log(countChar('VINNY', 'N'));
console.log(countChar('VINNY', 'Y'));
