// 1. take a sentece as input and turn it to an array.
// 2. define a variable for the length of largest number and set the lenght of the first number to it.
// 3. define another variable to keep the langest word and set the first word to it.
// 4. make a for loop for go through the array.
// 5. if the length of a word is more than another largest word then change the varible two variable with this word and it's length.
// 6. print the variables.

function longestWord() {
  let arr = document.getElementById("input-number").value.split(" ");
  let len = arr[0].length;
  let word = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      len = arr[i].length;
      word = arr[i];
    }
  }
  document.getElementById("answer").innerHTML = `The largest word is ${word} and it's length is ${len}`;
};
document.getElementById("longest-word").addEventListener("click", longestWord);

// i = 0 => arr[0] = may => len = 3 and word = may
// i = 1 => arr[1] = the => len = 3 and word = may
// i = 2 => arr[2] = force => len = 5 and word = force
// i = 3 => arr[3] = be => len = 2 and word = force
// i = 4 => arr[4] = with => len = 4 and word = force
// i = 5 => arr[5] = you => len = 3 and word = force
//......................................................
