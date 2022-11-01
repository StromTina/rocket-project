import { Entity } from './entity.js';

export class Ball extends Entity {
    constructor(position, radius, leftIstrue) {
        super(position);
        this.radius = radius;
        this.leftIstrue = leftIstrue;
    }

    setRadius(inRadius) {
        this.radius = inRadius;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'white';
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
        game.context.closePath();
    }

    tick(game) {
        if(this.leftIstrue){
            if (this.radius > 10) {
                this.position.x = this.position.x - (game.deltaTime + 1);
            } else {
                this.position.x = this.position.x - (game.deltaTime + 5);
            }
        }
        else{
            if (this.radius > 10) {
                this.position.x = this.position.x + (game.deltaTime + 1);
            } else {
                this.position.x = this.position.x + (game.deltaTime + 5);
            }
        }
    }
}

