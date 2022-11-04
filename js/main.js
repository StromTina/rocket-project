import { game } from './game.js'
import { handleKeyDown, handleKeyUp, keyInput } from './event.js';

window.addEventListener('keypress', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
window.addEventListener('keydown', keyInput);

game.start();