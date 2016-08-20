import Component from 'components/js-helpers/Component';
import { forEach } from 'components/js-helpers';

const cache = {};

export class  extends Component {
    constructor(block) {
        super(block, cache, 'icon');
        if (this._ready) return this;

        this._ready = true;
    }
}

const init = (blocks = document.querySelectorAll('.icon')) => {
    forEach(blocks, (block) => {
        new (block);
    });
}

export default {
    init
}