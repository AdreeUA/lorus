import ScrollMagic from 'scrollmagic';

import { Component, setupScrollMagicAnchors } from 'helpers-js';

import { ScreenAbout } from './screen-about/screen-about';
import { ScreenHome } from './screen-home/screen-home';
import { ScreenMission } from './screen-mission/screen-mission';
import { ScreenAdvantages } from './screen-advantages/screen-advantages';
import { ScreenTeam } from './screen-team/screen-team';
import { Hamburger } from 'components/hamburger/hamburger';

export const controller = new ScrollMagic.Controller();

export class Screens extends Component {
    constructor(block) {
        super(block, 'screens', function() {
            this.headerHamburger = new Hamburger(document.querySelector('.header__hamburger'));
            this.mainMenu = document.querySelector('.header__slide-menu');

            this.scrollEnabled = true;

            this._init();
        });
    }

    _init() {

        let that = this;

        this.screens = [
            new ScreenHome(this.block.querySelector('.screen-home')),
            new ScreenAbout(this.block.querySelector('.screen-about')),
            new ScreenMission(this.block.querySelector('.screen-mission')),
            new ScreenAdvantages(this.block.querySelector('.screen-advantages')),
            new ScreenTeam(this.block.querySelector('.screen-team'))
        ];

        setupScrollMagicAnchors(controller);

    }
}
