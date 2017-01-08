import { Component } from 'helpers-js';

export class ListExtend extends Component {
    constructor(block) {
        super(block, 'list-extend');
        if (this._ready) return this;
        this._ready = true;
    }
}
