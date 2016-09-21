import ScrollMagic from 'scrollmagic';

import { Component, setupScrollMagicAnchors, toggleController, forEach, media } from 'helpers-js';

import { ScreenAbout } from './screen-about/screen-about';
import { ScreenHome } from './screen-home/screen-home';
import { ScreenMission } from './screen-mission/screen-mission';
import { ScreenAdvantages } from './screen-advantages/screen-advantages';
import { ScreenTeam } from './screen-team/screen-team';

export const controller = new ScrollMagic.Controller();
export const controller_m = new ScrollMagic.Controller();

export class Screens extends Component {
    constructor(block) {
        super(block, 'screens', function() {
            this._init();
        });
    }

    _init() {
        this.screens = [
            new ScreenHome(this.block.querySelector('.screen-home')),
            new ScreenAbout(this.block.querySelector('.screen-about')),
            new ScreenMission(this.block.querySelector('.screen-mission')),
            new ScreenAdvantages(this.block.querySelector('.screen-advantages')),
            new ScreenTeam(this.block.querySelector('.screen-team'))
        ];

        toggleController(controller, controller_m);
        this._calcScreensHeight();

        window.addEventListener('resize', () => {
            this._calcScreensHeight();
            toggleController(controller, controller_m);
        });

        setupScrollMagicAnchors(controller);
    }

    _calcScreensHeight() {
        if (matchMedia(media.tablet).matches) {
            let screens = this.block.querySelectorAll('.screens__item'),
                scenes = this.block.querySelectorAll('.screens__scene');

            forEach(screens, (screen, ind) => {
                scenes[ind].style.height = `${screen.offsetHeight}px`;
            });
        } else {
            forEach(this.block.querySelectorAll('.screens__scene'), scene => {
                scene.style.height = '';
            });
        }
    }
}

Screens.active = 0;
