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

            // this.block.querySelector('.slider').addEventListener('afterChangeSlide', () => {
            //     this.sliderScene1.destroy(true);
            //     this.sliderScene2.destroy(true);
            //
            //     this._addSliderParallax();
            // });
        });
    }

    _addSliderParallax() {
        let activeSlide = this.block.querySelector('.slick-active'),
            title = activeSlide.querySelector('.info__title'),
            shadow = activeSlide.querySelector('.info__img-shadow'),
            photo = activeSlide.querySelector('.info__img-wrapper');

        this.sliderScene1 = new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '50%',
                triggerHook: 0
            })
            .setTween(TweenMax.to(title, 1, { x: '-30%' }))
            .addTo(this.controller);

        this.sliderScene2 = new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '100%',
                triggerHook: 0
            })
            .setTween(TweenMax.staggerTo([photo, shadow], 1, { x: '-60%' }, .2))
            .addTo(this.controller);

        new ScrollMagic.Scene({
                duration: 300,
            })
            .setTween(TweenMax.staggerTo([photo, shadow], 1, { y: -100 }, .2))
            .addTo(this.controller_m);
    }

    _addLinesAnimation() {
        let line = new Line(this.block.querySelector('.screen-home__line')),
            line1_m = new Line(this.block.querySelector('.screen-home__mobile-line_1')),
            line2_m = new Line(this.block.querySelector('.screen-home__mobile-line_2')),
            tween_m = new TimelineMax();

        tween_m
            .add(line1_m.makeTween(.25))
            .add(line2_m.makeTween(.75));

        new ScrollMagic.Scene({
                duration: '25%',
                triggerHook: .25
            })
            .setTween(line.makeTween())
            .addTo(this.controller);

        new ScrollMagic.Scene({
                duration: '75%'
            })
            .setTween(tween_m)
            .addTo(this.controller_m);
    }

    _onProgress(e) {
        if (e.progress >= 0.6) {
            this.header.show();
        } else {
            this.header.hide();
        }
    }
}
