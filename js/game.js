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
        this.shootTimerPlayer1 = 0;
        this.shootTimerPlayer2 = 0;
        this.player1Points = 0;
        this.player2Points = 0;
        this.entities = [
            new Player(new Position(this.canvas.width * 0.25, this.canvas.height - 20)),
            new Player(new Position(this.canvas.width * 0.75, this.canvas.height - 20))
        ];


        /*
        this.players = [
            new Player(new Position(this.canvas.width * 0.25, this.canvas.height - 20)),
            new Player(new Position(this.canvas.width * 0.75, this.canvas.height - 20))
        ];
        this.balls = [];*/
    }

    spawnBall() {
        this.spawnTimer += this.deltaTime;
        if (this.spawnTimer > 0.3) {
            this.spawnTimer = 0;
            if (trueOrFalse()) {  //maybe make this one nicer
                if (trueOrFalse()) {
                    this.entities.push(new BallFromLeft((new Position(0, Math.floor(Math.random() * (this.canvas.height - 100)))), 15));
                }
                else {
                    this.entities.push(new BallFromRight((new Position(this.canvas.width, Math.floor(Math.random() * (this.canvas.height - 100)))), 15));
                }
            }
        }
    }

    start() {
        tick();
    }

    drawPoints() {
        this.context.fillStyle = 'white';
        this.context.font = '48px serif';
        this.context.textAlign = 'center';
        this.context.fillText(this.player1Points, (this.canvas.width / 2) - 100, this.canvas.height - 10);
        this.context.fillText(this.player2Points, (this.canvas.width / 2) + 100, this.canvas.height - 10);
    }
}

export const game = new Game(canvas, context);

let lastTime = Date.now();

function tick() {
    let currentTime = Date.now();
    game.deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    game.shootTimerPlayer1 += game.deltaTime;
    game.shootTimerPlayer2 += game.deltaTime;
    //console.log("shootTimerP1: " + game.shootTimerPlayer1);
    //console.log("shootTimerP2: " + game.shootTimerPlayer2);

    game.spawnBall();    //will spawn a ball from right side or left side, at random intervals

    game.context.fillStyle = 'black';
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    game.drawPoints();

    for (let i = 0; i < game.entities.length; i++) {
        let entity = game.entities[i];
        entity.tick(game);
        entity.draw(game);
    }



    /*

    for (let i = 0; i < game.players.length; i++) {
        let player = game.players[i];
        player.tick(game);
        player.draw(game);
    }

    for (let i = 0; i < game.balls.length; i++) {
        let ball = game.balls[i];
        ball.draw(game);
        ball.tick(game);

        if (ball.position.x < 0 || ball.position.x > game.canvas.width) {
            game.balls.splice(i, 1);
        }
    }*/
    requestAnimationFrame(tick);
}