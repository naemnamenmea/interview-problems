var str = 'pa$lL1a*) d';

var i = 0, j = str.length - 1;

var res = true;

while (i < j) {
    var l = str[i].toLowerCase();
    var r = str[j].toLowerCase();

    if (str[i].toLowerCase() == str[i].toUpperCase()) {
        ++i;
        continue;
    }

    if (str[j].toLowerCase() == str[j].toUpperCase()) {
        --j;
        continue;
    }

    if (l != r) {
        res = false;
        break;
    } else {
        ++i;
        --j;
    }
}

console.log(res);