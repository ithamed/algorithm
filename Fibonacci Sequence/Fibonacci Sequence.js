// 1. define a variable and take a number as the sequence of fibonacci.
// 2. define an array for the fibonacci number and set the first numbers to 0 and 1.
// 3. define another variable for the indext of the loop.
// 4. make a loop and increase the counter by 1 in each loop and let it work until i be equal to the number of sequence.
// 5. print the amount of the number of sequence from the array.
function fibonacciSequence() {
  let n = document.getElementById("input-number").value;
  let x = [0, 1];
  let i = 1;
  while(i < n) {
  x[i + 1] = x[i] + x[i -1];
  i++;
  }
  document.getElementById("answer").innerHTML = x[n];
};
document.getElementById("fibonacci-sequence").addEventListener("click", fibonacciSequence);
// if n = 5
// i=1 => [0, 1, 1]
// i=2 => [0, 1, 1, 2]
// i=3 => [0, 1, 1, 2, 3]
// i=4 => [0, 1, 1, 2, 3, 5]
// x[5] => 5
// ................