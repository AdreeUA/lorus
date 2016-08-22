import Component from 'helpers-js/Component';

export class  extends Component {
    constructor(block) {
        super(block, 'action-btn');
        if (this._ready) return this;
        this._ready = true;
    }
}
