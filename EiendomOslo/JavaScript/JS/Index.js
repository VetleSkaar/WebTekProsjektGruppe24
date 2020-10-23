let i = 0;
let images = [];
let time = 3000;

images[0] = './img/Images1.jpg';
images[1] = './img/Images2.jpeg';
images[2] = './img/Images3.jpg';
images[3] = './img/Images4.jpeg';
images[4] = './img/majorstuen.jpg';
images[5] = './img/Jordal1.jpeg'


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

