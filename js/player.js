import { Position, Entity } from './entity.js';
//import { game } from './game.js';

export class Player extends Entity {
    constructor(position) {
        super(position);
        this.width = 20;
        this.height = 40;
        this.up = false;
        this.down = false;
    }

    tick(game) {
        if (this.up) {
            this.position.y -= 100 * game.deltaTime;
        } else if (this.down) {
            this.position.y += 100 * game.deltaTime;
        }

        if (this.position.y > game.canvas.height - (this.height / 2)) {
            this.position.y = game.canvas.height - (this.height / 2);
        }

        if (this.position.x < game.canvas.width / 2 && this.position.y < 0) {
            game.player1 = new Player(new Position(game.canvas.width * 0.25, game.canvas.height - 20));
            game.player1Points++
        } else if (this.position.x > game.canvas.width / 2 && this.position.y < 0) {
            game.player2 = new Player(new Position(game.canvas.width * 0.75, game.canvas.height - 20));
            game.player2Points++
        }
    }

    draw(game) {
       // game.context.fillStyle = 'white';
       // game.context.fillRect(this.position.x, this.position.y, this.width, this.height);
        game.context.save();
        game.context.translate(this.position.x, this.position.y);
        //game.context.fill();
        game.context.font = '45px serif';
        game.context.rotate(-Math.PI / 4);
        game.context.fillText('🚀', 0, 0);
        game.context.restore();
    }
}