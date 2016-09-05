import 'gsap';

import { Component } from 'helpers-js';

export class Line extends Component {
    constructor(block) {
        super(block, 'line', function() {
            this.type = this.block.classList.contains('line_css') ? 'css' : 'svg';
            this.active = this.block.querySelector('.line__icon_active');

            if (this.type === 'svg') {
                let browser = document.documentElement.classList;
                if (!browser.contains('explorer') && !browser.contains('edge')) {
                    this._pathPrepare(this.active.querySelector('path'));
                }
            }
        })
    }

    makeTween(duration = 1) {
        let tween,
            browser = document.documentElement.classList;

        if (browser.contains('explorer') || browser.contains('edge')) return '';

        if (this.type === 'svg') {
            tween = TweenMax.to(this.active.querySelector('path'), 1, { strokeDashoffset: 0 });
        } else {
            tween = TweenMax.to(this.active, duration, { width: '100%' });
        }

        return tween;
    }

    _pathPrepare(elem) {
        let lineLength = elem.getTotalLength();

        elem.style.strokeDasharray = lineLength;
        elem.style.strokeDashoffset =  lineLength - 1;
    }
}
