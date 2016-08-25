import { Component } from 'helpers-js';

import { Menu } from 'components/menu/menu';
import { Hamburger } from 'components/hamburger/hamburger';

let page = document.querySelector('.page');

export class Header extends Component {
    constructor(block) {
        super(block, 'header');

        if (this._ready) return this;
        this._ready = true;

        this.overlay = this.block.querySelector('.header__overlay');

        this._onHamburgerOpen = this._onHamburgerOpen.bind(this);
        this._onHamburgerClose = this._onHamburgerClose.bind(this);

        this._init();
    }

    _init() {
        let hamburger = this.block.querySelector('.header__hamburger'),
            menu = this.block.querySelector('.header__slide-menu');

        if (menu) this.menu = new Menu(menu);
        if (hamburger) this.hamburger = new Hamburger(hamburger);

        this.hamburger.block.addEventListener('open', this._onHamburgerOpen);
        this.hamburger.block.addEventListener('close', this._onHamburgerClose);
    }

    _onHamburgerOpen(e) {
        let closeMenuExternalClick = (e) => {
            let menuClicked = e.target.closest('.header__slide-menu');

            if (!menuClicked) {
                this.hamburger.close();

                document.removeEventListener('click', closeMenuExternalClick);
            }
        }

        this.menu.open();
        page.classList.add('page_overlay');
        this.block.classList.add('header_overlay');

        document.addEventListener('click', closeMenuExternalClick);
    }

    _onHamburgerClose(e) {
        this.menu.close();
        page.classList.remove('page_overlay');
        this.block.classList.remove('header_overlay');
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
