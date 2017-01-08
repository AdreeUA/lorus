import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import { Component, addPhotoParallax, forEach } from 'helpers-js';

import { Line } from 'components/line/line';

export class PrototypePage extends Component {
    constructor(block) {
        super(block, 'prototype-page', function() {
            this.controller = new ScrollMagic.Controller();
            this._addPhotoParallax = addPhotoParallax.bind(null, '.inner-page__block', this.controller);

            this._addLineParallax();
            this._addPhotoParallax();
        });
    }

    _addLineParallax() {
        const lines = this.block.querySelectorAll('.prototype-page__line');

        forEach(lines, (lineElem, ind) => {
            const line = new Line(lineElem);

            let duration,
                triggerHook = .4;

            const calcDuration = () => {
                duration = lineElem.offsetHeight;
            };

            if (ind === 0) {
                triggerHook = 0;
            }

            calcDuration();
            window.addEventListener('resize', calcDuration);

            new ScrollMagic.Scene({
                triggerElement: lineElem,
                triggerHook,
                duration: duration
            })
                .setTween(line.makeTween(1))
                .addTo(this.controller);
        });
    }
}
