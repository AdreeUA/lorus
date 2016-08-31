import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Component, forEach } from 'helpers-js';

export class ThroughService extends Component {
    constructor(block) {
        super(block, 'through-service', function() {
            this.controller = new ScrollMagic.Controller();

            this._addPhotoParallax();
        });
    }

    _addPhotoParallax() {
        let photos = this.block.querySelectorAll('.service__photo-wrapper');

        forEach(photos, (photo, ind) => {
            let tween = TweenMax.from(photo, 1, { y: '30%' }),
                triggerHook = 1,
                duration = '150%';

            if (ind === photos.length - 1) {
                triggerHook = 1;
            } else if (ind === 0) {
                triggerHook = 0;
                tween = TweenMax.to(photo, 1, { y: '-=30%' });
            }

            new ScrollMagic.Scene({
                    triggerElement: photo.closest('.service__block'),
                    duration: duration,
                    triggerHook: triggerHook
                })
                .setTween(tween)
                .addTo(this.controller);
        });
    }
}
