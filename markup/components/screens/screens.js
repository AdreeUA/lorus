import { Component } from 'helpers-js';

import 'fullpage.js';

export class Screens extends Component {
    constructor(block) {
        super(block, 'screens');

        if (this._ready) return this;
        this._ready = true;

        $(this.block).fullpage({
            sectionSelector: '.screens__vertical',
            slideSelector: '.screens__horizontal',
            verticalCentered: false,
            fixedElements: '.header_theme_screen'
        });
    }
}
