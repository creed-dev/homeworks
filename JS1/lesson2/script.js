// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - так как это инкремент префиксной формы, с принимает новое значение
d = b++; alert(d);           // 1 - так как это инкремент постфиксной формы, d принимает старое значение
c = (2+ ++a); alert(c);      // 5 - a уже увеличивало своё значение ранее, значит изначально оно приходит со значением 2, тогда выражение имеет следующий вид c = (2+ (1+2))
d = (2+ b++); alert(d);      // 4 - b уже увеличивало своё значение ранее, значит изначально оно приходит со значением 2, но так как используется постфиксная форма инкремента, выражение вернёт старое значение, итого d =  (2+2)
alert(a);                    // 3 - в ходе выполнения кода, a увеличивало своё значение дважды, засчет инкрементов, значит a = 3
alert(b);                    // 3 - в ходе выполнения кода, b увеличивало своё значение дважды, засчет инкрементов, значит b = 3

// Задание 2
var a = 2;
var x = 1 + (a *= 2);
// x равен 5, так как прочитать выражение можно следующим образом x = ( 1 + ( a = 2 * 2 ))

// Задание 3 
var a = +prompt("Введите значение a");
var b = +prompt("Введите значение b");
if ( a > 0 && b > 0 ) {
    alert(a - b);
} 
else if ( a < 0 && b < 0) {
    alert(a * b );
}
else {
    alert( a + b );
}

// Задание 4
var a = (Math.random() * ( 15 - 0 ) + 0).toFixed(0);
switch(a){
    case '1':
        console.log(1);
    case '2':
        console.log(2);
    case '3':
        console.log(3);
    case '4':
        console.log(4);
    case '5':
        console.log(5);
    case '6':
        console.log(6);
    case '7':
        console.log(7);
    case '8':
        console.log(8);
    case '9':
        console.log(9);
    case '10':
        console.log(10);
    case '11':
        console.log(11);
    case '12':
        console.log(12);
    case '13':
        console.log(13);
    case '14':
        console.log(14);
    case '15':
        console.log(15);
}

// Задание 5
function sum(arg1, arg2) {
    return arg1 + arg2;
}

function subtraction(arg1, arg2) {
    return arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function division(arg1, arg2) {
    return arg1 / arg2;
}

// Задание 6
var arg1 = +prompt("Введите значение a");
var arg2 = +prompt("Введите значение b");
var operation = prompt("Введите значение операции (сложение, вычитание, деление, умножение)");

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            return sum(arg1, arg2);
        case "вычитание":
            return subtraction(arg1, arg2);
        case "деление":
            return division(arg1, arg2);
        case "умножение":
            return multiplication(arg1, arg2);
    }
}

alert(mathOperation(arg1, arg2, operation));

// Задание 7 
Значение будет false, так как null не является числом, и тем более нулём

// Задание 8
function power(val, pow) {
    console.log(val);
    power(Math.pow(val, pow), pow);
}

power(2,2);