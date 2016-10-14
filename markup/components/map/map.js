import { Component } from 'helpers-js';

export class Map extends Component {
    constructor(block) {
        super(block, 'map', function () {
            ymaps.ready(this.init.bind(this));
        });
    }

    init() {
        let options = JSON.parse(this.block.getAttribute('data-options')),
            map = new ymaps.Map('map', options);

        if (this.block.getAttribute('data-balloon')) {
            let balloon = JSON.parse(this.block.getAttribute('data-balloon')),
                items = '';

            balloon.items.forEach(item => items += item);

            let MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                `<div class="mark">
                    <div class="mark__inner">
                        <div class="mark__title"> ${balloon.title} </div>
                        <div class="mark__content">
                            ${items}
                        </div>
                    </div>
                </div>`
            );

            var myPlacemark = new ymaps.Placemark(balloon.placemark, {}, {
                balloonLayout: MyBalloonLayout
            });

            map.geoObjects.add(myPlacemark);
            myPlacemark.balloon.open(balloon.open);
        }
    }
}
