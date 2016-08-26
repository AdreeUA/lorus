import { Component } from 'helpers-js';

export class  extends Component {
    constructor(block) {
        super(block, 'page-index');
        if (this._ready) return this;
        this._ready = true;
    }
}
