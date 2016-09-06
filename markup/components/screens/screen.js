import ScrollMagic from 'scrollmagic';

import { Component } from 'helpers-js';

import { Header } from 'components/header/header';
import { controller, Screens } from './screens.js';

export class Screen extends Component {
    constructor(block, className, callback) {
        super(block, className, function() {
            this.header = new Header(document.querySelector('.header_theme_screen'));
            this.parent = this.block.closest('.screens__inner');
            this.controller = controller;
            this.sceneTrigger = document.querySelector(`#${className.split('-').pop()}`);

            this.scene = new ScrollMagic.Scene({
                    triggerElement: this.sceneTrigger,
                    duration: '100%',
                    triggerHook: 0
                })
                .addTo(this.controller);

            if (typeof callback === 'function') {
                callback.bind(this)();
            }

            this.scene.on('enter', this._onEnter.bind(this));
            this.scene.on('leave', this._onLeave.bind(this));
            this.scene.on('progress', this._onProgress.bind(this));
        });
    }

    _onLeave(e) {}
    _onEnter(e) {}
    _onProgress(e) {}

    _getActive() {
        return Screens.active;
    }

    _changeActive(num) {
        Screens.active = num;
    }
}
