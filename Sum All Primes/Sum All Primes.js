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
function sumAllPrimes() {
  let num = parseInt(document.getElementById("input-number").value);
  let sum = 5;
  if (num < 1) {
    sum = "the number shoud be greater than zero"
  } else if(num === 1){
    sum = 0;
  } else if(num === 2){
    sum = 2;
  } else if(num === 3){
    sum = 5;
  } else if(num >= 4){
    for (let i = 5; i <= num; i += 2) {
      if(isPrime(i)) {
        sum += i;
      }   
    }
  }
  document.getElementById("answer").innerHTML = sum;
};
document.getElementById("sum-aal-primes").addEventListener("click", sumAllPrimes);

// for example num = 10
// i = 5 => 5 is prime => sum = 5 + 5 = 10
// i = 7 => 7 is prime => sum = 10 + 7 = 17
// i = 9 => 9 is not prime => sum = 17
//......................................................
