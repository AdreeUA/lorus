import { Component } from 'helpers-js';
import 'magnific-popup'; 

export class Modal extends Component {
    constructor(block) {
        super(block, 'modal');
        if (this._ready) return this;
        this._ready = true;
    }
}
