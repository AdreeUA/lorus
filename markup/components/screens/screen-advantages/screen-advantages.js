import Component from 'helpers-js/Component';

export class  extends Component {
    constructor(block) {
        super(block, 'screen-advantages');
        if (this._ready) return this;
        this._ready = true;
    }
}
