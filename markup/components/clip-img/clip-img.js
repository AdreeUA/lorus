import Component from 'helpers-js/Component';

export class  extends Component {
    constructor(block) {
        super(block, 'clip-img');
        if (this._ready) return this;
        this._ready = true;
    }
}
