const Game = {
    title: "Breakout",
    author: "Sandra Tejedor",
    license: undefined,
    version: "1.0",
    canvas: undefined,
    ctx: undefined,
    width: (window.innerWidth / 3) * 0.98,
    height: window.innerHeight * 0.98,
    fps: 60,
    //obstacles: [],
    framesCounter: 0,
    score: 0,
    nivel: 1,
    keys: {
        left: 37,
        right: 39
    },
    arrBrick: [
        [3, 7, 3, 1, 7, 1, 0],
        [7, 6, 2, 1, 0, 6, 7],
        [1, 1, 0, 1, 1, 0, 1],
        [0, 1, 7, 0, 6, 1, 3],
        [7, 1, 0, 1, 0, 2, 7]
    ],
    array: [],
    arrayBall: [],
    pausa: true,

    init() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        //this.width = window.innerWidth / 3 * 0.98;
        //this.height = window.innerHeight * 0.98;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.start();
    },

    start() {
        this.reset(); // Reiniciamos configuración del juego
        this.interval = setInterval(() => {
            this.drawAll();
            this.moveAll();
            this.colision();
            this.collisionBrick();
            //Intervalo de juego.
            //this.framesCounter++; //Contador de frames

            // controlamos que frameCounter no sea superior a 1000
            //if (this.framesCounter > 1000) this.framesCounter = 0;

            // controlamos la velocidad de generación de obstáculos
            //if (this.framesCounter % 100 == 0) this.score++; //Aumentamos la puntuación de la partida cada 100 frames.

            //
            if (this.arrayBall.every(elem => elem > this.height - 33)) {
                //metemos el 33 para que pare el juego antes y no haga rebotes 
                this.gameover.draw()
                this.gameOver();
            }

            if (!this.array.length) {
                //this.win.draw()
                //this.gameOver();
                this.nivel += 1
                this.generateLevels()
                this.arrayBall = []
                this.reset()
                //let a = Math.floor(Math.random() * (8 - 1)) + 1;
                /*this.arrBrick = [
                    [3, 1, 1, 1, 1, 1, 2],
                    [1, 1, 1, 1, 7, 1, 7],
                    [1, 1, 1, 3, 1, 2, 6],
                    [1, 1, 1, 3, 5, 3, 1],
                    [1, 1, 3, 1, 6, 5, 2]
                ]*/
            }

        }, 1000 / this.fps);
    },

    reset() {
        //reset del game
        this.background = new Background(this.ctx, this.width, this.height);
        this.bar = new Bar(this.ctx, this.width, this.height, this.keys);
        this.scoreboard = ScoreBoard;
        this.scoreboard.init(this.ctx);
        //this.score = 0;
        //this.ball = new Ball(this.ctx, this.width, this.height);
        this.generateBalls()
        this.gameover = new Gameover(this.ctx, this.width, this.height);
        this.win = new Win(this.ctx, this.width, this.height);

        //generar los ladrillos al principio del juego
        this.generateBricks();
    },
    generateBalls() {
        this.arrayBall.push(new Ball(this.ctx, this.width, this.height));

    },
    generateBricks() {
        //genera los ladrillos y los mete en un array para pintarlo luego
        let longitud = this.arrBrick.length;
        for (let i = 0; i < longitud; i++) {
            let long = this.arrBrick[i].length;
            for (let j = 0; j < long; j++) {
                if (this.arrBrick[i][j] == 1) {
                    this.array.push(
                        new Brick(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );
                } else if (this.arrBrick[i][j] == 2) {
                    this.array.push(
                        new Brick2(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );
                    //this.score = this.score + 200
                } else if (this.arrBrick[i][j] == 3) {
                    this.array.push(
                        new Brick3(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );

                } else if (this.arrBrick[i][j] == 4) {
                    this.array.push(
                        new Brick4(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );
                } else if (this.arrBrick[i][j] == 5) {
                    this.array.push(
                        new Brick5(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );
                } else if (this.arrBrick[i][j] == 6) {
                    this.array.push(
                        new Brick6(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );
                } else if (this.arrBrick[i][j] == 7) {
                    this.array.push(
                        new Brick7(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );
                } else if (this.arrBrick[i][j] == 8) {
                    this.array.push(
                        new Brick8(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );
                } else if (this.arrBrick[i][j] == 9) {
                    this.array.push(
                        new Brick9(
                            this.ctx,
                            this.width,
                            this.height,
                            (this.width / 1.1 / long) * j,
                            (this.height / 4 / longitud) * i
                        )
                    );
                }

            }
        }
    },

    drawAll() {
        this.background.draw();
        this.bar.draw();
        for (let i = 0; i < this.arrayBall.length; i++) {
            this.arrayBall[i].draw();
        }
        //this.ball.draw()
        this.drawBrick();

        this.drawScore();
    },

    moveAll() {
        for (let i = 0; i < this.arrayBall.length; i++) {
            this.arrayBall[i].move();
        }
        //this.ball.move();
    },

    colision() {
        //colision en la barra
        // izquierda, arriba, derecha, abajo
        this.arrayBall.some((ball) => {
            if (ball.posXBall + 9 >= this.bar.posX &&
                ball.posYBall + 20 >= this.bar.posY &&
                ball.posXBall <= this.bar.posX + this.bar.barWidth &&
                ball.posYBall <= this.bar.posY + this.bar.barHeight) {
                ball.posYBall -= 6 // le sumo la posicion de Y para que no me rebote en la barra
                ball.velY *= -1
            }
        })

        //colision de la bola con el suelo y se borren
        //borra del array todas las bolas que sobrepasan el suelo
        this.arrayBall.some((ball, idx) => {
            if (ball.posYBall > this.height) {
                this.arrayBall.splice(idx, 1);
            }

        })
    },

    collisionBrick() {
        //colisiones con cada brick
        //izquierda, arriba, derecha, abajo
        this.arrayBall.some((ball) => {
            this.array.some((brick, idx) => {
                if (
                    ball.posXBall + 9 >= brick.posX &&
                    ball.posYBall + 9 >= brick.posY &&
                    ball.posXBall <= brick.posX + brick.brickWidth &&
                    ball.posYBall <= brick.posY + brick.brickHeight
                ) {
                    if (brick instanceof Brick3) { // los bricks3 (rosas) suman ademas 150 puntos.
                        this.score = this.score + 150
                    }
                    if (brick instanceof Brick2) { //los bricks2 (azules) generan otra bola
                        this.generateBalls()
                    }
                    if (brick instanceof Brick4) { //los bricks4 (verdes) hacen la barra mas pequeña
                        this.bar.barWidth = 40
                    }
                    if (brick instanceof Brick5) { //los bricks5 (morados) devuelven la barra a su tamaño
                        this.bar.barWidth = 90
                    }
                    if (brick instanceof Brick6) { //los bricks6 (blancos) suben a la barra la posicion Y
                        this.bar.posY = this.height - 150
                    }
                    if (brick instanceof Brick7) { //los bricks7 (amarillos) devuelven la barra a su posicion Y
                        this.bar.posY = this.height - 50
                    }
                    if (brick instanceof Brick8) { //los bricks7 (grises) aumentan la velocidad de la pelota
                        ball.velX = 7
                        ball.velY = 7
                    }
                    if (brick instanceof Brick9) { //los bricks7 (naranjas) devuelven la velocidad a la pelota
                        ball.velX = 5
                        ball.velY = 5
                    }
                    ball.velY *= -1;
                    this.array.splice(idx, 1);
                    this.score = this.score + 50
                }
                //console.log(brick, idx)
            });

        })
    },

    drawBrick() {
        this.array.forEach(brick => brick.draw());
    },
    /*
    clearBricks() {
        //funcion para limpiar obs
        this.array.forEach((obs, idx) => {
            if (obs.posX <= 0) {
                this.obstacles.splice(idx, 1);
            }
        });
    },
*/
    drawScore() {
        //con esta funcion pintamos el marcador
        this.scoreboard.update(this.score, this.nivel);
    },
    generateLevels() {
        if (this.nivel == 2) {
            this.arrBrick = [
                [3, 9, 1, 5, 0, 1, 2],
                [0, 1, 0, 1, 2, 1, 7],
                [1, 0, 1, 1, 1, 2, 8],
                [9, 4, 1, 3, 5, 3, 1],
                [1, 1, 9, 0, 1, 5, 2]
            ]
        }
        if (this.nivel == 3) {
            this.arrBrick = [
                [3, 9, 7, 5, 1, 1, 2],
                [1, 3, 1, 1, 7, 1, 7],
                [7, 1, 9, 1, 1, 2, 8],
                [9, 4, 6, 3, 5, 3, 1],
                [1, 1, 9, 1, 1, 5, 2]
            ]
        }
        if (this.nivel == 4) {
            this.arrBrick = [
                [3, 9, 7, 5, 1, 1, 2],
                [1, 1, 1, 1, 7, 1, 7],
                [1, 1, 1, 1, 1, 2, 8],
                [3, 9, 7, 5, 1, 1, 2],
                [1, 1, 1, 1, 7, 1, 7],
            ]
        }
        if (this.nivel == 5) {
            this.arrBrick = [
                [9, 4, 6, 3, 5, 3, 1],
                [1, 1, 9, 1, 1, 5, 2],
                [1, 1, 1, 1, 1, 2, 8],
                [3, 9, 7, 5, 1, 1, 2],
                [1, 1, 1, 1, 7, 1, 7],
            ]
        }
        if (this.nivel == 6) {
            this.arrBrick = [
                [6, 1, 9, 3, 1, 5, 2],
                [1, 4, 1, 7, 5, 2, 8],
                [4, 1, 1, 3, 1, 2, 6],
                [1, 2, 1, 3, 5, 3, 4],
                [7, 1, 3, 1, 6, 5, 2]
            ]
        }
        if (this.nivel == 7) {
            this.arrBrick = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1],
                [1, 1, 1, 1, 1, 0, 1]
            ]
        }
    },
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },



    gameOver() {
        //Gameover detiene el juego.
        clearInterval(this.interval);
    },
    stop() {
        clearInterval(this.interval);
        //this.pausa = true;
    },
    restart() {
        setInterval(this.start());
        //this.pausa = false;
    }
};

/*stop : function() {
        if (!paused){
          this.interval =   clearInterval(this.interval);
          paused = true;
        }else{
          this.interval = setInterval(updateGameArea, 200000);
          paused = false;
        }

    },*/