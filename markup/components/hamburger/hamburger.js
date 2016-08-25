import { Component, transitionEnd } from 'helpers-js';

export class Hamburger extends Component {
    constructor(block) {
        super(block, 'hamburger');
        if (this._ready) return this;
        this._ready = true;

        this.opened = false;
        this.inAnimation = false;

        this.block.addEventListener('click', (e) => {
            this.toggle();
        });
    }

    open() {
        if (this.opened || this.inAnimation) return;

        this.inAnimation = true;

        let transionEndHandler = (e) => {
            this.opened = true;
            this.inAnimation = false;
            this.block.removeEventListener(transitionEnd, transionEndHandler);
        };

        this.block.addEventListener(transitionEnd, transionEndHandler);

        this.block.classList.add('hamburger_open');

        const event = new CustomEvent('open', {
            bubbles: true
        });
        setTimeout(() => this.block.dispatchEvent(event), 10);
    }

    close() {
        if (!this.opened || this.inAnimation) return;

        this.inAnimation = true;

        let transionEndHandler = (e) => {
            this.opened = false;
            this.inAnimation = false;
            this.block.removeEventListener(transitionEnd, transionEndHandler);
        };

        this.block.addEventListener(transitionEnd, transionEndHandler);

        this.block.classList.remove('hamburger_open');

        const event = new CustomEvent('close', {
            bubbles: true
        });
        setTimeout(() => this.block.dispatchEvent(event), 10);
    }

    toggle() {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
    }
}
