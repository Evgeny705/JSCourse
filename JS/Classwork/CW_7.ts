/*
Напишите универсальную функцию getMaxValue, которая принимает массив элементов и возвращает максимальное значение.
 Функция должна корректно обрабатывать массивы разных типов элементов, таких как числа, строки или объекты с полем "value".

Пример:

const numbers = [5, 2, 8, 10];
const strings = ['apple', 'banana', 'orange'];
const objects = [{ value: 20 }, { value: 15 }, { value: 25 }];

const maxNumber = getMaxValue(numbers); // Ожидаем, что maxNumber будет равно 10
const maxString = getMaxValue(strings); // Ожидаем, что maxString будет равно 'orange'
const maxObject = getMaxValue(objects); // Ожидаем, что maxObject будет равно { value: 25 }

Подсказка:

Используйте дженерики и функцию reduce для поиска максимального значения.
Учтите, что если элемент является объектом, вы можете использовать ключ "value" для сравнения значений.

function getMaxValue<T>(array: T[]): T {
  // реализация функции
}
*/
type ValueObject = {
  value: number;
};

function getMaxValue<T extends number | string | ValueObject>(array: T[]): T {
  return array.reduce((max: T, current: T) => {
    if (
      typeof current == "object" &&
      "value" in current &&
      typeof max == "object" &&
      "value" in max
    ) {
      return current.value > max.value ? current : max;
    }
    return current > max ? current : max;
  });
}

const numbers = [5, 2, 8, 10];
const strings = ["apple", "banana", "orange"];
const objects = [{ value: 20 }, { value: 15 }, { value: 25 }];

const maxNumber = getMaxValue(numbers); // Ожидаем, что maxNumber будет равно 10
const maxString = getMaxValue(strings); // Ожидаем, что maxString будет равно 'orange'
const maxObject = getMaxValue(objects); // Ожидаем, что maxObject будет равно { value: 25 }
