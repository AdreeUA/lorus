import { Component } from 'helpers-js';

import 'slick-carousel';

export class Slider extends Component {
    constructor(block) {
        super(block, 'slider');

        if (this._ready) return this;
        this._ready = true;

        this.initialized = false;
        this.inMove = false;
        this.init();

        $(this.block).on('beforeChange', this._onBeforeChange.bind(this));
        $(this.block).on('afterChange', this._onAfterChange.bind(this));
    }

    _onBeforeChange(e, slick, currentSlide, nextSlide) {
        e.stopPropagation();

        const event = new CustomEvent('changeSlide', {
            bubbles: false,
            detail: {
                currentSlide: currentSlide,
                nextSlide: nextSlide
            }
        });

        this.block.dispatchEvent(event);
    }

    _onAfterChange(e, slick, currentSlide) {
        e.stopPropagation();

        const event = new CustomEvent('afterChangeSlide', {
            bubbles: false,
            detail: {
                currentSlide: currentSlide
            }
        });

        this.block.dispatchEvent(event);
    }

    init() {
        if (this.initialized) return;

        let $slider = $(this.block);

        $slider.one('init', e => {
            const event = new CustomEvent('init', {
                bubbles: false
            });

            this.block.dispatchEvent(event);
        });

        console.log($slider);
        $slider.slick();
        this.initialized = true;
    }

    destroy() {
        if (!this.initialized) return;

        let $slider = $(this.block);

        $slider.one('destroy', e => {
            const event = new CustomEvent('destroy', {
                bubbles: false
            });

            this.block.dispatchEvent(event);
        });

        $slider.slick('unslick');
        this.initialized = false;
    }

    nextSlide() {
        if (this.inMove) return;

        $(this.block).slick('next');

        this.inMove = true;
        $(this.block).one('afterChange', () => { this.inMove = false; });
    }

    prevSlide() {
        if (this.inMove) return;

        $(this.block).slick('prev');

        this.inMove = true;
        $(this.block).one('afterChange', () => { this.inMove = false; });
    }

    goToSlide(num) {
        if (this.inMove) return;

        $(this.block).slick('goTo', num);

        this.inMove = true;
        $(this.block).one('afterChange', () => { this.inMove = false; });
    }

    recalcSizes() {
        $(this.block).slick('setPosition');
    }

    reinitOnBreakpoint() {
        if (window.matchMedia(this.destroyBreakpoint).matches) {
            this.destroy();
        } else {
            this.init();
        }
    }
}
