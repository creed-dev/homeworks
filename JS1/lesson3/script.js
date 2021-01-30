// Задание 1

function isNotSimple(num) {
    for(i = 2;i < num;i++) {
        if(num % i === 0) {
            return true
        }
    }
    return false
}

num = 2;

while (num <= 100) {
    if(!isNotSimple(num)) {
        console.log(num)
    }
    num++
}


// Задание 2, 3
var products = [
    {
        title: "Товар 1",
        price: 100,
        count: 1
    },
    {
        title: "Товар 2",
        price: 200,
        count: 2
    },
    {
        title: "Товар 3",
        price: 300,
        count: 3
    },
]

function countBasketPrice(products) {
    var s = 0;
  
    for (var item of products) {
      s += item.price * item.count;
      console.log(item.price * item.count);
    }
  
    console.log("Сумма ваших товаров равняется " +s);
}
countBasketPrice(products);

// Задание 4
for(i = 0; i <= 9;console.log(i++)) {

};

// Задание 5 

for(i = 0; i < 20; i++) {
    var x = "";
    for(a = 0; a <= i; a++) {
        x += "x";
    }
    console.log(x);
}