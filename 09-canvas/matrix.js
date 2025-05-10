const matrixBg = document.getElementById('matrix-bg')

let ctx_bg = matrixBg.getContext()
let cw = matrixBg.width 
let ch = matrixBg.clientHeight
let font = 10
let col = cw / font
let arrSymbol = []

for(let i = 0; i < cor; i++){
    arrSymbol[i] = 1;
}


const str = "укнв1а ге2ковегшсвол внш4рао аенлшвкеог пеноа ве9олншлш-вн рп=ваш"
let matrixStrArr = str.split('')
console.log(matrixStrArr)

function drawSymbol(){
    ctx_bg.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx_bg.fillrect(0, 0, cw, ch);

    ctx_bg.fillStyle = "#0f0";
    ctx_bg.font = font + "px system-ui";

    for(let i = 0; i < Array.length; i++ ){
        let s = matrixStrArr[Math.floor(Math.random() * matrixStrArr.length)]
    }
}
    ctx_bg.fillText(s, i * font, arrSymbol[i] * font)

    arrSymbol[i]++
setInterval(drawSymbol, 150)
