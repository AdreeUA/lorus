import { Component } from 'helpers-js';

import { Menu } from 'components/menu/menu';
import { Hamburger } from 'components/hamburger/hamburger';

// Если оверлэй повесить на page на главной странице, то в ФФ лаги
let overlay = document.querySelector('.screens__inner') || document.querySelector('.page');

export class Header extends Component {
    constructor(block) {
        super(block, 'header', function() {
            this.overlay = this.block.querySelector('.header__overlay');

            this._onHamburgerOpen = this._onHamburgerOpen.bind(this);
            this._onHamburgerClose = this._onHamburgerClose.bind(this);
            this._onOpenMenuLinkClicked = this._onOpenMenuLinkClicked.bind(this);

            this._init();
        });
    }

    _init() {
        let hamburger = this.block.querySelector('.header__hamburger'),
            menu = this.block.querySelector('.header__slide-menu');

        if (menu) this.menu = new Menu(menu);

        if (hamburger) {
            this.hamburger = new Hamburger(hamburger);

            this.hamburger.block.addEventListener('open', this._onHamburgerOpen);
            this.hamburger.block.addEventListener('close', this._onHamburgerClose);

            document.addEventListener('click', this._onOpenMenuLinkClicked);
        }
    }

    _onOpenMenuLinkClicked(e) {
        const openMenuLink = e.target.closest('.js-open-menu');

        if (!openMenuLink) return;

        this.hamburger.open();
        e.preventDefault();
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
        overlay.classList.add('overlay');
        this.block.classList.add('header_overlay');
        this.block.classList.add('header_open');

        document.addEventListener('click', closeMenuExternalClick);
    }

    _onHamburgerClose(e) {
        this.menu.close();
        document.documentElement.classList.remove('hide-scroll');
        overlay.classList.remove('overlay');
        this.block.classList.remove('header_overlay');
        this.block.classList.remove('header_open');
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
