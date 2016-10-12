import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach, getCoords, toggleController, addPhotoParallax } from 'helpers-js';

import { Line } from 'components/line/line';

export class AcademyPage extends Component {
    constructor(block) {
        super(block, 'academy-page', function() {
            this.controller = new ScrollMagic.Controller();
            this.controller_m = new ScrollMagic.Controller();
            this._addPhotoParallax = addPhotoParallax.bind(null, '.inner-page__block', this.controller);

            this._addLineParallax();
            this._addLineParallaxMobile();
            this._addPhotoParallax();

            // toggleController(this.controller);
            // window.addEventListener('resize', () => toggleController(this.controller));
        });
    }

    _addLineParallaxMobile() {
        let line1 = new Line(this.block.querySelector('.academy-page__m-line_1'));

        new ScrollMagic.Scene({
                triggerElement: line1.block,
                triggerHook: .9,
                duration: '100%'
            })
            .setTween(line1.makeTween())
            .addTo(this.controller);
    }

    _addLineParallax() {
        let line1 = new Line(this.block.querySelector('.academy-page__line_1')),
            line2 = new Line(this.block.querySelector('.academy-page__line_2')),
            line3 = new Line(this.block.querySelector('.academy-page__line_3')),
            line4 = new Line(this.block.querySelector('.academy-page__line_4')),
            duration,
            tween = new TimelineMax();

        const calcDuration = () => {
            let start = getCoords(line1.block).top,
                end = getCoords(line4.block).bottom;

            duration = start + end - 100;
            duration = duration < 0 ? 0 : duration;
        };

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
