class Gameover {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h
        this.image = new Image();
        this.image.src = 'img/game_over.jpg';
        this.posX = this.width / 5
        this.posY = this.height / 3
    }
    draw() {
        //dibujo el gameover
        this.ctx.drawImage(this.image, this.posX, this.posY, 300, 300)

    }

}