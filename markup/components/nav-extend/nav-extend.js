import { Component, forEach } from 'helpers-js';

export class NavExtend extends Component {
    constructor(block) {
        super(block, 'nav-extend', function () {
            this._init();
        });

    }
    _init() {
        this.block.addEventListener('click', this._onClick.bind(this));
    }

    _onClick(e) {
        let triggerClicked = e.target.closest('.nav-extend__trigger');

        if (triggerClicked) {

            let parentItem = triggerClicked.closest('.nav-extend__item'),
                items = this.block.querySelectorAll('.nav-extend__item');

            forEach(items, item => {
                if (item === parentItem) return;
                item.classList.remove('nav-extend__item_open')
            });

            parentItem.classList.toggle('nav-extend__item_open');

        }
    }
}
