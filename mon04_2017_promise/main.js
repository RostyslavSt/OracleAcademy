function createPromiseRandom(min, max, delay) {
    return new Promise(function(resolve, rejected) {
        setTimeout(() => {
            if (min < max) {
                let output = Math.round(Math.random() * (max - min) + min);
                resolve(output);
            } else rejected(new Error(`Число min=${min} не должно быть больше max=${max} - такое не проходит`));

        }, delay)
    });
}

let p1 = createPromiseRandom(1, 100, 2000);

p1.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
)

let p2 = createPromiseRandom(1000, 100, 3000);