//1

/*
Ваша задача - создать систему обработки заказов с использованием callback-функций.
Каждый заказ имеет свой уникальный номер, сумму и состояние (выполнен или не выполнен).
Вам нужно реализовать функции для добавления нового заказа, изменения состояния заказа и вывода информации о заказах.

// Объект для хранения заказов
const orders = {};

function addOrder(orderNumber, amount, callback) {
  Если заказа нет - добавить в список заказов с полем completed = false и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказ существует
}

function completeOrder(orderNumber, callback) {
   Если заказ существует - добавить в список заказов с полем completed = true и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказа нет
}

function listOrders(callback) {
  Пройтись по объекту заказов и вывести информацию в виде:
  Заказ #1 - Сумма: 50, выполнен
  Заказ #2 - Сумма: 30, не выполнен

  Сначала отформатируйте каждый заказ в таком виде, затем вызовите колбэк с отформатированным ордер-листом
}

// Использование системы обработки заказов
addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));
*/

const orders = {};

function addOrder(orderNumber, amount, callback) {
  if (orders[orderNumber] == undefined) {
    orders[orderNumber] = { amount, completed: false };
    callback("Заказ #" + orderNumber + " добавлен");
  } else {
    callback("Заказ #" + orderNumber + " уже существует");
  }
}

function completeOrder(orderNumber, callback) {
  if (orders[orderNumber] != undefined) {
    orders[orderNumber].completed = true;
    callback("Заказ #" + orderNumber + " выполнен");
  } else {
    callback("Заказ #" + orderNumber + " не существует");
  }
}

function listOrders(callback) {
  let result = "";
  for (const orderNumber in orders) {
    const { amount, completed } = orders[orderNumber];
    const status = completed ? "выполнен" : "не выполнен";
    result +=
      "Заказ #" + orderNumber + " - Сумма: " + amount + ", " + status + "\n";
  }
  callback(result);
}

addOrder(1, 50, (message) => console.log(message));
addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));

//2
/*
Ваша задача - создать систему для загрузки данных о пользователях из удаленного сервера с использованием промисов.
У вас есть URL сервера, который предоставляет данные о пользователях в формате JSON.
Вам нужно реализовать функцию для загрузки данных и обработать результат.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(....)
      .then(response => {
       ....
      })
      .then(data => {
        ....
      })
      .catch(error => {
       .....
      });
  });
}

// Использование промиса для загрузки данных
loadUserData()
  .then(users => {
    console.log('Данные о пользователях получены:', users);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });
 */

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

function loadUserData() {
  return new Promise((resolve, reject) => {
    console.log("Начало загрузки данных...");
    fetch(usersDataURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось загрузить данные");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

loadUserData()
  .then((users) => {
    console.log("Данные о пользователях получены:", users);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });

//3
// Переписать loadUserData с помощью async/await
async function loadUserDataByAwait() {
  console.log("Начало загрузки данных...");
  try {
    const response = await fetch(usersDataURL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

loadUserDataByAwait()
  .then((users) => {
    console.log("Данные о пользователях получены:", users);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });

//4
/*

Ваша задача - создать систему для одновременной загрузки данных о пользователях и их постах с использованием Promise.all.
 У вас есть два URL: один для данных о пользователях, а другой для их постов в формате JSON.
 Вам нужно реализовать функцию для одновременной загрузки обоих наборов данных и обработки результатов.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData() {}
function loadPostsData() {}

Promise.all([loadUserData(), loadPostsData()]) // здесь надо вывести данные в случае успеха и в случае ошибки

Затем то же самое с Promise.race()
*/

const usersDataURL4 = "https://jsonplaceholder.typicode.com/users";
const postsDataURL4 = "https://jsonplaceholder.typicode.com/posts";

function loadUserData4() {
  return fetch(usersDataURL4).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error("Не удалось загрузить данные о пользователях");
    }
  });
}
function loadPostsData4() {
  return fetch(postsDataURL4).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error("Не удалось загрузить данные о постах пользователей");
    }
  });
}

Promise.all([loadUserData4(), loadPostsData4()])
  .then(([usersData, postsData]) => {
    console.log("Результат работы promise all: ");
    console.log("Данные о пользователях: " + usersData);
    console.log("Данные о постах пользователей: " + postsData);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.race([loadUserData4(), loadPostsData4()])
  .then((data) => {
    console.log("Результат работы promise race: ");
    console.log("Первые полученные данные: " + data);
  })
  .catch((error) => {
    console.error(error);
  });

//5
/*
Вы - анонимусы, и вам необходимо провести DDos-атаку на https://jsonplaceholder.typicode.com
Раз в полсекунды отправляйте рандомный запрос на сервер (либо /users, либо /posts)
*/

const usersDataDDos = "https://jsonplaceholder.typicode.com/users";

setInterval(() => {
  fetch(usersDataDDos).then((response) => {
    if (response.ok) {
      console.log("Запрос выполнен успешно");
    } else {
      console.log("Запрос не выполнен");
    }
  });
}, 500);

//6
/*
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

setTimeout(() => {
  console.log('3');
  Promise.resolve().then(() => console.log('4'));
}, 0);

Promise.resolve().then(() => {
  console.log('5');
  setTimeout(() => console.log('6'), 0);
});

Promise.resolve().then(() => {
  console.log('7');
});

console.log('8');

Напишите порядок вывода чисел в консоль с ОБЪЯСНЕНИЯМИ ПРИЧИНЫ
*/
/*
сначала выведется 1, потому что это синхронный код, который попадает в Call stack и сразу выполняется
после выведется 8, потому что это синхронный код, который попадает в Call stack и сразу выполняется
потом 5, несмотря на то, что этот вывод описан внутри promise, здесь не используется setTimeout, значит код попадет в Call stack минуя Call queue
потом 7, несмотря на то, что этот вывод описан внутри promise, здесь не используется setTimeout, значит код попадет в Call stack минуя Call queue
потом 2, потому что очередь Call stack была обработана и теперь запустилась обработка очереди Call queue, а вывод 2 был описан раньше всех
потом 3, потому что это следующий из очереди call queue
потом 4, потому что у них общий setTimeout с выводом 3. Отдельно для 4 не указан setTimeout
последним выведется 6, потому что этот setTimeout описан ниже всех при построчном прочтении кода

итого порядок вывода: 1, 8, 5, 7, 2, 3, 4, 6
*/
