import ScrollMagic from 'scrollmagic';

import { Component } from 'helpers-js';

import { Header } from 'components/header/header';
import { controller, controller_m, Screens } from './screens.js';

const screensMap = [
    [ 'home', 'left' ],
    [ 'about', 'top' ],
    [ 'mission', 'right' ],
    [ 'advantages', 'top' ],
    [ 'advantages', 'top' ]
];

export class Screen extends Component {
    constructor(block, className, callback) {
        super(block, className, function() {
            this.header = new Header(document.querySelector('.header_theme_screen'));
            this.parent = this.block.closest('.screens__inner');
            this.controller = controller;
            this.controller_m = controller_m;
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

            this.scene.on('progress', e => {
                if (e.progress >= 0.05 && Screens.active !== this.sceneNum) {
                    this._changeActive(this.sceneNum);
                } else if (e.progress < 0.05 && Screens.active !== this.sceneNum - 1) {
                    this._changeActive(this.sceneNum - 1);
                }

                this._onProgress(e);
            });
        });
    }

    _onLeave(e) {}
    _onEnter(e) {}
    _onProgress(e) {}

    _changeActive(num) {
        if (num < 0 || num > screensMap.length - 1) return;

        Screens.active = num;
        this.header.changeNavHref(`#${screensMap[num][0]}`);
        this.header.toggleNavClasses(screensMap[num][1]);
    }
}
