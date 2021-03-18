// 1. take and define a text as input to check is it a palindrome.
// 2. seprate all unwanted characters and set the remain in a variable.
// 3. define the answer and set it by default yes.
// 4. make a loop for go through the characters.
// 4. if the value of a character is not equal as the same character from the end of the text set the result no.

function isPalindrome() {
  let txt = document.getElementById("input-text").value;
  let str = txt.split(" ").join("").toLowerCase();
  let result = "Yes";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length-1-i]) {
      console.log(str[i])
      console.log(str[str.length-1-i])
      result = "No";
    }
  }
  document.getElementById("answer").innerHTML = result;
};
document.getElementById("palindrome").addEventListener("click", isPalindrome);

// fo rexample: Where are Erehw
// str= whereareerehw
// i=0 => w=w => the result does not change
// i=1 => h=h => the result does not change
// i=2 => e=e => the result does not change
// i=3 => r=r => the result does not change
// i=4 => e=e => the result does not change
// i=5 => a!=e => the result change to no
//......................................................
