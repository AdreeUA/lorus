import { Component } from 'helpers-js';

export class  extends Component {
    constructor(block) {
        super(block, 'page-clients');
        if (this._ready) return this;
        this._ready = true;
    }
}
