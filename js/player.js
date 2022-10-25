import { Entity } from './entity.js';

export class Player extends Entity {
    constructor(position) {
        super(position);
        this.width = 20;
        this.height = 35;
        this.up = false;
        this.down = false;
    }

    tick(game) {
        if (this.up) {
            this.position.y -= 100 * game.deltaTime;
        } else if (this.down) {
            this.position.y += 100 * game.deltaTime;
        }
    }

    draw(game) {
        game.context.fillStyle = 'black';
        game.context.fillRect(this.position.x + 15, this.position.y - 32, this.width, this.height);
        game.context.fill();
        game.context.font = '40px serif';
        game.context.fillText('🗼', this.position.x, this.position.y);
    }
}