import { BallFromLeft, BallFromRight } from './ball.js';
import { Position } from './entity.js';
import { Player } from "./player.js";
import { trueOrFalse } from './utility.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.deltaTime = 0;
        this.spawnTimer = 0;
        this.player1Points = 0;
        this.player2Points = 0;
        this.player1 = new Player(new Position(this.canvas.width * 0.25, this.canvas.height - 20));
        this.player2 = new Player(new Position(this.canvas.width * 0.75, this.canvas.height - 20));
        this.balls = [];
    }

    start() {
        tick();
    }

    drawPoints() {
        this.context.fillStyle = 'white';
        this.context.font = '48px serif';
        this.context.textAlign = 'center';
        this.context.fillText(this.player1Points, (this.canvas.width / 2) - 100, this.canvas.height - 10);

        this.context.fillStyle = 'white';
        this.context.font = '48px serif';
        this.context.textAlign = 'center';
        this.context.fillText(this.player2Points, (this.canvas.width / 2) + 100, this.canvas.height - 10);
    }
}

export const game = new Game(canvas, context);

let tickCount = 0;
let lastTime = Date.now();
let spawnTimer = 0;

function tick() {
    let currentTime = Date.now();
    game.deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    tickCount++;

    spawnBall(game);    //will spawn a ball from right side or left side, at random intervals

    game.context.fillStyle = 'black';
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    game.drawPoints();

    game.player1.tick(game);
    game.player2.tick(game);
    game.player1.draw(game);
    game.player2.draw(game);

    for (let i = 0; i < game.balls.length; i++) {
        let ball = game.balls[i];
        ball.draw(game);
        ball.tick(game);

        if (ball.position.x < 0 || ball.position.x > game.canvas.width) {   //added this to avoid lagging - somehow makes the balls blink(?), maybe fix later?
            game.balls.splice(0, 1);
        }

    }

    requestAnimationFrame(tick);
}

//tick();

function spawnBall(inGame) {
    inGame.spawnTimer += inGame.deltaTime;
    if (inGame.spawnTimer > 0.2) {
        inGame.spawnTimer = 0;
        console.log("spawnTime: " + inGame.spawnTimer);
        if (trueOrFalse()) {  //maybe make this one nicer
            if (trueOrFalse()) {
                inGame.balls.push(new BallFromLeft(new Position(0, Math.floor(Math.random() * (inGame.canvas.height - 100)))));
            }
            else {
                inGame.balls.push(new BallFromRight(new Position(inGame.canvas.width, Math.floor(Math.random() * (inGame.canvas.height - 100)))))
            }
        }
    }
}


