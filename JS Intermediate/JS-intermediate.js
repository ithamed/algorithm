// 1. if there is already something in the DOM, remove it.
// 2. make a for loop for 200 to 2700
// 3. is i divisible by 3 or 5?
// 4. is not i divisible by 3 and 5?
// 5. make a p element in de document.
// 6. set i as innerHTML of the p element.
// 7. add p element as child of divition name print
function addition() {
  if (document.getElementById("print").lastElementChild !== null){
    document.getElementById("print").innerHTML = ""
  };
  for (let i = 200; i < 2700; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
      if ((i % 15 !== 0)) {
        let p = document.createElement("p");
        p.innerHTML = i;
        document.getElementById("print").appendChild(p);
      };
    };
  };
};
document.getElementById("addition").addEventListener("click", addition);
// 200%3=2 , 200%5=0 => 200
// 201%3=0 , 201%5=1 => 200 201
// 202%3=1 , 202%5=2 => 200 201
// ............
// 209%3=2 , 209%5=4 => 200 201 204 205 207
// 210%3=0 , 210%5=0 , 210%15=0 => 200 201 204 205 207
// ............
// 2700%3=0 , 2700%5=0 , 2700%15=0 => 200 201 204 205 207 ... 2694 2695 2697
//......................................................


// 1. if there is already something in the DOM, remove it.
// 2. define an array.
// 3. define a new array.
// 4. set the last element of first array to the first element of new array.
// 5. make a for loop and set the value of each index of de old array to the next index of the new array.
// 6. make a p element in de document.
// 7. set new array as innerHTML of the p element.
// 8. add p element as child of divition name print.
function shift() {
  if (document.getElementById("print").lastElementChild !== null){
    document.getElementById("print").innerHTML = ""
  };
  let x = [2, 1, 6, 4, -7];
  let y = new Array();
  y[0] = x[x.length - 1];
  for (let i = 0; i < x.length - 1; i++) {
    y[i +1] = x[i];
  };
  let p = document.createElement("p");
  p.innerHTML = `[${y}]`;
  document.getElementById("print").appendChild(p);
};
document.getElementById("shift").addEventListener("click", shift);
// y = [-7]
// y = [-7, 2]
// y = [-7, 2, 1]
// y = [-7, 2, 1, 6]
// y = [-7, 2, 1, 6, 4]
//.................................................


// 1. if there is already something in the DOM, remove it.
// 2. define an array.
// 3. make a for loop for set the item of the array to number between 1 to 135.
// 4. if the number divisible by 3 and 5 set the item of array to FizzBazz.
// 5. if the number divisible by 3 set the item of array to Fizz.
// 6. if the number divisible by 5 set the item of array to Bazz.
// 7. otherwise, just set the number to the array item.
// 8. make a p element in de document.
// 9. set the array as innerHTML of the p element.
// 10. add p element as child of divition name print.
function fizzBazz() {
  if (document.getElementById("print").lastElementChild !== null){
    document.getElementById("print").innerHTML = ""
  };
  let x = new Array();
  for (let i = 1; i < 136; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      x[i - 1] = "FizzBazz";
    } else if (i % 3 === 0) {
      x[i - 1] = "Fizz";
    } else if (i % 5 === 0) {
      x[i - 1] = "Bazz";
    } else  {
      x[i - 1] = i;
    };
  };
  let p = document.createElement("p");
  p.innerHTML = `[${x}]`;
  document.getElementById("print").appendChild(p);
};
document.getElementById("fizz-bazz").addEventListener("click", fizzBazz);
// i=1 => [1]
// i=2 => [1, 2]
// i=3 => [1, 2, Fizz]
// i=4 => [1, 2, Fizz, 4]
// i=5 => [1, 2, Fizz, 4, Bazz]
//.........
// i=135 => [1, 2, Fizz, 4, Bazz, 6, ..., 133, 134, FizzBazz]
//..............................................................


// 1. if there is already something in the DOM, remove it.
// 2. define an array.
// 3. make a while loop for summing the two number and chek if it is not bigger than 1000000.
// 4. determine the array and the length of the array.
// 5. make a p element in de document.
// 6. set the array as innerHTML of the p element.
// 7. add p element as child of divition name print.
function fibonacci() {
  if (document.getElementById("print").lastElementChild !== null){
    document.getElementById("print").innerHTML = ""
  };
  let x = [0, 1];
  i = 1;
  while(x[i] < 1000000) {
  x[i + 1] = x[i] + x[i -1];
  i++;
  }
  x.length = i;
  let p = document.createElement("p");
  p.innerHTML = x;
  document.getElementById("print").appendChild(p);
};
document.getElementById("fibonacci").addEventListener("click", fibonacci);
// i=1 => [0, 1, 1]
// i=2 => [0, 1, 1, 2]
// i=3 => [0, 1, 1, 2, 3]
// i=4 => [0, 1, 1, 2, 3, 5]
// i=5 => [0, 1, 1, 2, 3, 5, 8]
// ................
// i=29 => [0, 1, 1, 2, 3, 5, 8, ..., 832040]
//..................................................


// 1. if there is already something in the DOM, remove it.
// 2. define an array.
// 3. make a while loop for cheking through the ithem of the array.
// 4. if the value of the item is less than zero then remove this item of the  array and go one index back.
// 5. make a p element in de document.
// 6. set the array as innerHTML of the p element.
// 7. add p element as child of divition name print.
function removeNegative() {
  if (document.getElementById("print").lastElementChild !== null){
    document.getElementById("print").innerHTML = ""
  };
  let x = [1, -2, 4, 1];
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
      x.splice(i , 1);
      i--;
    };
  };
  let p = document.createElement("p");
  p.innerHTML = `[${x}]`;
  document.getElementById("print").appendChild(p);
};
document.getElementById("remove-negative").addEventListener("click", removeNegative);
// i=1 => [1]
// i=2 => [1]
// i=3 => [1, 4]
// i=1 => [1, 4, 1]
//.............................................


// 1. if there is already something in the DOM, remove it.
// 2. define an array.
// 3. find the index of the word.
// 4. define a for loop to go through in the index of the letter of the word and turn them to * and then replace them in the array.
/// 5. make a p element in de document.
// 6. set the array as innerHTML of the p element.
// 7. add p element as child of divition name print.
function printAverage() {
  if (document.getElementById("print").lastElementChild !== null){
    document.getElementById("print").innerHTML = ""
  };
  let x = ['Man', 'I','Love','The','Matrix','Program'];
  let w = x.length - 1;
  for (let i = 0; i < x[w].length; i++) {
    x[w] = x[w].replace(x[w][i], '*');
  }
  let p = document.createElement("p");
  p.innerHTML = `[${x}]`;
  document.getElementById("print").appendChild(p);
};
document.getElementById("communist-censorship").addEventListener("click", printAverage);
// i=1 => *rogram
// i=2 => **ogram
// i=3 => ***gram
// i=4 => ****ram
// i=5 => *****am
// i=6 => ******m
// i=7 => *******
//...............................................