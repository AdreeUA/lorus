import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach, getCoords, toggleController } from 'helpers-js';

import { Line } from 'components/line/line';

export class ThroughAcademy extends Component {
    constructor(block) {
        super(block, 'through-academy', function() {
            this.controller = new ScrollMagic.Controller();
            this.controller_m = new ScrollMagic.Controller();

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

    _addPhotoParallax() {
        let photos = this.block.querySelectorAll('.photo-inner');

        forEach(photos, (photo, ind) => {
            let tween,
                tween_m,
                offset = 0,
                triggerHook = 1,
                duration = '200%';

            if (ind === 0) {
                triggerHook = 0;
                offset = -parseInt(window.getComputedStyle(photo.closest('.academy__block')).paddingTop);
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

            if (photo.classList.contains('service__photo-wrapper_m')) {
                if (ind === 0) {
                    offset = 0;
                }

                new ScrollMagic.Scene({
                        offset,
                        triggerElement: photo,
                        duration,
                        triggerHook
                    })
                    .setTween(tween)
                    .addTo(this.controller_m);
            }
        });
    }
}
