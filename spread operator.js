// Аналог .join, использование метода Array.join() разрешено

let assert = require('assert');

function solve(delimiter, ...arr) {
    return arr.join(delimiter);
}

assert(solve('!', 1, 0, 5, -11) == '1!0!5!-11');