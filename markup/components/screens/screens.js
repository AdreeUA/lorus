import ScrollMagic from 'scrollmagic';

import { Component, setupScrollMagicAnchors, media } from 'helpers-js';

import { ScreenAbout } from './screen-about/screen-about';
import { ScreenHome } from './screen-home/screen-home';
import { ScreenMission } from './screen-mission/screen-mission';
import { ScreenAdvantages } from './screen-advantages/screen-advantages';
import { ScreenTeam } from './screen-team/screen-team';

export const controller = new ScrollMagic.Controller();

export class Screens extends Component {
    constructor(block) {
        super(block, 'screens', function() {
            this._init();
        });
    }

    _init() {
        const toggleController = () => {
            if (matchMedia(media.tablet).matches) {
                if (!controller.enabled()) return;

                TweenMax.set('.js-tween', { clearProps: 'all' });
                controller.enabled(false);
                controller.update();

            } else if (!controller.enabled()) {

                controller.enabled(true);
                controller.update(true);
            }
        };

        this.screens = [
            new ScreenHome(this.block.querySelector('.screen-home')),
            new ScreenAbout(this.block.querySelector('.screen-about')),
            new ScreenMission(this.block.querySelector('.screen-mission')),
            new ScreenAdvantages(this.block.querySelector('.screen-advantages')),
            new ScreenTeam(this.block.querySelector('.screen-team'))
        ];

        setupScrollMagicAnchors(controller);
        toggleController();
        window.addEventListener('resize', toggleController);
    }
}

Screens.active = 0;
