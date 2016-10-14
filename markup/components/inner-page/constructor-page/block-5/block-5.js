import { Component } from 'helpers-js';

export class  extends Component {
    constructor(block) {
        super(block, 'block-5');
        if (this._ready) return this;
        this._ready = true;
    }
}
