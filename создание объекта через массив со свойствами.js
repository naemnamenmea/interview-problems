let assert = require('assert');

function solve(arr) {

  let res = {};

  for(let [key, value] of arr) {
    res[key] = value;
  }

  return res;
}

let arr = [
  {name: 'width', value: 10},
  {name: 'height', value: 20},
];

let res = solve(arr);
console.log(res);
assert(JSON.stringify(res) == JSON.stringify({width: 10, height: 20}));