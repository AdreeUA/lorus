import { Component } from 'helpers-js';

export class  extends Component {
    constructor(block) {
        super(block, 'photo-text');
        if (this._ready) return this;
        this._ready = true;
    }
}
