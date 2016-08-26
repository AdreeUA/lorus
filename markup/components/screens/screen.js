import { Component } from 'helpers-js';

import { Header } from 'components/header/header';

export class Screen extends Component {
    constructor(block, className, callback) {
        super(block, className, function() {
            this.header = new Header(document.querySelector('.header_theme_screen'));
            this.block.addEventListener('show', this._onShow.bind(this));
            this.block.addEventListener('hide', this._onHide.bind(this));

            if (typeof callback === 'function') {
                callback.bind(this)();
            }
        });
    }

    _onSHow(e) {}
    _onHide(e) {}
}
