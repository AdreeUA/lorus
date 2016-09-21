import ScrollMagic from 'scrollmagic';

import { Component, toggleController } from 'helpers-js';

import { Line } from 'components/line/line';

export class Footer extends Component {
    constructor(block) {
        super(block, 'footer', function() {
            this.controller = new ScrollMagic.Controller();

            this._addLinesAnimation();
            toggleController(null, this.controller);
            window.addEventListener('resize', () => toggleController(null, this.controller));
        });
    }

    _addLinesAnimation() {
        let line = new Line(this.block.querySelector('.footer__line-m')),
            duration = line.block.offsetHeight - 100;

        duration = duration < 0 ? 200 : duration;

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
