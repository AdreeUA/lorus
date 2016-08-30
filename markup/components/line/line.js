import { Component } from 'helpers-js';

export class Line extends Component {
    constructor(block) {
        super(block, 'line', function() {
            this.type = this.block.classList.contains('line_css') ? 'css' : 'svg';
            this.static = this.block.querySelector('.line__icon_static');
            this.active = this.block.querySelector('.line__icon_active');

            if (this.type === 'svg') {
                this._pathPrepare(this.active);
            } else {
                this.active.style.width = 0;
            }
        })
    }

    _pathPrepare(elem) {
        console.log(elem);
        let lineLength = elem.getTotalLength();

        elem.style.strokeDasharray = lineLength;
        elem.style.strokeDashoffset =  lineLength;
    }
}
