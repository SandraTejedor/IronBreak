class Ball {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h
        this.posXBall = this.width / 2
        this.posYBall = this.height - 70
        this.velX = 5
        this.velY = 5

    }
    draw() {
        //dibujo la bola
        //this.ctx.arc(x, y, radio, anguloInicio, anguloFinal)
        this.ctx.beginPath()
        this.ctx.fillStyle = 'white'

        this.ctx.arc(this.posXBall, this.posYBall, 9, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
    }

    move() {
        this.posXBall += this.velX
        this.posYBall -= this.velY

        //rebote abajo
        //this.posYBall > this.height ? this.velY *= -1 : null
        //rebote lateral derecho
        this.posXBall > this.width - 20 ? this.velX *= -1 : null
        //rebote lateral izquierdo
        this.posXBall < 20 ? this.velX *= -1 : null
        //rebote arriba
        this.posYBall < 20 ? this.velY *= -1 : null

    }

}