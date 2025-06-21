console.log('Start!')

class MainMenu {
    constructor(trigerSelector, containerSelector){
        this.triger = document.querySelector(trigerSelector)
        this.container = document.querySelector()
        this.init()
    }
    init(){
        this.triger.addEventListener('click', () => {
            console.log(e)
            this.container.classList.toggle('menuOpened')
        })
    }
}

new MainMenu('.menuTriger', 'menuContainer')