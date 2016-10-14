import { Component } from 'helpers-js';

export class InnerPage extends Component {
    constructor(block) {
        super(block, 'inner-page');
        if (this._ready) return this;
        this._ready = true;
    }
}
