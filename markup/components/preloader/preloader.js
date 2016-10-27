import {Component} from 'helpers-js';

export class Preloader extends Component {
    constructor(block) {
        super(block, 'preloader', function () {
            // this.init();

            console.log(this);
            setTimeout(() => {
                this.hidePreloader();
            }, 800);
        });
    }

    hidePreloader() {
        this.block.classList.add('preloader_hidden');

        const event = new CustomEvent('hide', {
            bubbles: true
        });

        this.block.dispatchEvent(event);
    }
}