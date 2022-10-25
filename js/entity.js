export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Entity {
    constructor(position) {
        this.position = position;
    }

    tick(game) {}

    draw(game) {}
}