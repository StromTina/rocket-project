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

        
    } else if (event.key === 'd') {
        game.player1.shotPlayer1 = true;
    } else if (event.key === 'k')
        game.player2.shotPlayer2 = true;

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
    } else if (event.key === 'd') {
        game.player1.shotPlayer1 = false;
    } else if (event.key === 'k')
        game.player2.shotPlayer2 = false;
}