/*
прочитать что такое this?
*/

/*
Создайте функцию, которая выводит среднее арифметическое всех числовых значений объекта и выводит результат в консоль
 */
const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52,
};

function printAvarageFromObject(person) {
  let countElements = 0;
  let sumElements = 0;
  for (let element in person) {
    console.log(element);
    if (typeof person[element] == "number") {
      countElements++;
      sumElements += person[element];
    }
  }
  console.log(sumElements / countElements);
}

printAvarageFromObject(person);

/*
  Напишите кастомный Object.assign,
  который принимает на вход целевой объект для копирования и копируемый объект и возвращает целевой
      function customAssign(target, source) {
          //code
          return target
      }
   */

function customAssign(target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
  return target;
}

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log(customAssign(target, source));

/*
  //TODO: максимально часто встречающаяся задача на фронте
  
  Необходимо создать функцию formatDate,
  которая принимает объект Date и возвращает строку с отформатированной датой в следующем виде: "DD.MM.YYYY, HH:mm:ss".
  
  1. Создайте функцию formatDate, которая принимает параметр date - объект Date.
  2. Используя методы объекта Date, получите значения года, месяца, дня, часа, минут и секунд.
  3. Добавьте ведущий ноль к значениям, если они состоят из одной цифры.
  4. Сформируйте строку в формате "DD.MM.YYYY, HH:mm:ss".
  5. Верните отформатированную строку.
  
  Пример использования:
  
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  
  Подсказка: Месяцы начинаются с нуля
  */
function formatDate(inputDate) {
  //   const year = inputDate.getFullYear();
  //   const month = inputDate.getMonth() + 1;
  //   const date = inputDate.getDate();
  //   const hours = inputDate.getHours();
  //   const minutes = inputDate.getMinutes();
  //   const seconds = inputDate.getSeconds();
  //   let result = "";

  //   result += addLeadingZero(date) + ".";

  //   result += addLeadingZero(month) + ".";

  //   result += year + ", ";

  //   result += addLeadingZero(hours) + ":";

  //   result += addLeadingZero(minutes) + ":";

  //   result += addLeadingZero(seconds);

  const dateObject = {
    year: inputDate.getFullYear(),
    month: inputDate.getMonth() + 1,
    date: inputDate.getDate(),
    hours: inputDate.getHours(),
    minutes: inputDate.getMinutes(),
    seconds: inputDate.getSeconds(),
  };

  let result = "";
  step = 0;
  separators = [".", ".", ", ", ":", ":", ""];

  for (key in dateObject) {
    result += addLeadingZero(dateObject[key]) + separators[step];
    step++;
  }

  return result;
}

function addLeadingZero(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value.toString();
  }
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);
console.log(formattedDate);
