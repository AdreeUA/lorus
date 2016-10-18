import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach, getCoords, toggleController } from 'helpers-js';

import { Line } from 'components/line/line';

export class NotPage extends Component {
    constructor(block) {
        super(block, 'not-page', function() {
            this.controller = new ScrollMagic.Controller();

            this._addLineParallax();

            // toggleController(this.controller);
            // window.addEventListener('resize', () => toggleController(this.controller));
        });
    }

    _addLineParallax() {
        let line = new Line(this.block.querySelector('.not-page__line')),
            duration;

        const calcDuration = () => {
            duration = line.block.offsetHeight - 300;
            duration = duration < 0 ? 0 : duration;
        }

        calcDuration();
        window.addEventListener('resize', calcDuration);

        this.sceneLines = new ScrollMagic.Scene({
                duration: duration
            })
            .setTween(line.makeTween(1))
            .addTo(this.controller);
    }
}
