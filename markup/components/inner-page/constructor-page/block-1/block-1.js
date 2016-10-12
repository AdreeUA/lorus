import { Component } from 'helpers-js';

export class  extends Component {
    constructor(block) {
        super(block, 'block-1');
        if (this._ready) return this;
        this._ready = true;
    }
}
