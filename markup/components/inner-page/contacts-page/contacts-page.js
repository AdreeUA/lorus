import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach, getCoords, toggleController, addPhotoParallax } from 'helpers-js';

import { Line } from 'components/line/line';

export class ContactsPage extends Component {
    constructor(block) {
        super(block, 'contacts-page', function() {
            this.controller = new ScrollMagic.Controller();
            this.controller_m = new ScrollMagic.Controller();
            this._addPhotoParallax = addPhotoParallax.bind(null, '.contacts-page', this.controller);

            this._addLineParallax();
            this._addPhotoParallax();

            toggleController(this.controller);
            window.addEventListener('resize', () => toggleController(this.controller));
        });
    }

    _addLineParallax() {
        let line = new Line(this.block.querySelector('.contacts-page__line')),
            duration;

        const calcDuration = () => {
            duration = line.block.offsetHeight;
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
