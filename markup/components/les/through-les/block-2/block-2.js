import { Component } from 'helpers-js';

export class  extends Component {
    constructor(block) {
        super(block, 'block-2');
        if (this._ready) return this;
        this._ready = true;
    }
}
