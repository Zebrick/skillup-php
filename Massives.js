'use strict'
//Задание 1

var arr = [];
var str = 'x';
for (var i = 0; i < 10; i++){
    arr.push(str);
    str += 'x';
}
console.log(arr);

//Задание 2
var arr = [];
for (var i = 1; i < 10; i++) {
    var str = '';
    for (var j = 0; j < i; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);

//Задание 3
function arrayFill(value, length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}

console.log(arrayFill('x', 5));

//Задание 4
function func(arr) {
    var sum = 0;
    for (var i = 0 ; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 10) {
            return i + 1;
        }
    }
}

console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Задание 5
var arr = [1, 3, 5, 6, 7, 9];
var result = [];
for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}
console.log(result);

//Задание 6
var arr = [[1, 2, 3], [4, 5], [6]];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
alert(sum);

//Задание 7
var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        for (var k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
alert(sum);