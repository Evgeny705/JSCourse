//1
/*
const students = [
  { name: 'Alice', grades: [85, 90, 92] },
  { name: 'Bob', grades: [78, 80, 75] },
  { name: 'Charlie', grades: [90, 92, 88] },
  { name: 'Anna', grades: [99, 60, 83] },
  { name: 'George', grades: [77, 82, 77] },
  { name: 'Nick', grades: [70, 90, 83] },
];

У вас есть массив `students`, представляющий информацию о студентах.
Каждый элемент массива - объект с полями `name` (имя студента) и `grades` (массив оценок студента).

1. Найдите средний балл каждого студента и добавьте его в объект в виде нового свойства `averageGrade`.
2. Отсортируйте студентов по среднему баллу в убывающем порядке.
3. Используя метод массива, создайте новый массив `topStudents`, содержащий 3 студентов с самыми высокими средними баллами.
*/
const students = [
  { name: "Alice", grades: [85, 90, 92] },
  { name: "Bob", grades: [78, 80, 75] },
  { name: "Charlie", grades: [90, 92, 88] },
  { name: "Anna", grades: [99, 60, 83] },
  { name: "George", grades: [77, 82, 77] },
  { name: "Nick", grades: [70, 90, 83] },
];

for (const student of students) {
  const sum = student.grades.reduce((total, grade) => total + grade, 0);
  const averageGrade = sum / student.grades.length;
  student.averageGrade = averageGrade;
}

students.sort((s1, s2) => s2.averageGrade - s1.averageGrade);
// console.log("");
// console.log('Вывод студентов отсортированных по полю "avarageGrade"');
// for (const student of students) {
//   console.log(student);
// }

const topStudents = students.slice(0, 3);
// console.log("");
// console.log("Вывод лучших студентов");
// for (const student of topStudents) {
//   console.log(student);
// }

//2
/*
Давайте создадим собственный кастомный метод массива с именем findAndPush,
который будет выполнять аналогичные действия методам find и push.
Этот метод будет искать заданный элемент в массиве и, если найден, перемещать его в конец массива.
Метод будет возвращать true в случае успешной операции и false в противном случае

Условие: нельзя использовать find и push, любые другие методы можно
*/
Array.prototype.findAndPush = function (searchElement) {
  for (i = 0; i < this.length; i++) {
    if (searchElement == this[i]) {
      const searchValue = this.slice(i, i + 1)[0];
      this[i] = this[this.length - 1];
      this[this.length - 1] = searchValue;
      return true;
    }
  }
  return false;
};

// Пример использования
const myArray = [1, 2, 3, 4, 5];

const result = myArray.findAndPush(3);

// console.log(result); // true, так как 3 был найден и перемещен
// console.log(myArray); // [1, 2, 4, 5, 3]

//3
/*Создайте функцию, которая принимает две даты в формате объекта `Date`
и возвращает разницу между ними в виде объекта с полями `years`, `months`, `days`, `hours`, `minutes`, `seconds`.

Подсказка:
    - Используйте методы объекта `Date` для получения разных компонент времени (год, месяц, день, час, минута, секунда).
    - Учтите, что разница в месяцах может быть нецелым числом, поэтому нужно корректно обработать этот случай.
*/

function dateDifference(date1, date2) {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();
  const hours1 = date1.getHours();
  const minutes1 = date1.getMinutes();
  const seconds1 = date1.getSeconds();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();
  const hours2 = date2.getHours();
  const minutes2 = date2.getMinutes();
  const seconds2 = date2.getSeconds();

  const years = year2 - year1;
  let month = 0;
  if (month2 - month1 >= 0) {
    month = month2 - month1;
  } else {
    month = month2 + 12 - month1;
  }
  const days = day2 - day1;
  const hours = hours2 - hours1;
  const minutes = minutes2 - minutes1;
  const seconds = seconds2 - seconds1;

  return { years, month, days, hours, minutes, seconds };
}

// Пример использования:
const startDate = new Date(2023, 0, 1, 12, 0, 0); // 1 января 2023 года, 12:00:00
const endDate = new Date(2024, 5, 15, 18, 30, 45); // 15 июня 2024 года, 18:30:45

const difference = dateDifference(startDate, endDate);
// console.log(
//   "years: " +
//     difference.years +
//     ",\n" +
//     "month: " +
//     difference.month +
//     ",\n" +
//     "days: " +
//     difference.days +
//     ",\n" +
//     "hours: " +
//     difference.hours +
//     ",\n" +
//     "minutes: " +
//     difference.minutes +
//     ",\n" +
//     "seconds: " +
//     difference.seconds
// );

//{
//  years: 1,
//  months: 5,
//  days: 14,
//  hours: 6,
//  minutes: 30,
//  seconds: 45
//}

//4
/*Создайте функцию, которая принимает объект с информацией о студенте и использует деструктуризацию
для извлечения различных данных. Затем выведите эти данные в виде строки.

Подсказка:
- Используйте деструктуризацию для извлечения данных из объекта студента.
- Можете использовать шаблонные строки для формирования вывода.
 */
function printStudentInfo(student) {
  const {
    name: name,
    age: age,
    grade: grade,
    address: address,
    hobbies: hobbies,
  } = student;

  const { city: city, zip: zip } = address;

  return (
    "Student: " +
    name +
    ", Age: " +
    age +
    ", Grade: " +
    grade +
    ", City: " +
    city +
    ", Zip: " +
    zip +
    ", Hobbies: " +
    hobbies.join(", ")
  );
}

// Пример использования:
const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "traveling"],
};

// console.log(printStudentInfo(student));

// Вывод должен быть в формате:
// "Student: Alice, Age: 20, Grade: A, City: New York, Zip: 10001, Hobbies: reading, traveling"

//5
/*
Вот ваша первая задача из первой домашки:
const user = {
    name: "Boris",
    age: 24
}

// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

В основном вы ее делали так:
user.firstName = user.name
delete user.name

По итогу у вас получался объект следующего вида:

const user = {
    age: 24
    firstName: "Boris",
}

Внимание, задача: создать новый объект newUser (программно), чтобы на выходе получилось следующее:

*/

const user = {
  name: "Boris",
  age: 24,
};

const { name: firstName, age } = user;
const newUser = { firstName, age };

// console.log(newUser); // {firstName: "Boris", age: 24}
