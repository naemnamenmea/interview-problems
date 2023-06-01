let assert = require('assert');

function solve(str) {
    let x = str.replace(/[^\w\dа-яА-ЯЁё]/g,'').toLowerCase();
    console.log(x);
    return x == x.split('').reverse().join('');
}

assert(solve("Ш4л4ш"));
assert(solve("Eva, can I see bees in a cave?"));
assert(!solve("Яндекс"));
