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
    }
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
    }
}

export function keyInput(event){
    if(event.repeat || game.shootTimerPlayer1 < 3 || game.shootTimerPlayer2 < 3){
        console.log("repeatevent");
    return;
    }
    switch(event.key){
        case "d":
            game.players[0].shotPlayer1 = true;
        break;
        case "k":
            game.players[1].shotPlayer2 = true;
        break;
    }
}