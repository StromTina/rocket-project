import { BallFromLeft, BallFromRight } from './ball.js';
import { Position } from './entity.js';
import { Player } from "./player.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.deltaTime = 0;
        this.player1 = new Player(new Position(this.canvas.width * 0.25, this.canvas.height - 20));
        this.player2 = new Player(new Position(this.canvas.width * 0.75, this.canvas.height - 20));
        this.balls = [
            new BallFromRight(new Position(this.canvas.width, this.canvas.height / 2)),
            new BallFromLeft(new Position(0, this.canvas.height / 2))
        ]
    }

    start() {
        tick();
    }
}

export const game = new Game(canvas, context);

let tickCount = 0;
let lastTime = Date.now();

function tick() {
    let currentTime = Date.now();
    game.deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    tickCount++;

    game.context.fillStyle = 'black';
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    /*for (let i = 0; i < game.balls.length; i++) {
        console.log(game.balls[i].draw(game));
        game.balls[i].draw(game);
        game.balls[i].tick(game);
    }*/
    console.log(game.balls[0], game.balls[1]);

    game.player1.tick(game);
    game.player2.tick(game);
    game.player1.draw(game);
    game.player2.draw(game);



    requestAnimationFrame(tick);
}

tick();
