// 1. take a sentece as input and turn it to lower case and split the words.
// 2. make a for loop to go through the word in the array and replace the first letter to upper case letter.
// 6. make a sentence from the array and print it..

function titleCase() {
  let arr = document.getElementById("input-sentence").value.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i][0],arr[i][0].toUpperCase());
  }
  document.getElementById("answer").innerHTML = arr.join(" ");
};
document.getElementById("title-case").addEventListener("click", titleCase);

// sHoRt AnD sToUt => short and stout => [[short], [and], [stout]]
// i = 0 => [[Short], [and], [stout]]
// i = 1 => [[Short], [And], [stout]]
// i = 2 => [[Short], [And], [Stout]]
// [[Short], [And], [Stout]] => Short And Stout
//......................................................
