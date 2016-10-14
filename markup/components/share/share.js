import { Component } from 'helpers-js';
import likely from 'static/js/plugins/likely.js'

export class Share extends Component {
    constructor(block) {
        super(block, 'share');
        if (this._ready) return this;
        this._ready = true;


        this._init();
    }

    _init() {
        //$('.likely').initiate();
    }
}
