import { Component } from 'helpers-js';

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
