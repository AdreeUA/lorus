import ScrollMagic from 'scrollmagic';

import { Component, indexOf, smothScroll, isInViewport, getCoords } from 'helpers-js';

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

        this.block.addEventListener('wheel', this._onWheel.bind(this));
        document.addEventListener('scroll', this._onScroll.bind(this));
        this.mainMenu.addEventListener('open', this._onMenuOpen.bind(this));
        this.mainMenu.addEventListener('close', this._onMenuClose.bind(this));
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

        let edges = this.calcMaxScroll();

        smothScroll({
            direction: this.getDirectionName(Screens.scrollDir),
            distance: e.deltaY,
            maxX: edges[0],
            maxY: edges[1]
        })
    }

    _onScroll(e) {
        let dir = this.getDirectionName(Screens.direction);

        let changeScrollDirection = () => {
            if (Screens.active === 0 || Screens.active === this.screens.length - 1) return;

            let coords = this.screens[Screens.active].block.getBoundingClientRect();

            if (dir === 'right') {
                if (pageXOffset >= this.block.offsetWidth / 2) {
                    Screens.orientation = 'vertical';
                    if (Screens.scrollDir === -1) Screens.scrollDir = 1;
                    return;
                }
            } else if (dir === 'left') {
                if (pageXOffset <= 0) {
                    if (Screens.scrollDir === -1) {
                        Screens.orientation = 'vertical';
                        Screens.scrollDir = 1;
                    }
                    return;
                }
            } else if (dir === 'down') {
                if (coords.top <= 0) {
                    Screens.orientation = 'horizontal';
                    Screens.scrollDir = -Screens.scrollDir;
                }
                return;
            } else if (dir === 'up') {
                if (coords.top >= 0) {
                    Screens.orientation = 'horizontal';
                    if ((Screens.active + 1) % 4 === 0) Screens.scrollDir = -1;
                    return;
                }
            }
        }

        let checkActive = () => {
            let dynamic = this._checkDynamic();

            if (dynamic === 1) {
                let nextScreen = Screens.active !== this.screens.length -1 ? this.screens[Screens.active + 1].block : null;

                if (nextScreen && isInViewport(nextScreen)) {
                    this.changeActive(Screens.active + 1);
                    return;
                }
            } else if (dynamic === -1) {
                let prevScreen = Screens.active !== 0 ? this.screens[Screens.active - 1].block : null;

                if (prevScreen && isInViewport(prevScreen)) {
                    this.changeActive(Screens.active - 1);
                    return;
                }
            }
        }

        checkActive();
        changeScrollDirection();
    }

    _checkDirection(deltaY) {
        if (deltaY > 0) {
            Screens.direction = Screens.scrollDir;
        } else {
            Screens.direction = -Screens.scrollDir;
        }
    }

    _checkDynamic() {
        if (Screens.scrollDir === 1) return Screens.direction;
        else return -Screens.direction;
    }

    getDirectionName(dir) {
        return this.dirMap[Screens.orientation][dir];
    }

    calcMaxScroll() {
        let active = Screens.active,
            coords = getCoords(this.screens[active].block),
            defX = false,
            defY = false,
            dir = this.getDirectionName(Screens.direction);

        if (active === 0 || active === this.screens.length - 1) return [defX, defY];

        if (dir === 'up') {
            if (coords.top - pageYOffset > 100) return [defX, defY];
            return [defX, coords.top - pageYOffset];
        } else if (dir === 'down') {
            if (coords.top - pageYOffset < -100) return [defX, defY];
            return [defX, coords.top - pageYOffset];
        }

        return [0, 0];
    }

    changeActive(num) {
        if (Screens.active === num || num < 0 || num >= this.screens.length) return;

        let prevScreen = this.screens[Screens.active].block,
            newScreen = this.screens[num].block;

        const leaveEvent = new CustomEvent('leave', {
            bubbles: true,
            detail: {
                direction: this.getDirectionName(Screens.direction)
            }
        });
        prevScreen.dispatchEvent(leaveEvent);

        const enterEvent = new CustomEvent('enter', {
            bubbles: true,
            detail: {
                direction: this.getDirectionName(Screens.direction)
            }
        });
        newScreen.dispatchEvent(enterEvent);

        Screens.active = num;
    }
}

Screens.orientation = 'horizontal';
Screens.direction = 1;
Screens.scrollDir = 1;
Screens.active = 0;
