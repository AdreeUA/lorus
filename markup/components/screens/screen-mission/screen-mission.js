import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { isInViewport } from 'helpers-js';

import { Screen } from 'components/screens/screen';
import { Line } from 'components/line/line';

export class ScreenMission extends Screen {
    constructor(block) {
        super(block, 'screen-mission', function() {
            this.sceneNum = 2;

            let tweenNav = TweenMax.to(this.parent, 5, { x: '+=50%' });

            this.scene.setTween(tweenNav);

            this._addLinesAnimation();
            this._addPhotoParallax();
        });
    }

    _addLinesAnimation() {
        let line1 = new Line(this.block.querySelector('.screen-mission__line_1')),
            line2 = new Line(this.block.querySelector('.screen-mission__line_2')),
            tween = new TimelineMax();

        tween
            .add(line1.makeTween(.7))
            .add(line2.makeTween(.3));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '80%',
                triggerHook: .8
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _addPhotoParallax() {
        let photo = this.block.querySelector('.screen-mission__photo .clip-img__clip'),
            photo_m = this.block.querySelector('.screen-mission__mobile-photo .mobile-photo__wrapper'),
            shadow_m = this.block.querySelector('.screen-mission__mobile-photo .mobile-photo__shadow'),
            img = this.block.querySelector('.screen-mission__photo .clip-img__img'),
            shadow = this.block.querySelector('.screen-mission__photo .clip-img__shadow'),
            tween = new TimelineMax();

        tween
            .add(TweenMax.staggerFrom([photo, shadow], .5, { y: '85%' }, .1))
            .add(TweenMax.from(img, .5, {y: '10%'}))
            .add(TweenMax.staggerTo([photo, shadow], 1, { x: '70%' }, .1));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '200%',
                triggerHook: 1
            })
            .setTween(tween)
            .addTo(this.controller);

        new ScrollMagic.Scene({
                triggerElement: this.block,
                triggerHook: 1,
                duration: '150%',
            })
            .setTween(new TimelineMax()
                .staggerFrom([photo_m, shadow_m], .6, { y: 100 }, .1)
                .staggerTo([photo_m, shadow_m], .4, { y: -75 }, .1))
            .addTo(this.controller_m);
    }
}
