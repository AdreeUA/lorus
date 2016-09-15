import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';

import { isInViewport } from 'helpers-js';
import { media } from 'helpers-js';

import { Screen } from 'components/screens/screen';
import { Line } from 'components/line/line';
import { ClipImg } from 'components/clip-img/clip-img';

const aboutPos = {
    'desk': {
        'parent': '-=33.33',
        'photoX': '125',
        'img': '5',
        'photoY': '-125'
    },
    'tablet': {
        'parent': '-=33.33',
        'photoX': '125',
        'img': '5',
        'photoY': '-125'
    }
}


if (matchMedia(media.tablet).matches) {
    var device = 'tablet';
} else {
    var device = 'desk';
}

export class ScreenAbout extends Screen {

    constructor(block) {
        super(block, 'screen-about', function() {
            this.sceneNum = 1;

            let tweenNav = TweenMax.to(this.parent, 5, { y: aboutPos[device].parent + '%' });

            this.scene.setTween(tweenNav);

            this._addPhotoParallax();
            this._addLinesAnimation();
        });
    }

    _addLinesAnimation() {
        let line1 = new Line(this.block.querySelector('.screen-about__line_1')),
            line2 = new Line(this.block.querySelector('.screen-about__line_2')),
            line3 = new Line(this.block.querySelector('.screen-about__line_3')),
            tween = new TimelineMax();

        tween
            .add(line1.makeTween(.25))
            .add(line2.makeTween(.5))
            .add(line3.makeTween(.25));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '100%',
                triggerHook: .75
            })
            .setTween(tween)
            .addTo(this.controller);
    }

    _addPhotoParallax() {
        let photo = this.block.querySelector('.screen-about__photo .clip-img__clip'),
            shadow = this.block.querySelector('.screen-about__photo .clip-img__shadow'),
            img = this.block.querySelector('.screen-about__photo .clip-img__img'),
            tween = new TimelineMax();

        tween
            .add(TweenMax.staggerFrom([photo, shadow], .5, { x: aboutPos[device].photoX + '%' }, .1))
            .add(TweenMax.from(img, .5, { x: aboutPos[device].img + '%' }))
            .add(TweenMax.staggerTo([photo, shadow], 1, { y: aboutPos[device].photoY + '%' }, .1));

        new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '200%',
                triggerHook: 1
            })
            .setTween(tween)
            .addTo(this.controller);
    }
}
