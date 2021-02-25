if (!("a" in window)) {
    var a = 1;
}
alert(a);
 /* Если в объекте window нет строки "a", ввести переменную a, присвоить ей значение 1 и вывести в alert */

var b = function a(x) {
    x && a(--x);
};
alert(a); /* undefined */

function a(x) {
    return x * 2;
}
var a;
alert(a); /* undefined */

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); /* 10, так как произойдет переназначение в функции */

function a() {
    alert(this);
}
a.call(null); /* window */