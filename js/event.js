import { game } from './game.js'

export function handleKeyDown(event) {
    if (event.repeat) return;

    if (event.key === 'w') {
        game.players[0].up = true;
    } else if (event.key === 's') {
        game.players[0].down = true;
    } else if (event.key === 'o') {
        game.players[1].up = true;
    } else if (event.key === 'l') {
        game.players[1].down = true;
    } else if (event.key === 'd') {
        game.players[0].shotPlayer1 = true;
    } else if (event.key === 'k')
        game.players[1].shotPlayer2 = true;

}

export function handleKeyUp(event) {
    if (event.key === 'w') {
        game.players[0].up = false;
    } else if (event.key === 's') {
        game.players[0].down = false;
    } else if (event.key === 'o') {
        game.players[1].up = false;
    } else if (event.key === 'l') {
        game.players[1].down = false;
    } else if (event.key === 'd') {
        game.players[0].shotPlayer1 = false;
    } else if (event.key === 'k')
        game.players[1].shotPlayer2 = false;
}