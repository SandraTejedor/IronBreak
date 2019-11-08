class Brick {
    constructor(ctx, w, h, posX, posY, num) {
        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h
        this.colorOptions = ['red', 'blue', 'pink', 'green', 'purple', 'white', 'yellow', 'grey', 'orange']
        this.color = this.colorOptions[num - 1]
        this.brickWidth = 30
        this.brickHeight = 20
        this.posX = posX + 40
        this.posY = posY + 80
        this.num = num
    }

    draw() {
        //dibujo un ladrillo
        this.ctx.beginPath()
        this.ctx.strokeStyle = this.color
        this.ctx.lineWidth = this.brickHeight;

        //pinto el brick
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.brickWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()

    }
}