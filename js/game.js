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

            if (this.arrayBall.every(elem => elem > this.height - 33)) {
                //metemos el 33 para que pare el juego antes y no haga rebotes
                this.gameover.draw();
                this.gameOver();
            }

            if (!this.array.length) {
                let audioLevel = document.createElement("audio")
                audioLevel.src = "img/levelup.mp3"
                audioLevel.volume = 0.7
                audioLevel.play()
                this.nivel += 1;
                this.generateLevels();
                this.arrayBall = [];
                this.reset();
            }
        }, 1000 / this.fps);
    },

    reset() {
        //reset del game
        this.background = new Background(this.ctx, this.width, this.height);
        this.bar = new Bar(this.ctx, this.width, this.height, this.keys);
        this.scoreboard = ScoreBoard;
        this.scoreboard.init(this.ctx);

        this.generateBalls();
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
                if (this.arrBrick[i][j] == 0) {
                    continue;
                }
                this.array.push(
                    new Brick(
                        this.ctx,
                        this.width,
                        this.height,
                        (this.width / 1.1 / long) * j,
                        (this.height / 4 / longitud) * i,
                        this.arrBrick[i][j]
                    )
                );
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
        this.arrayBall.some(ball => {
            if (
                ball.posXBall + 9 >= this.bar.posX &&
                ball.posYBall + 20 >= this.bar.posY &&
                ball.posXBall <= this.bar.posX + this.bar.barWidth &&
                ball.posYBall <= this.bar.posY + this.bar.barHeight
            ) {
                ball.posYBall -= 6; // le sumo la posicion de Y para que no me rebote en la barra
                ball.velY *= -1;
                let audioBarra = document.createElement("audio")
                audioBarra.src = "img/jump.wav"
                audioBarra.volume = 0.2
                audioBarra.play()
            }
        });

        //colision de la bola con el suelo y se borren
        //borra del array todas las bolas que sobrepasan el suelo
        this.arrayBall.some((ball, idx) => {
            if (ball.posYBall > this.height) {
                this.arrayBall.splice(idx, 1);
            }
        });
    },

    collisionBrick() {
        //colisiones con cada brick
        //izquierda, arriba, derecha, abajo
        this.arrayBall.some((ball, i) => {
            this.array.some((brick, idx) => {
                if (
                    ball.posXBall + 9 >= brick.posX &&
                    ball.posYBall + 9 >= brick.posY &&
                    ball.posXBall <= brick.posX + brick.brickWidth &&
                    ball.posYBall <= brick.posY + brick.brickHeight
                ) {

                    switch (brick.num) {
                        case 0:
                        case 1:
                            break;
                        case 2:
                            this.generateBalls();
                            break;
                        case 3:
                            this.score = this.score + 150;
                            break;
                        case 4:
                            this.bar.barWidth = 40;
                            break;
                        case 5:
                            this.bar.barWidth = 90;
                            break;
                        case 6:
                            this.bar.posY = this.height - 150;
                            break;
                        case 7:
                            this.bar.posY = this.height - 50;
                            break;
                        case 8:
                            ball.velX = 7;
                            ball.velY = 7;
                            break;
                        case 9:
                            ball.velX = 5;
                            ball.velY = 5;
                            break;
                    }

                    ball.velY *= -1;
                    this.array.splice(idx, 1);
                    this.score = this.score + 50;
                    let audio = document.createElement("audio")
                    audio.src = "img/confirm.wav"
                    audio.volume = 0.1
                    audio.play()
                }
            });
        });
    },
    drawBrick() {
        this.array.forEach(brick => brick.draw());
    },

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
            ];
        }
        if (this.nivel == 3) {
            this.arrBrick = [
                [3, 9, 7, 5, 1, 1, 2],
                [1, 3, 1, 1, 7, 1, 7],
                [7, 1, 9, 1, 1, 2, 8],
                [9, 4, 6, 3, 5, 3, 1],
                [1, 1, 9, 1, 1, 5, 2]
            ];
        }
        if (this.nivel == 4) {
            this.arrBrick = [
                [3, 9, 7, 5, 1, 1, 2],
                [1, 1, 1, 1, 7, 1, 7],
                [1, 1, 1, 1, 1, 2, 8],
                [3, 9, 7, 5, 1, 1, 2],
                [1, 1, 1, 1, 7, 1, 7]
            ];
        }
        if (this.nivel == 5) {
            this.arrBrick = [
                [9, 4, 6, 3, 5, 3, 1],
                [1, 1, 9, 1, 1, 5, 2],
                [1, 1, 1, 1, 1, 2, 8],
                [3, 9, 7, 5, 1, 1, 2],
                [1, 1, 1, 1, 7, 1, 7]
            ];
        }
        if (this.nivel == 6) {
            this.arrBrick = [
                [6, 1, 9, 3, 1, 5, 2],
                [1, 4, 1, 7, 5, 2, 8],
                [4, 1, 1, 3, 1, 2, 6],
                [1, 2, 1, 3, 5, 3, 4],
                [7, 1, 3, 1, 6, 5, 2]
            ];
        }
        if (this.nivel == 7) {
            this.arrBrick = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1],
                [1, 1, 1, 1, 1, 0, 1]
            ];
        }
    },
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    gameOver() {
        //Gameover detiene el juego.
        let audioGameOver = document.createElement("audio")
        audioGameOver.src = "img/gameover.mp3"
        audioGameOver.volume = 0.7
        audioGameOver.play()
        clearInterval(this.interval);
    },
    /*
    stop() {
        clearInterval(this.interval);
        //this.pausa = true;
    },
    restart() {
        setInterval(this.start());
        //this.pausa = false;
    }*/
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