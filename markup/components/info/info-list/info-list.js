import { Component } from 'helpers-js';
import { Slider } from 'components/slider/slider';

export class InfoList extends Component {
    constructor(block) {
        super(block, 'info-list');

        if (this._ready) return this;
        this._ready = true;

        this.slider = new Slider(this.block.querySelector('.info-list__slider'));
        this.items = this.block.querySelectorAll('.info-list__item');

        this.slider.block.addEventListener('beforeChangeSlide', this._onBeforeChange.bind(this));
    }

    _onBeforeChange(e) {
        let curItem = this.items[e.detail.currentSlide],
            nextItem = this.items[e.detail.nextSlide];

        curItem.classList.remove('info_show');
        curItem.classList.add('info_hide');
        nextItem.classList.remove('info_hide');
        nextItem.classList.add('info_show');
    }
}
