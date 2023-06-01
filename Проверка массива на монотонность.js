let assert = require('assert');

function solve(arr) {
    if(arr.length < 3) {
        return true;
    }

    let order = arr[0] < arr[1];

    for(let i = 2; i < arr.length; ++i) {
        if(arr[i-1] != arr[i] && (arr[i-1]<arr[i]) ^ order) {
            return false;
        }
    }

    return true;
}

assert(solve([0, 1, 5, 9, 15]));
assert(solve([0, 1, 1, 5, 9, 9, 15]));
assert(solve([15, 8, 4, 2, 1]));
assert(!solve([0, 1, 5, 15, 4]));