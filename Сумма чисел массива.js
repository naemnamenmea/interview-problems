let assert = require('assert');

function solve(arr) {

    let sum = 0;

    for (let x of arr) {
        /*
            boolean
            string
            null
            undefined
            number
            symbol
            object
        */
        if (typeof x == 'object') {
            sum += solve(x);
        } else {
            sum += parseInt(x, 10);
        }
    }

    return sum;
}

assert(solve([1, [1, 2], 2]) == 6);
assert(solve([1, 2, '3x']) == 6);
//assert(solve([1, 2, 'x3']) == 3);