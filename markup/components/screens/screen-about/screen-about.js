import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { isInViewport } from 'helpers-js';

import { Screen } from 'components/screens/screen';
import { Line } from 'components/line/line';
import { ClipImg } from 'components/clip-img/clip-img';

export class ScreenAbout extends Screen {
    constructor(block) {
        super(block, 'screen-about', function() {
            this.sceneNum = 1;

            let tweenNav = TweenMax.to(this.parent, 5, { y: '-=33.33%' });

            this.scene.setTween(tweenNav);

            this._addPhotoParallax();
            this._addLinesAnimation();
        });
    }

    _addLinesAnimation() {
        let line1 = new Line(this.block.querySelector('.screen-about__line_1')),
            line2 = new Line(this.block.querySelector('.screen-about__line_2')),
            line3 = new Line(this.block.querySelector('.screen-about__line_3')),
            tween = new TimelineMax();

        tween
            .add(line1.makeTween(.25))
            .add(line2.makeTween(.5))
            .add(line3.makeTween(.25));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '100%',
                triggerHook: .75
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _addPhotoParallax() {
        let photo = this.block.querySelector('.screen-about__photo'),
            tween = new TimelineMax();

        tween
            .add(TweenMax.from(photo, 1, { x: '125%' }))
            .add(TweenMax.to(photo, 1, { y: '-125%' }));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '200%',
                triggerHook: 1
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _onEnter(e) {
        this.header.toggleNavClasses('top');
        this.header.changeNavHref('#about');
    }

    _onLeave(e) {
    }
}
