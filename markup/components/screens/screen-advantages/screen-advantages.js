import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Screen } from 'components/screens/screen';

export class ScreenAdvantages extends Screen {
    constructor(block) {
        super(block, 'screen-advantages', function() {
            this.sceneNum = 3;

            let tweenNav = TweenMax.to(this.parent, 5, { y: '-=33.33%' });

            this.scene.setTween(tweenNav);

            this._addPlaneParallax();
        });
    }

    _addPlaneParallax() {
        let plane = this.block.querySelector('.screen-advantages__plane'),
            tweenPlane = TweenMax.from(plane, 1, { right: '100%', top: '80%' });

        this.scenePlane = new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '100%',
                triggerHook: 1
            })
            .setTween(tweenPlane)
            .addTo(this.controller);
    }

    _onEnter(e) {
        this.header.toggleNavClasses('right');
        this.header.changeNavHref('#mission');
    }
}
