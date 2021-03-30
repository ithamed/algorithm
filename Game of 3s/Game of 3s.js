// 1. define a function to determine if a number is prime?
// 2. in the function make a for loop to go trough the numbers and see if they can devided to any number?
// 3. beging the index from 3 and increase them by 2 for decrease the number of looping.
// 3. if the number is devideable return false and elsereturn true.
// 4. define another function to sum the prime number.
// 5. take a number as input and turn type of it to a number.
// 6. define a variable sum to hold the sum of number and set it to 5 for decrese the number of looping.
function isPrime(val) {
  for (let i = 3; i < val; i += 2) {
    if(val % i === 0) {
      return false;
    };
  }
  return true;
}
function game3s() {
  let num = parseInt(document.getElementById("input-number").value);
  let arr = [];
  let i = -1;
  if (num < 1) {
    arr = "the number shoud be greater than zero"
  }
  while(num > 1){
    i++
    if(num % 3 === 0){
      arr[i] = [num, 0];
      num = num / 3;
    } else if(num % 3 === 1){
      arr[i] =[num, -1]
      num = num - 1;
      num = num / 3;
    } else if(num % 3 === 2){
      arr[i] =[num, 1]
      num = num + 1;
      num = num / 3;
    }
  }
  document.getElementById("answer").innerHTML = `[${arr},1]`;
};
document.getElementById("3s").addEventListener("click", game3s);

// sHoRt AnD sToUt => short and stout => [[short], [and], [stout]]
// i = 0 => [[Short], [and], [stout]]
// i = 1 => [[Short], [And], [stout]]
// i = 2 => [[Short], [And], [Stout]]
// [[Short], [And], [Stout]] => Short And Stout
//......................................................
