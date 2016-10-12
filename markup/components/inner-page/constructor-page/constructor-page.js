import { Component } from 'helpers-js';

export class  extends Component {
    constructor(block) {
        super(block, 'constructor-page');
        if (this._ready) return this;
        this._ready = true;
    }
}
