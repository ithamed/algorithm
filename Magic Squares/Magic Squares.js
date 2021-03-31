// 1. define aan array to put the input in it.
// 2. get 9 number as input and turn them in an array of numbers.
// 3. define eight variable for sum of each rows, columns, diagonals.
// 4. write an if statement to see if all the variable above are equal to 15.
// 5. if the if statement is true print this is a magic square.
// 6. else print this is not a magic square.
function magicSquare() {
  let arr = []
  arr = document.getElementById("input-arr").value.split(",").map(Number);
  let arr1 = arr[0] + arr[1] + arr[2];
  let arr2 = arr[3] + arr[4] + arr[5];
  let arr3 = arr[6] + arr[7] + arr[8];
  let arr4 = arr[0] + arr[4] + arr[8];
  let arr5 = arr[2] + arr[4] + arr[6];
  let arr6 = arr[0] + arr[3] + arr[6];
  let arr7 = arr[1] + arr[4] + arr[7];
  let arr8 = arr[2] + arr[5] + arr[8];
  if(arr1 === 15 && arr2 === 15 && arr3 === 15 && arr4 === 15 && arr5 === 15 && arr6 === 15 && arr7 === 15 && arr8 === 15) {
    document.getElementById("answer").innerHTML = "This is a magic square.";
  } else {
    document.getElementById("answer").innerHTML = "This is not a magic square."
  }
};
document.getElementById("magic-square").addEventListener("click", magicSquare);

// arr = [8, 1, 6, 3, 5, 7, 4, 9, 2]
// arr1 = 8 + 1 + 6 = 15
// arr2 = 3 + 5 + 7 = 15
// arr3 = 4 + 9 + 2 = 15
// arr4 = 8 + 5 + 2 = 15
// arr5 = 6 + 5 + 4 = 15
// arr6 = 8 + 3 + 4 = 15
// arr7 = 1 + 5 + 9 = 15
// arr8 = 6 + 7 + 2 = 15
// document.getElementById("answer").innerHTML = "This is a magic square."
//......................................................
