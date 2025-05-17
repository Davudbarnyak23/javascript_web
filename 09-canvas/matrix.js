console.log('Start!');

const matrixBg = document.getElementById('matrix-bg')
console.log(matrixBg)

let ctx_bg = matrixBg.getContext('2d');
let cw = matrixBg.width 
let ch = matrixBg.clientHeight
let font = 10
let col = cw / font
let arrSymbolPosY = []

for(let i = 0; i < col; i++){
    arrSymbolPosY[i] = 1;
}


const str = "укjнв1а ге2кjовjег шсвол внш4рао ае7S нлшjв кеог пеT ноа ве9олншлш-вн рп=ваш"
let matrixStrArr = str.split('')
console.log(matrixStrArr)

ctx_bg.fillStyle = "rgb(0, 0, 0)";
ctx_bg.fillRect(0, 0, cw, ch);

function drawSymbol(){
    ctx_bg.fillStyle = "rgba(20, 19, 19, 0.05)";
    ctx_bg.fillRect(0, 0, cw, ch);

    ctx_bg.fillStyle = "#0f0";
    ctx_bg.font = font + "px system-ui";

    for(let i = 0; i < arrSymbolPosY.length; i++ ){
        let s = matrixStrArr[
            Math.floor(Math.random() * matrixStrArr.length)

        ]
        ctx_bg.fillText(s, i * font, arrSymbolPosY[i] * font)

        if(arrSymbolPosY[i] * font > ch && Math.random() > 0.95 )
            arrSymbolPosY[i] = 0

    arrSymbolPosY[i]++
    //console.log(arrSymbolPosY)
    }
}
setInterval(drawSymbol, 150)

