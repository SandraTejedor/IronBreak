class Bar {
    constructor(ctx, w, h, keys) {
        this.ctx = ctx
        this.keys = keys
        this.gameWidth = w
        this.gameHeight = h
        this.barWidth = 90
        this.barHeight = 20
        this.posX = this.gameWidth / 2 - this.barWidth / 2
        this.posY = this.gameHeight - 50
        this.vel = 80
        this.setListeners()
    }
    draw() {
        //dibujar la barra
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'yellow'
        this.ctx.lineWidth = this.barHeight;


        //barra
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.barWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()
    }
    setListeners() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case 37:
                    //izquierda
                    this.posX + this.vel - this.barWidth >= this.barWidth ? this.posX -= this.vel : null
                    break
                case 39:
                    //derecha
                    this.posX + this.barWidth + this.vel <= this.gameWidth ? this.posX += this.vel : null
                    break
            }
        }
    }

}