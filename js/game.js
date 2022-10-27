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
        this.players = [
            new Player(new Position(this.canvas.width * 0.25, this.canvas.height - 20)),
            new Player(new Position(this.canvas.width * 0.75, this.canvas.height - 20))
        ];
        this.balls = [];
        //this.player1Shot = new ShotFromPlayer1(new Position(this.player1.position.x, this.player1.position.y));
        //this.player2Shot = new ShotFromPlayer2(new Position(this.player2.position.x, this.player2.position.y));
    }

    spawnBall() {
        this.spawnTimer += this.deltaTime;
        if (this.spawnTimer > 0.2) {
            this.spawnTimer = 0;
            //console.log("spawnTime: " + this.spawnTimer);
            if (trueOrFalse()) {  //maybe make this one nicer
                if (trueOrFalse()) {
                    this.balls.push(new BallFromLeft((new Position(0, Math.floor(Math.random() * (this.canvas.height - 100)))), 15));
                }
                else {
                    this.balls.push(new BallFromRight((new Position(this.canvas.width, Math.floor(Math.random() * (this.canvas.height - 100)))), 15));
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

        this.context.fillStyle = 'white';
        this.context.font = '48px serif';
        this.context.textAlign = 'center';
        this.context.fillText(this.player2Points, (this.canvas.width / 2) + 100, this.canvas.height - 10);
    }
}

export const game = new Game(canvas, context);

let lastTime = Date.now();

function tick() {
    let currentTime = Date.now();
    game.deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    game.spawnBall();    //will spawn a ball from right side or left side, at random intervals

    game.context.fillStyle = 'black';
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    game.drawPoints();

    for (let i = 0; i < game.players.length; i++){
        let player = game.players[i];
        player.tick(game);
        player.draw(game);
    }

    //game.player1.tick(game);
    //game.player2.tick(game);
    //game.player1Shot.tick(game);
    //game.player2Shot.tick(game);
    //game.player1.draw(game);
    //game.player2.draw(game);
    //game.player1Shot.draw(game);
    //game.player2Shot.draw(game);

    for (let i = 0; i < game.balls.length; i++) {
        let ball = game.balls[i];
        ball.draw(game);
        ball.tick(game);

        if (ball.position.x < 0 || ball.position.x > game.canvas.width) {
            game.balls.splice(i, 1);
        }
    }

    requestAnimationFrame(tick);
}