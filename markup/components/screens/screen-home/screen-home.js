import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Screen } from 'components/screens/screen';
import { Line } from 'components/line/line';

export class ScreenHome extends Screen {
    constructor(block) {
        super(block, 'screen-home', function() {
            this.sceneNum = 0;

            let tweenNav = TweenMax.to(this.parent, 5, { x: '-50%' });

            this.scene
                .setTween(tweenNav)
                .triggerHook(0);

            this._addLinesAnimation();
            this._addSliderParallax();
        });
    }

    _addSliderParallax() {
        let activeSlide = this.block.querySelector('.slick-active'),
            title = activeSlide.querySelector('.info__title'),
            photo = activeSlide.querySelector('.info__img-wrapper');

        new ScrollMagic.Scene({
                duration: '50%',
                triggerHook: 1
            })
            .setTween(TweenMax.to(title, 1, { x: '-30%' }))
            .addTo(this.controller);

        new ScrollMagic.Scene({
                duration: '100%',
                triggerHook: .8
            })
            .setTween(TweenMax.to(photo, 1, { x: '-80%' }))
            .addTo(this.controller);
    }

    _addLinesAnimation() {
        let line = new Line(this.block.querySelector('.screen-home__line'));

        new ScrollMagic.Scene({
                duration: '25%',
                triggerHook: .25
            })
            .setTween(line.makeTween())
            .addTo(this.controller);
    }

    _onEnter(e) {
        this.header.hide();
    }

    _onLeave(e) {
        this.header.show()
    }
}
