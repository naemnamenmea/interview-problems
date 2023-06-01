var data = [
    'кот',
    'Ток',
    'морг',
    'Гром',
    'пирог',
    'порог',
    'дорога',
    'гороДа'
];

function getKey(word) {
    return word.toLowerCase().split('').sort().join('');
}

var ans = [];
data.forEach(word => {
    var key = getKey(word);
    if (!ans[key]) {
        ans[key] = [];
    }
    ans[key].push(word);
});
console.log(ans);