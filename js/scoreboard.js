const ScoreBoard = {
    ctx: undefined,
    init: function (ctx) {
        this.ctx = ctx
        this.ctx.font = "30px sans-serif"
    },

    update: function (score, nivel) {
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Puntuación: " + Math.floor(score) +"    Nivel: "+nivel, 25, 50);
    }
};