import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { Screen } from 'components/screens/screen';

export class ScreenTeam extends Screen {
    constructor(block) {
        super(block, 'screen-team', function() {
            this.sceneNum = 4;

            this._addContentParallax();
        });
    }

    _addContentParallax() {
        let content = this.block.querySelector('.screen-team__content'),
            tweenContent = TweenMax.from(content, 1, { y: '75%', x: '-10%' });

        this.sceneContent = new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '60%',
                triggerHook: .6
            })
            .setTween(tweenContent)
            .addTo(this.controller);
    }

    _onEnter(e) {
        this.header.toggleNavClasses('top');
        this.header.changeNavHref('#advantages');
    }
}
