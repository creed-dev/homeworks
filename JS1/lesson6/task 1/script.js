var images = document.querySelectorAll(".small-img");
var bigWindow = document.querySelector(".big-img");

for (var item of images) {
item.addEventListener("click", function () {
    f(this);
});
}

function f(item) {
    bigWindow.src = item.src;
}