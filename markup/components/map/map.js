import { Component, media } from 'helpers-js';

export class Map extends Component {
    constructor(block) {
        super(block, 'map', function () {
            ymaps.ready(this.init.bind(this));
        });
    }

    init() {
        let options = JSON.parse(this.block.getAttribute('data-options')),
            map;

        if (matchMedia(media.tablet).matches && options.mobile) {
            console.log('< 1024');
            map = new ymaps.Map('map', options.mobile);
        } else {
            map = new ymaps.Map('map', options);
        }

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

            if (matchMedia(media.tablet).matches && balloon.mobile) {
                console.log('< 1024');

                let myPlacemark = new ymaps.Placemark(balloon.mobile.placemark, {}, {
                    balloonLayout: MyBalloonLayout,
                    balloonPanelMaxMapArea: 0
                });

                map.geoObjects.add(myPlacemark);
                myPlacemark.balloon.open(balloon.mobile.open);

            } else {
                console.log('> 1024');

                let myPlacemark = new ymaps.Placemark(balloon.placemark, {}, {
                    balloonLayout: MyBalloonLayout
                });

                map.geoObjects.add(myPlacemark);
                myPlacemark.balloon.open(balloon.open);
            }
        }
    }
}
