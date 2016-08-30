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
        });
    }

    _addLinesAnimation() {
        let line = new Line(this.block.querySelector('.screen-home__line'));

        this.sceneLines = new ScrollMagic.Scene({
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
