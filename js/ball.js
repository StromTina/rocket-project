import { Entity } from './entity.js';

export class BallFromRight extends Entity {
    constructor(position, radius) {
        super(position);
        this.radius = radius;
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
        if (this.radius > 10) {
            this.position.x = this.position.x - (game.deltaTime + 1);
        } else {
            this.position.x = this.position.x - (game.deltaTime + 5);
        }
    }

    /*isColliding(game) {
        for (let i = 0; i < game.players.length; i++) {
            let cdx = Math.abs(this.position.x - game.players[i].position.x);
            let cdy = Math.abs(this.position.y - game.players[i].position.y);

            if (cdx > (game.players[i].width / 2 + this.radius)) { return false; }
            if (cdy > (game.players[i].height / 2 + this.radius)) { return false; }

            if (cdx <= game.players[i].width / 2) { return true; }
            if (cdy <= game.players[i].height / 2) { return true; }

            let distSquared = ((cdx - game.players[i].width / 2) ** 2) + ((cdy - game.players[i].height / 2) ** 2);
            return distSquared <= this.radius ** 2;
        }
    }*/
}

export class BallFromLeft extends Entity {
    constructor(position, radius) {
        super(position);
        this.radius = radius;
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
        if (this.radius > 10) {
            this.position.x = this.position.x + (game.deltaTime + 1);
        } else {
            this.position.x = this.position.x + (game.deltaTime + 5);
        }

        /*if(this.isColliding(game)) {
            console.log("boom!");
        }*/
    }
    /*
       isColliding(game) {
          for (let i = 0; i < game.players.length; i++) {
               let cdx = Math.abs(this.position.x - game.players[i].position.x);
               let cdy = Math.abs(this.position.y - game.players[i].position.y);
   
               if (cdx > (game.players[i].width / 2 + this.radius)) { return false; }
               if (cdy > (game.players[i].height / 2 + this.radius)) { return false; }
   
               if (cdx <= game.players[i].width / 2) { return true; }
               if (cdy <= game.players[i].height / 2) { return true; }
   
               let distSquared = ((cdx - game.players[i].width / 2) ** 2) + ((cdy - game.players[i].height / 2) ** 2);
               return distSquared <= this.radius ** 2;
           }
       }*/
}
/*
export class ShotFromPlayer2 extends BallFromRight {
    constructor(position, ) {
        super(position);

        this.radius = radius;
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
    constructor(position, radius) {
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
}*/