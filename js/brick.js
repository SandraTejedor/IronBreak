class Brick {
    constructor(ctx, w, h, posX, posY) {
        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h
        this.brickWidth = 30
        this.brickHeight = 20
        this.posX = posX + 40
        this.posY = posY + 80
    }

    draw() {
        //dibujo un ladrillo
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'red'
        this.ctx.lineWidth = this.brickHeight;

        //pinto el brick
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.brickWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()

    }
}

class Brick2 extends Brick {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.brickWidth = 30
        this.brickHeight = 20
        this.posX = posX + 40
        this.posY = posY + 80
    }

    draw() {
        //dibujo un ladrillo
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'blue'
        this.ctx.lineWidth = this.brickHeight;

        //pinto el brick
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.brickWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()

    }
}
class Brick3 extends Brick {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.brickWidth = 30
        this.brickHeight = 20
        this.posX = posX + 40
        this.posY = posY + 80
    }

    draw() {
        //dibujo un ladrillo
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'pink'
        this.ctx.lineWidth = this.brickHeight;

        //pinto el brick
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.brickWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()

    }
}

class Brick4 extends Brick {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.brickWidth = 30
        this.brickHeight = 20
        this.posX = posX + 40
        this.posY = posY + 80
    }

    draw() {
        //dibujo un ladrillo
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = this.brickHeight;

        //pinto el brick
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.brickWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()

    }
}

class Brick5 extends Brick {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.brickWidth = 30
        this.brickHeight = 20
        this.posX = posX + 40
        this.posY = posY + 80
    }

    draw() {
        //dibujo un ladrillo
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'purple'
        this.ctx.lineWidth = this.brickHeight;

        //pinto el brick
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.brickWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()

    }
}

class Brick6 extends Brick {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.brickWidth = 30
        this.brickHeight = 20
        this.posX = posX + 40
        this.posY = posY + 80
    }

    draw() {
        //dibujo un ladrillo
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = this.brickHeight;

        //pinto el brick
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.brickWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()

    }
}

class Brick7 extends Brick {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.brickWidth = 30
        this.brickHeight = 20
        this.posX = posX + 40
        this.posY = posY + 80
    }

    draw() {
        //dibujo un ladrillo
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'yellow'
        this.ctx.lineWidth = this.brickHeight;

        //pinto el brick
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineTo(this.posX + this.brickWidth, this.posY)

        this.ctx.stroke()
        this.ctx.closePath()

    }
}