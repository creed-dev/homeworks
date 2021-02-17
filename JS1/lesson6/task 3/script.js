var position = 0;
var sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function() {
    position += 1000;
    if(position > 2000) {
        position = 0;
    }
    sliderLine.style.left = -position + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    position -= 1000;
    if(position < 0) {
        position = 2000;
    }
    sliderLine.style.left = -position + 'px';
});