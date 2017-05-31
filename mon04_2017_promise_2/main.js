new Promise(function(resolve, reject) {
    let num = +prompt('Введите число', '');
    if (!isNaN(num)) {
        // debugger;
        resolve(num);
    } else {
        reject(new Error(num))
    }
}).catch(function(error) {
    return new Promise(function(resolve, reject) {
        console.log(error)
        let num2;
        while (isNaN(num2)) {
            num2 = +prompt('Enter the number');
        }
        resolve(num2);
    })
}).then((result) => {
    return new Promise((resolve, reject) => {
        resolve(result)
    }).then((result) => {
        console.log(`Your number ${result}`)
    })
});