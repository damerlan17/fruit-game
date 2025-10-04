class Game {
    constructor() {
        this.name = name
    }

    start (){
        this.loop()
    }
    loop() {
        requestAnimationFrame(() => {
            this.setParams()
            this.loop()
        })
    }//анимация

    setParams() {
        let params = ['name']
        let values = [this.name]
        params.forEach((param, ind) => {
            $(`#${param}`).innerHtml = values[ind]
        })
    }
}