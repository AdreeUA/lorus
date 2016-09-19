import ScrollMagic from 'scrollmagic';

import { Component } from 'helpers-js';

import { Line } from 'components/line/line';

export class Footer extends Component {
    constructor(block) {
        super(block, 'footer', function() {
            this.controller = new ScrollMagic.Controller();

            this._addLinesAnimation();
        });
    }

    _addLinesAnimation() {
        let line = new Line(this.block.querySelector('.footer__line-m')),
            duration = line.block.offsetHeight - 100;

        new ScrollMagic.Scene({
                offset: 100,
                triggerElement: line.block,
                duration,
                triggerHook: 1
            })
            .setTween(line.makeTween())
            .addTo(this.controller);
    }
}
