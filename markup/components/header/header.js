import { Component } from 'helpers-js';

import { Menu } from 'components/menu/menu';
import { Hamburger } from 'components/hamburger/hamburger';

let page = document.querySelector('.page');

export class Header extends Component {
    constructor(block) {
        super(block, 'header', function() {
            this.overlay = this.block.querySelector('.header__overlay');

            this._onHamburgerOpen = this._onHamburgerOpen.bind(this);
            this._onHamburgerClose = this._onHamburgerClose.bind(this);

            this._init();
        });
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
            let menuClicked = e.target.closest('.header__slide-menu'),
                navLinkClicked = e.target.closest('.nav__link');

            if (!menuClicked || navLinkClicked) {
                this.hamburger.close();

                document.removeEventListener('click', closeMenuExternalClick);
            }
        }

        this.menu.open();
        document.documentElement.classList.add('hide-scroll');
        page.classList.add('page_overlay');
        this.block.classList.add('header_overlay');

        document.addEventListener('click', closeMenuExternalClick);
    }

    _onHamburgerClose(e) {
        this.menu.close();
        document.documentElement.classList.remove('hide-scroll');
        page.classList.remove('page_overlay');
        this.block.classList.remove('header_overlay');
    }

    toggleNavClasses(active) {
        let classList = ['top', 'left', 'right'],
            navBtn = this.block.querySelector('.header__nav-btn');

        if (!navBtn) return;

        classList.forEach(direction => {
            if (direction === active) navBtn.classList.add(`header__nav-btn_${direction}`);
            else                      navBtn.classList.remove(`header__nav-btn_${direction}`);
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
