var obj = {};

var num = +prompt("Введите число от 0 до 999");

if(num >= 0 && num <= 999) {
    division(num);
}
else {
    console.log("Число меньше 0 или больше 999");
}

// ----------------------------------------------------

function division(num) {
    var n1 = Math.floor(num / 100);
    var n2 = Math.floor((num - (n1*100) ) / 10);
    var n3 = num % 10;
    obj.sot = n1;
    obj.des = n2;
    obj.ed = n3;

    console.log(obj);
};