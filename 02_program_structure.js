//1st problem
let hashish = '#', hashies = '';
for (var i = 0; i < 7; i++) console.log(hashies += hashish);

//2nd problem
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}

//3rd problem
function chessBoard(size) {
  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) var pattern1 = ' ', pattern2 = '#';
    else var pattern1 = '#', pattern2 = ' ';
    var row = '';
    for (var j = 0; j < size; j++) {
      if (j % 2 === 0) row += pattern1;
      else row += pattern2;
    }
    console.log(row)
  }
}

chessBoard(8)
