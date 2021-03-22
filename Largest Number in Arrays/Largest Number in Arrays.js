// 1. define aan aray as input.
// 2. define another array empty for putting largest number in it.
// 3. make a for loop for go through the first index of array.
// 4. set the first item of first array of the first as first item of second array .
// 5. make another for loop for go through of second index of array.
// 6. compare each item of first array with the wrotten item of second array and if it is largest replace it.
// 7. print the second array as largest number

function LargestNumberInArrays() {
  let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
  let maxNum = [];
  for (let i = 0; i < arr.length ; i++) {
    maxNum[i] = arr[i][0];
    for (let j = 1; j < arr[i].length ; j++) {
      if(arr[i][j] > maxNum[i]){
        maxNum[i] = arr[i][j];
      }
    }
  }
  document.getElementById("answer").innerHTML = maxNum;
};
document.getElementById("largest-number-in-array").addEventListener("click", LargestNumberInArrays);

// i = 0 => maxNum[0] = 4
// j = 1 => arr[0][1] = 5 > maxNum[0] = 4 => maxNum[0] = [5]
// j = 2 => arr[0][2] = 1 < maxNum[0]= 5 => maxNum[0] = [5]
// j = 3 => arr[0][3] = 3 < maxNum[0] = 5 => maxNum[0] = [5]
// i = 1 => maxNum[1] = 13
// j = 1 => arr[1][1] = 27 > maxNum[1] = 13 => maxNum[1] = [27]
// j = 2 => arr[1][2] = 18 < maxNum[1] = 27 => maxNum[1] = [27]
// ........
// i = 3 => maxNum[3] = 1000
// ........
// j = 3 => arr[3][3] = 1 < maxNum[3] = 1001 => maxNum[3] = [1001]
//......................................................
