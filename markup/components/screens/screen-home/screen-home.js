import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Screen } from 'components/screens/screen';

export class ScreenHome extends Screen {
    constructor(block) {
        super(block, 'screen-home', function() {
            this.sceneNum = 0;

            let tweenNav = TweenMax.to(this.parent, 5, { x: '-50%' });

            this.scene
                .setTween(tweenNav)
                .triggerHook(0);
        });
    }

    _onEnter(e) {
        this.header.hide();
    }

    _onLeave(e) {
        this.header.show()
    }
}
