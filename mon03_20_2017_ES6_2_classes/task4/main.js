'use strict';

let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names:[name, name2, name3, name4], ages:[age, age2, age3, age4]} = data;
console.log(name2); // Tom
console.log(age2); // 24
console.log(name4); // Bob
console.log(age4); // 26
