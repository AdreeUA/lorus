import { Component } from 'helpers-js';

export class Header extends Component {
    constructor(block) {
        super(block, 'header');

        if (this._ready) return this;
        this._ready = true;
    }

    toggleNavClasses(active) {
        let classList = ['header_nav_top', 'header_nav_left', 'header_nav_right'];

        classList.forEach(className => {
            if (className === active) this.block.classList.add(className);
            else                      this.block.classList.remove(className);
        });
    }

    changeNavHref(href) {
        let navBtn = this.block.querySelector('.header__nav-btn');

        if (!navBtn) return;

        navBtn.setAttribute('href', href);
    }

    show() {
        this.block.classList.add('header_show');
    }

    hide() {
        this.block.classList.remove('header_show');
    }
}
