// 1. define aan array to put the input in it.
// 2. get a sentence and two word(the first as the word which we want to be change and second as the word that we want to print in the sentence) as input and put them in the array.
// 3. define another array and put the sentence as aaray in it.
// 4. make a for loop to go through the sentence.
// 5. if a word in the sentence is equal to the word that we want to be replaced then replace it.
// 6. make another for loop to go through the replaced word to see if the letters are upper case or not.
// 7. if any letter of the word is upper case then change the same letter in the new word to uuper case else make it to lower case.
// 8. print the new sentence.
function magicSquare() {
  let arr = document.getElementById("input-arr").value.split(",");
  let arr1 = arr[0].split(" ");
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr[1]) {
      for (let j = 0; j < arr[1].length; j++) {
        if (arr[1][j] === arr[1][j].toUpperCase()) {
          arr[2] = arr[2].replace(arr[2][j], arr[2].charAt(j).toUpperCase())
        } else {
          arr[2] = arr[2].replace(arr[2][j], arr[2].charAt(j).toLowerCase())
        } 
        arr1[i] = arr[2]
      }
    }
  }
  document.getElementById("answer").innerHTML = arr1.join(' ');
};
document.getElementById("search-replace").addEventListener("click", magicSquare);

// A quick brown fox Jumped over the lazy dog,Jumped,leaped
// arr = ["A quick brown fox Jumped over the lazy dog","Jumped","leaped"]
// arr1 = ["A", "quick", "brown", "fox", "Jumped", "over", "the", "lazy", "dog"]
// i = 0 => arr1[0] = A != arr[1] = Jumped
// i = 1 => arr1[1] = quick != arr[1] = Jumped
// i = 2 => arr1[2] = brown != arr[1] = Jumped
// i = 3 => arr1[3] = fox != arr[1] = Jumped
// i = 4 => arr1[4] = Jumped == arr[1] = Jumped => j = 0 => arr[1][0]=J === arr[1][0].toUpperCase=J => arr[2][0] = L
// ...
// A quick brown fox Leaped over the lazy dog
//......................................................
