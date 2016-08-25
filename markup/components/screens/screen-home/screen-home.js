import { Component } from 'helpers-js';
import { Header } from 'components/header/header';

const header = new Header(document.querySelector('.header_theme_screen'));

export class ScreenHome extends Component {
    constructor(block) {
        super(block, 'screen-home');
        if (this._ready) return this;
        this._ready = true;

        this.block.addEventListener('show', this._onShow.bind(this));
        this.block.addEventListener('hide', this._onHide.bind(this));
    }

    _onShow(e) {
        header.hide();
    }

    _onHide(e) {
        header.show()
    }
}
