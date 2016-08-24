import { Component } from 'helpers-js';
import { Header } from 'components/header/header';
import { ClipImg } from 'components/clip-img/clip-img';

const header = new Header(document.querySelector('.header_theme_screen'));

export class ScreenMission extends Component {
    constructor(block) {
        super(block, 'screen-mission');
        if (this._ready) return this;
        this._ready = true;

        this.photo = new ClipImg(this.block.querySelector('.screen-mission__photo'));

        this.block.addEventListener('show', this._onShow.bind(this));
        this.block.addEventListener('hide', this._onHide.bind(this));
    }

    _onShow(e) {
        header.toggleNavClasses('header_nav_top');

        this.photo.move(e.detail.direction);
    }

    _onHide(e) {
        this.photo.move(e.detail.direction);
    }
}
