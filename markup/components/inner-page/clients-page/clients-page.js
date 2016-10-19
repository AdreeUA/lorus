import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach, getCoords, toggleController, addPhotoParallax, calcScrollHeight } from 'helpers-js';

import { Line } from 'components/line/line';

export class ClientsPage extends Component {
    constructor(block) {
        super(block, 'clients-page', function() {
            this.controller = new ScrollMagic.Controller();
            this._addPhotoParallax = addPhotoParallax.bind(null, '.inner-page__block', this.controller);

            this._addLineParallax();
            this._addPhotoParallax();

            // toggleController(this.controller);
            // window.addEventListener('resize', () => toggleController(this.controller));
        });
    }

    _addLineParallax() {
        const lines = this.block.querySelectorAll('.clients-page__line');

        forEach(lines, (lineElem, ind) => {
            const line = new Line(lineElem);

            let duration,
                triggerHook = .4;

            const calcDuration = () => {
                var documentHeight = calcScrollHeight(),
                    coords = getCoords(line.block),
                    start = coords.top + coords.top * triggerHook;

                duration = start + lineElem.offsetHeight > documentHeight ? documentHeight - start : lineElem.offsetHeight;
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
