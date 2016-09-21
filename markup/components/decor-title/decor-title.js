import { Component, forEach, media } from 'helpers-js';

export class DecorTitle extends Component {
    constructor(block) {
        super(block, 'decor-title', function() {
            this.mode = 'desktop';
            this.markup = this.block.innerHTML;
            this.text = '';

            forEach(this.block.querySelectorAll('.decor-title__row'), row => {
                this.text += row.innerHTML;
            });

            this._wrapLinesOnMobile();
            window.addEventListener('resize', (e) => {
                this._wrapLinesOnMobile();
            });
        });
    }

    _wrapLinesOnMobile() {
        if (matchMedia(media.tablet).matches) {
            if (this.mode === 'mobile') return;

            this.mode = 'mobile';

            let mobileRows = this.text.split(/<br[^>]*>/gi),
                mobileHtml = '';

            if (mobileRows.length === 1) return;

            mobileRows.forEach(row => mobileHtml += `<span class="decor-title__row">${row}</span>`);
            console.log(mobileHtml);
            this.block.innerHTML = mobileHtml;

        } else {

            if (this.mode === 'desktop') return;

            this.mode = 'desktop';
            this.block.innerHTML = this.markup;
        }
    }
}
