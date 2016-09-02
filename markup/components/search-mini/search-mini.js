import { Component } from 'helpers-js';

export class SearchMini extends Component {
    constructor(block) {
        super(block, 'search-mini', function() {
            this.btn = this.block.querySelector('.search-mini__submit');

            // this._init();
        });
    }

    // _init() {
    //     this.btn.setAttribute('disabled', 'disabled');
    //
    //     this.block.addEventListener('keyup', this._onKeyup.bind(this));
    // }
    //
    // _onKeyup(e) {
    //     let field = e.target.closest('.search-mini__field');
    //
    //     if (field) {
    //         if (field.value) {
    //             this.btn.removeAttribute('disabled');
    //         } else {
    //             this.btn.setAttribute('disabled', 'disabled');
    //         }
    //     };
    // }
}
