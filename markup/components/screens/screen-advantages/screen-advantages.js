import { Component } from 'helpers-js';
import { Header } from 'components/header/header';

const header = new Header(document.querySelector('.header_theme_screen'));

export class ScreenAdvantages extends Component {
    constructor(block) {
        super(block, 'screen-advantages');
        if (this._ready) return this;
        this._ready = true;

        this.block.addEventListener('show', this._onShow.bind(this));
    }

    _onShow(e) {
        header.toggleNavClasses('header_nav_right');
    }
}
