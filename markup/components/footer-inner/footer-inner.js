import { Component } from 'helpers-js';

export class  extends Component {
    constructor(block) {
        super(block, 'footer-inner');
        if (this._ready) return this;
        this._ready = true;
    }
}
