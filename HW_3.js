// 1
/*
 Создать функцию multiplyTable, которая принимает число n
 и выводит таблицу умножения для чисел от 1 до n. Используйте вложенные циклы для создания таблицы.

 Условия:

 - Функция должна принимать целое положительное число n.
 - Выводить таблицу умножения для чисел от 1 до n.

 Например multiplyTable(5);
    // Вывод:
    // 1 2 3 4 5
    // 2 4 6 8 10
    // 3 6 9 12 15
    // 4 8 12 16 20
    // 5 10 15 20 25
 */
function multiplyTable(n){
   
   if (isNaN(n) || n <= 0){
      console.log("incorrect input data")
      return
   }

   for (i = 1; i <= n; i++){

      resultString = ""

      for (j = 1; j <= n; j++){
         resultString += i * j + " "
      }

      console.log(resultString)

   }
}
// multiplyTable(6)

// 2
/*
  Создать функцию calculateFactorial, которая принимает число n
  и возвращает факториал этого числа. Факториал числа - это произведение всех положительных целых чисел от 1 до этого числа включительно.

  Условия:

  Функция должна принимать целое положительное число n.
  Факториал 0 и 1 равен 1.

  Например: calculateFactorial(5);
  // Вывод: 120 (1 * 2 * 3 * 4 * 5)
 */

function calculateFactorial(n){

   if (isNaN(n) || n < 0){
      console.log("incorrect input data")
      return
   }

   if (n == 0 || n == 1) return 1

   sumFactorial = 1;
   strFactorial = "1";

   for (i = 1; i < n; i++){
      sumFactorial += sumFactorial * i;
      strFactorial += " * " + (i + 1)
   }

   return sumFactorial + " (" + strFactorial + ")"
}

// console.log(calculateFactorial(7))

//3
/*
 Создать функцию addWithLoss, которая принимает два числа
 и возвращает их сумму с потерей точности. Функция должна округлить результат сложения до определенного количества знаков после запятой.

 Условия:

 Функция должна принимать два числа.
 Опционально, функция может принимать третий параметр — количество знаков после запятой для округления результата (по умолчанию 1).
 Функция должна возвращать число

 Например:
 addWithLoss(0.1, 0.2);
 // Вывод: 0.3 (вместо ожидаемого 0.30000000000000004)

 addWithLoss(1.001, 2.002, 2);
 // Вывод: 3 (вместо ожидаемого 3.003)

*/

function addWithLoss(firstTerm, secondTerm, accurancy = 1){
   
   result = firstTerm + secondTerm
   return +result.toFixed(accurancy)

}

// console.log(addWithLoss(1.001, 2.002, 2))

//4

/*Создать функцию processText, которая принимает строку текста и выполняет следующие операции:

Удаление пробелов в начале и конце строки.
Преобразование текста в нижний регистр.
Замена всех символов "a" на символ "X".

Например:
processText("   Hello, World!   ");
// Вывод: "xello, world!"

processText("Another Example");
// Вывод: "xXother exXmple"

*/
function processText(text){
   
   text = text.trim()
   text = text.toLowerCase()
   text = text.replaceAll("a", "X")
   
   return text

}

// console.log(processText("   Hello, World!   "))
// console.log(processText("Another Example"))

//5

/*Задача: Кодирование и декодирование строки
 Необходимо создать программу для кодирования и декодирования строк.
 Кодирование осуществляется следующим образом: каждый символ строки заменяется на его ASCII код (String.fromCharCode),
 затем к получившимся числам добавляется заданное число (назовем его "ключ").
 Декодирование, соответственно, происходит в обратном порядке.

 1. Напишите функцию encode_string(s, key), которая принимает на вход строку s и целое число key,
 и возвращает закодированную строку.

 Например:
 encode_string("Hello, World!", 5)
 вывод: "Mjqqt, 1twnl!"

 2. Напишите функцию decode_string(encoded_s, key),
 которая принимает закодированную строку и ключ, и возвращает декодированную строку.

 Например:
 decode_string("Mjqqt, 1twnl!", 5)
 вывод: "Hello, World!"

 */

function encodeString(s, key){
   
   myArray = s.split()

   resultString = ""

   for (let char of s){
      currentCode = char.charCodeAt()
      resultString += String.fromCharCode(currentCode + key)
   }
   
   return resultString

}

function decodeString(s, key){
   
   myArray = s.split()

   resultString = ""

   for (let char of s){
      currentCode = char.charCodeAt()
      resultString += String.fromCharCode(currentCode - key)
   }
   
   return resultString

}

// console.log(encodeString("Hello, World!", 5))
// console.log(decodeString("Mjqqt1%\\twqi&", 5))
