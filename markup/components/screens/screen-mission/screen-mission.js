import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { isInViewport } from 'helpers-js';

import { Screen } from 'components/screens/screen';
import { ClipImg } from 'components/clip-img/clip-img';

export class ScreenMission extends Screen {
    constructor(block) {
        super(block, 'screen-mission', function() {
            this.sceneNum = 2;

            let tweenNav = TweenMax.to(this.parent, 5, { x: '+=50%' });

            this.scene.setTween(tweenNav);

            this._addPhotoParallax();
        });
    }

    _addPhotoParallax() {
        let photo = this.block.querySelector('.screen-mission__photo'),
            tweenPhoto = TweenMax.from(photo, 1, { x: '-15%', y: '15%' });

        this.scenePhoto = new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '100%',
                triggerHook: 1
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
