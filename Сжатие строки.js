let assert = require('assert');

function rle(str) {

    if(str.length == 0) {
        return '';
    }

    let prev = str[0];
    let res = str[0];
    let count = 1;

    for(let i = 1; i < str.length; ++i) {
        let next = str[i];

        if(prev != next) {
            if(count > 1) {
                res += count + next;
            } else {
                res += next;
            }
            count = 1;
        } else {
            count++;
        }
        prev = next;
    }

    if(count > 1) {
        res += count;
    }

    return res;
}

assert(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB') == 'A4B3C2XYZD4E3F3A6B28');
assert(rle('aaabcc') == 'a3bc2');
assert(rle('abc') == 'abc');