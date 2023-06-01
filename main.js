let assert = require('assert');

function f(x) {
    return this.value + x;
}

let obj = {
    value: 4
}

function g(hh) {
    hh();
}

g(function(){
    console.log(this.value);
}.bind(obj));
// console.log(typeof f);
// console.log(f.call(obj, 5));


//console.log(obj);

// Function.prototype.defer = function(ms) {
//   let f = this;
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   }
// };

// // check it
// function f(a, b) {
//   console.log( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.




//console.log('hello');

// obj = {
//   name: 'Andrei',
//   pow(x,p) {    
//     console.log( `${this.name}-${x**p}`);
//   }
// }

// function defer(f) {
//   return function() {    
//     setTimeout(()=>{
//       let res = f.apply(this, arguments);
//       console.log(res);
//       return res;
//     },500);
//   }
// }

// obj.pow = defer(obj.pow);

// obj.pow(2,3);

// console.log(Object.is(NaN,NaN));

//-----------------

// let user = {
//   firstName: "Вася",
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   }
// };

// setTimeout(user.sayHi.bind(this), 1000);

// // ...в течение 1 секунды
// user = { sayHi() { console.log("Другой пользователь в 'setTimeout'!"); } };

// // Другой пользователь в 'setTimeout'!