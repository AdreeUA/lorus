import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach, getCoords, toggleController } from 'helpers-js';

import { Line } from 'components/line/line';

export class ThroughService extends Component {
    constructor(block) {
        super(block, 'through-service', function() {
            this.controller = new ScrollMagic.Controller();

            this._addLineParallax();
            this._addPhotoParallax();

            toggleController(this.controller);
            window.addEventListener('resize', () => toggleController(this.controller));
        });
    }

    _addLineParallax() {
        let line1 = new Line(this.block.querySelector('.through-service__line_1')),
            line2 = new Line(this.block.querySelector('.through-service__line_2')),
            line3 = new Line(this.block.querySelector('.through-service__line_3')),
            duration = document.body.scrollHeight - document.documentElement.clientHeight / 2,
            tween = new TimelineMax();

        tween
            .add(line1.makeTween(.6))
            .add(line2.makeTween(.25))
            .add(line3.makeTween(.15));

        this.sceneLines = new ScrollMagic.Scene({
                duration: duration
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _addPhotoParallax() {
        let photos = this.block.querySelectorAll('.service__photo-wrapper');

        forEach(photos, (photo, ind) => {
            let tween,
                offset = 0,
                triggerHook = 1,
                duration = '200%';

            if (ind === 0) {
                triggerHook = 0;
                offset = -parseInt(window.getComputedStyle(photo.closest('.service__block')).paddingTop);
                tween = TweenMax.to(photo, 1, { y: '-30%' });

            } else if (ind === photos.length - 1) {

                let coords = getCoords(photo);

                tween = TweenMax.from(photo, 1, { y: '25%' });
                duration = document.body.scrollHeight - coords.top;

            } else {
                tween = TweenMax.fromTo(photo, 1, { y: '30%' }, { y: '-30%' });
            }

            new ScrollMagic.Scene({
                    offset: offset,
                    triggerElement: photo,
                    duration: duration,
                    triggerHook: triggerHook
                })
                .setTween(tween)
                .addTo(this.controller);
        });
    }
}
