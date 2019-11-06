class Background {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h

        //this.posX = 0
        //this.posY = 0

        //this.velX = 5
    }

    draw() {
        //dibujo el fondo negro
        this.ctx.beginPath()
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.width, this.height);

        //dibujo las paredes
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 20;
        this.ctx.setLineDash([0, 0])


        //pared de la izquierda
        this.ctx.moveTo(0, 0)
        this.ctx.lineTo(0, this.height)

        //pared de la derecha
        this.ctx.moveTo(this.width, 0)
        this.ctx.lineTo(this.width, this.height)

        //pared de arriba
        this.ctx.moveTo(0, 0)
        this.ctx.lineTo(this.width, 0)

        this.ctx.stroke()
        this.ctx.closePath()
    }

}