import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach, getCoords, toggleController, addPhotoParallax } from 'helpers-js';

import { Line } from 'components/line/line';

export class ThroughAcademy extends Component {
    constructor(block) {
        super(block, 'through-academy', function() {
            this.controller = new ScrollMagic.Controller();
            this.controller_m = new ScrollMagic.Controller();
            this._addPhotoParallax = addPhotoParallax.bind(null, '.academy__block', this.controller);

            this._addLineParallax();
            this._addPhotoParallax();

            // toggleController(this.controller);
            // window.addEventListener('resize', () => toggleController(this.controller));
        });
    }

    _addLineParallax() {
        let line1 = new Line(this.block.querySelector('.through-academy__line_1')),
            line2 = new Line(this.block.querySelector('.through-academy__line_2')),
            line3 = new Line(this.block.querySelector('.through-academy__line_3')),
            line4 = new Line(this.block.querySelector('.through-academy__line_4')),
            duration,
            tween = new TimelineMax();

        const calcDuration = () => {
            let start = getCoords(line1.block).top,
                end = getCoords(line4.block).bottom;

            duration = start + end - 100;
        }

        calcDuration();
        window.addEventListener('resize', calcDuration);

        tween
            .add(line1.makeTween(.55))
            .add(line2.makeTween(.15))
            .add(line3.makeTween(.1))
            .add(line4.makeTween(.2));

        this.sceneLines = new ScrollMagic.Scene({
                duration: duration
            })
            .setTween(tween)
            .addTo(this.controller);
    }
}
