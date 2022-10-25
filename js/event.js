import { game } from './game.js'

export function handleKeyDown(event) {
    if (event.repeat) return;

    if (event.key === 'w') {
        game.player1.up = true;
    } else if (event.key === 's') {
        game.player1.down = true;
    } else if (event.key === 'o') {
        game.player2.up = true;
    } else if (event.key === 'l') {
        game.player2.down = true;
    }
}

export function handleKeyUp(event) {
    if (event.key === 'w') {
        game.player1.up = false;
    } else if (event.key === 's') {
        game.player1.down = false;
    } else if (event.key === 'o') {
        game.player2.up = false;
    } else if (event.key === 'l') {
        game.player2.down = false;
    }
}