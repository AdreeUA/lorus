import { Component, indexOf } from 'helpers-js';

import 'fullpage.js';

export class Screens extends Component {
    constructor(block) {
        super(block, 'screens');

        if (this._ready) return this;
        this._ready = true;

        this._onWheel = this._onWheel.bind(this);

        this._init();
    }

    _init() {
        let header = document.querySelector('.header_theme_screen');

        function toggleNavClasses(active) {
            let classList = ['header_nav_top', 'header_nav_left', 'header_nav_right'];

            classList.forEach(className => {
                if (className === active) header.classList.add(className);
                else header.classList.remove(className);
            });
        }

        $(this.block).fullpage({
            sectionSelector: '.screens__vertical',
            slideSelector: '.screens__horizontal',
            verticalCentered: false,
            fixedElements: '.header_theme_screen',
            loopHorizontal: false,
            controlArrows: false,
            keyboardScrolling: false,

            onSlideLeave (anchorLink, index, slideIndex, direction, nextSlideIndex) {
                if (index === 1 && slideIndex === 0) {
                    header.classList.add('header_show');
                } else if (index === 1 && slideIndex === 1 && direction === 'left') {
                    header.classList.remove('header_show');
                }

                if (index === 2) {
                    if (nextSlideIndex === 1) {
                        toggleNavClasses('header_nav_top');
                    } else if (nextSlideIndex === 0) {
                        toggleNavClasses('header_nav_right');
                    }
                }
            },

            onLeave (index, nextIndex, direction) {
                if (direction === 'down') {
                    toggleNavClasses('header_nav_top');
                } else {
                    if (nextIndex === 2) {
                        toggleNavClasses('header_nav_right');
                    } else if (nextIndex === 1) {
                        toggleNavClasses('header_nav_left');
                    }
                }
            }
        });

        this.block.addEventListener('wheel', this._onWheel);
    }

    _onWheel(e) {
        let slideScrolled = e.target.closest('.screens__horizontal');
        console.log('wheel');

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
