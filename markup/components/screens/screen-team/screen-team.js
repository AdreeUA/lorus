import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Screen } from 'components/screens/screen';
import { Line } from 'components/line/line';

export class ScreenTeam extends Screen {
    constructor(block) {
        super(block, 'screen-team', function() {
            this.sceneNum = 4;

            this._addLinesAnimation();
            this._addContentParallax();
            this._addPhotoParallax();
        });
    }

    _addLinesAnimation() {
        let line1 = new Line(this.block.querySelector('.screen-team__line_1')),
            line2 = new Line(this.block.querySelector('.screen-team__line_2')),
            line3 = new Line(this.block.querySelector('.screen-team__line_3')),
            tween = new TimelineMax();

        tween
            .add(line1.makeTween(.3))
            .add(line2.makeTween(.2))
            .add(line3.makeTween(.5));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '80%',
                triggerHook: .8
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _addContentParallax() {
        let content = this.block.querySelector('.screen-team__content'),
            shadow = this.block.querySelector('.screen-team__content-shadow'),
            tweenContent = TweenMax.staggerFrom([content, shadow], 1, { y: '350%' });

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '100%',
                triggerHook: 1
            })
            .setTween(tweenContent)
            .addTo(this.controller);
    }

    _addPhotoParallax() {
        let photo = this.block.querySelector('.screen-team__photo-wrapper'),
            photo_m = this.block.querySelector('.screen-team__mobile-photo .mobile-photo__wrapper'),
            shadow_m = this.block.querySelector('.screen-team__mobile-photo .mobile-photo__shadow'),
            tween = TweenMax.from(photo, 1, { y: '50%' });

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '100%',
                triggerHook: 1
            })
            .setTween(tween)
            .addTo(this.controller);

        new ScrollMagic.Scene({
                triggerElement: this.block,
                triggerHook: 1,
                duration: '100%',
            })
            .setTween(TweenMax.staggerFrom([photo_m, shadow_m], 1, { y: 100 }, .1))
            .addTo(this.controller_m);
    }
}
