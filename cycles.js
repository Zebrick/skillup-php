'use strict'
//Задание 1
for(var q = 1; q <= 10; q++)
{
    for(var w = 1; w <= 10; w++)
    {
document.write(q + '*' + w + '=' + q*w + '<br>');
    }
    document.write('<br>');
}

//Задание 2
var str = '';
for(var q = 1; q < 10; q++)
{
    str += q;
}
alert(str);

//Задание 3
var str = '';
for(var q = 9; q > 0; q--)
{
    str += q;
}
alert(str);

//Задание 4
var str = '-';
for(var q = 1; q < 10; q++)
{
    str += q + '-';
}
alert(str);

//Задание 5
var str = '';
for(var q = 1; q <= 20; q++)
{
    str += 'm';
    document.write(str + '<br>');
}

//Задание 6
for(var q = 1; q <= 9; q++) {
    for(var w = 1; w <= w; w++)
    {
        document.write(q);
    }
    document.write('<br>');
}

//Задание 7
var str = '';
for(var q = 0; q <= 4; q++)
{
    str += 'mm';
    document.write(str + '<br>');
}