import { Component } from 'helpers-js';
import { Header } from 'components/header/header';
import { ClipImg } from 'components/clip-img/clip-img';

const header = new Header(document.querySelector('.header_theme_screen'));

export class ScreenAbout extends Component {
    constructor(block) {
        super(block, 'screen-about');
        if (this._ready) return this;
        this._ready = true;

        this.photo = new ClipImg(this.block.querySelector('.screen-about__photo'));

        this.block.addEventListener('show', this._onShow.bind(this));
        this.block.addEventListener('hide', this._onHide.bind(this));
    }

    _onShow(e) {
        if (e.detail.direction === 'right') {
            header.show();
        }

        this.photo.move(e.detail.direction);
        header.toggleNavClasses('header_nav_left');
    }

    _onHide(e) {
        this.photo.move(e.detail.direction);
    }
}
