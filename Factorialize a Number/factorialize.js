// 1. take and define a number as input to calculate its factorial.
// 2. define a variable named result and set it to the number.
// 3. make a loop and multiply result by the n-1 and continue the loop while n is greater than 1.
// 4. print the result.

function factorialize() {
  let n = document.getElementById("input-number").value;
  let result = n;
  while (n >1) {
    result *= (n - 1);
    n--
  }
  document.getElementById("answer").innerHTML = result;
};
document.getElementById("factorialize").addEventListener("click", factorialize);

// n=1 => 1
// n=2 => 2*1=2
// n=3 => 3*2*1=6
// n=4 => 4*3*2*1=24
// n=5 => 5*4*3*2*1=120
//......................................................
