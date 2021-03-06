import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Screen } from 'components/screens/screen';
import { Line } from 'components/line/line';

export class ScreenAdvantages extends Screen {
    constructor(block) {
        super(block, 'screen-advantages', function() {
            this.sceneNum = 3;

            let tweenNav = TweenMax.to(this.parent, 5, { y: '-=33.33%' });

            this.scene.setTween(tweenNav);

            this._addLinesAnimation();
            this._addPlaneParallax();
        });
    }

    _addLinesAnimation() {
        let line1 = new Line(this.block.querySelector('.screen-advantages__line_1')),
            line2 = new Line(this.block.querySelector('.screen-advantages__line_2')),
            tween = new TimelineMax();

        tween
            .add(line1.makeTween(.5))
            .add(line2.makeTween(.5));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '100%',
                triggerHook: 1
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _addPlaneParallax() {
        let plane = this.block.querySelector('.screen-advantages__plane'),
            tweenPlane = TweenMax.from(plane, 1, { x: '-500%', y: '300%' });

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '75%',
                triggerHook: 1
            })
            .setTween(tweenPlane)
            .addTo(this.controller);
    }
}
