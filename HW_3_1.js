/*
1. Напишите функцию, которая принимает в себя строку в виде аргумента и возвращает true, если функции палиндром. 
Палиндром - строка, которая читается с конца так же, как и с начала. 
Условие - должны учитываться только буквы без знаков препинания. 
f("tenet") // true
f("tenet!") // true
*/
function checkIsPalindrom(inputString) {
  const onlyLettersLowerCaseString = inputString
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  return (
    onlyLettersLowerCaseString ==
    onlyLettersLowerCaseString.split("").reverse().join("")
  );
}

// console.log(checkIsPalindrom("tenet!"))

/*
2. Напишите функцию, принимающую строку и возвращающую самое длинное слово в строке
f('Web Development Tutorial'); // "Development"
*/
function findLongestWord(inputString) {
  const arrayOfString = inputString.split(" ");

  let maxLength = 0;
  let result = "";

  arrayOfString.forEach((element) => {
    if (element.length > maxLength) {
      maxLength = element.length;
      result = element.toString();
    }
  });

  return result;
}

// console.log("Longest word is: " + findLongestWord('Web Development Tutorial'))

/*
3. Напишите функцию, принимающую аргумент в виде строки и которая расставляет все буквы строки в алфавитном порядке. Возвращает новую строку с буквами в алфавитном порядке
f("alphabetical"); // "aaabcehillpt"
*/
function sortCharsByAlphabeth(inputString) {
  return inputString.split("").sort().join("");
}

// console.log(sortCharsByAlphabeth("alphabetical"))

/*
4. Напишите функцию JavaScript, которая принимает строку и возвращает индекс первого неповторяющегося символа. 
f('фывфавыапрс'); // 8
*/
function findFirstUniqueSymbol(inputString) {
  for (i = 0; i < inputString.length; i++) {
    if (
      inputString.indexOf(inputString[i]) ===
      inputString.lastIndexOf(inputString[i])
    ) {
      return i;
    }
  }

  return -1;
}

// console.log(findFirstUniqueSymbol("aabbccfdd"))

/*
5. Напишите функцию, которая принимает строку в качестве параметра и возвращает количество гласных в строке.
f('Web Development Tutorial')); //9
*/

function getCountVowel(inputString) {
  const onlyVowels = "aeiouy";
  let result = 0;

  for (i = 0; i < inputString.length; i++) {
    if (onlyVowels.indexOf(inputString[i]) >= 0) {
      result++;
    }
  }

  return result;
}

// console.log(getCountVowel("Web Development Tutorial"))
