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

        this.sceneLines = new ScrollMagic.Scene({
                triggerElement: this.sceneTrigger,
                duration: '80%',
                triggerHook: .8
            })
            .setTween(tween)
            .addTo(this.controller);
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
