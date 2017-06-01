Задание №2. Promise  

Создайте асинхронную цепочку из трех promise:  
new Promise(function (resolve, reject) {  
   // Запрашиваем у пользователя число number при помощи prompt()  
   // Если пользователь ввел не число - вызвать reject()  
   // Если пользователь ввел число - вызвать resolve(number)  
}).catch(function (error) {  
   return new Promise(function (resolve, reject) {  
      // Запрашиваем у пользователя число number, пока он его не введет  
      // после ввода числа - вызвать resolve(number)  
   });  
}).then(function (result) {  
   return new Promise(function (resolve, reject) {  
      // Вывод number на экран  
   });  
});  

