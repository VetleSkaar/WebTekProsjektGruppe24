let i = 0;
let images = [];
let time = 3000;

images[0] = './img/Gruner1.jpeg';
images[1] = './img/Jordal1.jpeg';
images[2] = './img/Odin.jpeg';
images[3] = './img/slemdal2.jpeg';
images[4] = './img/homansbyen.jpg';
images[5] = './img/Sjølyst.jpg'
images[6] = './img/majorstuen.jpg'
images[7] = './img/Slemdal.jpeg'
images[8] = './img/Bygdøy.jpg'
images[9] = './img/Gruner3.jpeg'
images[10] = './img/Bygdøy2.jpg'

function changeImg(){
    document.slideshow.src = images[i];
    if (i < images.length - 1) { 
        i++;    
    } else {
        i = 0;
    }
    setTimeout ('changeImg()', time);

}

window.onload = changeImg;


