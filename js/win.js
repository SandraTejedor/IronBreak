class Win {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h
        this.image = new Image();
        this.image.src = 'img/medalla.jpg';
        this.posX = this.width / 5
        this.posY = this.height / 3
    }
    draw() {
        //dibujo el trofeo
        this.ctx.font = "30px sans-serif"
        this.ctx.fillText("You Wiiin!!", 150, 200);
        this.ctx.drawImage(this.image, this.posX, this.posY, 300, 300)

    }

}