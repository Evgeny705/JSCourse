// 1
const user = {
    name: "Boris",
    age: 24
}

user["firstName"] = user["name"]
delete user["name"]

// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

// 2
const fruitContainer = []

fruitContainer.push("Strawberry", "Apple", "Pear")
fruitContainer[1] = "Pineapple"

// Добавьте 3 фрукта в массив fruitContainer
// Измените название второго фрукта

// 3
/*
 Вам нужно создать программу на языке JavaScript для расчета бонусов сотрудникам
 в зависимости от их стажа и производительности. Используйте операторы и условные конструкции для выполнения задачи.

 Определение переменных:
 - Объявите переменную yearsOfService и присвойте ей значение, представляющее стаж сотрудника в годах (например, 5).
 - Объявите переменную performanceRating и присвойте ей значение от 1 до 5, представляющее оценку производительности сотрудника.

 Расчет бонуса:
 На основе стажа и оценки производительности рассчитайте бонус сотрудника. Используйте следующие правила:
   - Если стаж меньше 5 лет, и оценка производительности 4 или 5, бонус составляет 5% от заработной платы.
   -  Если стаж 5 лет или более, и оценка производительности 4 или 5, бонус составляет 10% от заработной платы.
   - В остальных случаях бонуса нет.

 Вывод результатов:
 Выведите результат расчета бонуса с использованием функции console.log. Если бонуса нет, выведите сообщение о том, что сотрудник не получает бонус.
 На основе всех переменных создайте объект employeeInfo с полученными переменными в виде значений
 */

 let yearsOfService = 8
 let performanceRating = 5

 const goodKPI = performanceRating == 4 || performanceRating == 5

 if (goodKPI){
    if (yearsOfService < 5) bonus = 5
    else bonus = 10
 }
 else bonus = 0

 if (goodKPI) console.log("Сотруднику положен бонус в размере " + bonus + "%")
else console.log("Сотрудник не получает бонус")

const employeeInfo = {
    yearsOfService: yearsOfService,
    performanceRating: performanceRating,
    bonus: bonus
}

// 4
const userData = {
    name: "Victor",
    age: 31,
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        zipCode: '12345'
    }
}

const userData2 = {
    name: "Vlad",
    age: "31",
    address: {
        street: '456 Oak Avenue',
        city: 'Townsville',
        state: 'Stateland',
        zipCode: null
    }
}

const data = [userData, userData2]

if (data[2]) {
    console.log("1") // Данное сообщение не выведется, потому что в массиве data элемента с индексом 2 не существует.
} else if (data[0].age === data[1].age && !(typeof data[0].name !== "string" || typeof data[1].address.zipCode)) {
    console.log("2") // Данное сообщение не выведется, потому что в первом блоке условия И ложное условие. 
                    // Оператор === будет истинным только для одного и того же объекта, в данном случае объекты разные.
} else if (typeof data[0].name === "string" && +data[1].age <= 0) {
    console.log("3") // Данное сообщение не выведется, несмотря на истинность первой части условия И. Во второй части условия возраст не станет <= 0.
} else if (typeof data[1].address["zipCode"] === "object") {
    console.log("4") // Функция typeof возвращает строку, поэтому условие истинно. Данная строка будет выведена в консоль.
} else {
    console.log("5") // не выведется, потому что предыдущее условие было истинным. В таком случае блок else не исполняется.
}

// Что будет выведено в консоли и почему

// 5
/*
   Выбор языка программирования
   * Объявите переменную `programmingLanguage` и присвойте ей строковое значение,
    представляющее предпочтительный язык программирования (например, "JavaScript", "Python", "Java", "C++").

   * Используя оператор `switch`, напишите код, который выводит сообщение о том, почему выбранный язык программирования является отличным выбором. Например:
     - Если `programmingLanguage` равен "JavaScript", выведите "JavaScript - отличный выбор для веб-разработки!"
     - Если `programmingLanguage` равен "Python", выведите "Python - мощный и удобный язык для разработки."
     - Если `programmingLanguage` равен "Java", выведите "Java - популярный язык для разработки кросс-платформенных приложений."
     - Если `programmingLanguage` равен "C++", выведите "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
     - Добавьте обработку для случая, когда `programmingLanguage` не соответствует ни одному из вышеперечисленных вариантов.

   * Вывод результатов:
    - Выведите сообщение о выборе языка программирования с использованием `console.log`.
 */

const programmingLanguage = "1C"

switch (programmingLanguage){
    case 'JavaScript': {
        console.log("JavaScript - отличный выбор для веб-разработки!")
        break
    }
    case 'Python': {
        console.log("Python - мощный и удобный язык для разработки.")
        break
    }
    case 'Java': {
        console.log("Java - популярный язык для разработки кросс-платформенных приложений.")
        break
    }
    case 'C++': {
        console.log("C++ - язык с высокой производительностью и возможностями низкоуровневого программирования.")
        break
    }
    default: console.log("Бог тебе судья")
}