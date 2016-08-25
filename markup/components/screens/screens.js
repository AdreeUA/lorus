import { Component, indexOf } from 'helpers-js';
import { ScreenAbout } from './screen-about/screen-about';
import { ScreenHome } from './screen-home/screen-home';
import { ScreenMission } from './screen-mission/screen-mission';
import { ScreenAdvantages } from './screen-advantages/screen-advantages';
import { ScreenTeam } from './screen-team/screen-team';

import 'fullpage.js';

const about = new ScreenAbout(document.querySelector('.screen-about')),
      home = new ScreenHome(document.querySelector('.screen-home')),
      mission = new ScreenMission(document.querySelector('.screen-mission')),
      advantages = new ScreenAdvantages(document.querySelector('.screen-advantages')),
      team = new ScreenTeam(document.querySelector('.screen-team'));

export class Screens extends Component {
    constructor(block) {
        super(block, 'screens');

        if (this._ready) return this;
        this._ready = true;

        this._onWheel = this._onWheel.bind(this);

        this._init();
    }

    _init() {
        let verticals = this.block.querySelectorAll('.screens__vertical');

        let dispatchEvents = (curScreen, newScreen, direction) => {
            const hideEvent = new CustomEvent('hide', {
                bubbles: true,
                detail: {
                    direction
                }
            });
            curScreen.dispatchEvent(hideEvent);

            const showEvent = new CustomEvent('show', {
                bubbles: true,
                detail: {
                    direction
                }
            });
            newScreen.dispatchEvent(showEvent);
        };

        $(this.block).fullpage({
            anchors:['first', 'second', 'third'],
            scrollingSpeed: 1500,
            sectionSelector: '.screens__vertical',
            slideSelector: '.screens__horizontal',
            verticalCentered: false,
            fixedElements: '.header_theme_screen',
            loopHorizontal: false,
            controlArrows: false,
            keyboardScrolling: false,

            onSlideLeave (anchorLink, index, slideIndex, direction, nextSlideIndex) {
                let activeVertical = verticals[index - 1],
                    curScreen = activeVertical.querySelectorAll('.screens__item')[slideIndex],
                    activeScreen = activeVertical.querySelectorAll('.screens__item')[nextSlideIndex];

                dispatchEvents(curScreen, activeScreen, direction);
            },

            onLeave (index, nextIndex, direction) {
                let curVertical = verticals[index - 1],
                    curScreen = curVertical.querySelector('.screens__item.active') ||
                                curVertical.querySelector('.screens__item'),
                    activeVertical = verticals[nextIndex - 1],
                    activeScreen = activeVertical.querySelector('.screens__item.active') ||
                                   activeVertical.querySelector('.screens__item');

                dispatchEvents(curScreen, activeScreen, direction);
            }
        });

        this.block.addEventListener('wheel', this._onWheel);
    }

    _onWheel(e) {
        let slideScrolled = e.target.closest('.screens__horizontal');

        if (!slideScrolled) return;

        let parent = slideScrolled.closest('.screens__vertical'),
            direction = parent.getAttribute('data-direction'),
            allSlides = parent.querySelectorAll('.screens__horizontal'),
            curSlideInd = indexOf(slideScrolled, allSlides);

        function moveLeft() {
            if (curSlideInd === 0) return;
            $.fn.fullpage.moveSlideLeft();
        }

        function moveRight() {
            if (curSlideInd === allSlides.length - 1) return;
            $.fn.fullpage.moveSlideRight();
        }

        if (e.deltaY > 0) {
            if (direction === 'right') moveRight();
            else if (direction === 'left') moveLeft();

        } else {

            if (direction === 'right') moveLeft();
            else if (direction === 'left') moveRight();
        }
    }
}
