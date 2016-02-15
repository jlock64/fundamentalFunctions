var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if (a > b) {
      console.log(a);
        return a;
    } else {
        return b;
    }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    if (a > b && a > c) {
       return a;
    } else if (b > c && b > a) {
       return b;
    } else {
      return c;
    }
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char) {
    if (typeof(char) === "string")
      char = char.toLowerCase();
      if (char === "a" || char === "e" || char === "i" ||char === "o" || char === "u") {
        return true;
    } else {
        return false;
    }
}


console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

 function rovarspraket(text) {  // word cat --> cocatot
   var returnString = "";  // create empty string
   if (typeof(text) !== "string") {
     return text.toString();
   } else {
       for (var i = 0; i < text.length; i++) {  // i = 0 meaning letter c to start so goes to else statement
         if (isVowel(text[i])) {
           returnString += text[i]; // first loop goes down to else statement
         } else {
           returnString += text[i] + "o" + text[i];
         }
     }
     return returnString;
 }}

console.assert(rovarspraket("a") === "a");
console.assert(rovarspraket("b") === "bob");
console.assert(rovarspraket("cat") === "cocatot");
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot");
console.assert(rovarspraket(0) === "0");

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// function reverse(str){
//     return str.split('').reverse().join('');
// }

function reverse(str) {  // justin --> str --> should spit out nitsuj
  var newStr = "";  // create empty string
  for (var i = str.length -1; i >= 0; i--) {  // str.length - 1 because [i] is zero index based so n in justin is i[5] but it's length is 6.
    newStr = newStr + str[i];  // first iteration returns empty string + str[i]  which is 5th spot which equals n...then continues with 5-1 so i[4]
  }
  return newStr;
}



console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){ //sentence "this is awesome" (can probably split the string into an array then  )
    var initialArray = sentence.replace("'", "").split(" ");  //now go to each word inside newArray and then once you create next one compare lengths with .length ["this", "is", "awesome"]
    var longestWord = ""; // .length is 0 initially
    for (var i=0; i < initialArray.length; i++) { // i[0] of initialArray brings back "this"
        if (initialArray[i].length > longestWord.length) {  //i[0] --> "this".length --> 4 > 0 (empty longestWord)
          longestWord = initialArray[i];
        }
    }
    return longestWord;
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
