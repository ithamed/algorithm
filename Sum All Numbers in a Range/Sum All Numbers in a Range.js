// 1. take two number as input to calculate sum of the numbers between this two and seprate them.
// 2. define an array and turn type of the numbers from string to number and put them in it and sort the numbers.
// 3. define a variable to put the sum of the numbers in it.
// 4. make a for loop that begin from the first number to the last number and go through the numbers.
// 5. for each number add the number to the sum of the previous numbers.
// 6. print the sum of the numbers.

function sumAllNumber() {
  let arr = document.getElementById("input-number").value.split(",");
  arr = arr.map(Number).sort();
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  document.getElementById("answer").innerHTML = sum;
};
document.getElementById("sum-aal-number").addEventListener("click", sumAllNumber);

// for example   4, 1
// [4, 1] => [1, 4]
// i = 1 => sum = 0 + 1 = 1
// i = 2 => sum = 1 + 2 = 3
// i = 3 => sum = 3 + 3 = 6
// i = 4 => sum = 6 + 4 = 10
//......................................................
