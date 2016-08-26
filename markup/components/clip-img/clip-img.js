import { Component } from 'helpers-js';

export class ClipImg extends Component {
    constructor(block) {
        super(block, 'clip-img');
    }

    move(direction) {
        let directions = ['left', 'right', 'up', 'down'];

        directions.forEach(dir => {
            if (dir === direction) this.block.classList.add(`clip-img_move_${dir}`);
            else                   this.block.classList.remove(`clip-img_move_${dir}`);
        });
    }
}
