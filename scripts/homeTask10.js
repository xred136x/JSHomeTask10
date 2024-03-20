const blockBl = document.querySelector('.blue');
const blockRd = document.querySelector('.red');
const cont = document.querySelector('#container')
var slider = document.getElementById('myRange');

slider.oninput = function() {
    blockRd.style.left = (this.value/1.35) + '%';
    blockBl.style.left = -(this.value/1.35) + '%';
    cont.style.background = `rgb(${255-this.value*2.5}, ${255-this.value*2.5}, ${255-this.value*2.5})`;
}