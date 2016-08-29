import ScrollMagic from 'scrollmagic';

import { Component, indexOf, smothScroll } from 'helpers-js';

import { ScreenAbout } from './screen-about/screen-about';
import { ScreenHome } from './screen-home/screen-home';
import { ScreenMission } from './screen-mission/screen-mission';
import { ScreenAdvantages } from './screen-advantages/screen-advantages';
import { ScreenTeam } from './screen-team/screen-team';
import { Hamburger } from 'components/hamburger/hamburger';

export const controller_v = new ScrollMagic.Controller();
export const controller_h = new ScrollMagic.Controller({ vertical: false });

export class Screens extends Component {
    constructor(block) {
        super(block, 'screens', function() {
            this._onWheel = this._onWheel.bind(this);
            this._onMenuOpen = this._onMenuOpen.bind(this);
            this._onMenuClose = this._onMenuClose.bind(this);
            this.headerHamburger = new Hamburger(document.querySelector('.header__hamburger'));
            this.mainMenu = document.querySelector('.header__slide-menu');

            this.scrollEnabled = true;

            this._init();
        });
    }

    _init() {

        let that = this;

        this.screens = [
            new ScreenAbout(this.block.querySelector('.screen-about')),
            new ScreenHome(this.block.querySelector('.screen-home')),
            new ScreenMission(this.block.querySelector('.screen-mission')),
            new ScreenAdvantages(this.block.querySelector('.screen-advantages')),
            new ScreenTeam(this.block.querySelector('.screen-team'))
        ];

        this.dirMap = {
            horizontal: {
                '-1': 'left',
                '1': 'right'
            },
            vertical: {
                '-1': 'up',
                '1': 'down'
            }
        };

        this.rows = this.block.querySelectorAll('.screens__row');

        this.block.addEventListener('wheel', this._onWheel);
        this.mainMenu.addEventListener('open', this._onMenuOpen);
        this.mainMenu.addEventListener('close', this._onMenuClose);
    }

    disableScroll() {
        this.scrollEnabled = false;
    }

    enableScroll() {
        this.scrollEnabled = true;
    }

    _onMenuOpen(e) {
        this.disableScroll();
    }

    _onMenuClose(e) {
        this.enableScroll();
    }

    _onWheel(e) {
        if (!this.scrollEnabled) return;

        this.scrollEnabled = false;

        setTimeout(() => this.scrollEnabled = true, 50);

        this._checkDirection(e.deltaY);

        smothScroll({
            direction: this.getDirectionName(Screens.scrollDir),
            distance: this.calcMaxScroll(e.deltaY)
        })
    }

    _checkDirection(deltaY) {
        if (deltaY > 0) {
            Screens.direction = Screens.scrollDir;
        } else {
            Screens.direction = -Screens.scrollDir;
        }
    }

    getDirectionName(dir) {
        return this.dirMap[Screens.orientation][dir];
    }

    calcMaxScroll(dist) {
        let coords = this.screens[Screens.active].block.getBoundingClientRect(),
            dir = this.getDirectionName(Screens.direction);

        if (dir === 'down') {
            return Math.min(dist, coords.top);
        } else if (dir === 'top') {
            return Math.max(dist, coords.top);
        } else {
            return dist;
        }
    }
}

Screens.orientation = 'horizontal';
Screens.direction = 1;
Screens.scrollDir = 1;
Screens.active = 0;
