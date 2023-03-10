import { Tetris } from './tetris-back/Tetris.js'

export function tetrisBG() {
    const width = window.innerWidth;
    const boardDiv = 20 * Math.round(width / 20),
        boards = 1,
        bWidth = boardDiv / boards,
        tetrisInstances = [];

    for (let w = 0; w < boards; w++) {
        tetrisInstances.push(new Tetris(20 * Math.round((w * bWidth) / 20), 0, bWidth));
    }
};
