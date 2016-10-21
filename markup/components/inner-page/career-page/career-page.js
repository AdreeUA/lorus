import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach, getCoords, toggleController, addPhotoParallax, calcScrollHeight } from 'helpers-js';

import { Line } from 'components/line/line';

export class CareerPage extends Component {
    constructor(block) {
        super(block, 'career-page', function() {
            this.controller = new ScrollMagic.Controller();
            this.controller_m = new ScrollMagic.Controller();
            this._addPhotoParallax = addPhotoParallax.bind(null, '.inner-page__block', this.controller);

            this._addLineParallax();
            this._addPhotoParallax();

            // toggleController(this.controller);
            // window.addEventListener('resize', () => toggleController(this.controller));
        });
    }

    _addLineParallax() {
        let line1 = new Line(this.block.querySelector('.career-page__line_1')),
            line2 = new Line(this.block.querySelector('.career-page__line_2')),
            line3 = new Line(this.block.querySelector('.career-page__line_3')),
            documentHeight = calcScrollHeight(),
            duration,
            tween = new TimelineMax();

        const calcDuration = () => {
            let start = getCoords(line1.block).top,
                end = getCoords(line3.block).bottom;

            duration = start + end - 200;
            duration = start + duration > documentHeight ? documentHeight - start - 200 : duration;
            duration = duration < 0 ? 0 : duration;
        }

        calcDuration();
        window.addEventListener('resize', calcDuration);

        tween
            .add(line1.makeTween(.7))
            .add(line2.makeTween(.2))
            .add(line3.makeTween(.1));

        this.sceneLines = new ScrollMagic.Scene({
                duration: duration
            })
            .setTween(tween)
            .addTo(this.controller);
    }
}
