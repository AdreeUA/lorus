import { Component } from 'helpers-js';

export class Map extends Component {
    constructor(block) {
        super(block, 'map', function () {
            ymaps.ready(this.init);
        });
    }

    init() {
        const map = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 15,
            controls: []
        });
    }
}
