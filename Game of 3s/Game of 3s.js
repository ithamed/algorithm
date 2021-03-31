// 1. define a variable and put the input number in it.
// 2. define aan empty array to put the result in it.
// 3. define a counter index and set it to -1.
// 4. if the input is empty write a phrase to fill it.
// 5. write a while loop and continue it untile the number is greater than 1.
// 6. add 1 to the counter.
// 7. if the remain of the divition of the number by 3 is 0 then add the number and zero to the array and divide the number by 3.
// 8. if the remain of the divition of the number by 3 is 1 then add the number and -1 to the array and substract the number by 1 and then divide the number by 3.
// 9.if the remain of the divition of the number by 3 is 2 then add the number and 1 to the array and add the number by 1 and then divide the number by 3.
// 10. print the array.
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

// for example number 30
// i = 0 => num % 3 = 0 => arr[0] = [30, 0] , num = 10
// i = 1 => num % 3 = 1 => arr[1] = [10, -1] , num = 10 - 1, num = 3
// i = 2 => num % 3 = 0 => arr[3] = [3, 0] , num = 1
//......................................................