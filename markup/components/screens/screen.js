import ScrollMagic from 'scrollmagic';

import { Component } from 'helpers-js';

import { Header } from 'components/header/header';
import { controller_v, controller_h, Screens } from './screens.js';

export class Screen extends Component {
    constructor(block, className, callback) {
        super(block, className, function() {
            this.header = new Header(document.querySelector('.header_theme_screen'));
            // this.controller_v = controller_v;
            // this.controller_h = controller_h;

            // this.scene_v = new ScrollMagic.Scene({
            //     triggerElement: `.${className}`,
            //     duration: '100%'
            // })
            // .addTo(this.controller_v);
            //
            // this.scene_h = new ScrollMagic.Scene({
            //     triggerElement: `.${className}`,
            //     duration: '50%'
            // })
            // .addTo(this.controller_h);
            //
            // this.scene_v.on('end', this._onEnd_v.bind(this));
            // this.scene_h.on('end', this._onEnd_h.bind(this));

            this.block.addEventListener('leave', this._onLeave.bind(this));
            this.block.addEventListener('enter', this._onEnter.bind(this));

            if (typeof callback === 'function') {
                callback.bind(this)();
            }
        });
    }

    _onLeave(e) {}

    _onEnter(e) {}
}
