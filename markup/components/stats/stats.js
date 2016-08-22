import Component from 'helpers-js/Component';

export class  extends Component {
    constructor(block) {
        super(block, 'stats');
        if (this._ready) return this;
        this._ready = true;
    }
}
