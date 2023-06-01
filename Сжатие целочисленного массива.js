let assert = require('assert');

function solve(arr = []) {

  if (arr.length == 0) {
    return '';
  }

  arr.sort((a,b)=>a-b);

  let begin = arr[0];
  let prev = arr[0];
  let res = `${arr[0]}`;
  for (let i = 1; i < arr.length; ++i) {
    let next = arr[i];

    if (prev + 1 < next) {
      if (prev - begin > 0) {
        res += `-${prev},${next}`;
      } else {
        res += `,${next}`;
      }
      begin = next;
    }
    prev = next;
  }

  if (prev - begin > 0) {
    res += `-${prev}`;
  }

  return res;
}

let res = solve([3, 2, 1, 5, 6, -1, 10]);
console.log(res);
assert(solve([]) == "");
assert(solve([4]) == "4");
assert(solve([4,5,6]) == "4-6");
assert(solve([4,6]) == "4,6");
assert(solve([3,4,6,7]) == "3-4,6-7");
assert(solve([3,3,6,7]) == "3,6-7");
assert(res == "-1,1-3,5-6,10");