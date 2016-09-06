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
        let photo = this.block.querySelector('.screen-mission__photo'),
            tween = new TimelineMax();

        tween
            .add(TweenMax.from(photo, 1, { y: '85%' }))
            .add(TweenMax.to(photo, 1, { x: '70%' }));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '200%',
                triggerHook: 1
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _onEnter(e) {

    }

    _onProgress(e) {
        if (e.progress >= 0.05 && this._getActive() !== this.sceneNum) {
            this._changeActive(this.sceneNum);
            this.header.toggleNavClasses('right');
            this.header.changeNavHref('#mission');
        } else if (e.progress < 0.05 && this._getActive() !== this.sceneNum - 1) {
            this._changeActive(this.sceneNum - 1);
            this.header.toggleNavClasses('top');
            this.header.changeNavHref('#about');
        }
    }
}
