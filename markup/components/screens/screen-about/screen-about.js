import ScrollMagic from 'scrollmagic';

import { isInViewport } from 'helpers-js';

import { Screen } from 'components/screens/screen';
import { ClipImg } from 'components/clip-img/clip-img';

export class ScreenAbout extends Screen {
    constructor(block) {
        super(block, 'screen-about', function() {

            // this.photo = new ClipImg(this.block.querySelector('.screen-about__photo'));
        });
    }

    _onEnd_h(e) {
        if (this.getDirection() === 'right') {
            this.setActive(2);
            this.setScrollDir('down');
        }
    }

    _onEnd_v(e) {
        console.log(e);
        // if (this.getDirection() === 'up') {
        //     this.setActive(0);
        //     this.setScrollDir('right');
        // }
    }

    _onShow(e) {
        // this.photo.move(e.detail.direction);
        // this.header.toggleNavClasses('left');
        // this.header.changeNavHref('#first/home');
    }

    _onEnter(e) {
        
    }

    _onLeave(e) {

    }
}
