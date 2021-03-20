// 1. take some number as input to calculate its third highest number.
// 2. define aa array and put the number as an array in it.
// 3. turn the array item to namber from string.
// 4. sort the array item from highest to smallest.
// 5. print the index 2 of the array.

function thirdHighestNumber() {
  let arr = document.getElementById("input-number").value.split(",");
  arr = arr.map(Number)
  arr = arr.sort((a,b) => a > b ? -1 : 1);
  document.getElementById("answer").innerHTML = arr[2];
};
document.getElementById("thirdhighestnumber").addEventListener("click", thirdHighestNumber);

// for example   1,2,3,4,5,6
// 1,2,3,4,5,6 => ["1", "2", "3", "4", "5", "6"]
// ["1", "2", "3", "4", "5", "6"] => [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6] => [6, 5, 4, 3, 2, 1]
// arr[2] => 4
//......................................................
