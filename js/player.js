import { Position, Entity } from './entity.js';
import { Ball } from './ball.js';

export class Player extends Entity {
    constructor(position) {
        super(position);
        this.width = 26;
        this.height = 52;
        this.up = false;
        this.down = false;
        this.shotPlayer1 = false;
        this.shotPlayer2 = false;
    }
    
    tick(game) {
        if (this.up) {
            this.position.y -= 150 * game.deltaTime;
        } else if (this.down) {
            this.position.y += 150 * game.deltaTime;
        }

        if (this.shotPlayer1 && game.shootTimerPlayer1 > 3) {
            game.entities.push(new Ball(new Position(this.position.x + 20, this.position.y), 5, false));
            game.entities[0].shotPlayer1 = false;
            game.shootTimerPlayer1 = 0;
        }
        if (this.shotPlayer2 && game.shootTimerPlayer2 > 3) {
            game.entities.push(new Ball(new Position(this.position.x - 20, this.position.y), 5, true));
            game.entities[1].shotPlayer2 = false;
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

        for (let i = 2; i < game.entities.length; i++) {
            let ball = game.entities[i];

            if (this.isColliding(ball) && this.position.x < game.canvas.width / 2) {
                this.position = new Position(game.canvas.width * 0.25, game.canvas.height - 20);
                game.entities.splice(i, 1);
            } else if (this.isColliding(ball) && this.position.x > game.canvas.width / 2) {
                this.position = new Position(game.canvas.width * 0.75, game.canvas.height - 20);
                game.entities.splice(i, 1);
            }
        }
    }

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