import { Entity } from './entity.js';

export class BallFromRight extends Entity {
    constructor(position) {
        super(position);

        this.radius = 10;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'white';
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
        game.context.closePath();
    }

    tick(game) {
        this.position.x = this.position.x - 50 * game.deltaTime;
    }

    isColliding(game) {

    }
}

export class BallFromLeft extends Entity {
    constructor(position) {
        super(position);

        this.radius = 10;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'white';
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
        game.context.closePath();

    }

    tick(game) {
        this.position.x = this.position.x + 50 * game.deltaTime;
    }

    isColliding(game) {

    }
}

export class ShotFromPlayer2 extends BallFromRight {
    constructor(position) {
        super(position);

        this.radius = 5;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'white';
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
        game.context.closePath();
    }

    tick(game) {
        this.position.x = this.position.x - 300 * game.deltaTime;
    }

    isColliding(game) {

    }
}

export class ShotFromPlayer1 extends BallFromLeft {
    constructor(position) {
        super(position);

        this.radius = 5;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'white';
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
        game.context.closePath();
    }

    tick(game) {
        this.position.x = this.position.x + 300 * game.deltaTime;
    }

    isColliding(game) {

    }
}