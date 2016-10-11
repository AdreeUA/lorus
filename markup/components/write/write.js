import { Component } from 'helpers-js';

export class Write extends Component {
    constructor(block) {
        super(block, 'write', function() {
            this._init();
        });
    }

    _init() {
        var $button = $('.js-writeus');

        $button.magnificPopup({
            type:'inline'
        });
    }
}
