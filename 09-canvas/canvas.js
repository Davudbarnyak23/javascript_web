const canvas1 = document.getElementById('canvas1')

const ctx1 = canvas1.getContext('2d')

ctx1.fillRect(25, 10, 120, 100)
ctx1.clearRect(25, 40, 40, 50)
ctx1.strokeRect(45, 45, 45, 45)

const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')

ctx2.beginPath();
ctx2.moveTo(30, 20);
ctx2.lineTo(40, 20);
ctx2.lineTo(50, 30);
ctx2.lineTo(30, 90);
ctx2.lineTo(70, 50);
ctx2.closePath()
ctx2.fill()

const canvas3 = document.getElementById('canvas3')
const ctx3 = canvas3.getContext('2d')

const sliderArray = ['img-1/1.jpg', 'img-1/2.jpg',
     'img-1/3.jpg', 'img-1/4.jpg', 'img-1/5.jpg']

let sliderIndex = 0;
let slideImg = new Image()
slideImg.src = sliderArray[sliderIndex]
slideImg.onload = function(){
    ctx3.drawImage(slideImg, 0, 0)
}

let leftButton = document.getElementById('left-button')
let rightButton = document.getElementById('right-button')

leftButton.onclick = function (event) {
    sliderIndex--
    
    if(sliderIndex < 0)
         sliderIndex = sliderArray.length -1

    slideImg.src = sliderArray[sliderIndex]
}

rightButton.onclick = function (event) {
    sliderIndex++

    if(sliderIndex >= sliderArray.length)
         sliderIndex = 0

    slideImg.src = sliderArray[sliderIndex]
}