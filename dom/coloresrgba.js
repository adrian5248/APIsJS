const body = document.querySelector('body');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

function setColor(){
    // rgb(0, 255, 14);
    // rgba(0, 255, 35, 0.5);
    const redVal = Math.floor(red.value / 100 * 255);
    const greenVal = Math.floor(green.value / 100 * 255);
    const blueVal = Math.floor(blue.value / 100 * 255);
    const transVal = trans.value / 100;
    const rgbaColor = `rgb(${ redVal }, ${ greenVal }, ${ blueVal }, ${ transVal })`;
    body.style.background = rgbaColor;
}

setColor();
red.addEventListener('input',setColor);
green.addEventListener('input',setColor);
blue.addEventListener('input',setColor);
trans.addEventListener('input',setColor);
 
