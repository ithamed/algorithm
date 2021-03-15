function print1To135() {
  for (let i = 1; i < 136; i++) {
    let p = document.createElement("p");
    p.innerHTML = i;
    document.getElementById("print").appendChild(p);
  };
};
document.getElementById("print-number").addEventListener("click", print1To135);

function printOddNumber1To135() {
  for (let i = 1; i < 136; i++) {
    if (i%2 !== 0) {
      let p = document.createElement("p");
      p.innerHTML = i;
      document.getElementById("print").appendChild(p);
    };
  };
};
document.getElementById("print-odd-number").addEventListener("click", printOddNumber1To135);

function printSumOf1To135() {
  let total = 0;
  for (let i = 1; i < 136; i++) {
    let p = document.createElement("p");
    total = i + (i -1);
    p.innerHTML = `Number is: ${i} Sum: ${total}`;
    document.getElementById("print").appendChild(p);
  };
};
document.getElementById("print-sum-number").addEventListener("click", printSumOf1To135);

function printArray() {
  let x = [1, 4, 2, 12];
  for (let i = 0; i < x.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = x[i];
    document.getElementById("print").appendChild(p);
  };
};
document.getElementById("print-array").addEventListener("click", printArray);

function printMax() {
  let x = [1, -4, 2, 12, 0, 10];
  let p = document.createElement("p");
  let max = x.reduce(function(a, b) {
      return Math.max(a, b);
  });
  p.innerHTML = max;
  document.getElementById("print").appendChild(p);
};
document.getElementById("print-max").addEventListener("click", printMax);

function printAverage() {
  let x = [1, -4, 2, 12, 3, 10];
  let p = document.createElement("p");
  let total = 0
  for(let i = 0; i < x.length; i++){
   total += x[i];
  }
  let average = total/x.length;
  p.innerHTML = average;
  document.getElementById("print").appendChild(p);
};
document.getElementById("print-average").addEventListener("click", printAverage);

function eliminateNegatives() {
  let x = [1, -4, 2, -10, 3, 10];
  let p = document.createElement("p");
  for(let i = 0; i < x.length; i++){
   if (x[i] < 0) {
     x[i] = 0;
   }
  }
  p.innerHTML = x;
  document.getElementById("print").appendChild(p);
};
document.getElementById("print-elnegative").addEventListener("click", eliminateNegatives);

function numberToString() {
  let x = [1, -4, 2, -10, 3, 10];
  let p = document.createElement("p");
  for(let i = 0; i < x.length; i++){
   if (x[i] < 0) {
     x[i] = "turing";
   }
  }
  p.innerHTML = x;
  document.getElementById("print").appendChild(p);
};
document.getElementById("print-string").addEventListener("click", numberToString);