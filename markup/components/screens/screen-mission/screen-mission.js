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

        this.sceneLines = new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '80%',
                triggerHook: .8
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _addPhotoParallax() {
        let photo = this.block.querySelector('.screen-mission__photo'),
            tweenPhoto = TweenMax.from(photo, 1, { x: '-15%', y: '15%' });

        this.scenePhoto = new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '75%',
                triggerHook: .75
            })
            .setTween(tweenPhoto)
            .addTo(this.controller);
    }

    _onEnter(e) {
        this.header.toggleNavClasses('top');
        this.header.changeNavHref('#about');
    }

    _onLeave(e) {
    }
}
