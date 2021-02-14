var arr = [
    {
        itemName: "Audi",
        itemImg: "img/audi.jpg",
        itemCount: 2000
    },
    
    {
        itemName: "BMW",
        itemImg: "img/bmw.jpg",
        itemCount: 3000
    },
    
    {
        itemName: "Toyota",
        itemImg: "img/toyota.jpg",
        itemCount: 500
    }
];

var items = document.querySelector(".items-wrapper");
for (var i = 0; i < arr.length; i++) {
    var item = document.createElement("div");
    var itemP = document.createElement("p");
    itemP.innerHTML = arr[i].itemName;
    var itemImg = document.createElement("img");
    itemImg.src = arr[i].itemImg;
    var itemPrice = document.createElement("p");
    itemPrice.innerHTML = "Цена: " + arr[i].itemCount;
    var itemBtn = document.createElement("button");
    itemBtn.innerText = "Купить";
    itemBtn.setAttribute("id", "btn_"+i); 
    itemBtn.onclick = addItem;
    item.append(itemP);
    item.append(itemImg);
    item.append(itemPrice);
    item.append(itemBtn);   
    items.append(item);
    item.className = "item";
}

var basketWrapper = document.querySelector(".basket-wrapper");
var sum = 0;
var basketWrapperCount = document.querySelector(".basket-wrapper-count");

function addItem(event) {
    var selectedItem = arr[event.target.id.split("_")[1]];
    var basketItem = document.createElement("div");
    basketItem.innerText = selectedItem.itemName+ " " + selectedItem.itemCount;
    basketWrapper.append(basketItem);
    sum += selectedItem.itemCount;
    basketWrapperCount.innerText = "Общая сумма " +sum;
}