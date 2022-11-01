import { Position, Entity } from './entity.js';
import { BallFromLeft, BallFromRight } from './ball.js';

export class Player extends Entity {
    constructor(position) {
        super(position);
        this.width = 28;
        this.height = 45;
        this.up = false;
        this.down = false;
        this.shotPlayer1 = false;
        this.shotPlayer2 = false;
    }

    tick(game) {
        if (this.up) {
<<<<<<< HEAD
            this.position.y -= 100 * game.deltaTime;
        } else if (this.down) {
            this.position.y += 100 * game.deltaTime;

        } else if (this.shotPlayer1) {
            game.balls.push(new BallFromLeft((new Position(this.position.x + 20, this.position.y)), 5));
            
            //game.player1Shot = new ShotFromPlayer1(new Position(this.position.x, this.position.y));

        } else if (this.shotPlayer2) {
            game.balls.push(new BallFromRight((new Position(this.position.x - 20, this.position.y)), 5));
            //game.player2Shot = new ShotFromPlayer2(new Position(this.position.x - 20, this.position.y));
        }

        if (this.position.y > game.canvas.height - (this.height / 2)) {
            this.position.y = game.canvas.height - (this.height / 2);
        }

        if (this.position.x < game.canvas.width / 2 && this.position.y < 0) {
            this.position = new Position(game.canvas.width * 0.25, game.canvas.height - 20);
            game.player1Points++;
        } else if (this.position.x > game.canvas.width / 2 && this.position.y < 0) {
            this.position = new Position(game.canvas.width * 0.75, game.canvas.height - 20);
            game.player2Points++;
        }

=======
            this.position.y -= 150 * game.deltaTime;
        } else if (this.down) {
            this.position.y += 150 * game.deltaTime;
        } 

        if (this.shotPlayer1 && game.shootTimerPlayer1 > 3) {
            game.balls.push(new BallFromLeft((new Position(this.position.x + 20, this.position.y)), 5));
            game.players[0].shotPlayer1 = false;
            game.shootTimerPlayer1 = 0;
        }
        if (this.shotPlayer2 && game.shootTimerPlayer2 > 3) {
            game.balls.push(new BallFromRight((new Position(this.position.x - 20, this.position.y)), 5));
            game.players[1].shotPlayer2 = false;
            game.shootTimerPlayer2 = 0;
        }

        if (this.position.y > game.canvas.height - (this.height / 2)) {
            this.position.y = game.canvas.height - (this.height / 2);
        }

        if (this.position.x < game.canvas.width / 2 && this.position.y < 0) {
            this.position = new Position(game.canvas.width * 0.25, game.canvas.height - 20);
            game.player1Points++;
        } else if (this.position.x > game.canvas.width / 2 && this.position.y < 0) {
            this.position = new Position(game.canvas.width * 0.75, game.canvas.height - 20);
            game.player2Points++;
        }

>>>>>>> e9643ce486348a7302f9f856662e3af90d678451
        for (let i = 0; i < game.balls.length; i++) {
            let ball = game.balls[i];

            if (this.isColliding(ball) && this.position.x < game.canvas.width / 2) {
                this.position = new Position(game.canvas.width * 0.25, game.canvas.height - 20);
            } else if (this.isColliding(ball) && this.position.x > game.canvas.width / 2) {
                this.position = new Position(game.canvas.width * 0.75, game.canvas.height - 20);
            }
        }
    }
<<<<<<< HEAD
=======
    
>>>>>>> e9643ce486348a7302f9f856662e3af90d678451

    isColliding(entity) {
        let cdx = Math.abs(entity.position.x - this.position.x);
        let cdy = Math.abs(entity.position.y - this.position.y);

        if (cdx > (this.width / 2 + entity.radius)) { return false; }
        if (cdy > (this.height / 2 + entity.radius)) { return false; }

        if (cdx <= this.width / 2) { return true; }
        if (cdy <= this.height / 2) { return true; }

        let distSquared = ((cdx - this.width / 2) ** 2) + ((cdy - this.height / 2) ** 2);
        return distSquared <= entity.radius ** 2;
    }

    draw(game) {
        game.context.fillStyle = 'rgba(0, 0, 0, 1)';
        game.context.fillRect(this.position.x - this.width / 2 - 3, this.position.y - this.height / 2 - 4, this.width, this.height);
        game.context.save();
        game.context.translate(this.position.x, this.position.y);
        game.context.font = '45px serif';
        game.context.textBaseline = "middle";
        game.context.rotate(-Math.PI / 4);
        game.context.fillText('🚀', 0, 0);
        game.context.restore();
    }
}