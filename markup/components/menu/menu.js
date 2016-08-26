import { Component } from 'helpers-js';

export class Menu  extends Component {
    constructor(block) {
        super(block, 'menu', function() {
            this.opened = false;
        });
    }

    open() {
        this.block.classList.add('menu_open');
        this.opened = true;

        const event = new CustomEvent('open', {
            bubbles: true
        });
        setTimeout(() => this.block.dispatchEvent(event), 10);
    }

    close() {
        this.block.classList.remove('menu_open');
        this.opened = false;

        const event = new CustomEvent('close', {
            bubbles: true
        });
        setTimeout(() => this.block.dispatchEvent(event), 10);
    }

    toggle() {
        if (this.opened) this.close();
        else this.open();
    }
}
